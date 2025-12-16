import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bagas Aji Handoko - Fullstack Developer & AI Enthusiast',
  description: 'Portfolio website of Bagas Aji Handoko, a Fullstack Developer and AI Enthusiast from Indonesia. Mahasiswa S1 Rekayasa Perangkat Lunak UPI.',
  keywords: ['portfolio', 'fullstack developer', 'AI', 'web development', 'mobile development'],
  authors: [{ name: 'Bagas Aji Handoko' }],
  openGraph: {
    title: 'Bagas Aji Handoko - Fullstack Developer & AI Enthusiast',
    description: 'Portfolio website showcasing projects and achievements in web and mobile development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
