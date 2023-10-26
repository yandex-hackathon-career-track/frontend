import styles from './wrapper.module.css';
import { FC, PropsWithChildren } from 'react';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>{children}</section>
    </main>
  );
};
