import type { PProps } from './P.props';
import type { JSX } from 'react';
import cn from 'classnames';
import styles from './P.module.css';

export const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
  return (
    <p className={cn(styles.p, className, styles[size])} {...props}>
      {children}
    </p>
  );
};
