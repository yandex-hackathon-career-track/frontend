import Grid from '@mui/material/Unstable_Grid2';
import SideNavBar from '../SideNavBar/SideNavBar';
import Loader from '../../Loader/Loader';
import { IconButton } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useGetAllAttributesQuery, useGetEmployerQuery } from '../../../api/apiOnRTKQ';
import { useEffect } from 'react';
import { useDispatch } from '../../../redux/reduxHooks';
import { setCompanyData } from '../../../redux/slices/companySlice';
import { Wrapper } from '../../Wrapper/Wrapper';
import { setAllAttributes } from '../../../redux/slices/attributesSlice';
import { Popup } from '../../Popup/Popup';
import { ERROR_TEXT } from '../../../helpers/constants';
import styles from './AddHeader.module.css';

const AddHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { isFetching, isError, data } = useGetEmployerQuery('');
  const { data: allAttributes, isLoading: isLoadingAllAttributes } = useGetAllAttributesQuery(null);

  useEffect(() => {
    if (!isFetching && data) {
      dispatch(setCompanyData(data));
    }
  }, [data, dispatch, isFetching]);

  useEffect(() => {
    if (!isLoadingAllAttributes && allAttributes) {
      dispatch(setAllAttributes(allAttributes));
    }
  }, [allAttributes, dispatch, isLoadingAllAttributes]);

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
        <Wrapper isAuth>
          {isFetching || isLoadingAllAttributes ? (
            <Loader />
          ) : (
            <>
              <Outlet />
              {isError && <Popup type="error" text={`${ERROR_TEXT.onConnectionError}`} />}
            </>
          )}
        </Wrapper>
      </Grid>
    </Grid>
  );
};

export default AddHeader;
