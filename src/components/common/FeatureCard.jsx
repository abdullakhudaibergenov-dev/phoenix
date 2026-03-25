function FeatureCard({ icon, title, description }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
    </article>
  );
}

export default FeatureCard;
