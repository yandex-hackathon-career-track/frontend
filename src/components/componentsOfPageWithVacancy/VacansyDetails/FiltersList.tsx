import VacancyCardField from '../VacancyCardField/VacancyCardField';
import FilterToggle from '../../componentsOfPageWithCandidates/FilterToggle/FilterToggle';
import { useSelector } from '../../../redux/reduxHooks';
import { IRespondsOfVacanci } from '../../../helpers/tsTypes/Interfaces';

interface IFiltersList {
  data: IRespondsOfVacanci;
}

const FiltersList: React.FC<IFiltersList> = ({ data }: IFiltersList) => {
  const attributes = useSelector((store) => store.attributes);

  const getValue = (key: string) => {
    if (key === 'Не выбрано') {
      return data.new;
    } else if (key === 'На рассмотрении') {
      return data.under_review;
    } else if (key === 'Отправлено тестовое') {
      return data.sent_test;
    } else if (key === 'Назначено собеседование') {
      return data.interview;
    } else if (key === 'Отказ') {
      return data.refusal;
    }
    return '';
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {attributes.review_statuses.map((item, i) => (
        <li key={i}>
          <FilterToggle>
            <VacancyCardField title={item.name} value={getValue(item.name)} />
          </FilterToggle>
        </li>
      ))}
    </ul>
  );
};

export default FiltersList;
