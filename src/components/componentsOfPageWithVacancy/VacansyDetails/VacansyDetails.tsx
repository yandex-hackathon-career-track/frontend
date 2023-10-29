import { Typography } from '@mui/material';
import { IdataDetailsCardVacancy } from '../../../services/types/Interfaces';
import styles from './VacansyDetails.module.css';
import FiltersList from './FiltersList';
import TableOfCandidates from '../TableOfCandidates/TableOfCandidates';

interface IVacancyDetails {
  data: IdataDetailsCardVacancy;
}

const VacancyDetails: React.FC<IVacancyDetails> = ({ data }: IVacancyDetails) => {
  const { title } = data;
  return (
    <section>
      <Typography className={styles.title} sx={{ mb: '24px' }}>{`Отклики на вакансию ${title}`}</Typography>
      <FiltersList data={data} />
      {/* TODO нужно прокидывать данные к конкретной вакансии */}
      <TableOfCandidates />
    </section>
  );
};

export default VacancyDetails;
