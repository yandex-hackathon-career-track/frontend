import { FC } from 'react';
import { Card, CardActions, Box, Typography, IconButton } from '@mui/material';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styles from './styles.module.css';
import { ProfileStackField } from '../ProfileStackField/ProfileStackField';
import { IApplicantMainInfo } from '../../../services/types/types';

const CandidatePreviewCard: FC<IApplicantMainInfo> = (data) => {
  const {
    first_name: name,
    last_name,
    direction: position,
    status: isAvailable,
    latest_graduation_date: graduated,
    total_experience: experience,
    stack,
    is_selected: isFavorite,
    updated_at: lastSeen,
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
              Опыт:<span>&nbsp;{experience}</span>
            </Typography>
            <FiberManualRecordIcon fontSize="small" sx={{ width: 4 }} />
            <Typography className={styles.text}>
              Дата окончания курсов: <span>&nbsp;{graduated}</span>
            </Typography>
          </Box>
          <ProfileStackField stack={stack} />
        </Box>
        <CardActions disableSpacing sx={{ alignItems: 'flex-end', padding: 0 }}>
          <IconButton aria-label="add to favorites" sx={{ padding: 0, color: '#1D6BF3' }} className={styles.favorite}>
            {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CandidatePreviewCard;
