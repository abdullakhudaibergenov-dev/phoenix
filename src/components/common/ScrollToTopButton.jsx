import { useEffect, useState } from 'react';
import useLanguage from '../../hooks/useLanguage';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();
  const label = t.common.scrollToTop;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-4 z-40 h-14 w-14 rounded-full border border-theme bg-surface text-2xl text-heading shadow-card transition-all duration-300 hover:-translate-y-1 sm:right-8 ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;
