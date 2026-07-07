import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Chiranjibi Khanal — Photographer & Videographer',
    template: '%s | Chiranjibi Khanal',
  },
  description:
    'Professional photography and videography portfolio by Chiranjibi Khanal. Weddings, portraits, events, and commercial projects.',
  keywords: [
    'photographer',
    'videographer',
    'portfolio',
    'Chiranjibi Khanal',
    'wedding photography',
    'portrait photography',
  ],
  authors: [{ name: 'Chiranjibi Khanal' }],
  openGraph: {
    title: 'Chiranjibi Khanal — Photographer & Videographer',
    description:
      'Professional photography and videography portfolio.',
    type: 'website',
    locale: 'en_US',
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
