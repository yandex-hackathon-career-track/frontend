// import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import FilterToggle from '../FilterToggle/FilterToggle';
import FilterDropper from '../FilterDropped/FilterDropped';
import { CustomButton } from '../../../UI/CustomButton/CustomButton';

const FiltersList: React.FC = () => {
  const data = ['var1', 'var2', 'var3', 'var4', 'var5', 'var6'];
  return (
    // TODO через styles нужно переписать MUI в кастомные фильтры, для соответствия дизайну
    // Vlad - кнопку унес в папку UI как CustomButton
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: 8 }}>
      <FilterDropper data={data} label="Дизайн" />
      <FilterDropper data={data} label="Дизайнер интерфейсов" />
      <FilterDropper data={data} label="Опыт работы" />
      <FilterDropper data={data} label="Сортировать по умолчанию" />
      <FilterDropper data={data} label="Город" />
      <FilterDropper data={data} label="Стэк" />
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', width: '100%' }}>
        <FilterToggle label="Удаленно" />
        <FilterToggle label="Офис" />
        <FilterToggle label="Гибрид" />
        <FilterToggle label="Релокация" />
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <CustomButton text={'Сбросить фильтры'} variant={'filled'} />
          <CustomButton text={'Применить фильтры'} variant={'filled'} />
        </div>
      </div>
    </div>
  );
};

export default FiltersList;
