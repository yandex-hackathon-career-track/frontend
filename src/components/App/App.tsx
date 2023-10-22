import './App.css';
import React from 'react';
import Layout from '../Layout/Layout';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import ProtectOfRoute from '../ProtectOfRoute/ProtectOfRoute';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import Vacancy from '../pages/Vacancy/Vacancy';
import FavoriteCandidates from '../pages/FavoriteCandidates/FavoriteCandidates';
import AllCandidates from '../pages/AllCandidates/AllCandidates';

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
      <Layout>
        <Routes>
          <Route path="/signin" element={<ProtectOfRoute Element={Login} />} />
          <Route path="/signup" element={<ProtectOfRoute Element={Registration} />} />
          <Route path="/" element={<ProtectOfRoute Element={AddHeader} onlyLoggedIn />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/vacancy" element={<Vacancy />} />
            <Route path="/favorite-candidates" element={<FavoriteCandidates />} />
            <Route path="/candidates" element={<AllCandidates />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
