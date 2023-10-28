import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import { favorites } from '../../utils/mockData';
import { CandidateCard } from '../../components/componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import { ICandidate } from '../../services/types/Interfaces';
import CandidatePreviewCard from '../../components/componentsOfPageWithCandidates/CandidatePreviewCard/CandidatePreviewCard';
import { CandidatesCardsWrapper } from '../../components/componentsOfPageWithCandidates/CandidatesCardsWrapper/CandidatesCardsWrapper';
import { CandidatesList } from '../../components/componentsOfPageWithCandidates/CandidatesList/CandidatesList';
import FilterDropper from '../../components/componentsOfPageWithCandidates/FilterDropped/FilterDropped';
import { useLocation } from 'react-router-dom';
import ButtonPopupTable from '../../components/componentsOfPageWithCandidates/ButtonPopupTable/ButtonPopupTable';
import styles from './Favorite.module.css';

export const Favorite: FC = () => {
  const [cardToPreview, setCardToPreview] = useState(favorites[0] as ICandidate);
  const [toCompareCards, setToCompareCards] = useState<ICandidate[]>([]);
  const location = useLocation();

  const handleCardPreview = (card: ICandidate) => {
    setCardToPreview(card);
  };

  // TODO заменить name на id
  const handleAddToCompare = (data: ICandidate) => {
    const index = toCompareCards.findIndex((card) => card.name === data.name);
    if (index !== -1) {
      setToCompareCards((prev) => prev.filter((_, i) => i !== index));
    } else {
      setToCompareCards((prev) => [...prev, data]);
    }
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
        <ButtonPopupTable data={toCompareCards} handleAddToCompareClick={handleAddToCompare} />
      </div>
      <CandidatesCardsWrapper>
        <CandidatesList>
          {favorites.map((item, i) => (
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
        <CandidateCard
          {...cardToPreview}
          location={location}
          handleAddToCompareClick={() => handleAddToCompare(cardToPreview)}
          // TODO name -> id
          btnAddToCompareText={
            toCompareCards.some((card) => card.name === cardToPreview.name)
              ? 'Убрать из сравнений'
              : 'Добавить к сравнению'
          }
        />
      </CandidatesCardsWrapper>
    </>
  );
};
