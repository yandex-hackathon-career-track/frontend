import { IdataDetailsCardVacancy } from '../../../services/types/Interfaces';
import VacancyCardField from '../VacancyCardField/VacancyCardField';
import FilterToggle from '../../componentsOfPageWithCandidates/FilterToggle/FilterToggle';
import { useSelector } from '../../../services/hooks';

interface IFiltersList {
  data: IdataDetailsCardVacancy;
}

const FiltersList: React.FC<IFiltersList> = ({ data }: IFiltersList) => {
  const attributes = useSelector((store) => store.attributes);

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {attributes.review_statuses.map((item, i) => (
        <li key={i}>
          <FilterToggle>
            <VacancyCardField title={item.name} value={data.cntResume} />
          </FilterToggle>
        </li>
      ))}
    </ul>
  );
};

export default FiltersList;
