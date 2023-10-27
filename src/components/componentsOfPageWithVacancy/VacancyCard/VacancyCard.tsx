import { Button, Card, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import VacancyCardField from '../VacancyCardField/VacancyCardField';
import styles from './VacancyCard.module.css';
import ButtonMenu from './ButtonMenu';
import { IdataCardVacancy } from '../../../services/types/Interfaces';
import { Box } from '@mui/system';

interface IVacancyCard {
  data: IdataCardVacancy;
  isArchive: boolean;
}

const VacancyCard: React.FC<IVacancyCard> = ({ data, isArchive }: IVacancyCard) => {
  const { title, createDate, cntViews, cntFiltered, cntFeedback, cntResume } = data;
  return (
    <Card
      sx={{
        p: '20px 24px',
        maxWidth: '534px',
        boxShadow: ' 0px 4px 6px 0px rgba(176, 190, 197, 0.20), 0px 8px 24px 0px rgba(176, 190, 197, 0.20)',
        bgcolor: 'inherit',
      }}
    >
      <Grid container spacing={2}>
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
            <Button>Переместить в активные</Button>
          ) : (
            <VacancyCardField title="Количество отобрано" value={cntFiltered} />
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default VacancyCard;
