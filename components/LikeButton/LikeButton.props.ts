import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LikeButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isLiked: boolean;
  setIsLiked: (value: boolean) => void;
}