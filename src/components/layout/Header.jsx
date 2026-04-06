import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/phoenix-logo.svg';
import useLanguage from '../../hooks/useLanguage';
import useTheme from '../../hooks/useTheme';
import Container from '../common/Container';
import { homeSectionLinks, navLinks } from '../../data/navigation';

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleHomeSectionClick = (id) => {
    if (location.pathname === '/') {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
        return;
      }
    }

    const link = navLinks.find((item) => item.key === id);
    if (link) navigate(link.path);
    setOpen(false);
  };

  const navClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-heading' : 'text-body hover:text-heading'}`;

  const languageButtonClass = (code) =>
    `rounded-md px-2 py-1 text-xs font-semibold tracking-wide transition ${language === code ? 'bg-[color:var(--heading)] text-black' : 'text-body hover:text-heading'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-theme bg-app/95 backdrop-blur">
      <Container className="py-3">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-xl border border-theme bg-surface/90 px-4 py-3">
          <NavLink to="/" className="shrink-0">
            <img src={logo} alt="Phoenix logo" className="h-11 w-auto" />
          </NavLink>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((item) => (
              <NavLink key={item.path} to={item.path} className={navClass}>
                {t.nav[item.key]}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button type="button" onClick={toggleTheme} className="rounded-md border border-theme px-3 py-1 text-xs font-semibold text-body transition hover:text-heading">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <div className="flex items-center gap-1 rounded-lg border border-theme bg-surface-2 p-1">
              <button type="button" className={languageButtonClass('en')} onClick={() => setLanguage('en')}>EN</button>
              <button type="button" className={languageButtonClass('ru')} onClick={() => setLanguage('ru')}>RU</button>
              <button type="button" className={languageButtonClass('tr')} onClick={() => setLanguage('tr')}>TR</button>
            </div>
          </div>

          <button className="rounded-md border border-theme p-2 text-heading lg:hidden" aria-label="Toggle navigation" onClick={() => setOpen((prev) => !prev)}>
            ☰
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-theme bg-surface lg:hidden">
          <Container className="flex max-w-6xl flex-col py-3">
            <div className="mb-2 flex items-center gap-2 px-2">
              <button type="button" onClick={toggleTheme} className="rounded-md border border-theme px-3 py-1 text-xs font-semibold text-body transition hover:text-heading">
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
              <button type="button" className={languageButtonClass('en')} onClick={() => setLanguage('en')}>EN</button>
              <button type="button" className={languageButtonClass('ru')} onClick={() => setLanguage('ru')}>RU</button>
              <button type="button" className={languageButtonClass('tr')} onClick={() => setLanguage('tr')}>TR</button>
            </div>
            {(location.pathname === '/' ? homeSectionLinks : navLinks).map((item) => (
              <button
                key={item.key || item.id}
                className="rounded-md px-2 py-3 text-left text-sm font-medium text-body transition hover:bg-surface-2 hover:text-heading"
                onClick={() => (location.pathname === '/' ? handleHomeSectionClick(item.id) : navigate(item.path))}
              >
                {t.nav[item.key]}
              </button>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
