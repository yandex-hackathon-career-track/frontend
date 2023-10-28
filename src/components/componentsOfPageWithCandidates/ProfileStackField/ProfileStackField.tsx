import { FC } from 'react';
import { Typography, List, ListItem } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ICandidate } from '../../../services/types/Interfaces';
import styles from './styles.module.css';

export const ProfileStackField: FC<ICandidate> = ({ stack }) => {
  return (
    <List dense disablePadding sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {stack?.map((item, index) => (
        <ListItem disablePadding key={index} sx={{ width: 'auto' }}>
          {index !== 0 && <FiberManualRecordIcon fontSize="small" sx={{ width: 4 }} />}
          <Typography className={styles.text} sx={index !== 0 ? { marginLeft: 1 } : {}}>
            {item}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};
