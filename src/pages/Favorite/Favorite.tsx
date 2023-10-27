import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import { favorites } from '../../utils/mockData';
import { CandidateCard } from '../../components/componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import { ICandidate } from '../../services/types/Interfaces';
import CandidatePreviewCard from '../../components/componentsOfPageWithCandidates/CandidatePreviewCard/CandidatePreviewCard';
import { CandidatesCardsWrapper } from '../../components/CandidatesCardsWrapper/CandidatesCardsWrapper';
import { CandidatesList } from '../../components/CandidatesList/CandidatesList';
import { CustomButton } from '../../UI/CustomButton/CustomButton';
import FilterDropper from '../../components/componentsOfPageWithCandidates/FilterDropped/FilterDropped';
import { useLocation } from 'react-router-dom';

export const Favorite: FC = () => {
  const [cardToPreview, setCardToPreview] = useState(favorites[0] as ICandidate);
  const location = useLocation();
  const handleCardPreview = (card: ICandidate) => {
    setCardToPreview(card);
  };
  const data = ['var1', 'var2', 'var3', 'var4', 'var5', 'var6'];
  return (
    <>
      <Typography component={'h1'} className={'page-title'}>
        Избранные резюме
      </Typography>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: 8 }}>
        <FilterDropper data={data} label="Дизайн" />
        <FilterDropper data={data} label="Дизайнер интерфейсов" />
        <CustomButton text={'Сравнить (2)'} variant={'filled'} />
      </div>
      <CandidatesCardsWrapper>
        <CandidatesList>
          {favorites.map((item, index) => (
            <CandidatePreviewCard key={index} {...item} handlePreview={handleCardPreview} />
          ))}
        </CandidatesList>
        <CandidateCard {...cardToPreview} location={location} />
      </CandidatesCardsWrapper>
    </>
  );
};
