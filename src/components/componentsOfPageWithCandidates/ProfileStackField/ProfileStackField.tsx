import { FC } from 'react';
import { Typography, List, ListItem } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from './styles.module.css';

type Tstack = { id: number; name: string }[];

export const ProfileStackField: FC<{ stack: Tstack }> = ({ stack }: { stack: Tstack }) => {
  return (
    <List dense disablePadding sx={{ display: 'flex', columnGap: 1, flexWrap: 'wrap' }}>
      {stack.map((item, index) => (
        <ListItem disablePadding key={index} sx={{ width: 'auto' }}>
          {index !== 0 && <FiberManualRecordIcon fontSize="small" sx={{ width: 4 }} />}
          <Typography className={styles.text} sx={index !== 0 ? { marginLeft: 1 } : {}}>
            {item.name}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};
