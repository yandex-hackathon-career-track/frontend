import { FC } from 'react';
import { Card, CardActions, Box, Typography, IconButton } from '@mui/material';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';
import { ICandidate } from '../../services/types/Interfaces';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styles from './styles.module.css';
import { ProfileStackField } from '../ProfileStackField/ProfileStackField';

interface ICandidatePreviewCard extends ICandidate {
  handlePreview: (arg0: ICandidatePreviewCard) => void;
}

const CandidatePreviewCard: FC<ICandidatePreviewCard> = (data) => {
  const { name, position, isAvailable, graduated, experience, stack, isFavorite, lastSeen, handlePreview } = data;
  const handleClick = () => {
    handlePreview(data);
  };

  return (
    <li onClick={handleClick}>
      <Card className={styles.card}>
        <ProfileHeader name={name} position={position} lastSeen={lastSeen} isAvailable={isAvailable} />
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
            <IconButton aria-label="add to favorites" sx={{ padding: 0, color: '#1D6BF3' }}>
              {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </li>
  );
};

export default CandidatePreviewCard;
