import {
  Login,
  Register,
  Vacancy,
  Profile,
  Candidates,
  Favorite,
  NotFound,
  Main,
  ChangePassword,
} from '../../pages/index';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ProtectOfRoute from '../ProtectOfRoute/ProtectOfRoute';
import AddHeader from '../AddHeader/AddHeader';
import { ConfirmPassword } from '../../pages/ConfirmPassword/ConfirmPassword';
import { useEffect } from 'react';
import { getCookie } from '../../utils/cookie';

function App() {
  useEffect(() => {
    if (getCookie('access')) {
      console.log('have token');
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<ProtectOfRoute Element={Login} />} />
        <Route path="/register" element={<ProtectOfRoute Element={Register} />} />
        <Route path="/change-password" element={<ProtectOfRoute Element={ChangePassword} />} />
        <Route path="/confirm-password" element={<ProtectOfRoute Element={ConfirmPassword} />} />
        <Route path="/" element={<ProtectOfRoute Element={AddHeader} onlyLoggedIn />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="/favorite-candidates" element={<Favorite />} />
          <Route path="/candidates" element={<Candidates />} />
        </Route>
        <Route index element={<ProtectOfRoute Element={Main} onlyLoggedIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
