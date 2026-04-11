import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { Noto_Sans, Noto_Serif_Hebrew } from 'next/font/google';
import '@/design-system/index.css';
import './globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin', 'latin-ext', 'greek', 'greek-ext'],
  weight: ['400', '500', '700'],
  fallback: ['Arial'],
  variable: '--font-noto-sans',
});

const notoSerif = Noto_Serif_Hebrew({
  subsets: ['hebrew', 'latin-ext'],
  weight: ['400', '500', '700'],
  fallback: ['Arial'],
  variable: '--font-noto-serif',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf3f0' },
    { media: '(prefers-color-scheme: dark)', color: '#23161c' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://roots-translation.vercel.app'),
  title: 'Roots Translation',
  description:
    'A Translation of the Bible that focused on consistent 1:1 mapping of original root words to English counterparts.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/icons/logo-light.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icons/logo-dark.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/icons/logo-light.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Roots Translation',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
