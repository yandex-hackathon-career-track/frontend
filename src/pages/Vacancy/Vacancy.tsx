import { Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import ButtonPanel from '../../components/componentsOfPageWithVacancy/ButtonsPanel/ButtonsPanel';
import VacancyCard from '../../components/componentsOfPageWithVacancy/VacancyCard/VacancyCard';
import VacancyDetails from '../../components/componentsOfPageWithVacancy/VacansyDetails/VacansyDetails';
import { useGetVacanciToIdMutation, useGetVacanciesQuery } from '../../services/query/practicumApi';
import Loader from '../../components/Loader/Loader';
import './Vacancy.css';
import { useDispatch, useSelector } from '../../services/hooks';
import { setNewStatusToId, setVacancies } from '../../services/features/vacancySlice';
import { IVacanci } from '../../services/types/Interfaces';

export const Vacancy: FC = () => {
  const vacansies = useSelector((store) => store.vacancies);
  const dispatch = useDispatch();
  const { data: dataVacancies } = useGetVacanciesQuery(null);
  const [getVacanciesToId, { data: dataVacanciToId }] = useGetVacanciToIdMutation();
  const [vacancyPage, setVacancyPage] = useState('активные');
  const isArchivePage = vacancyPage === 'в архиве';

  const handleClickVacancy = (id: string) => {
    if (!isArchivePage) {
      void getVacanciesToId(id);
    }
  };

  const handleChangeStatus = (data: IVacanci) => {
    dispatch(setNewStatusToId(data));
  };

  React.useEffect(() => {
    if (dataVacancies) {
      dispatch(setVacancies(dataVacancies));
    }
  }, [dataVacancies, dispatch]);

  return (
    <>
      <Typography className="page-title">Мои вакансии</Typography>
      <ButtonPanel state={vacancyPage} setState={setVacancyPage} />
      {vacansies ? (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '16px',
          }}
        >
          {/* TODO: оптимизировать логику */}
          {vacansies.filter((item) => (isArchivePage ? !item.is_published : item.is_published)).length ? (
            vacansies
              .filter((item) => (isArchivePage ? !item.is_published : item.is_published))
              .map((data) => {
                return (
                  <li
                    key={data.id}
                    onClick={() => handleClickVacancy(data.id)}
                    style={isArchivePage ? {} : { cursor: 'pointer' }}
                    className={
                      'card-vacancy ' + (data.id === dataVacanciToId?.id && !isArchivePage ? 'active-card-vacancy' : '')
                    }
                  >
                    <VacancyCard data={data} isArchivePage={isArchivePage} handleChangeStatus={handleChangeStatus} />
                  </li>
                );
              })
          ) : (
            <li>Здесь пока нет карточек</li>
          )}
        </ul>
      ) : (
        <Loader />
      )}

      {dataVacanciToId && !isArchivePage ? (
        <VacancyDetails data={dataVacanciToId} />
      ) : (
        <div>Выберите карточку вакансии</div>
      )}
    </>
  );
};
