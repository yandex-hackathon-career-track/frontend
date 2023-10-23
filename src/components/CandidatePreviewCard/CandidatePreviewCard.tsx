import { FC } from 'react';
import { Card, CardHeader, CardContent, CardActions, Box, Typography, IconButton, List, ListItem } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styles from './styles.module.css';

interface ICandidatePreviewCard {
  name?: string;
  isAvailable?: boolean;
  isFavorite?: boolean;
  position?: string;
  graduated?: string;
  experience?: number;
  stack?: Array<string>;
}

const CandidatePreviewCard: FC<ICandidatePreviewCard> = ({
  name,
  position,
  isAvailable,
  graduated,
  experience,
  stack,
  isFavorite,
}) => {
  return (
    <Card className={styles.card}>
      <Box>
        <CardHeader title={name} subheader={position} sx={{ paddingBottom: 1 }} />
        <CardContent sx={{ paddingTop: 0 }}>
          <Typography variant="body2">{`Дата окончания курсов: ${graduated}`}</Typography>
          <Typography variant="body2">{`${experience} года опыта`}</Typography>
          <List dense disablePadding sx={{ display: 'flex', gap: 1 }}>
            {stack?.map((item, index) => (
              <ListItem disablePadding key={index} sx={{ width: 'auto' }}>
                <FiberManualRecordIcon fontSize="small" sx={{ width: 10 }} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Box>
      <Box className={styles.box}>
        <Box display={'flex'} sx={isAvailable ? { color: '#5A9BFF' } : { color: '#B5B5B7' }}>
          <FiberManualRecordIcon fontSize="small" sx={{ width: 15 }} />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            В поиске
          </Typography>
        </Box>
        <CardActions disableSpacing sx={{ alignItems: 'flex-start', justifyContent: 'flex-end', padding: 0 }}>
          <IconButton aria-label="add to favorites" sx={{ padding: 0, color: '#1D6BF3' }}>
            {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CandidatePreviewCard;
