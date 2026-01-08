import { lazy, Suspense, useEffect } from 'react';
import { Container, Theme } from './settings/types';
import Navigation from './components/Navigation';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const LiveService = lazy(() => import('./pages/LiveService'));
const MinistryPage = lazy(() => import('./pages/MinistryPage'));

let theme: Theme = 'light';
let container: Container = 'none';

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
            {/* <Route path="/ministries/:ministry" element={<MinistryPage />} /> */}

            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/ministry-page" element={<MinistryPage />} /> */}
            {/* <Route path="/study-abroad/countries" element={<CountryDetailsPage />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
