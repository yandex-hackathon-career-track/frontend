import Typography from '@mui/material/Typography/Typography';
import styles from './profile.module.css';
import { FC } from 'react';
import { Box, TextField } from '@mui/material';
import { Wrapper } from '../../components/Wrapper/Wrapper';

export const Profile: FC = () => {
  return (
    <Wrapper isAuth>
      <Typography variant="h1" fontSize={34} lineHeight={'normal'}>
        Компания
      </Typography>
      <Box component={'form'} className={styles.form}>
        <TextField disabled id="outlined-disabled" label="Наименование компании" defaultValue="ООО «ABC»" />
        <TextField disabled id="outlined-disabled" label="Локация" defaultValue="Москва" />
      </Box>
    </Wrapper>
  );
};
