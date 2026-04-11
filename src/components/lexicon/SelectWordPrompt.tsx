import Link from 'next/link';

export const SelectWordPrompt = ({}) => {
  return (
    <div>
      <p>Select a word to view its breakdown in the Lexicon</p>
      <p>
        or <Link href="/lexicon">browse all lexicon entries</Link>
      </p>
    </div>
  );
};
