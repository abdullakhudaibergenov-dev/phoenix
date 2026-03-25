import useLanguage from '../../hooks/useLanguage';

function FeatureCard({ icon, translationKey }) {
  const { t } = useLanguage();
  const content = t.features[translationKey];

  return (
    <article className="rounded-xl border border-zinc-800 bg-surface p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-gold/60">
      <div className="text-2xl text-gold">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-zinc-100">{content.title}</h3>
      <p className="mt-3 text-sm text-zinc-400">{content.description}</p>
    </article>
  );
}

export default FeatureCard;
