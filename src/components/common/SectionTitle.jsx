function SectionTitle({ eyebrow, title, subtitle, centered = false }) {
  return (
    <div className={centered ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-10'}>
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-heading">{eyebrow}</p> : null}
      <h2 className="text-4xl font-bold text-heading sm:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-body">{subtitle}</p> : null}
    </div>
  );
}

export default SectionTitle;
