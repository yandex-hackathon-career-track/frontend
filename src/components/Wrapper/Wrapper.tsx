import styles from './wrapper.module.css';
import { FC, PropsWithChildren } from 'react';

interface IWrapper {
  isAuth?: boolean;
}

export const Wrapper: FC<PropsWithChildren<IWrapper>> = ({ children, isAuth = false }) => {
  return (
    <main className={isAuth ? styles.authContainer : styles.container}>
      <section className={isAuth ? styles.authWrapper : styles.wrapper}>{children}</section>
    </main>
  );
};
