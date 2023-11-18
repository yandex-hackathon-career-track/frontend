import { useState, useEffect } from 'react';
import FilterDropper from '../FilterDropped/FilterDropped';
import { CustomButton } from '../../CustomButton/CustomButton';
import { useDispatch, useSelector } from '../../../redux/reduxHooks';
import { getObjData, parseObjToStringForUrl as parse } from '../../../helpers/utils';
import { useGetApplicantsMutation } from '../../../api/apiOnRTKQ';
import { setApplicants } from '../../../redux/slices/applicantsSlice';
import { IApplicantMainInfo } from '../../../helpers/tsTypes/types';

const FiltersList = () => {
  const dispatch = useDispatch();
  const [getApplicants, { data: applicantsNew, isLoading: isLoadingApplicants }] = useGetApplicantsMutation();
  const [directions, setDirections] = useState<string[]>([]);
  const [cources, setCources] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [stack, setStack] = useState<string[]>([]);
  const [workFormat, setWorkFormat] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [sortedBy, setSortedBy] = useState<string[]>([]);
  const attributes = useSelector((store) => store.attributes);
  const reseAllFilters = () => {
    setDirections([]);
    setCources([]);
    setCities([]);
    setStack([]);
    setWorkFormat([]);
    setExperience([]);
    setSortedBy([]);
  };

  const experienceData = [
    { id: 1, name: 'от 1 года' },
    { id: 2, name: 'от 2 лет' },
    { id: 3, name: 'от 3 лет' },
  ];

  const sortedByFilters = [
    { id: 1, name: 'дате окончания курса' },
    { id: 2, name: 'дате создания резюме' },
    { id: 3, name: 'дате обновления' },
  ];

  const getValSortedBy = () => {
    const val = sortedBy[0];
    if (val === 'дате окончания курса') {
      return '-graduation_date';
    } else if (val === 'дате создания резюме') {
      return '-created_at';
    } else {
      return '-updated_at';
    }
  };

  const handleSubmitClick = () => {
    const data = [
      parse('stack', stack),
      parse('city', cities),
      parse('course', cources),
      parse('direction', directions),
      parse('work_format', workFormat),
      parse(
        'start_date_experience_min',
        experience.map((item) => item.match(/[1-3]/)![0]),
      ),
      parse('order_by', [getValSortedBy()]),
    ]
      .filter((item) => item !== '')
      .join('&');
    void getApplicants(data);
  };

  useEffect(() => {
    if (!isLoadingApplicants && applicantsNew) {
      dispatch(setApplicants(applicantsNew as unknown as IApplicantMainInfo[]));
    }
  }, [applicantsNew, dispatch, isLoadingApplicants]);

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
        multy={false}
      />
      <FilterDropper data={getObjData(attributes.cities)} label="Город" state={cities} setState={setCities} />
      <FilterDropper
        data={getObjData(attributes.work_formats)}
        label="Формат работы"
        state={workFormat}
        setState={setWorkFormat}
      />
      <FilterDropper
        data={getObjData(sortedByFilters)}
        label="Сортировать по..."
        state={sortedBy}
        setState={setSortedBy}
        multy={false}
      />
      <FilterDropper data={getObjData(attributes.stack)} label="Стэк" state={stack} setState={setStack} />
      <CustomButton text={'Сбросить фильтры'} variant={'filled'} onClick={reseAllFilters} />
      <CustomButton text={'Применить фильтры'} variant={'filled'} onClick={handleSubmitClick} />
    </div>
  );
};

export default FiltersList;
