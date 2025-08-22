import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import type { JSX } from 'react/jsx-dev-runtime';
import { Header } from '@/components/Header/Header';

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
        <div className="wrapper">
          <Header className="header" />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
