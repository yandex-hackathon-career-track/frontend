import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import VacancyCardField from '../VacancyCardField/VacancyCardField';
import ButtonMenu from './ButtonMenu';
import { IdataCardVacancy } from '../../../services/types/Interfaces';
import styles from './VacancyCard.module.css';

interface IVacancyCard {
  data: IdataCardVacancy;
  isArchive: boolean;
}

const VacancyCard: React.FC<IVacancyCard> = ({ data, isArchive }: IVacancyCard) => {
  const { title, createDate, cntViews, cntFiltered, cntFeedback, cntResume } = data;
  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: 3,
        margin: 0,
        boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.20), 0px 8px 24px 0px rgba(176, 190, 197, 0.20)',
        boxSizing: 'border-box',
        borderRadius: '4px',
      }}
    >
      <Grid xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography className={styles.title}>{title}</Typography>
        {isArchive ? <></> : <ButtonMenu />}
      </Grid>

      <Grid xs={12}>
        <VacancyCardField title="Дата публикации" value={createDate} />
      </Grid>

      {isArchive ? (
        <></>
      ) : (
        <Grid xs={6}>
          <VacancyCardField title="Количество просмотров" value={cntViews} />
        </Grid>
      )}

      {isArchive ? (
        <></>
      ) : (
        <Grid xs={6}>
          <VacancyCardField title="Количество резюме" value={cntResume} />
        </Grid>
      )}

      <Grid xs={6}>
        <VacancyCardField title="Количество откликов" value={cntFeedback} />
      </Grid>

      <Grid xs={6}>
        {isArchive ? (
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end', height: '100%' }}>
            <Button className={styles['btn-to-return-active']}>Переместить в активные</Button>
          </div>
        ) : (
          <VacancyCardField title="Количество отобрано" value={cntFiltered} />
        )}
      </Grid>
    </Grid>
  );
};

export default VacancyCard;
