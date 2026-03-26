import useLanguage from '../../hooks/useLanguage';
import RevealOnScroll from './RevealOnScroll';

function FeatureCard({ icon, translationKey, delay = 0 }) {
  const { t } = useLanguage();
  const content = t.features[translationKey];

  return (
    <RevealOnScroll delay={delay}>
      <article className="rounded-xl border border-zinc-800 bg-surface p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-gold/60">
        <div className="text-2xl text-gold">{icon}</div>
        <h3 className="mt-4 text-xl font-semibold text-gold">{content.title}</h3>
        <p className="mt-3 text-sm text-zinc-200">{content.description}</p>
      </article>
    </RevealOnScroll>
  );
}

export default FeatureCard;
