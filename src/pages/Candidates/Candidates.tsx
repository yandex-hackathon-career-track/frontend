import { FC, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import FiltersList from '../../components/componentsOfPageWithCandidates/FiltersList/FiltersList';
import { CandidateCard } from '../../components/componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import CandidatePreviewCard from '../../components/componentsOfPageWithCandidates/CandidatePreviewCard/CandidatePreviewCard';
import { CandidatesCardsWrapper } from '../../components/componentsOfPageWithCandidates/CandidatesCardsWrapper/CandidatesCardsWrapper';
import { CandidatesList } from '../../components/componentsOfPageWithCandidates/CandidatesList/CandidatesList';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks';
import { IApplicantMainInfo, IApplicantsToDetail } from '../../services/types/types';
import { useGetApplicantToIdMutation, useGetApplicantsMutation } from '../../services/query/practicumApi';
import styles from './Candidates.module.css';
import { setApplicants } from '../../services/features/applicantsSlice';
import Loader from '../../components/Loader/Loader';
import { Popup } from '../../components/Popup/Popup';
import { ERROR_TEXT } from '../../utils/constants';

export const Candidates: FC = () => {
  const applicantsStore = useSelector((store) => store.applicants);
  const dispatch = useDispatch();
  const [getApplicantToId, { isLoading, data, isError }] = useGetApplicantToIdMutation();
  const [getApplicants, { data: applicants, isLoading: isLoadingApplicants, isError: isErrorApplicants }] =
    useGetApplicantsMutation();
  const [cardToPreview, setCardToPreview] = useState<IApplicantsToDetail | null>(null);

  const location = useLocation();
  const handleCardPreview = (card: IApplicantMainInfo) => {
    void getApplicantToId(card.id);
  };

  const handleChangeIsFavorite = (status: boolean, id: string) => {
    if (id === cardToPreview?.id && cardToPreview !== null) {
      setCardToPreview((prev) => {
        return { ...(prev as IApplicantsToDetail), is_selected: status };
      });
    }
  };

  useEffect(() => {
    void getApplicants(null);
  }, [getApplicants]);

  useEffect(() => {
    if (!isLoading && data) {
      setCardToPreview(data);
    } else if (!isLoading && isError) {
      // TODO поправить на попап
      console.log('Ошибка получения данных');
    }
  }, [data, isLoading, isError]);

  useEffect(() => {
    if (!isLoadingApplicants && applicants) {
      dispatch(setApplicants(applicants as unknown as IApplicantMainInfo[]));
    }
  }, [applicants, dispatch, isLoadingApplicants]);
  return (
    <>
      <Typography component={'h1'} className={'page-title'}>
        Поиск специалистов
      </Typography>
      <FiltersList />
      <CandidatesCardsWrapper>
        {!applicants ? (
          <Loader />
        ) : (
          <CandidatesList>
            {applicantsStore.map((item, i) => (
              <li
                key={i}
                onClick={() => handleCardPreview(item)}
                style={{ cursor: 'pointer', borderRadius: '6px' }}
                className={cardToPreview?.id === item.id ? styles['active-card'] : ''}
              >
                <CandidatePreviewCard {...item} handleChangeIsFavorite={handleChangeIsFavorite} />
              </li>
            ))}
          </CandidatesList>
        )}

        {cardToPreview ? <CandidateCard {...cardToPreview} location={location} /> : <div>Выберите карточку</div>}
      </CandidatesCardsWrapper>
      {(isError || isErrorApplicants) && <Popup type="error" text={ERROR_TEXT.onConnectionError} />}
    </>
  );
};
