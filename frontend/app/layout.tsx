import type { Metadata } from 'next';
import { Bodoni_Moda, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Timecode from '@/components/Timecode';

const display = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Klieg House — Film Launches, Premieres & Campaigns',
  description:
    'Klieg House builds premieres, teaser drops, and countdowns to opening night for films that deserve to be an event.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Timecode />
      </body>
    </html>
  );
}
