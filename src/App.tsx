import './global.css';

import { lazy, Suspense, useEffect } from 'react';
import { Theme } from './settings/types';
import Navigation from './components/Navigation';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const LiveService = lazy(() => import('./pages/LiveService'));
const MinistryPage = lazy(() => import('./pages/MinistryPage'));
const EventDetailsPage = lazy(() => import('./pages/EventDetailsPage'));
const AllEventsPage = lazy(() => import('./pages/AllEventsPage'));

const theme: Theme = 'light';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <div className="app-container">
      <Navigation />
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/live-service" element={<LiveService />} />
            <Route path="/ministries/:id" element={<MinistryPage />} />
            <Route path="/events" element={<AllEventsPage />} />
            <Route path="/event-details/:id" element={<EventDetailsPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
