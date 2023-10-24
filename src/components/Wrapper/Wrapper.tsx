import bg from '../../media/BG.png';
import styles from './wrapper.module.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FC, PropsWithChildren } from 'react';

interface IWrapper {
  heading?: string;
}

export const Wrapper: FC<PropsWithChildren<IWrapper>> = ({ children, heading }) => {
  return (
    <Container maxWidth={false} className={styles.container} sx={{ backgroundImage: `url(${bg})` }}>
      <Container maxWidth={false} className={styles.wrapper} style={{ padding: 0 }}>
        <Typography component="h1" color={'#fff'} fontSize={'32px'} sx={{ mb: '20px' }}>
          {heading}
        </Typography>
        {children}
      </Container>
    </Container>
  );
};
