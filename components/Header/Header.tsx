'use client';

import cn from 'classnames';
import type { HeaderProps } from './Header.props';
import { useContext, type JSX } from 'react';
import styles from './Header.module.css';
import GitHubIcon from './githubIcon.svg';
import { GitContext } from '@/context/GitContext';

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
  const { link } = useContext(GitContext);
  return (
    <header className={cn(styles.header, className)} {...props}>
      <span>.my_blog</span>
      <a href={link} target="_blank" rel="noopener">
        <GitHubIcon />
      </a>
    </header>
  );
};
