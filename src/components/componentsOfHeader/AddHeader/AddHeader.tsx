import Grid from '@mui/material/Unstable_Grid2';
import SideNavBar from '../SideNavBar/SideNavBar';
import { IconButton } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';
import { Wrapper } from '../../Wrapper/Wrapper';

const AddHeader: React.FC = () => (
  <Grid container>
    <Grid xs={12}>
      <div className={styles.header}>
        <IconButton className={styles.icon} />
      </div>
    </Grid>
    <Grid>
      <SideNavBar />
    </Grid>
    <Grid xs={true}>
      <Wrapper isAuth>
        <Outlet />
      </Wrapper>
    </Grid>
  </Grid>
);

export default AddHeader;
