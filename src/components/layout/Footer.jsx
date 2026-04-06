import { NavLink } from 'react-router-dom';
import logo from '../../assets/phoenix-logo.svg';
import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';
import { navLinks } from '../../data/navigation';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-theme bg-surface py-12 text-body">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <img src={logo} alt="Phoenix logo" className="h-12 w-auto" />
          <p className="mt-4 text-sm text-muted">{t.footer.description}</p>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wider text-heading">{t.footer.quickLinks}</h5>
          <ul className="mt-3 space-y-2">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="text-sm text-body transition hover:text-heading">
                  {t.nav[item.key]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wider text-heading">{t.footer.contact}</h5>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>123 Business Avenue, New York, NY</li>
            <li>+1 (555) 100-2000</li>
            <li>hello@phoenixcorp.com</li>
          </ul>
        </div>
      </Container>
      <Container className="mt-10 border-t border-theme pt-5 text-xs text-muted">
        © {new Date().getFullYear()} Phoenix Corporate. {t.footer.rights}
      </Container>
    </footer>
  );
}

export default Footer;
