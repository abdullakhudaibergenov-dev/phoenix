function SectionTitle({ eyebrow, title, subtitle, centered = false }) {
  return (
    <div className={centered ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-10'}>
      {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-zinc-400">{subtitle}</p> : null}
    </div>
  );
}

export default SectionTitle;
