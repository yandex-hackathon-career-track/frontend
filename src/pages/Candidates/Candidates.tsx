import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import FiltersList from '../../components/componentsOfPageWithCandidates/FiltersList/FiltersList';
import { profiles } from '../../utils/mockData';
import { CandidateCard } from '../../components/componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import { ICandidate } from '../../services/types/Interfaces';
import CandidatePreviewCard from '../../components/componentsOfPageWithCandidates/CandidatePreviewCard/CandidatePreviewCard';
import { CandidatesCardsWrapper } from '../../components/CandidatesCardsWrapper/CandidatesCardsWrapper';
import { CandidatesList } from '../../components/CandidatesList/CandidatesList';
import { useLocation } from 'react-router-dom';

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
          {profiles.map((item, index) => (
            <CandidatePreviewCard key={index} {...item} handlePreview={handleCardPreview} />
          ))}
        </CandidatesList>
        <CandidateCard {...cardToPreview} location={location} />
      </CandidatesCardsWrapper>
    </>
  );
};
