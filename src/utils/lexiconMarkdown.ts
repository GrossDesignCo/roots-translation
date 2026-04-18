/**
 * Lexicon .mdx files lead with an ATX H1 for standalone readability.
 * The app shows that line as the page/sidebar title and strips it from rendered body markdown.
 */
export function parseLeadingAtxHeading(markdown: string): {
  heading: string | null;
  bodyMarkdown: string;
} {
  const normalized = markdown.replace(/^\uFEFF/, '');
  const lines = normalized.split('\n');

  let i = 0;
  while (i < lines.length && lines[i].trim() === '') {
    i += 1;
  }

  if (i >= lines.length) {
    return { heading: null, bodyMarkdown: markdown };
  }

  const match = lines[i].match(/^#\s+(.+?)\s*$/);
  if (!match) {
    return { heading: null, bodyMarkdown: markdown };
  }

  const heading = match[1].trim();
  const bodyMarkdown = lines.slice(i + 1).join('\n');

  return { heading, bodyMarkdown };
}
