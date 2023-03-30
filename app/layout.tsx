import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import '@/styles/globals.css';
import { NavBar } from '@/components/NavBar';
import { HasChildren } from '@/lib/types/propTypes';

const sfPro = localFont({
  src: '../styles/SF-Pro-Display-Medium.otf',
  variable: '--font-sf',
});

const calSans = localFont({
  src: '../styles/CalSans-SemiBold.otf',
  variable: '--font-cal',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({ children }: HasChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          sfPro.variable,
          inter.variable,
          calSans.variable,
          'bg-slate-100 font-default text-slate-800'
        )}
      >
        <NavBar />
        <main className="flex flex-col p-4 sm:px-6">{children}</main>
      </body>
    </html>
  );
}
