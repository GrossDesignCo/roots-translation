import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

let lexiconIndex: { [key: string]: boolean } | null = null;

async function loadLexiconIndex(language: string) {
  if (lexiconIndex === null) {
    const indexPath = path.join(
      process.cwd(),
      `public/lexicon/${language}/index-by-word.json`
    );
    const indexData = await readFile(indexPath, 'utf-8');
    lexiconIndex = JSON.parse(indexData);
  }
  return lexiconIndex;
}

export async function POST(request: Request) {
  try {
    const { words, language = 'hebrew' } = await request?.json();

    if (!Array.isArray(words)) {
      return NextResponse.json(
        { error: 'Words must be an array' },
        { status: 400 }
      );
    }

    // Load the lexicon index
    const index = await loadLexiconIndex(language);

    if (!index) {
      return NextResponse.json(
        { error: 'Lexicon index not found' },
        { status: 500 }
      );
    }

    // Check each word against the index
    const results = words.map((word) => index[word.toLowerCase()] || false);

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error checking lexicon entries:', error);

    return NextResponse.json(
      { error: 'Failed to check lexicon entries' },
      { status: 500 }
    );
  }
}
