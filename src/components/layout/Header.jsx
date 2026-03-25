import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from '../common/Container';
import { homeSectionLinks, navLinks } from '../../data/navigation';

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleHomeSectionClick = (id) => {
    if (location.pathname === '/') {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-accent ${isActive ? 'text-accent' : 'text-slate-700'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="text-xl font-bold tracking-wide text-primary">
          PHOENIX
        </NavLink>

        <button
          className="rounded-md p-2 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="flex flex-col py-3">
            {location.pathname === '/'
              ? homeSectionLinks.map((item) => (
                  <button
                    key={item.id}
                    className="rounded-md px-2 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
                    onClick={() => handleHomeSectionClick(item.id)}
                  >
                    {item.label}
                  </button>
                ))
              : navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="rounded-md px-2 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                    onClick={() => setOpen(false)}
                  >
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
