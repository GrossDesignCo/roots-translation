import { generateLexiconEntry } from '@/data/pipeline/generateLexiconEntryInOneShot';
import { saveEntryToFile } from '@/data/pipeline/saveEntryToFile';
import { generateLexiconIndex } from '@/data/pipeline/generateLexiconIndex';
import { createSilentLogger } from '@/data/pipeline/buildLogger';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import fs from 'fs/promises';

export async function POST(request: NextRequest) {
  try {
    const { key, language, phrase, supplementalData } = await request.json();

    if (!key || !language) {
      // UI didn't provide needed params
      return NextResponse.json(
        {
          error:
            'A word/key-phrase + language is required to generate an entry, eg. { key: "tohu-vaVohu", language: "hebrew" }',
        },
        { status: 400 }
      );
    }

    // Create empty placeholder file first
    const saveResult = await saveEntryToFile(key, language, '', true);
    
    if (!saveResult.success || !saveResult.path) {
      return NextResponse.json(
        {
          error: 'Failed to create placeholder file',
        },
        { status: 500 }
      );
    }
    
    // If file already exists and is not empty, return 409 Conflict
    if (!saveResult.isNew) {
      try {
        const content = await fs.readFile(saveResult.path, 'utf-8');
        if (content.trim()) {
          return NextResponse.json(
            {
              error: 'Entry already exists',
            },
            { status: 409 }
          );
        }
      } catch (err) {
        // If we can't read the file, proceed with generation
        console.warn('Could not read existing file, proceeding with generation:', err);
      }
    }

    // Return 202 Accepted to indicate processing has started
    const response = new NextResponse(
      JSON.stringify({
        status: 'processing',
        message: 'Entry generation started',
      }),
      {
        status: 202,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Start the generation process
    generateLexiconEntry({
      key,
      phrase,
      supplementalData,
    })
      .then(async (entry) => {
        // Save the generated entry
        await saveEntryToFile(key, language, entry);
        
        // Update the lexicon index
        await generateLexiconIndex(language, createSilentLogger());
      })
      .catch((err) => {
        console.error('Error in background generation:', err);
      });

    return response;
  } catch (err) {
    // Failed on the API side
    console.error('Error generating entry:', err);
    return NextResponse.json(
      {
        error: 'API failed to generate entry',
      },
      { status: 500 }
    );
  }
}
