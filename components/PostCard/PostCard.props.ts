import type { ReactNode } from 'react';

export interface PostCardProps {
  category: string;
  date: string;
  likesCount: number;
  readingTime: string;
  link: string;
  title: string;
  description: string;
  imageLink: string;
  children?: ReactNode;
  className?: string;
}