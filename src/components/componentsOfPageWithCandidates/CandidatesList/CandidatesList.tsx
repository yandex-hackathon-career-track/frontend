import { FC, PropsWithChildren } from 'react';
import styles from './CandidatesList.module.css';

export const CandidatesList: FC<PropsWithChildren> = ({ children }) => {
  return <ul className={styles.cards}>{children}</ul>;
};
