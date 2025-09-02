import type { JSX } from 'react/jsx-dev-runtime';
import type  { PostMetaProps } from './PostMeta.props';
import cn from 'classnames';
import styles from './PostMeta.module.css';
import Link from 'next/link';

export const PostMeta = ({ type, className, href, children }: PostMetaProps): JSX.Element => {
  const postMetaClass = cn(styles['post-meta'], styles[type], className);
  switch (type) {
    case 'category':
      return <span className={postMetaClass}>{children}</span>;
    case 'date':
      return <span className={postMetaClass}>{children}</span>;
    case 'reading-time':
      return <span className={postMetaClass}>{children}</span>;
    case 'link':
      if(!href) return <></>;
      return (
        <Link className={postMetaClass} href={href}>
          {children}
        </Link>
      );
    default:
      return <></>;
  }
};
