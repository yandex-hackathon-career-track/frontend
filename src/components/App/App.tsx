import './App.css';
import React from 'react';
import Layout from '../Layout/Layout';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import ProtectOfRoute from '../ProtectOfRoute/ProtectOfRoute';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';
import PageWithAuth from '../pages/PageWithAuth/PageWithAuth';
import PageWithJobs from '../pages/PageWithJobs/PageWithJobs';
import PageWithCandidates from '../pages/PageWithCandidates/PageWithCandidates';

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
          <Route path="/signin" element={<ProtectOfRoute Element={PageWithAuth} />} />
          <Route path="/signup" element={<ProtectOfRoute Element={PageWithAuth} />} />
          <Route path="/" element={<AddHeader />}>
            <Route path="/profile" element={<ProtectOfRoute Element={Profile} onlyLoggedIn />} />
            <Route path="/jobs" element={<ProtectOfRoute Element={PageWithJobs} onlyLoggedIn />} />
            <Route path="/saved-candidates" element={<ProtectOfRoute Element={PageWithCandidates} onlyLoggedIn />} />
            <Route path="/candidates" element={<ProtectOfRoute Element={PageWithCandidates} onlyLoggedIn />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
