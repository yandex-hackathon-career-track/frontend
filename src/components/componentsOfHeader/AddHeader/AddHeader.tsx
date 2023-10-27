import Grid from '@mui/material/Unstable_Grid2';
import SideNavBar from '../SideNavBar/SideNavBar';
import { IconButton } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';
<<<<<<< HEAD:src/components/AddHeader/AddHeader.tsx
import { useGetEmployerQuery } from '../../services/query/practicumApi';
import { useEffect } from 'react';
import { useDispatch } from '../../services/hooks';
import { setCompanyData } from '../../services/features/companySlice';

const AddHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { isFetching, data } = useGetEmployerQuery('');

  useEffect(() => {
    if (!isFetching && data) {
      dispatch(setCompanyData(data));
    }
  }, [data, dispatch, isFetching]);

  return (
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
        <div
          style={{
            overflowY: 'auto',
            height: 'calc(100vh - 60px)',
          }}
        >
          <Outlet />
        </div>
      </Grid>
=======
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
>>>>>>> develop:src/components/componentsOfHeader/AddHeader/AddHeader.tsx
    </Grid>
  );
};

export default AddHeader;
