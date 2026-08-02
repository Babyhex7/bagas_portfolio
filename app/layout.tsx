import type { Metadata } from 'next';
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LocaleProvider } from '@/components/providers/LocaleProvider';

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
  title: 'Bagas Adhi Nugraha — Software Engineer & AI Engineer',
  description:
    'Software Engineer & AI Engineer with 2+ years shipping production systems in Golang, Laravel, FastAPI, NestJS, Next.js, and Flutter. 3 registered IP rights, 13,000+ active users served across enterprise HRMS, fintech, and AI platforms.',
  keywords: [
    'Bagas Adhi Nugraha',
    'Software Engineer',
    'AI Engineer',
    'Golang Developer',
    'Fullstack Engineer Indonesia',
    'Next.js Developer',
    'Flutter Developer Bandung',
    'Backend Engineer Indonesia',
    'RAG AI Engineer',
  ],
  authors: [{ name: 'Bagas Adhi Nugraha' }],
  openGraph: {
    title: 'Bagas Adhi Nugraha — Software Engineer & AI Engineer',
    description:
      '2+ years in production. 3 registered IP rights. 13,000+ active users served. Golang, Next.js, FastAPI, Flutter — systems built to run, not to demo.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body`}
      >
        <LocaleProvider>
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
        </LocaleProvider>
      </body>
    </html>
  );
}
