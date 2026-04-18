import './layout.css';
import { NavLinks } from '@/components/NavLinks';

export default function StaticPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-shell">
      <NavLinks
        links={[
          {
            href: '/',
            label: 'Back',
          },
          {
            href: '/lexicon',
            label: 'Lexicon',
          },
        ]}
      />

      <main className="main-text markdown-text">{children}</main>
    </div>
  );
}
