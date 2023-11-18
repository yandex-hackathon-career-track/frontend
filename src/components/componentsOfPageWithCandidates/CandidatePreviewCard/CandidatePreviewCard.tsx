import { FC } from 'react';
import { Card, CardActions, Box, Typography } from '@mui/material';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './styles.module.css';
import { ProfileStackField } from '../ProfileStackField/ProfileStackField';
import { IApplicantMainInfo } from '../../../helpers/tsTypes/types';

import BtnChangeIsSelected from '../BtnChangeIsSelected/BtnChangeIsSelected';

interface ICandidatePreviewCard extends IApplicantMainInfo {
  handleChangeIsFavorite?: (status: boolean, id: string) => void;
}

const CandidatePreviewCard: FC<ICandidatePreviewCard> = (data) => {
  const {
    first_name: name,
    last_name,
    direction: position,
    status: isAvailable,
    latest_graduation_date: graduated,
    total_experience: experience,
    stack,
    is_selected,
    updated_at: lastSeen,
    handleChangeIsFavorite = () => null,
  } = data;

  return (
    <Card className={styles.card}>
      <ProfileHeader
        name={`${name} ${last_name}`}
        position={position?.name || '-'}
        lastSeen={lastSeen}
        isAvailable={isAvailable.name}
      />
      <Box className={styles.container}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
            <Typography className={styles.text}>
              Опыт (мес):<span>&nbsp;{experience}</span>
            </Typography>
            <FiberManualRecordIcon fontSize="small" sx={{ width: 4 }} />
            <Typography className={styles.text}>
              Дата окончания курсов: <span>&nbsp;{graduated}</span>
            </Typography>
          </Box>
          <ProfileStackField stack={stack} />
        </Box>
        <CardActions disableSpacing sx={{ alignItems: 'flex-end', padding: 0 }}>
          <BtnChangeIsSelected is_selected={is_selected} id={data.id} handleChangeIsFavorite={handleChangeIsFavorite} />
        </CardActions>
      </Box>
    </Card>
  );
};

export default CandidatePreviewCard;
