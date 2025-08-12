import type { ReactNode } from 'react';

export interface PostMetaProps {
  type: 'category' | 'date' | 'reading-time' | 'link';
  className?: string;
  children?: ReactNode;
  href?: string;
}