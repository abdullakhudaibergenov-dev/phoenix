import { Link } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';

function ReferenceOverviewCard({ item }) {
  const { language, t } = useLanguage();
  const content = item.content[language];

  return (
    <article className="rounded-2xl border border-zinc-800 bg-primary p-6 shadow-card">
      <div className="flex items-center gap-4">
        <img src={item.logo} alt={`${content.companyName} logo`} className="h-14 w-14 rounded-xl border border-zinc-700 bg-black object-cover" />
        <div>
          <p className="text-xs uppercase tracking-wider text-gold">{content.menuLabel}</p>
          <h3 className="text-lg font-semibold text-zinc-100">{content.companyName}</h3>
        </div>
      </div>
      <h4 className="mt-5 text-xl font-semibold text-zinc-100">{content.title}</h4>
      <p className="mt-3 text-sm text-zinc-400">{content.subtitle}</p>
      <Link to={`/references/${item.slug}`} className="mt-5 inline-flex text-sm font-semibold text-gold transition hover:text-goldSoft">
        {t.references.viewCaseStudy}
      </Link>
    </article>
  );
}

export default ReferenceOverviewCard;
