import styles from './page.module.css';
import type { JSX } from 'react';

export default function Home(): JSX.Element {
  return <div className={styles.page}>It&apos;s a blog.</div>;
}
