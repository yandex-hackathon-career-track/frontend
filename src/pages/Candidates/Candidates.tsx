import { FC } from 'react';
import { Typography } from '@mui/material';
import styles from './Candidates.module.css';
import FiltersList from '../../components/componentsOfPageWithCandidates/FiltersList/FiltersList';

export const Candidates: FC = () => {
  return (
    <main style={{ padding: '32px 50px' }}>
      <Typography component={'h1'} className={styles.title}>
        Поиск специалистов
      </Typography>
      <FiltersList />
    </main>
  );
};
