import { ICandidate } from '../../../services/types/Interfaces';
import styles from './ButtonPopupTable.module.css';
import BtnInTable from './BtnInTable';
import { Link } from 'react-router-dom';

export const parametrs = {
  name: 'Параметры',
  position: 'Специализация',
  experience: 'Опыт работы',
  courses: 'Пройденные курсы',
  education: 'Образование',
  stack: 'Стек/Навыки',
  jobFormat: 'Формат работы',
  city: 'Город',
  portfolio: 'Ссылка на портфолио',
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

export const getCellContent = (prop: string, row: ICandidate, handleClick: (val: ICandidate) => void) => {
  if (prop === 'portfolio') {
    return row[prop]?.map((el, i) => (
      <Link to={el.link} key={i} className={styles.link}>
        {el.link}
      </Link>
    ));
  } else if (prop === 'buttons') {
    return (
      <div style={{ display: 'flex', gap: '12px' }}>
        <BtnInTable variant="contained" text="Cвязаться" onClick={() => null} />
        <BtnInTable variant="outlined" text="Удалить" onClick={() => handleClick(row)} />
      </div>
    );
  } else {
    return Array.isArray((row as unknown as Record<string, string | string[]>)[prop])
      ? (row as unknown as Record<string, string[]>)[prop].join(', ') || '-'
      : (row as unknown as Record<string, string>)[prop] || '-';
  }
};
