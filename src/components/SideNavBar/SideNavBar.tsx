import { FC, useCallback } from 'react';
import { AppBar, Toolbar, Button, Divider } from '@mui/material';
import HeaderLinkElement from '../HeaderLinkElement.tsx/HeaderLinkElement';
import icons from './iconImports';
import { useDispatch } from '../../services/hooks';
import { logOut } from '../../services/features/userSlice';
import { useNavigate } from 'react-router-dom';

const SideNavBar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
    navigate('/');
  }, [dispatch, navigate]);

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
          <HeaderLinkElement
            text="Мои вакансии"
            path="/vacancy"
            iconDef={icons.suitCase}
            iconActive={icons.suitCaseActive}
          />
          <Divider style={{ borderColor: 'rgba(121, 121, 129, 0.5)', borderWidth: '1px' }} />
          <HeaderLinkElement
            text="Поиск специалистов"
            path="/candidates"
            iconDef={icons.search}
            iconActive={icons.searchActive}
          />
          <Divider style={{ borderColor: 'rgba(121, 121, 129, 0.5)', borderWidth: '1px' }} />
          <HeaderLinkElement
            text="Избранные резюме"
            path="/favorite-candidates"
            iconDef={icons.bookmark}
            iconActive={icons.bookmarkActive}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
          <Button
            variant="outlined"
            style={{
              minHeight: 50,
              fontSize: 16,
              textTransform: 'none',
              borderColor: '#fff',
              color: '#fff',
            }}
            sx={{ m: '0 12px 40px' }}
          >
            Создать вакансию
          </Button>
          <HeaderLinkElement
            text="Компания"
            path="/profile"
            iconDef={icons.profile}
            iconActive={icons.profileActive}
            grey
          />
          <HeaderLinkElement text="Поддержка" path="#" iconDef={icons.tg} iconActive={icons.tgActive} grey />
          <HeaderLinkElement text="Выйти" iconDef={icons.exit} grey onClick={handleLogOut} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SideNavBar;
