import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import { CandidateCard } from '../../components/componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import CandidatePreviewCard from '../../components/componentsOfPageWithCandidates/CandidatePreviewCard/CandidatePreviewCard';
import { CandidatesCardsWrapper } from '../../components/componentsOfPageWithCandidates/CandidatesCardsWrapper/CandidatesCardsWrapper';
import { CandidatesList } from '../../components/componentsOfPageWithCandidates/CandidatesList/CandidatesList';
import FilterDropper from '../../components/componentsOfPageWithCandidates/FilterDropped/FilterDropped';
import { useLocation } from 'react-router-dom';
import ButtonPopupTable from '../../components/componentsOfPageWithCandidates/ButtonPopupTable/ButtonPopupTable';
import styles from './Favorite.module.css';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { useSelector } from '../../services/hooks';
import { IApplicantMainInfo, IApplicantsToDetail } from '../../services/types/types';
import { getApplicantToId } from '../../services/query/practicumApi';

export const Favorite: FC = () => {
  const applicants = useSelector((store) => store.applicants);
  const [cardToPreview, setCardToPreview] = useState<IApplicantsToDetail | null>(null);
  const [toCompareCards, setToCompareCards] = useState<IApplicantsToDetail[]>([]);
  const location = useLocation();

  const handleCardPreview = (card: IApplicantMainInfo) => {
    getApplicantToId(card.id)
      .then((data) => {
        setCardToPreview(data as IApplicantsToDetail);
      })
      .catch((err) => console.log('Ошибка ' + err));
  };

  const handleAddToCompare = (data: IApplicantsToDetail) => {
    const index = toCompareCards.findIndex((card) => card.id === data.id);
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
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <CustomButton text="Выгрузить всех избранных кандидатов в MS Excel" variant="outlined" />
          <CustomButton text="Выгрузить сравниваемых кандидатов в MS Excel" variant="outlined" />
        </div>
      </div>
      <CandidatesCardsWrapper>
        <CandidatesList>
          {applicants.map((item, i) => (
            <li
              key={i}
              onClick={() => handleCardPreview(item)}
              style={{ cursor: 'pointer', borderRadius: '6px' }}
              className={cardToPreview?.id === item.id ? styles['active-card'] : ''}
            >
              <CandidatePreviewCard {...item} />
            </li>
          ))}
        </CandidatesList>
        {cardToPreview ? (
          <CandidateCard
            {...cardToPreview}
            location={location}
            handleAddToCompareClick={() => handleAddToCompare(cardToPreview)}
            btnAddToCompareText={
              toCompareCards.some((card) => card.id === cardToPreview?.id)
                ? 'Убрать из сравнений'
                : 'Добавить к сравнению'
            }
          />
        ) : (
          <div>Выберите карточку</div>
        )}
      </CandidatesCardsWrapper>
    </>
  );
};
