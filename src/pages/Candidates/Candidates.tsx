import { FC, useState } from 'react';
import CandidatePreviewCard from '../../components/CandidatePreviewCard/CandidatePreviewCard';
import styles from './styles.module.css';
import { profiles } from '../../utils/mockData';
import { CandidateCard } from '../../components/CandidateCard/CandidateCard';
import { ICandidate } from '../../services/types/Interfaces';

export const Candidates: FC = () => {
  const [cardToPreview, setCardToPreview] = useState(profiles[0] as ICandidate);
  const handleCardPreview = (card: ICandidate) => {
    setCardToPreview(card);
    console.log(card);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.cards}>
        {profiles.map((item, index) => (
          <CandidatePreviewCard key={index} {...item} handlePreview={handleCardPreview} />
        ))}
      </ul>
      <div className={styles.preview}>
        <CandidateCard {...cardToPreview} />
      </div>
    </div>
  );
};
