import { FC, useState } from 'react';
import { Typography } from '@mui/material';
import FiltersList from '../../components/componentsOfPageWithCandidates/FiltersList/FiltersList';
import { CandidateCard } from '../../components/componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import CandidatePreviewCard from '../../components/componentsOfPageWithCandidates/CandidatePreviewCard/CandidatePreviewCard';
import { CandidatesCardsWrapper } from '../../components/componentsOfPageWithCandidates/CandidatesCardsWrapper/CandidatesCardsWrapper';
import { CandidatesList } from '../../components/componentsOfPageWithCandidates/CandidatesList/CandidatesList';
import { useLocation } from 'react-router-dom';
import styles from './Candidates.module.css';
import { useSelector } from '../../services/hooks';
import { IApplicantMainInfo, IApplicantsToDetail } from '../../services/types/types';
import { getApplicantToId } from '../../services/query/practicumApi';

export const Candidates: FC = () => {
  const applicants = useSelector((store) => store.applicants);
  const [cardToPreview, setCardToPreview] = useState<IApplicantsToDetail | null>(null);
  const location = useLocation();
  const handleCardPreview = (card: IApplicantMainInfo) => {
    getApplicantToId(card.id)
      .then((data) => {
        setCardToPreview(data as IApplicantsToDetail);
      })
      .catch((err) => console.log('Ошибка ' + err));
  };

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
