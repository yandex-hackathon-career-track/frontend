import { FC } from 'react';
import styles from './notFound.module.css';
import { useNavigate } from 'react-router-dom';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFound__title}>404</h1>
      <p className={styles.notFound__subtitle}>Страница не найдена</p>
      <button className={styles.notFound__link} onClick={onClick} type="button">
        Назад
      </button>
    </div>
  );
};
