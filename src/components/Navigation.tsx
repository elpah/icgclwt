import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, X, Menu } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Events', href: 'events' },
  { name: 'Ministries', href: 'ministries' },
  { name: 'Contact', href: 'contact' },
];

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    },
    [isHome, navigate]
  );

  const navTextColor = isScrolled || !isHome || mobileMenuOpen ? 'text-slate-700' : 'text-white';

  const logoTextColor = isScrolled || !isHome || mobileMenuOpen ? 'text-[#006B3F]' : 'text-white';

  const logoSubColor =
    isScrolled || !isHome || mobileMenuOpen ? 'text-slate-500' : 'text-slate-200';

  const iconColor = isScrolled || !isHome || mobileMenuOpen ? 'text-slate-900' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, ease: easeOutExpo }}
                onClick={() => handleNavClick(link.href)}
                className={`cursor-pointer text-sm font-semibold transition-colors hover:text-[#FFD700] ${navTextColor}`}
              >
                {link.name}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5, ease: easeOutExpo }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/live-service')}
              className="bg-linear-to-r from-[#FFD700] to-[#FDB813] text-[#006B3F] px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Watch Live</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className={iconColor} /> : <Menu className={iconColor} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white md:hidden pt-24 px-6 shadow-2xl"
            >
              {/* Close button inside drawer */}
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
                {NAV_LINKS.map(link => (
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
                    className="text-xl font-semibold text-slate-800 border-b border-slate-100 pb-3 text-left"
                  >
                    {link.name}
                  </motion.button>
                ))}

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
                  className="bg-linear-to-r from-[#006B3F] to-emerald-700 text-[#FFD700] w-full py-4 rounded-xl font-bold text-lg shadow-xl"
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
