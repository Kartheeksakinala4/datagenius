import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Data Genius — Professional Data Recovery Solutions, Hardware & Training',
  description: 'Data Genius provides advanced data recovery tools, hardware solutions, technical expertise, and professional training for forensic investigators, data recovery specialists, law enforcement, and enterprises.',
  keywords: 'data recovery, data recovery hardware, forensic data recovery, CCTV data recovery, data recovery training, professional data recovery tools',
  openGraph: {
    title: 'Data Genius — Professional Data Recovery Solutions',
    description: 'Advanced data recovery tools, hardware, training and technical support for professionals.',
    url: 'https://datagenius.in',
    siteName: 'Data Genius',
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
      <body className="min-h-screen text-silver-200 flex flex-col antialiased font-sans" style={{ backgroundColor: '#060f1f' }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
