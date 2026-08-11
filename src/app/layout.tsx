import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'DataGenius — Recovery · Storage · Preservation · Continuity',
  description: 'DataGenius helps individuals, families, professionals, and businesses recover, preserve, protect, and maintain their valuable data. Trusted data continuity experts in Hyderabad.',
  keywords: 'data recovery, home cloud, data preservation, backup, hard drive recovery, NAS setup, digital preservation, RAID recovery, data continuity, Hyderabad',
  openGraph: {
    title: 'DataGenius — Your Data. Safe, Recoverable, and Future-Ready.',
    description: 'From failed hard drives to home cloud setup and long-term digital preservation, DataGenius is your complete data continuity partner.',
    url: 'https://datagenius.in',
    siteName: 'DataGenius',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
