import { NavLink } from 'react-router-dom';
import logo from '../../assets/phoenix-logo.svg';
import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';
import { navLinks } from '../../data/navigation';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-zinc-800 bg-black py-12 text-white">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <img src={logo} alt="Phoenix logo" className="h-12 w-auto" />
          <p className="mt-4 text-sm text-zinc-300">{t.footer.description}</p>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wider text-heading">{t.footer.quickLinks}</h5>
          <ul className="mt-3 space-y-2">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="text-sm text-white transition hover:text-heading">
                  {t.nav[item.key]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wider text-heading">{t.footer.contact}</h5>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>Ankara, Anadolu Bulivari, TR Invest Corner 2</li>
            <li>+90 533 038 37 73</li>
            <li>info@phoenix.tr</li>
          </ul>
        </div>
      </Container>
      <Container className="mt-10 border-t border-zinc-800 pt-5 text-xs text-zinc-400">
        © {new Date().getFullYear()} Phoenix Corporate. {t.footer.rights}
      </Container>
    </footer>
  );
}

export default Footer;
