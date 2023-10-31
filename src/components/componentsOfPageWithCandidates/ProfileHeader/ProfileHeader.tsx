import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './styles.module.css';

interface IProfileHeader {
  name?: string;
  isAvailable?: string;
  lastSeen?: string;
  position?: string;
}

export const ProfileHeader: FC<IProfileHeader> = ({ name, position, lastSeen, isAvailable }) => {
  const style = {
    color: isAvailable === 'Ищу работу' ? '#5A9BFF' : '#B5B5B7',
    // ширина поля с "не ищу работу"
    minWidth: '114px',
    justifyContent: 'end',
    textAlign: 'right',
  };
  return (
    <>
      <Box className={styles.container}>
        <Typography className={styles.name}>{name}</Typography>
        <Typography className={styles.lastSeen}>{lastSeen}</Typography>
        <Box display={'flex'} sx={style}>
          <FiberManualRecordIcon fontSize="small" sx={{ width: '8px', height: '18px' }} />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {isAvailable}
          </Typography>
        </Box>
      </Box>
      <Typography className={styles.position}>{position}</Typography>
    </>
  );
};
