import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Chiranjibi Khanal — Photographer & Videographer',
    template: '%s | Chiranjibi Khanal',
  },
  description:
    'Professional photography and videography portfolio by Chiranjibi Khanal. Weddings, portraits, events, and commercial projects.',
  openGraph: {
    title: 'Chiranjibi Khanal — Photographer & Videographer',
    description:
      'Professional photography and videography portfolio.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Chiranjibi Khanal',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}