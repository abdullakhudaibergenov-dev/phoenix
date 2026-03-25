import useLanguage from '../../hooks/useLanguage';
import StarRating from './StarRating';

function TestimonialBlock({ testimonial, rating }) {
  const { t } = useLanguage();

  return (
    <section className="rounded-2xl border border-gold/40 bg-gradient-to-r from-zinc-950 to-black p-8 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t.references.testimonialLabel}</p>
      <blockquote className="mt-4 text-lg leading-8 text-zinc-100">“{testimonial.comment}”</blockquote>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-5">
        <div>
          <p className="font-semibold text-zinc-100">{testimonial.name}</p>
          <p className="text-sm text-zinc-400">{testimonial.role}</p>
        </div>
        <StarRating rating={rating} />
      </div>
    </section>
  );
}

export default TestimonialBlock;
