import type { JSX } from 'react/jsx-dev-runtime';
import type { PostCardProps } from './PostCard.props';
import Image from 'next/image';
import { P } from '../P/P';
import { Htag } from '../Htag/Htag';
import { PostMeta } from '../PostMeta/PostMeta';
import { LikeCounter } from '../LikesCounter/LikeCounter';
import styles from './PostCard.module.css';
import cn from 'classnames';

export const PostCard = ({
  category,
  date,
  likesCount,
  readingTime,
  link,
  title,
  description,
  imageLink,
  children,
  className,
}: PostCardProps): JSX.Element => {
  return (
    <article className={cn(styles['post-card'], className)}>
      {imageLink && (
        <div className={styles['image-wrapper']}>
          <Image
            className={styles['image']}
            src={imageLink}
            alt={title}
            width={300}
            height={192}
            priority={true}
          />
        </div>
      )}
      <div className={styles['content-wrapper']}>
        <div className={styles.meta}>
          <PostMeta type={'category'}>{category}</PostMeta>
          <PostMeta type={'date'}>{date}</PostMeta>
          <LikeCounter className={styles['likes-counter']} count={likesCount} />
        </div>
        <Htag tag="h3">{title}</Htag>
        <P size="s">{description}</P>
      </div>
      <div className={styles.footer}>
        <PostMeta type={'reading-time'}>{readingTime}</PostMeta>
        <PostMeta type={'link'} href={link}>
          Читать
        </PostMeta>
      </div>
      {children}
    </article>
  );
};
