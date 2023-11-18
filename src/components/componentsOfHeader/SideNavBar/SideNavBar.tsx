import { FC, useCallback } from 'react';
import { AppBar, Toolbar, Button, Divider } from '@mui/material';
import HeaderLinkElement from '../HeaderLinkElement/HeaderLinkElement';
import { useDispatch } from '../../../redux/reduxHooks';
import { logOut } from '../../../redux/slices/userSlice';
import { BookmarkIcon, ExitIcon, PersonalInfoIcon, SearchIcon, SuitCaseIcon, TgIcon } from '../../../media/icons/index';
import styles from './SideNavBar.module.css';
import { Link } from 'react-router-dom';

const SideNavBar: FC = () => {
  const dispatch = useDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <AppBar position="static" className={styles.appbar}>
      <Toolbar className={styles.toolbar}>
        <div className={styles.container}>
          <HeaderLinkElement text="Мои вакансии" path="/vacancy" Icon={SuitCaseIcon} />
          <Divider style={{ borderColor: 'rgba(121, 121, 129, 0.5)', borderWidth: '1px' }} />
          <HeaderLinkElement text="Поиск специалистов" path="/candidates" Icon={SearchIcon} />
          <Divider style={{ borderColor: 'rgba(121, 121, 129, 0.5)', borderWidth: '1px' }} />
          <HeaderLinkElement text="Избранные резюме" path="/favorite-candidates" Icon={BookmarkIcon} />
        </div>

        <div className={styles.container}>
          <Link to={'/create-vacancy'} className={styles.link}>
            <Button variant="outlined" className={styles['button-vacancy-create']} fullWidth>
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
