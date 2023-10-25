import { FC } from 'react';
import { AppBar, Toolbar, Button, Divider } from '@mui/material';
import HeaderLinkElement from '../HeaderLinkElement.tsx/HeaderLinkElement';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const SideNavBar: FC = () => {
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
          padding: '36px 12px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
          <HeaderLinkElement text="Мои вакансии" path="/vacancy">
            <WorkOutlineOutlinedIcon />
          </HeaderLinkElement>
          <Divider style={{ borderColor: 'rgba(121, 121, 129, 0.5)', borderWidth: '2px' }} />
          <HeaderLinkElement text="Поиск специалистов" path="/candidates">
            <SearchOutlinedIcon />
          </HeaderLinkElement>
          <Divider style={{ borderColor: 'rgba(121, 121, 129, 0.5)', borderWidth: '2px' }} />
          <HeaderLinkElement text="Избранные резюме" path="/favorite-candidates">
            <BookmarkBorderOutlinedIcon />
          </HeaderLinkElement>
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
          <HeaderLinkElement text="Компания" path="/profile">
            <PersonOutlineOutlinedIcon />
          </HeaderLinkElement>
          <HeaderLinkElement text="Поддержка" path="#">
            <SendOutlinedIcon />
          </HeaderLinkElement>
          <HeaderLinkElement text="Выйти">
            <LogoutOutlinedIcon />
          </HeaderLinkElement>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SideNavBar;

{
  /* <IconButton
    style={{
      backgroundImage: `url(${icon})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

      width: 24,
      height: 24,

      padding: 0,
    }}
  /> */
}
