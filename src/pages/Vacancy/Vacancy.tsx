import { Typography } from '@mui/material';
import { FC, useState } from 'react';
import ButtonPanel from '../../components/componentsOfPageWithVacancy/ButtonsPanel/ButtonsPanel';
import VacancyCard from '../../components/componentsOfPageWithVacancy/VacancyCard/VacancyCard';
import VacancyDetails from '../../components/componentsOfPageWithVacancy/VacansyDetails/VacansyDetails';
import { IdataDetailsCardVacancy } from '../../services/types/Interfaces';
import './Vacancy.css';

// TODO id надо будет добавить в типы и key прописывать как id и по id ориентироваться какая карточка выбрана
const data1 = {
  id: '1',
  title: 'Направление',
  createDate: '24 октября 2023',
  cntViews: '235',
  cntFiltered: '12',
  cntFeedback: '123',
  cntResume: '574',
};

const data2 = {
  id: '2',
  title: 'Направление',
  createDate: '24 октября 2023',
  cntViews: '235',
  cntFiltered: '12',
  cntFeedback: '123',
  cntResume: '574',
};

const data3 = {
  id: '3',
  title: 'Направление',
  createDate: '24 октября 2023',
  cntViews: '235',
  cntFiltered: '12',
  cntFeedback: '123',
  cntResume: '574',
};

const data4 = {
  id: '4',
  title: 'Направление',
  createDate: '24 октября 2023',
  cntViews: '235',
  cntFiltered: '12',
  cntFeedback: '123',
  cntResume: '574',
};

const dataCards = [data1, data2, data3, data4];

export const Vacancy: FC = () => {
  const [vacancyPage, setVacancyPage] = useState('активные');
  const [selectedVacancy, setSelectedVacancy] = useState<null | IdataDetailsCardVacancy>(null);
  const isArchive = vacancyPage === 'в архиве';

  const handleClickVacancy = (value: IdataDetailsCardVacancy) => {
    if (!isArchive) setSelectedVacancy(value);
  };

  return (
    <>
      <Typography className="page-title">Мои вакансии</Typography>
      <ButtonPanel state={vacancyPage} setState={setVacancyPage} />
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {dataCards.map((data, i) => {
          return (
            <li
              key={i}
              onClick={() => handleClickVacancy(data)}
              style={{ cursor: 'pointer' }}
              // совпадение по айди и это не архив
              className={`${i + 1}` === selectedVacancy?.id && !isArchive ? 'active-card-vacancy' : ''}
            >
              <VacancyCard data={data} isArchive={isArchive} />
            </li>
          );
        })}
      </ul>
      {selectedVacancy && !isArchive ? <VacancyDetails data={selectedVacancy} /> : <></>}
    </>
  );
};
