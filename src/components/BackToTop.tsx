import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const SHOW_AFTER = 400;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="cursor-pointer fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#006B3F] text-[#FFD700] shadow-md hover:bg-emerald-800 transition-colors duration-300"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
