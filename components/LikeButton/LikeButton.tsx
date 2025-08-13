'use client';

import type { JSX } from 'react';
import type { LikeButtonProps } from './LikeButton.props';
import styles from './LikeButton.module.css';
import cn from 'classnames';
import LikeIcon from '../../public/LikeIcon.svg';


export const LikeButton = ({ isLiked, setIsLiked, ...props }: LikeButtonProps): JSX.Element => {
  const handleLike = (): void => {
    setIsLiked(!isLiked);

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({ liked: !isLiked }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <button
      className={cn(styles.like, { [styles.liked]: isLiked })}
      onClick={handleLike}
      {...props}
    >
      <LikeIcon/>
    </button>
  );
};
