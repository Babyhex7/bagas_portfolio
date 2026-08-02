import type { Metadata } from 'next';
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const body = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-body',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bagasadhinugraha.com'),
  title: 'Bagas Adhi Nugraha — Fullstack Engineer',
  description:
    'Fullstack engineer di Bandung. Membangun produk untuk Duluin, BNI Ventures, dan lini bisnis lain — dari dasbor internal sampai situs korporat.',
  keywords: [
    'Bagas Adhi Nugraha',
    'fullstack developer',
    'Duluin',
    'web developer Bandung',
    'portfolio',
  ],
  authors: [{ name: 'Bagas Adhi Nugraha' }],
  openGraph: {
    title: 'Bagas Adhi Nugraha — Fullstack Engineer',
    description:
      '14 produk terkirim untuk klien nyata — dasbor SaaS, situs korporat, e-commerce, hingga platform edukasi.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body`}
      >
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-kunyit focus:px-4 focus:py-3 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
