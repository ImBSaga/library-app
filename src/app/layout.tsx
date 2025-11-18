import clsx from 'clsx';
import type { Metadata } from 'next';
import './globals.css';

// AppProvider
import { AppProvider } from '@/providers/AppProvider';

// SearchProvider
import { SearchProvider } from '@/providers/SearchProvider';

// Font
import { Quicksand } from 'next/font/google';
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'Library App',
  description: 'Loan Book Library App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-scroll-behavior='smooth'>
      <body className={clsx(quicksand.variable, 'antialiased')}>
        <AppProvider>
          <SearchProvider>{children}</SearchProvider>
        </AppProvider>
      </body>
    </html>
  );
}
