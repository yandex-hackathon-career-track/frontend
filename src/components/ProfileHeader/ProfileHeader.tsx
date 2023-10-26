import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './styles.module.css';

interface IProfileHeader {
  name?: string;
  isAvailable?: boolean;
  lastSeen?: string;
  position?: string;
}

export const ProfileHeader: FC<IProfileHeader> = ({ name, position, lastSeen, isAvailable }) => {
  return (
    <>
      <Box className={styles.container}>
        <Typography className={styles.name}>{name}</Typography>
        <Typography className={styles.lastSeen}>{lastSeen}</Typography>
        <Box display={'flex'} sx={isAvailable ? { color: '#5A9BFF' } : { color: '#B5B5B7' }}>
          <FiberManualRecordIcon fontSize="small" sx={{ width: 8 }} />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {isAvailable ? 'В поиске' : 'Не ищу работу'}
          </Typography>
        </Box>
      </Box>
      <Typography className={styles.position}>{position}</Typography>
    </>
  );
};
