import { Link } from 'react-router-dom';

function ServiceCard({ title, description }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-accent hover:shadow-card">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      <Link to="/contacts" className="mt-5 inline-flex text-sm font-semibold text-accent hover:text-blue-700">
        Learn More →
      </Link>
    </article>
  );
}

export default ServiceCard;
