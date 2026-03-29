import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'DataGenius — Data Recovery Software & Tools for India',
  description: 'Free data recovery tools, expert guides, and professional-grade software trusted by 50,000+ users across India. Recover deleted files, fix corrupted data, and protect your storage.',
  openGraph: {
    title: 'DataGenius — Your Data. Recovered. Protected. Mastered.',
    description: 'Free data recovery tools trusted by 50,000+ users across India.',
    url: 'https://datagenius.in',
    siteName: 'DataGenius',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-surface-dark text-slate-100 flex flex-col antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

