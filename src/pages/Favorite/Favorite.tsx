import { FC, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { CandidateCard } from '../../components/componentsOfPageWithCandidates/CandidateCard/CandidateCard';
import CandidatePreviewCard from '../../components/componentsOfPageWithCandidates/CandidatePreviewCard/CandidatePreviewCard';
import { CandidatesCardsWrapper } from '../../components/componentsOfPageWithCandidates/CandidatesCardsWrapper/CandidatesCardsWrapper';
import { CandidatesList } from '../../components/componentsOfPageWithCandidates/CandidatesList/CandidatesList';
import FilterDropper from '../../components/componentsOfPageWithCandidates/FilterDropped/FilterDropped';
import { useLocation } from 'react-router-dom';
import ButtonPopupTable from '../../components/componentsOfPageWithCandidates/ButtonPopupTable/ButtonPopupTable';
import { CustomButton } from '../../UI/CustomButton/CustomButton';
import { useSelector } from '../../services/hooks';
import { IApplicantMainInfo, IApplicantsToDetail } from '../../services/types/types';
import { getObjData } from '../../utils/utils';
import { useDownloadAllResumeMutation, useGetApplicantToIdMutation } from '../../services/query/practicumApi';
import styles from './Favorite.module.css';

export const Favorite: FC = () => {
  const attributes = useSelector((store) => store.attributes);
  const applicants = useSelector((store) => store.applicants);
  const [getApplicantToId, { isLoading, data, isError }] = useGetApplicantToIdMutation();
  const [downloadAllResume] = useDownloadAllResumeMutation();

  const [cardToPreview, setCardToPreview] = useState<IApplicantsToDetail | null>(null);
  const [toCompareCards, setToCompareCards] = useState<IApplicantsToDetail[]>([]);
  const [directions, setDirections] = useState<string[]>([]);
  const [cources, setCources] = useState<string[]>([]);
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

  const handleAddToCompare = (data: IApplicantsToDetail) => {
    const index = toCompareCards.findIndex((card) => card.id === data.id);
    if (index !== -1) {
      setToCompareCards((prev) => prev.filter((_, i) => i !== index));
    } else {
      setToCompareCards((prev) => [...prev, data]);
    }
  };

  const handleDownloadResume = async () => {
    const res = await downloadAllResume(null);
    console.log(res);
  };

  return (
    <>
      <Typography component={'h1'} className={'page-title'}>
        Избранные резюме
      </Typography>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: 8 }}>
        <FilterDropper
          data={getObjData(attributes.directions)}
          label="Направление"
          state={directions}
          setState={setDirections}
        />
        <FilterDropper data={getObjData(attributes.cources)} label="Курс" state={cources} setState={setCources} />
        <CustomButton text="Выгрузить все резюме" variant="outlined" onClick={handleDownloadResume} />
        <ButtonPopupTable data={toCompareCards} handleAddToCompareClick={handleAddToCompare} />
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
