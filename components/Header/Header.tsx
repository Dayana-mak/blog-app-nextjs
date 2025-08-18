import cn from 'classnames';
import type { HeaderProps } from './Header.props';
import type { JSX } from 'react';
import styles from './Header.module.css';
import GitHubIcon from '../../public/github.svg';

export const Header = ({
}: HeaderProps): JSX.Element => {
  return (
    <header className={cn(styles.header)}>
      <span>.my_blog</span>
      <GitHubIcon />
    </header>
  );
};
