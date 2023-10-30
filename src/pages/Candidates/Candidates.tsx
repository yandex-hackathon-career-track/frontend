import { FC, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import FiltersList from '../../components/componentsOfPageWithCandidates/FiltersList/FiltersList';
import { CandidateCard } from '../../components/componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import CandidatePreviewCard from '../../components/componentsOfPageWithCandidates/CandidatePreviewCard/CandidatePreviewCard';
import { CandidatesCardsWrapper } from '../../components/componentsOfPageWithCandidates/CandidatesCardsWrapper/CandidatesCardsWrapper';
import { CandidatesList } from '../../components/componentsOfPageWithCandidates/CandidatesList/CandidatesList';
import { useLocation } from 'react-router-dom';
import { useSelector } from '../../services/hooks';
import { IApplicantMainInfo, IApplicantsToDetail } from '../../services/types/types';
import { useGetApplicantToIdMutation } from '../../services/query/practicumApi';
import styles from './Candidates.module.css';

export const Candidates: FC = () => {
  const applicants = useSelector((store) => store.applicants);
  const [getApplicantToId, { isLoading, data, isError }] = useGetApplicantToIdMutation();
  const [cardToPreview, setCardToPreview] = useState<IApplicantsToDetail | null>(null);

  const location = useLocation();
  const handleCardPreview = (card: IApplicantMainInfo) => {
    void getApplicantToId(card.id);
  };

  useEffect(() => {
    if (!isLoading && data) {
      setCardToPreview(data);
    } else if (!isLoading && isError) {
      // TODO поправить на попап
      console.log('Ошибка получения данных');
    }
  }, [data, isLoading, isError]);

  return (
    <>
      <Typography component={'h1'} className={'page-title'}>
        Поиск специалистов
      </Typography>
      <FiltersList />
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
        {cardToPreview ? <CandidateCard {...cardToPreview} location={location} /> : <div>Выберите карточку</div>}
      </CandidatesCardsWrapper>
    </>
  );
};
