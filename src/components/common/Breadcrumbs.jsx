import { Link, useLocation } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';

const routeNameMap = {
  about: 'about',
  services: 'services',
  references: 'references',
  contacts: 'contacts',
};

function Breadcrumbs() {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="border-b border-theme bg-surface-2">
      <div className="mx-auto w-full max-w-6xl px-4 py-3 text-sm sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-muted">
          <li>
            <Link to="/" className="hover:text-heading transition">
              Home
            </Link>
          </li>
          {segments.map((segment, index) => {
            const to = `/${segments.slice(0, index + 1).join('/')}`;
            const isLast = index === segments.length - 1;
            const label = routeNameMap[segment] ? t.nav[routeNameMap[segment]] : segment.replace(/-/g, ' ');

            return (
              <li key={to} className="flex items-center gap-2">
                <span>/</span>
                {isLast ? (
                  <span className="text-heading capitalize">{label}</span>
                ) : (
                  <Link to={to} className="capitalize transition hover:text-heading">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumbs;
