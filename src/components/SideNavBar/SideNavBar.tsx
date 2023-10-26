import { FC, useCallback } from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import HeaderLinkElement from '../HeaderLinkElement.tsx/HeaderLinkElement';
import icon from '../../media/personal-info.svg';
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
    <AppBar
      position="static"
      style={{ maxWidth: '256px', minHeight: 'calc(100vh - 60px)', backgroundColor: '#1A1B22' }}
    >
      <Toolbar
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: '16px',
          justifyContent: 'space-between',

          height: 'calc(100vh - 60px)',
          padding: '24px 32px 50px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
          <HeaderLinkElement text="Мои вакансии" path="/vacancy" />
          <HeaderLinkElement text="Поиск специалистов" path="/candidates" />
          <HeaderLinkElement text="Отклики" path="#" />
          <HeaderLinkElement text="Избранные резюме" path="/favorite-candidates" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
          <Button
            variant="outlined"
            fullWidth
            style={{ minHeight: 50, fontSize: 16, textTransform: 'none', borderColor: '#fff', color: '#fff' }}
            sx={{ mb: 3 }}
          >
            Создать вакансию
          </Button>
          <>
            <HeaderLinkElement text="Компания" path="/profile">
              <IconButton
                style={{
                  backgroundImage: `url(${icon})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',

                  width: 24,
                  height: 24,

                  padding: 0,
                }}
              />{' '}
            </HeaderLinkElement>
          </>
          <Button onClick={handleLogOut}>Выйти</Button>
          <HeaderLinkElement text="Выйти" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SideNavBar;
