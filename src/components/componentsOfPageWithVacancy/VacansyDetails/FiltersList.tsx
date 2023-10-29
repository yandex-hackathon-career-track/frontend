import { IdataDetailsCardVacancy } from '../../../services/types/Interfaces';
import VacancyCardField from '../VacancyCardField/VacancyCardField';
import FilterToggle from '../../componentsOfPageWithCandidates/FilterToggle/FilterToggle';

const inputOptions = [
  { label: 'Не выбрано' },
  { label: 'Назначено собеседование' },
  { label: 'На рассмотрении' },
  { label: 'Отправлено тестовое' },
  { label: 'Отказ' },
];

interface IFiltersList {
  data: IdataDetailsCardVacancy;
}

const FiltersList: React.FC<IFiltersList> = ({ data }: IFiltersList) => {
  // const { cntFiltered, cntResume } = data;

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {inputOptions.map((item, i) => (
        <li key={i}>
          <FilterToggle>
            <VacancyCardField title={item.label} value={data.cntResume} />
          </FilterToggle>
        </li>
      ))}
    </ul>
  );
};

export default FiltersList;
