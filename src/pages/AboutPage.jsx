import { Link } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';
import Button from '../components/common/Button';
import Container from '../components/common/Container';

function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-800 bg-primary bg-goldGlow py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <Container className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">fdjglsffn Corporate</p>
          <h1 className="mt-4 text-4xl font-bold text-zinc-100 sm:text-5xl">{t.aboutPage.heroTitle}</h1>
          <p className="mt-5 max-w-3xl text-lg text-zinc-300">{t.aboutPage.heroSubtitle}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{t.aboutPage.introEyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold text-zinc-100 sm:text-4xl">{t.aboutPage.introTitle}</h2>
              <p className="mt-6 text-base leading-8 text-zinc-400">{t.aboutPage.introText}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-card">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {t.aboutPage.stats.map((stat) => (
                  <div key={stat.label} className="border-l border-gold/40 pl-4">
                    <p className="text-3xl font-bold text-gold">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-wider text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="space-y-12 pb-20">
        <Container>
          <article className="grid gap-8 rounded-2xl border border-zinc-800 bg-surface p-10 shadow-card md:grid-cols-[220px_1fr]">
            <h3 className="text-3xl font-semibold text-gold">{t.aboutPage.phoenixTitle}</h3>
            <p className="text-base leading-8 text-zinc-300">{t.aboutPage.phoenixText}</p>
          </article>

          <article className="mt-8 grid gap-8 rounded-2xl border border-zinc-800 bg-surface p-10 shadow-card md:grid-cols-[220px_1fr]">
            <h3 className="text-3xl font-semibold text-gold">{t.aboutPage.missionTitle}</h3>
            <p className="text-base leading-8 text-zinc-300">{t.aboutPage.missionText}</p>
          </article>

          <article className="mt-8 grid gap-8 rounded-2xl border border-zinc-800 bg-surface p-10 shadow-card md:grid-cols-[220px_1fr]">
            <h3 className="text-3xl font-semibold text-gold">{t.aboutPage.visionTitle}</h3>
            <p className="text-base leading-8 text-zinc-300">{t.aboutPage.visionText}</p>
          </article>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="rounded-2xl border border-gold/40 bg-gradient-to-r from-zinc-950 to-black p-10 text-center shadow-card">
            <h3 className="text-2xl font-semibold text-zinc-100">{t.aboutPage.ctaTitle}</h3>
            <div className="mt-6">
              <Link to="/contacts">
                <Button>{t.aboutPage.ctaButton}</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AboutPage;
