import { useState, useEffect } from 'react';
import FilterDropper from '../FilterDropped/FilterDropped';
import { CustomButton } from '../../CustomButton/CustomButton';
import { useDispatch, useSelector } from '../../../services/hooks';
import { getObjData, parseObjToStringForUrl as parse } from '../../../utils/utils';
import { useGetApplicantsMutation } from '../../../services/query/practicumApi';
import { setApplicants } from '../../../services/features/applicantsSlice';
import { IApplicantMainInfo } from '../../../services/types/types';

const FiltersList = () => {
  const dispatch = useDispatch();
  const [getApplicants, { data: applicantsNew, isLoading: isLoadingApplicants }] = useGetApplicantsMutation();
  const [directions, setDirections] = useState<string[]>([]);
  const [cources, setCources] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [stack, setStack] = useState<string[]>([]);
  const [workFormat, setWorkFormat] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const attributes = useSelector((store) => store.attributes);
  const reseAllFilters = () => {
    setDirections([]);
    setCources([]);
    setCities([]);
    setStack([]);
    setWorkFormat([]);
    setExperience([]);
  };

  const experienceData = [
    { id: 1, name: 'от 1 года' },
    { id: 2, name: 'от 2 лет' },
    { id: 3, name: 'от 3 лет' },
  ];

  const handleSubmitClick = () => {
    void getApplicants(
      [
        parse('stack', stack),
        parse('city', cities),
        parse('course', cources),
        parse('direction', directions),
        parse('work_format', workFormat),
        parse(
          'start_date_experience_min',
          experience.map((item) => item.match(/[1-3]/)![0]),
        ),
      ]
        .filter((item) => item !== '')
        .join('&'),
    );
  };

  useEffect(() => {
    if (!isLoadingApplicants && applicantsNew) {
      dispatch(setApplicants(applicantsNew as unknown as IApplicantMainInfo[]));
    }
  }, [applicantsNew, dispatch, isLoadingApplicants]);

  const data = ['var1', 'var2', 'var3', 'var4', 'var5', 'var6'];
  return (
    // TODO через styles нужно переписать MUI в кастомные фильтры, для соответствия дизайну
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: 8 }}>
      <FilterDropper
        data={getObjData(attributes.directions)}
        label="Направление"
        state={directions}
        setState={setDirections}
      />
      <FilterDropper data={getObjData(attributes.cources)} label="Курс" state={cources} setState={setCources} />
      <FilterDropper
        data={getObjData(experienceData)}
        label="Опыт работы"
        state={experience}
        setState={setExperience}
      />
      <FilterDropper data={data} label="Сортировать по умолчанию" />
      <FilterDropper data={getObjData(attributes.cities)} label="Город" state={cities} setState={setCities} />
      <FilterDropper data={getObjData(attributes.stack)} label="Стэк" state={stack} setState={setStack} />
      <FilterDropper
        data={getObjData(attributes.work_formats)}
        label="Формат работы"
        state={workFormat}
        setState={setWorkFormat}
      />
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          width: '100%',
          justifyContent: 'end',
        }}
      >
        <CustomButton text={'Сбросить фильтры'} variant={'filled'} onClick={reseAllFilters} />
        <CustomButton text={'Применить фильтры'} variant={'filled'} onClick={handleSubmitClick} />
      </div>
    </div>
  );
};

export default FiltersList;
