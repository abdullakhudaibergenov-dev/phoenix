import avatarPlaceholder from '../../assets/logos/avatar-placeholder.svg';
import useLanguage from '../../hooks/useLanguage';
import StarRating from './StarRating';

function TestimonialBlock({ testimonial, rating }) {
  const { t } = useLanguage();

  return (
    <section className="rounded-2xl border border-gold/40 bg-gradient-to-br from-zinc-950 to-black p-8 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t.references.testimonialLabel}</p>
      <blockquote className="mt-5 text-lg leading-8 text-white">“{testimonial.comment}”</blockquote>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-zinc-800 pt-6">
        <div className="flex items-center gap-4">
          <img src={avatarPlaceholder} alt={testimonial.name} className="h-16 w-16 rounded-full border border-gold/70 bg-black object-cover p-1" />
          <div>
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-zinc-300">{testimonial.role}</p>
          </div>
        </div>
        <StarRating rating={rating} />
      </div>
    </section>
  );
}

export default TestimonialBlock;
