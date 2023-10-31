import { FC, PropsWithChildren } from 'react';
import styles from './CandidatesCardsWrapper.module.css';

export const CandidatesCardsWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
