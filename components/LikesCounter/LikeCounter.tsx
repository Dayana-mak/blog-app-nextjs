import type { JSX } from 'react';
import LikeIcon from '../../public/LikeIcon.svg';
import type { LikesProps } from './LikeCounter.props';
import styles from './LikeCounter.module.css';
import cn from 'classnames';

export const LikeCounter = ({ count, className }: LikesProps): JSX.Element => {
  return (
    <div className={cn(styles.likes, className)}>
      <span>{count}</span>
      <LikeIcon />
    </div>
  );
};
