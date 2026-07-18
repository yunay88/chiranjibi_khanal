import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: { default: 'Chiranjibi Khanal — Cinematic Storytelling', template: '%s | Chiranjibi Khanal' },
  description: 'Cinematic photography and videography by Chiranjibi Khanal. Based in Kathmandu, Nepal.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
