function SocialCard({ label, image, link, followText }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative block min-h-[260px] overflow-hidden rounded-2xl border border-theme shadow-card transition duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02]"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/72 transition duration-500 ease-out group-hover:bg-black/58" />
      <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-heading">{label}</p>
        <div className="text-right">
          <span className="text-sm font-semibold text-white transition duration-300 group-hover:text-heading">{followText}</span>
        </div>
      </div>
    </a>
  );
}

export default SocialCard;
