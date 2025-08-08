import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import type { JSX } from 'react/jsx-dev-runtime';

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
      <body className={openSans.variable}>{children}</body>
    </html>
  );
}
