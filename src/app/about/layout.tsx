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
            href: '/about',
            label: 'About',
          },
          {
            href: '/about/translation-progress',
            label: 'Progress',
          },
          {
            href: '/about/difficult-words',
            label: 'Difficult Words',
          },
          {
            href: '/about/contribute',
            label: 'Contribute',
          },
          {
            href: 'https://github.com/GrossDesignCo/concordance-app-poc',
            target: '_blank',
            label: 'GitHub/Source',
          },
        ]}
      />

      <main className="main-text markdown-text">{children}</main>
    </div>
  );
}
