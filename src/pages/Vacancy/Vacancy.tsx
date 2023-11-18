import { Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import ButtonPanel from '../../components/componentsOfPageWithVacancy/ButtonsPanel/ButtonsPanel';
import VacancyCard from '../../components/componentsOfPageWithVacancy/VacancyCard/VacancyCard';
import VacancyDetails from '../../components/componentsOfPageWithVacancy/VacansyDetails/VacansyDetails';
import { useGetVacanciToIdMutation, useGetVacanciesQuery } from '../../api/apiOnRTKQ';
import Loader from '../../components/Loader/Loader';
import './Vacancy.css';
import { useDispatch, useSelector } from '../../redux/reduxHooks';
import { setNewStatusToId, setVacancies } from '../../redux/slices/vacancySlice';
import { IVacanci } from '../../helpers/tsTypes/Interfaces';
import { setSelectedVacancy } from '../../redux/slices/selectedVacancySlice';

export const Vacancy: FC = () => {
  const vacansies = useSelector((store) => store.vacancies);
  const selectedVacancy = useSelector((store) => store.selectedVacancy);
  const dispatch = useDispatch();
  const { data: dataVacancies } = useGetVacanciesQuery(null);
  const [getVacanciesToId, { data: dataVacanciToId }] = useGetVacanciToIdMutation();

  const [vacancyPage, setVacancyPage] = useState('активные');
  const [titleVacancy, setTitleVacancy] = useState('');
  const isArchivePage = vacancyPage === 'в архиве';

  const handleClickVacancy = (id: string, title: string) => {
    if (!isArchivePage) {
      void getVacanciesToId(id);
      // несмотря на то, что мы меняем стейт независимо от ответа сервера, отражаться заголовок будет только когда данные будут получены и при том успешно
      setTitleVacancy(title);
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

  React.useEffect(() => {
    if (dataVacanciToId) {
      dispatch(setSelectedVacancy(dataVacanciToId));
    }
  }, [dataVacanciToId, dispatch]);

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
                    onClick={() => handleClickVacancy(data.id, data.title)}
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

      {selectedVacancy && !isArchivePage ? (
        <VacancyDetails data={selectedVacancy} title={titleVacancy} />
      ) : (
        <div>Выберите карточку вакансии</div>
      )}
    </>
  );
};
