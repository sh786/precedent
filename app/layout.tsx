import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import '@/styles/globals.css';
import { NavBar } from '@/components/NavBar';
import { HasChildren } from '@/lib/propTypes';

const sfPro = localFont({
  src: '../styles/SF-Pro-Display-Medium.otf',
  variable: '--font-sf',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({ children }: HasChildren) {
  return (
    <html lang="en">
      <body className={cn(sfPro.variable, inter.variable, 'bg-slate-300')}>
        <NavBar />
        <main className="flex flex-col py-4 px-8">{children}</main>
      </body>
    </html>
  );
}
