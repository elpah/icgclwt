import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, X, Menu } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Events', href: 'events' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Ministries', href: 'ministries' },
  { name: 'Contact', href: 'contact' },
];

const HOME_SECTIONS = ['home', 'about', 'contact'] as const;

function getRouteActive(pathname: string) {
  if (pathname === '/events' || pathname.startsWith('/event-details')) return 'events';
  if (pathname === '/gallery') return 'gallery';
  if (pathname.startsWith('/ministries')) return 'ministries';
  if (pathname === '/live-service') return 'live';
  if (pathname === '/') return 'home';
  return '';
}

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(() => getRouteActive(location.pathname));
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - scrollRef.current < 100) return;
      scrollRef.current = now;
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveHref(getRouteActive(location.pathname));
      return;
    }

    const updateActiveSection = () => {
      const spyOffset = 110;
      let current: string = 'home';

      for (const id of HOME_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - spyOffset <= 0) {
          current = id;
        }
      }

      setActiveHref(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    const retry = window.setTimeout(updateActiveSection, 400);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.clearTimeout(retry);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isHome, location.pathname, location.state]);

  const handleNavClick = useCallback(
    (target: string) => {
      if (target === 'live-service') {
        navigate('/live-service');
        setMobileMenuOpen(false);
        return;
      }
      if (target === 'events') {
        navigate('/events');
        setMobileMenuOpen(false);
        return;
      }
      if (target === 'gallery') {
        navigate('/gallery');
        setMobileMenuOpen(false);
        return;
      }
      if (target === 'ministries') {
        navigate('/ministries');
        setMobileMenuOpen(false);
        return;
      }

      setActiveHref(target);

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
      } else if (target === 'home') {
        navigate('/');
      } else {
        navigate('/', { state: { scrollTo: target } });
      }
      setMobileMenuOpen(false);
    },
    [isHome, navigate]
  );

  const lightNav = isScrolled || !isHome || mobileMenuOpen;
  const navTextColor = lightNav ? 'text-slate-700' : 'text-white';
  const logoTextColor = lightNav ? 'text-[#006B3F]' : 'text-white';
  const logoSubColor = lightNav ? 'text-slate-500' : 'text-slate-200';
  const iconColor = lightNav ? 'text-slate-900' : 'text-white';

  const linkClass = (href: string) => {
    const isActive = activeHref === href;
    const color = isActive ? (lightNav ? 'text-[#006B3F]' : 'text-[#FFD700]') : navTextColor;

    return `relative cursor-pointer text-sm font-semibold transition-colors duration-300 hover:text-[#FFD700] ${color} after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:rounded-full after:transition-colors after:duration-300 ${
      isActive ? 'after:bg-[#FFD700]' : 'after:bg-transparent'
    }`;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="p-1 flex items-center justify-center">
              <img
                src="/images/icgc_logo.webp"
                alt="ICGC Logo"
                className="h-10 w-auto object-contain"
                loading="eager"
                width="87"
                height="80"
              />
            </div>

            <div>
              <h1 className={`font-bold text-xl leading-tight ${logoTextColor}`}>ICGC</h1>
              <p className={`text-[10px] font-bold tracking-[0.2em] uppercase ${logoSubColor}`}>
                Living Word Temple
              </p>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
            {NAV_LINKS.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, ease: easeOutExpo }}
                onClick={() => handleNavClick(link.href)}
                className={linkClass(link.href)}
                aria-current={activeHref === link.href ? 'page' : undefined}
              >
                {link.name}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5, ease: easeOutExpo }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/live-service')}
              className="cursor-pointer bg-linear-to-r from-[#FFD700] to-[#FDB813] text-[#006B3F] px-5 py-2 rounded-full font-semibold text-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center space-x-2 min-h-10"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Watch Live</span>
            </motion.button>
          </div>

          <button
            className="md:hidden p-2 rounded-md"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className={iconColor} /> : <Menu className={iconColor} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white md:hidden pt-24 px-6 shadow-2xl"
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-slate-700" />
              </button>

              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                  },
                }}
                className="flex flex-col space-y-6"
              >
                {NAV_LINKS.map(link => {
                  const isActive = activeHref === link.href;
                  return (
                    <motion.button
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: { ease: easeOutExpo },
                        },
                      }}
                      onClick={() => handleNavClick(link.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`text-xl font-semibold pb-3 text-left border-b-2 transition-colors duration-300 ${
                        isActive
                          ? 'text-[#006B3F] border-[#FFD700]'
                          : 'text-slate-800 border-slate-100'
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  );
                })}

                <motion.button
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { ease: easeOutExpo },
                    },
                  }}
                  onClick={() => {
                    navigate('/live-service');
                    setMobileMenuOpen(false);
                  }}
                  className="cursor-pointer bg-linear-to-r from-[#006B3F] to-emerald-700 text-[#FFD700] w-full py-4 rounded-xl font-bold text-lg shadow-xl"
                >
                  Join Service Online
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
