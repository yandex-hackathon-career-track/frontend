/* eslint-disable prettier/prettier */
import styles from './ButtonPopupTable.module.css';
import BtnInTable from './BtnInTable';
import { Link } from 'react-router-dom';
import { IApplicantsToDetail } from '../../../services/types/types';

export const parametrs = {
  name: 'Параметры',
  direction: 'Специализация',
  total_experience: 'Опыт работы',
  applicant_courses: 'Пройденные курсы',
  educations: 'Образование',
  stack: 'Стек/Навыки',
  work_format: 'Формат работы',
  city: 'Город',
  portfolio_links: 'Ссылка на портфолио',
  buttons: '',
};

export const getCellClass = (prop: string) => {
  let className = 'other-cell';
  if (prop === 'name') {
    className = 'header-cell';
  } else if (prop === 'buttons') {
    className = 'btn-cell';
  } else if (prop === 'portfolio') {
    className = 'portfolio-cell';
  }
  return styles[className];
};

export const getCellContent = (
  prop: string,
  row: IApplicantsToDetail,
  handleClick: (val: IApplicantsToDetail) => void,
) => {
  if (prop === 'portfolio_links') {
    return row[prop]?.map((el, i) => (
      <Link to={el.link} key={i} className={styles.link}>
        {el.link}
      </Link>
    ));
  } else if (prop === 'buttons') {
    return (
      <div style={{ display: 'flex', gap: '12px' }}>
        <Link to={'https://t.me/' + row.contact.telegram.slice(1)} target='_blank'>
          <BtnInTable variant="contained" text="Cвязаться" onClick={() => null} />
        </Link>
        <BtnInTable variant="outlined" text="Удалить" onClick={() => handleClick(row)} />
      </div>
    );
  } else if (prop === 'name') {
    return `${row.first_name} ${row.last_name}`;
  } else if (prop === 'applicant_courses') {
    return row['applicant_courses'].map((item) => item.course).join(', ') || '-';
  } else {
    return Array.isArray((row as unknown as Record<string, string>)[prop])
      ? (row as unknown as Record<string, { name: string }[]>)[prop].map((item) => item.name).join(', ') || '-'
      : (row as unknown as Record<string, { name: string }>)[prop]?.name ||
      (row as unknown as Record<string, string>)[prop] ||
      '-';
  }
};
