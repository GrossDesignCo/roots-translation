import './layout.css';
import { LexiconNav } from '@/components/lexicon/LexiconNav';

export default function StaticPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-shell">
      <LexiconNav />

      <main className="main-text markdown-text">{children}</main>
    </div>
  );
}
