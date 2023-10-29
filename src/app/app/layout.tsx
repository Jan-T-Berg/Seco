/*


*/

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SeC - Secound Chance',
  description: 'Dating App für Menschen, die eine zweite Chance verdienen.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='de'>
      <body className={inter.className}>
        <header className='bg-yellow-600 text-white p-4 bg-opacity-50 flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='mr-4'>ICON1</div>
          </div>
          <div className=''>LOGO</div>
          <div className='mr-4'>ICON2</div>
        </header>
        {children}
      </body>
    </html>
  );
}
