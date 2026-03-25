import { NavLink } from 'react-router-dom';
import logo from '../../assets/phoenix-logo.svg';
import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';
import { navLinks } from '../../data/navigation';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 border-t border-zinc-800 bg-primary py-12 text-zinc-200">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <img src={logo} alt="Phoenix logo" className="h-12 w-auto" />
          <p className="mt-3 text-sm text-zinc-400">{t.footer.description}</p>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wider text-gold">{t.footer.quickLinks}</h5>
          <ul className="mt-3 space-y-2">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="text-sm text-zinc-300 transition hover:text-gold">
                  {t.nav[item.key]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wider text-gold">{t.footer.contact}</h5>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li>123 Business Avenue, New York, NY</li>
            <li>+1 (555) 100-2000</li>
            <li>hello@phoenixcorp.com</li>
          </ul>
        </div>
      </Container>
      <Container className="mt-10 border-t border-zinc-800 pt-5 text-xs text-zinc-500">
        © {new Date().getFullYear()} Phoenix Corporate. {t.footer.rights}
      </Container>
    </footer>
  );
}

export default Footer;
