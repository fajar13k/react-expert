import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Loading from './components/Loading';
import Navigation from './components/Layout/Navigation';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import AddThread from './pages/CreateThread';
import DetailPage from './pages/DetailPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import Footer from './components/Layout/Footer';

const App = () => {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div id="app-container" className="flex flex-col min-h-screen">
        <header id="app-header" className="border-b-2 border-gray-200">
          <Navigation authUser={authUser} signOut={onSignOut} />
        </header>
        <main id="app-main" className="flex-grow my-4 mx-4 max-w-[900px] lg:w-[900px] lg:mx-auto h-max">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddThread />} />
            <Route path="/threads/:id" element={<DetailPage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
          </Routes>
        </main>
        <footer id="app-footer" className="border-t-2 border-gray-200 flex justify-between px-8 py-4 group">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default App;
