import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Chiranjibi Khanal — Cinematic Storytelling',
    template: '%s | Chiranjibi Khanal',
  },
  description:
    'Cinematic photography and videography by Chiranjibi Khanal. Based in Kathmandu, Nepal. Available worldwide.',
  openGraph: {
    title: 'Chiranjibi Khanal — Cinematic Storytelling',
    description: 'Cinematic photography and videography by Chiranjibi Khanal.',
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
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}
