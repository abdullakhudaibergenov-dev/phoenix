import logo from '../assets/phoenix-logo.svg';
import useLanguage from '../hooks/useLanguage';

function ComingSoonPage() {
  const { language, setLanguage, t } = useLanguage();

  const languageButtonClass = (code) =>
    `rounded-md border px-3 py-1 text-xs font-semibold tracking-wide transition ${
      language === code ? 'border-gold bg-gold text-black' : 'border-zinc-700 text-zinc-300 hover:border-gold hover:text-gold'
    }`;

  return (
    <section className="flex min-h-screen items-center justify-center bg-primary px-4">
      <div className="text-center">
        <img src={logo} alt="Phoenix logo" className="mx-auto h-20 w-auto" />
        <p className="mt-8 text-3xl font-semibold tracking-wide text-gold sm:text-4xl">{t.comingSoon.title}</p>

        <div className="mt-8 flex items-center justify-center gap-2">
          <button type="button" className={languageButtonClass('en')} onClick={() => setLanguage('en')}>
            EN
          </button>
          <button type="button" className={languageButtonClass('ru')} onClick={() => setLanguage('ru')}>
            RU
          </button>
          <button type="button" className={languageButtonClass('tr')} onClick={() => setLanguage('tr')}>
            TR
          </button>
        </div>
      </div>
    </section>
  );
}

export default ComingSoonPage;
