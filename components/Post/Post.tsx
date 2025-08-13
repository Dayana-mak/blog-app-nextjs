'use client';

import { useEffect, useState, type JSX } from 'react';
import { LikeButton } from '../LikeButton/LikeButton';

export const Post = (): JSX.Element => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({ liked: !isLiked }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [isLiked]);
  return (
    <article>
      <LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
    </article>
  );
};
