import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bagas Adhi Nugraha - Fullstack Developer & AI Enthusiast',
  description: 'Portfolio website of Bagas Adhi Nugraha, a Fullstack Developer and AI Enthusiast from Indonesia. Mahasiswa S1 Rekayasa Perangkat Lunak UPI dengan passion di Web & Mobile Development.',
  keywords: ['portfolio', 'fullstack developer', 'AI', 'web development', 'mobile development'],
  authors: [{ name: 'Bagas Adhi Nugraha' }],
  openGraph: {
    title: 'Bagas Adhi Nugraha - Fullstack Developer & AI Enthusiast',
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
