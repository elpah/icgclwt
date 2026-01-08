import { motion, AnimatePresence } from 'framer-motion';
import { Church, PlayCircle, X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const MotionLink = motion(Link);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navigate = useNavigate();

  const NAV_LINKS = [
    {
      name: 'Home',
      href: 'home',
    },
    {
      name: 'About',
      href: 'about',
    },
    {
      name: 'Services',
      href: 'services',
    },
    {
      name: 'Events',
      href: 'events',
    },
    {
      name: 'Ministries',
      href: 'ministries',
    },
    {
      name: 'Contact',
      href: 'contact',
    },
  ] as any[];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (target: string) => {
    if (target === 'live-service') {
      navigate('/live-service');
      setMobileMenuOpen(false);
      return;
    }

    const scrollToSection = () => {
      if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(target);
      el?.scrollIntoView({ behavior: 'smooth' });
    };

    if (isHome) {
      scrollToSection();
    } else {
      navigate('/');
      setTimeout(scrollToSection, 150);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="bg-linear-to-br from-[#006B3F] to-emerald-700 p-2.5 rounded-xl shadow-lg">
              <Church className="w-7 h-7 text-[#FFD700]" />
            </div>
            <div>
              <h1
                className={`font-bold text-xl leading-tight ${isScrolled || !isHome ? 'text-[#006B3F]' : 'text-white'}`}
              >
                ICGC
              </h1>
              <p
                className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isScrolled || !isHome ? 'text-slate-500' : 'text-slate-200'}`}
              >
                Living Word Temple
              </p>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(link.href)}
                className={`cursor-pointer text-sm font-semibold transition-colors hover:text-[#FFD700]
              ${isScrolled || !isHome ? 'text-slate-700' : 'text-white'}
             `}
              >
                {link.name}
              </motion.button>
            ))}
            <MotionLink
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => navigate('/live-service')}
              to="/live-service"
              className="bg-linear-to-r from-[#FFD700] to-[#FDB813] text-[#006B3F] px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Watch Live</span>
            </MotionLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: '100%',
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: '100%',
            }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map(link => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-2 text-left"
                >
                  {link.name}
                </button>
              ))}
              <button className="bg-linear-to-r from-[#006B3F] to-emerald-700 text-[#FFD700] w-full py-4 rounded-xl font-bold text-lg shadow-xl">
                Join Service Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navigation;
