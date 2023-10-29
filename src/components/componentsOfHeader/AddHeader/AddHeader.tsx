import Grid from '@mui/material/Unstable_Grid2';
import SideNavBar from '../SideNavBar/SideNavBar';
import { IconButton } from '@mui/material';
import { Outlet } from 'react-router-dom';
import {
  useGetAllAttributesQuery,
  useGetApplicantsQuery,
  useGetEmployerQuery,
} from '../../../services/query/practicumApi';
import { useEffect } from 'react';
import { useDispatch } from '../../../services/hooks';
import { setCompanyData } from '../../../services/features/companySlice';
import { Wrapper } from '../../Wrapper/Wrapper';
import styles from './styles.module.css';
import { setAllAttributes } from '../../../services/features/attributesSlice';
import { setApplicants } from '../../../services/features/applicantsSlice';
import { IApplicantMainInfo } from '../../../services/types/types';

const AddHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { isFetching, data } = useGetEmployerQuery('');
  const { data: allAttributes, isLoading: isLoadingAllAttributes } = useGetAllAttributesQuery(null);
  const { data: applicants, isLoading: isLoadingApplicants } = useGetApplicantsQuery(null);

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

  useEffect(() => {
    if (!isLoadingApplicants && applicants) {
      dispatch(setApplicants(applicants as unknown as IApplicantMainInfo[]));
    }
  }, [applicants, dispatch, isLoadingApplicants]);

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
          {isFetching || isLoadingAllAttributes || isLoadingApplicants ? (
            <div>Загрузка...</div>
          ) : (
            <>
              <Outlet />
            </>
          )}
        </Wrapper>
      </Grid>
    </Grid>
  );
};

export default AddHeader;
