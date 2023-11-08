import { Typography } from '@mui/material';
import { IRespondsOfVacanci } from '../../../services/types/Interfaces';
import styles from './VacansyDetails.module.css';
import FiltersList from './FiltersList';
import TableOfCandidates from '../TableOfCandidates/TableOfCandidates';

interface IVacancyDetails {
  data: IRespondsOfVacanci;
  title: string;
}

const VacancyDetails: React.FC<IVacancyDetails> = ({ data, title }: IVacancyDetails) => {
  return (
    <section>
      <Typography className={styles.title} sx={{ mb: '24px' }}>{`Отклики на вакансию ${title}`}</Typography>
      <FiltersList data={data} />
      {/* TODO нужно прокидывать данные к конкретной вакансии */}
      <TableOfCandidates dataResponds={data} />
    </section>
  );
};

export default VacancyDetails;
