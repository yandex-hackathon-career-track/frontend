import { FC } from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Импортируем Link из React Router

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', gap: '20px', justifyContent: 'end' }}>
        <Typography variant="h6">
          <Link component={RouterLink} to="/candidates" color="inherit" underline="none">
            все кандидаты
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link component={RouterLink} to="/favorite-candidates" color="inherit" underline="none">
            сохраненные кандидаты
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link component={RouterLink} to="/vacancy" color="inherit" underline="none">
            вакансии
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link component={RouterLink} to="/profile" color="inherit" underline="none">
            профиль
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
