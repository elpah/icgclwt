import './global.css';

import { lazy, Suspense, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { Theme } from './settings/types';
import Navigation from './components/Navigation';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const LiveService = lazy(() => import('./pages/LiveService'));
const MinistryPage = lazy(() => import('./pages/MinistryPage'));
const EventDetailsPage = lazy(() => import('./pages/EventDetailsPage'));
const AllEventsPage = lazy(() => import('./pages/AllEventsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

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
    <MotionConfig reducedMotion="user">
      <div className="app-container">
        <Navigation />
        <div className="content">
          <Suspense fallback={<div className="px-4 py-24 text-center text-slate-500">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/live-service" element={<LiveService />} />
              <Route path="/ministries/:id" element={<MinistryPage />} />
              <Route path="/events" element={<AllEventsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/event-details/:id" element={<EventDetailsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
