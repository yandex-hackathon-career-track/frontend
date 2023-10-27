import { IdataDetailsCardVacancy } from '../../../services/types/Interfaces';
import VacancyCardField from '../VacancyCardField/VacancyCardField';
import FilterToggle from '../../componentsOfPageWithCandidates/FilterToggle/FilterToggle';

interface IFiltersList {
  data: IdataDetailsCardVacancy;
}

const FiltersList: React.FC<IFiltersList> = ({ data }: IFiltersList) => {
  const { cntFiltered, cntResume } = data;

  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <li>
        <FilterToggle>
          <VacancyCardField title="Новые" value="TODO" />
        </FilterToggle>
      </li>
      <li>
        <FilterToggle>
          <VacancyCardField title="Подходящие резюме" value={cntResume} />
        </FilterToggle>
      </li>
      <li>
        <FilterToggle>
          <VacancyCardField title="Отобрано" value={cntFiltered} />
        </FilterToggle>
      </li>
      <li>
        <FilterToggle>
          <VacancyCardField title="Просмотренные" value="TODO" />
        </FilterToggle>
      </li>
      <li>
        <FilterToggle>
          <VacancyCardField title="Отказ" value="TODO" />
        </FilterToggle>
      </li>
    </ul>
  );
};

export default FiltersList;
