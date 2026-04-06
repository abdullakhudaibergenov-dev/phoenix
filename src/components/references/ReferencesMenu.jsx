import { NavLink } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';
import { referencesData } from '../../data/referencesData';

function ReferencesMenu({ basePath = '/references' }) {
  const { language, t } = useLanguage();

  return (
    <div className="overflow-x-auto pb-2">
      <nav className="flex min-w-max items-center gap-2 rounded-xl border border-zinc-800 bg-primary p-2">
        <NavLink
          to={basePath}
          end
          className={({ isActive }) =>
            `rounded-md px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-gold text-black' : 'text-zinc-300 hover:text-gold'}`
          }
        >
          {t.references.overview}
        </NavLink>

        {referencesData.map((item) => (
          <NavLink
            key={item.slug}
            to={`${basePath}/${item.slug}`}
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-gold text-black' : 'text-zinc-300 hover:text-gold'}`
            }
          >
            {item.content[language].menuLabel}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default ReferencesMenu;
