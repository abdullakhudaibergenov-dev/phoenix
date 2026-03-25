import { Link } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';

function ServiceCard({ translationKey }) {
  const { t } = useLanguage();
  const content = t.services[translationKey];

  return (
    <article className="rounded-xl border border-zinc-800 bg-surface p-6 shadow-sm transition hover:border-gold/70 hover:shadow-card">
      <h3 className="text-lg font-semibold text-zinc-100">{content.title}</h3>
      <p className="mt-3 text-sm text-zinc-400">{content.description}</p>
      <Link to="/contacts" className="mt-5 inline-flex text-sm font-semibold text-gold transition hover:text-goldSoft">
        {t.services.learnMore}

function ServiceCard({ title, description }) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-surface p-6 shadow-sm transition hover:border-gold/70 hover:shadow-card">
      <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
      <p className="mt-3 text-sm text-zinc-400">{description}</p>
      <Link to="/contacts" className="mt-5 inline-flex text-sm font-semibold text-gold transition hover:text-goldSoft">
        Learn More →
      </Link>
    </article>
  );
}

export default ServiceCard;
