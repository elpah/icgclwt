import { Suspense } from 'react';
import { Container, Theme } from './settings/types';
import Navigation from './components/Navigation';
import { Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import { Contact } from 'lucide-react';
import HomePage from './pages/HomePage';
import LiveServices from './pages/LiveService';
import { MinistryPage } from './pages/MinistryPage';

let theme: Theme = 'light';
let container: Container = 'none';

function App() {
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
            <Route path="/about" element={<About />} />
            <Route path="/live-service" element={<LiveServices />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/ministry-page" element={<MinistryPage />} /> */}
            {/* <Route path="/study-abroad/countries/:countryName" element={<CountryDetailsPage />} /> */}
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