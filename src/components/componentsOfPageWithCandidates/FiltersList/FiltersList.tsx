// import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import { Button } from '@mui/material';
import FilterToggle from '../FilterToggle/FilterToggle';
import FilterDropper from '../FilterDropped/FilterDropped';
import styles from './FiltersList.module.css';

const FiltersList: React.FC = () => {
  const data = ['var1', 'var2', 'var3', 'var4', 'var5', 'var6'];
  return (
    // TODO через styles нужно переписать MUI в кастомные фильтры, для соответствия дизайну
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
          <Button variant="contained" className={`${styles.font} ${styles.button}`}>
            Сбросить фильтры
          </Button>
          <Button variant="contained" className={`${styles.font} ${styles.button}`}>
            Применить фильтры
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FiltersList;

{
  /* <Grid2 container spacing={2} alignItems={'center'}>
        <Grid2 xs={3}>
          <CheckboxesTags />
        </Grid2>
        <Grid2 xs={3}>
          <CheckboxesTags />
        </Grid2>
        <Grid2 xs={3}>
          <CheckboxesTags />
        </Grid2>
        <Grid2 xs={3}>
          <CheckboxesTags />
        </Grid2>
        <Grid2 xs={3}>
          <CheckboxesTags />
        </Grid2>
        <Grid2 xs={3}>
          <CheckboxesTags />
        </Grid2>
        <Grid2>
          <FilterToggle label="Удаленно" />
        </Grid2>
        <Grid2>
          <FilterToggle label="Офис" />
        </Grid2>
        <Grid2>
          <FilterToggle label="Гибрид" />
        </Grid2>
        <Grid2>
          <FilterToggle label="Релокация" />
        </Grid2>
        <Grid2>
          <Button>Сброс фильтров</Button>
        </Grid2>
      </Grid2> */
}
