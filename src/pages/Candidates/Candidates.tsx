import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import styles from './Candidates.module.css';
import FiltersList from '../../components/componentsOfPageWithCandidates/FiltersList/FiltersList';
import { profiles } from '../../utils/mockData';
import { CandidateCard } from '../../components/componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import { ICandidate } from '../../services/types/Interfaces';
import CandidatePreviewCard from '../../components/componentsOfPageWithCandidates/CandidatePreviewCard/CandidatePreviewCard';

export const Candidates: FC = () => {
  const [cardToPreview, setCardToPreview] = useState(profiles[0] as ICandidate);
  const handleCardPreview = (card: ICandidate) => {
    setCardToPreview(card);
    console.log(card);
  };
  return (
    <>
      <Typography component={'h1'} className={'page-title'}>
        Поиск специалистов
      </Typography>
      <FiltersList />
      <div className={styles.container}>
        <ul className={styles.cards}>
          {profiles.map((item, index) => (
            <CandidatePreviewCard key={index} {...item} handlePreview={handleCardPreview} />
          ))}
        </ul>
        <CandidateCard {...cardToPreview} />
      </div>
    </>
  );
};
