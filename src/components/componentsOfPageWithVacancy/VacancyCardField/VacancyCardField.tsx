import { Typography } from '@mui/material';
import styles from './VacancyCardField.module.css';

interface IVacancyCardField {
  title: string;
  value: string | number;
}

const VacancyCardField: React.FC<IVacancyCardField> = ({ title, value }: IVacancyCardField) => {
  return (
    <div style={{ textAlign: 'left' }}>
      <Typography className={styles.title}>{title}</Typography>
      <Typography className={styles.value}>{value}</Typography>
    </div>
  );
};

export default VacancyCardField;
