import React from 'react';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import VacancyCardField from '../VacancyCardField/VacancyCardField';
import ButtonMenu from './ButtonMenu';
import { IVacanci } from '../../../helpers/tsTypes/Interfaces';
import styles from './VacancyCard.module.css';
import { useUpdVacanciToIdMutation } from '../../../api/apiOnRTKQ';

interface IVacancyCard {
  data: IVacanci;
  isArchivePage: boolean;
  handleChangeStatus: (newData: IVacanci) => void;
}

const VacancyCard: React.FC<IVacancyCard> = ({ data, isArchivePage, handleChangeStatus }: IVacancyCard) => {
  const [updVacanciToIdMutation, { data: newData }] = useUpdVacanciToIdMutation();
  const {
    title,
    created_at: createDate,
    views_qty: cntViews,
    chosen_resume_qty: cntFiltered,
    responds_qty: cntFeedback,
    total_resume_qty: cntResume,
  } = data;

  const toggleVacanciStatus = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    void updVacanciToIdMutation({ id: data.id, parametrs: { is_published: true } });
  };

  React.useEffect(() => {
    if (newData) {
      handleChangeStatus(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData]);

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
        // maxWidth: '500px',
      }}
    >
      <Grid xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography className={styles.title}>{title}</Typography>
        {isArchivePage ? <></> : <ButtonMenu data={data} handleChangeStatus={handleChangeStatus} />}
      </Grid>

      <Grid xs={12}>
        <VacancyCardField title="Дата публикации" value={createDate} />
      </Grid>

      {isArchivePage ? (
        <></>
      ) : (
        <Grid xs={6}>
          <VacancyCardField title="Количество просмотров" value={cntViews} />
        </Grid>
      )}

      {isArchivePage ? (
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
        {isArchivePage ? (
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end', height: '100%' }}>
            <Button className={styles['btn-to-return-active']} onClick={toggleVacanciStatus}>
              Переместить в активные
            </Button>
          </div>
        ) : (
          <VacancyCardField title="Количество отобрано" value={cntFiltered} />
        )}
      </Grid>
    </Grid>
  );
};

export default VacancyCard;
