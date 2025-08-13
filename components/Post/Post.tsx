'use client';

import { useState, type JSX } from 'react';
import { LikeButton } from '../LikeButton/LikeButton';

export const Post = (): JSX.Element => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <article>
      <LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
    </article>
  );
};
