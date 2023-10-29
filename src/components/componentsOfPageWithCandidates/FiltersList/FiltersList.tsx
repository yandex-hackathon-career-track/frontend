import { useState } from 'react';
import FilterToggle from '../FilterToggle/FilterToggle';
import FilterDropper from '../FilterDropped/FilterDropped';
import { CustomButton } from '../../../UI/CustomButton/CustomButton';
import { useSelector } from '../../../services/hooks';

const FiltersList: React.FC = () => {
  const attributes = useSelector((store) => store.attributes);
  const [directions, setDirections] = useState<string[]>([]);
  const [cources, setCources] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [stack, setStack] = useState<string[]>([]);

  const reseAllFilters = () => {
    setDirections([]);
    setCources([]);
    setCities([]);
    setStack([]);
  };

  const getObjData = (ar: { id: number; name: string }[]) => {
    return ar.map((item) => item.name);
  };

  const data = ['var1', 'var2', 'var3', 'var4', 'var5', 'var6'];
  return (
    // TODO через styles нужно переписать MUI в кастомные фильтры, для соответствия дизайну
    // Vlad - кнопку унес в папку UI как CustomButton
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: 8 }}>
      <FilterDropper
        data={getObjData(attributes.directions)}
        label="Направление"
        state={directions}
        setState={setDirections}
      />
      <FilterDropper data={getObjData(attributes.cources)} label="Курс" state={cources} setState={setCources} />
      <FilterDropper data={data} label="Опыт работы" />
      <FilterDropper data={data} label="Сортировать по умолчанию" />
      <FilterDropper data={getObjData(attributes.cities)} label="Город" state={cities} setState={setCities} />
      <FilterDropper data={getObjData(attributes.stack)} label="Стэк" state={stack} setState={setStack} />
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', width: '100%' }}>
        {attributes.work_formats.map((item) => (
          <FilterToggle label={item.name} key={item.id} />
        ))}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <CustomButton text={'Сбросить фильтры'} variant={'filled'} onClick={reseAllFilters} />
          <CustomButton text={'Применить фильтры'} variant={'filled'} />
        </div>
      </div>
    </div>
  );
};

export default FiltersList;
