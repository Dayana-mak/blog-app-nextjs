'use client';

import type { JSX } from 'react';
import type { LikeButtonProps } from './LikeButton.props';
import styles from './LikeButton.module.css';
import cn from 'classnames';
import LikeIcon from '../../public/LikeIcon.svg';

export const LikeButton = ({ isLiked, setIsLiked, ...props }: LikeButtonProps): JSX.Element => {
  const handleLike = (): void => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      className={cn(styles.like, { [styles.liked]: isLiked })}
      onClick={handleLike}
      {...props}
    >
      <LikeIcon />
    </button>
  );
};
