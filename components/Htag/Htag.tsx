import type { JSX } from 'react';
import type { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import cn from 'classnames';

export const Htag = ({ tag, children, className }: HtagProps): JSX.Element => {
  const classNames = cn(styles.heading, styles[tag], className);
  switch (tag) {
    case 'h1':
      return <h1 className={classNames}>{children}</h1>;
    case 'h2':
      return <h2 className={classNames}>{children}</h2>;
    case 'h3':
      return <h3 className={classNames}>{children}</h3>;
    default:
      return <></>;
  }
};
