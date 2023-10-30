import {
  Login,
  Register,
  Vacancy,
  Profile,
  Candidates,
  Favorite,
  NotFound,
  ChangePassword,
  CreateVacancy,
  ConfirmPassword,
} from '../../pages/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ProtectOfRoute from '../ProtectOfRoute/ProtectOfRoute';
import AddHeader from '../componentsOfHeader/AddHeader/AddHeader';

function App() {
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
          <Route path="/create-vacancy" element={<CreateVacancy />} />
          <Route path="/favorite-candidates" element={<Favorite />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route index element={<Navigate to={'/candidates'} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
