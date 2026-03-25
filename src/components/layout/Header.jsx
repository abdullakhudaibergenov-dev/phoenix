import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/phoenix-logo.svg';
import useLanguage from '../../hooks/useLanguage';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/phoenix-logo.svg';
import Container from '../common/Container';
import { homeSectionLinks, navLinks } from '../../data/navigation';

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
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
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  const navClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-gold' : 'text-zinc-300 hover:text-gold'}`;

  const languageButtonClass = (code) =>
    `rounded-md px-2 py-1 text-xs font-semibold tracking-wide transition ${language === code ? 'bg-gold text-black' : 'text-zinc-300 hover:text-gold'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-primary/95 backdrop-blur">
      <Container className="relative flex h-20 items-center justify-between gap-6">
        <NavLink to="/" className="mr-8 shrink-0">
          <img src={logo} alt="Phoenix logo" className="h-12 w-auto" />
        </NavLink>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={navClass}>
              {t.nav[item.key]}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-1 rounded-lg border border-zinc-800 bg-surface/70 p-1 md:flex">
          <button type="button" className={languageButtonClass('en')} onClick={() => setLanguage('en')}>
            EN
          </button>
          <button type="button" className={languageButtonClass('ru')} onClick={() => setLanguage('ru')}>
            RU
          </button>
        </div>

        <button
          className="ml-auto rounded-md border border-zinc-700 p-2 text-gold md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>

        <div className="hidden w-[180px] md:block" aria-hidden="true" />
      </Container>

      {open ? (
        <div className="border-t border-zinc-800 bg-surface md:hidden">
          <Container className="flex flex-col py-3">
            <div className="mb-2 flex items-center gap-2 px-2">
              <button type="button" className={languageButtonClass('en')} onClick={() => setLanguage('en')}>
                EN
              </button>
              <button type="button" className={languageButtonClass('ru')} onClick={() => setLanguage('ru')}>
                RU
              </button>
            </div>
            {location.pathname === '/'
              ? homeSectionLinks.map((item) => (
                  <button
                    key={item.id}
                    className="rounded-md px-2 py-3 text-left text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-gold"
                    onClick={() => handleHomeSectionClick(item.id)}
                  >
                    {t.nav[item.key]}
                    {item.label}
                  </button>
                ))
              : navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="rounded-md px-2 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-gold"
                    onClick={() => setOpen(false)}
                  >
                    {t.nav[item.key]}
                    {item.label}
                  </NavLink>
                ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
