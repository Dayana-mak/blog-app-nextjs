import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import type { JSX } from 'react';
import { Header } from '@/components/Header/Header';
import { GitContextProvider } from '@/context/GitContext';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Му blog',
  description: 'Блог о фронтенд разработке и технологиях',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ru">
      <body className={openSans.variable}>
        <GitContextProvider link="https://github.com/Dayana-mak">
          <div className="wrapper">
            <Header className="header" />
            <main className="main">{children}</main>
          </div>
        </GitContextProvider>
      </body>
    </html>
  );
}
