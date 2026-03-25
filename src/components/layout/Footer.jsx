import { NavLink } from 'react-router-dom';
import Container from '../common/Container';
import { navLinks } from '../../data/navigation';

function Footer() {
  return (
    <footer className="mt-20 bg-primary py-12 text-slate-200">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-xl font-bold">PHOENIX</h4>
          <p className="mt-3 text-sm text-slate-300">Modern corporate solutions for people, process, and growth.</p>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h5>
          <ul className="mt-3 space-y-2">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="text-sm text-slate-300 transition hover:text-white">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>123 Business Avenue, New York, NY</li>
            <li>+1 (555) 100-2000</li>
            <li>hello@phoenixcorp.com</li>
          </ul>
        </div>
      </Container>
      <Container className="mt-10 border-t border-slate-700 pt-5 text-xs text-slate-400">
        © {new Date().getFullYear()} Phoenix Corporate. All rights reserved.
      </Container>
    </footer>
  );
}

export default Footer;
