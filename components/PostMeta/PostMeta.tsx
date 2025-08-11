import type { JSX } from 'react/jsx-dev-runtime';
import type  { PostMetaProps } from './PostMeta.props';
import cn from 'classnames';
import styles from './PostMeta.module.css';

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
      return (
        <a className={postMetaClass} href={href}>
          {children}
        </a>
      );
    default:
      return <></>;
  }
};
