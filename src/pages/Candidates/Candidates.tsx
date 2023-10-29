import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import FiltersList from '../../components/componentsOfPageWithCandidates/FiltersList/FiltersList';
import { profiles } from '../../utils/mockData';
import { CandidateCard } from '../../components/componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import { ICandidate } from '../../services/types/Interfaces';
import CandidatePreviewCard from '../../components/componentsOfPageWithCandidates/CandidatePreviewCard/CandidatePreviewCard';
import { CandidatesCardsWrapper } from '../../components/componentsOfPageWithCandidates/CandidatesCardsWrapper/CandidatesCardsWrapper';
import { CandidatesList } from '../../components/componentsOfPageWithCandidates/CandidatesList/CandidatesList';
import { useLocation } from 'react-router-dom';
import styles from './Candidates.module.css';

export const Candidates: FC = () => {
  const [cardToPreview, setCardToPreview] = useState(profiles[0] as ICandidate);
  const location = useLocation();
  const handleCardPreview = (card: ICandidate) => {
    setCardToPreview(card);
  };
  return (
    <>
      <Typography component={'h1'} className={'page-title'}>
        Поиск специалистов
      </Typography>
      <FiltersList />
      <CandidatesCardsWrapper>
        <CandidatesList>
          {profiles.map((item, i) => (
            <li
              key={i}
              onClick={() => handleCardPreview(item)}
              style={{ cursor: 'pointer' }}
              // TODO вместо id для определения активной карточки
              className={cardToPreview.name === item.name ? styles['active-card'] : ''}
            >
              <CandidatePreviewCard {...item} />
            </li>
          ))}
        </CandidatesList>
        <CandidateCard {...cardToPreview} location={location} />
      </CandidatesCardsWrapper>
    </>
  );
};
