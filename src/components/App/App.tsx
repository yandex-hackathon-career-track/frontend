import './App.css';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import ProtectOfRoute from '../ProtectOfRoute/ProtectOfRoute';
import NotFound from '../pagesOfRouting/NotFound/NotFound';
import Profile from '../pagesOfRouting/Profile/Profile';
import Login from '../pagesOfRouting/Login/Login';
import Registration from '../pagesOfRouting/Registration/Registration';
import Vacancy from '../pagesOfRouting/Vacancy/Vacancy';
import FavoriteCandidates from '../pagesOfRouting/FavoriteCandidates/FavoriteCandidates';
import AllCandidates from '../pagesOfRouting/AllCandidates/AllCandidates';
import { CssBaseline } from '@mui/material';
import Main from '../pagesOfRouting/Main/Main';

function App() {
  const AddHeader = React.memo(() => (
    <>
      <Header />
      <Outlet />
    </>
  ));
  AddHeader.displayName = 'AddHeader';

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/signin" element={<ProtectOfRoute Element={Login} />} />
        <Route path="/signup" element={<ProtectOfRoute Element={Registration} />} />
        <Route path="/" element={<ProtectOfRoute Element={AddHeader} onlyLoggedIn />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="/favorite-candidates" element={<FavoriteCandidates />} />
          <Route path="/candidates" element={<AllCandidates />} />
        </Route>
        <Route index element={<ProtectOfRoute Element={Main} onlyLoggedIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
