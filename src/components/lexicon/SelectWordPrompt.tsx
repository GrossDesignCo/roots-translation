import { Link } from '@/design-system/components/Link';

export const SelectWordPrompt = ({}) => {
  return (
    <div className="markdown-text">
      <p>Select a word to view its breakdown in the Lexicon.</p>

      <p>
        or <Link href="/lexicon">browse all lexicon entries</Link>
      </p>
    </div>
  );
};
