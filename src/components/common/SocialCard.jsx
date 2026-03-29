function SocialCard({ title, label, image, link, followText }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative block min-h-[320px] overflow-hidden rounded-2xl border border-zinc-800 shadow-card transition duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03]"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/70 transition duration-500 ease-out group-hover:bg-black/50" />
      <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{label}</p>
          <h3 className="mt-4 max-w-sm text-3xl font-bold text-white sm:text-4xl">{title}</h3>
        </div>
        <div className="text-right">
          <span className="text-sm font-semibold text-white transition duration-300 group-hover:text-gold">{followText}</span>
        </div>
      </div>
    </a>
  );
}

export default SocialCard;
