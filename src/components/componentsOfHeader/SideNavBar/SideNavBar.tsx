import { FC, useCallback } from 'react';
import { AppBar, Toolbar, Button, Divider } from '@mui/material';
import HeaderLinkElement from '../HeaderLinkElement/HeaderLinkElement';
import { useDispatch } from '../../../services/hooks';
import { logOut } from '../../../services/features/userSlice';
import { BookmarkIcon, ExitIcon, PersonalInfoIcon, SearchIcon, SuitCaseIcon, TgIcon } from '../../../media/icons/index';
import styles from './SideNavBar.module.css';
import { Link } from 'react-router-dom';

const SideNavBar: FC = () => {
  const dispatch = useDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <AppBar position="static" style={{ width: '256px', minHeight: 'calc(100vh - 60px)', backgroundColor: '#1A1B22' }}>
      <Toolbar
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: '16px',
          justifyContent: 'space-between',

          height: 'calc(100vh - 60px)',
          padding: '36px 12px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '23px', width: '100%' }}>
          <HeaderLinkElement text="Мои вакансии" path="/vacancy" Icon={SuitCaseIcon} />
          <Divider style={{ borderColor: 'rgba(121, 121, 129, 0.5)', borderWidth: '1px' }} />
          <HeaderLinkElement text="Поиск специалистов" path="/candidates" Icon={SearchIcon} />
          <Divider style={{ borderColor: 'rgba(121, 121, 129, 0.5)', borderWidth: '1px' }} />
          <HeaderLinkElement text="Избранные резюме" path="/favorite-candidates" Icon={BookmarkIcon} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
          <Link to={'/create-vacancy'} className={styles.link}>
            <Button variant="outlined" className={styles['button-vacancy-create']}>
              Создать вакансию
            </Button>
          </Link>
          <HeaderLinkElement text="Компания" path="/profile" Icon={PersonalInfoIcon} grey />
          <HeaderLinkElement text="Поддержка" Icon={TgIcon} path="https://t.me/Frich22" grey blank={'_blank'} />
          <HeaderLinkElement text="Выйти" Icon={ExitIcon} path="/login" grey onClick={handleLogOut} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SideNavBar;
