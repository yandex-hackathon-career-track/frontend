import { FC } from 'react';
import { Card, CardActions, Box, Typography, IconButton, List, ListItem } from '@mui/material';
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body1">{position}</Typography>
        </Box>
        <Typography variant="body2">Сегодня</Typography>
        <Box display={'flex'} sx={isAvailable ? { color: '#5A9BFF' } : { color: '#B5B5B7' }}>
          <FiberManualRecordIcon fontSize="small" sx={{ width: 15 }} />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            В поиске
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
            <Typography variant="body2">{`Опыт: ${experience} года`}</Typography>
            <FiberManualRecordIcon fontSize="small" sx={{ width: 10 }} />
            <Typography variant="body2">{`Дата окончания курсов: ${graduated}`}</Typography>
          </Box>
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
        </Box>
        <CardActions disableSpacing sx={{ alignItems: 'flex-end', padding: 0 }}>
          <IconButton aria-label="add to favorites" sx={{ padding: 0, color: '#1D6BF3' }}>
            {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CandidatePreviewCard;
