import { Link } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';
import RevealOnScroll from './RevealOnScroll';

function ServiceCard({ translationKey, delay = 0 }) {
  const { t } = useLanguage();
  const content = t.services[translationKey];

  return (
    <RevealOnScroll delay={delay}>
      <article className="rounded-xl border border-zinc-800 bg-surface p-6 shadow-sm transition hover:border-gold/70 hover:shadow-card">
        <h3 className="text-xl font-semibold text-gold">{content.title}</h3>
        <p className="mt-3 text-sm text-zinc-200">{content.description}</p>
        <Link to="/contacts" className="mt-5 inline-flex text-sm font-semibold text-gold transition hover:text-goldSoft">
          {t.services.learnMore}
        </Link>
      </article>
    </RevealOnScroll>
  );
}

export default ServiceCard;
