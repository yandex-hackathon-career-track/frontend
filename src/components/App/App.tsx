import React from 'react';
import { Login, Register, Vacancy, Profile, Candidates, Favorite, NotFound, Main } from '../../pages/index';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Header from '../Header/Header';
import ProtectOfRoute from '../ProtectOfRoute/ProtectOfRoute';
import AddHeader from '../AddHeader/AddHeader';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<ProtectOfRoute Element={Login} />} />
        <Route path="/register" element={<ProtectOfRoute Element={Register} />} />
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
