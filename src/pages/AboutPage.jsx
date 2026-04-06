import { Link } from 'react-router-dom';
import corporateImage from '../assets/illustrations/about-corporate.svg';
import useLanguage from '../hooks/useLanguage';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import AnimatedCounter from '../components/common/AnimatedCounter';
import RevealOnScroll from '../components/common/RevealOnScroll';

function AboutPage() {
  const { t } = useLanguage();
  const about = t.aboutPage;

  return (
    <>
      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <RevealOnScroll>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-heading">{about.introEyebrow}</p>
                <h1 className="mt-4 text-5xl font-bold text-heading">{about.heroTitle}</h1>
                <p className="mt-5 text-base leading-8 text-body">{about.heroSubtitle}</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <img src={corporateImage} alt="Corporate meeting" className="w-full rounded-2xl border border-theme shadow-card" />
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="rounded-2xl border border-theme bg-surface p-8 shadow-card">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {about.stats.map((stat) => (
                <div key={stat.label} className="border-l border-theme pl-4">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1700} />
                  <p className="mt-2 text-xs uppercase tracking-wider text-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-8">
            <article className="rounded-2xl border border-theme bg-surface p-8 shadow-card">
              <h3 className="text-3xl font-semibold text-heading">{about.phoenixTitle}</h3>
              <p className="mt-4 leading-8 text-body">{about.phoenixText}</p>
            </article>
            <article className="rounded-2xl border border-theme bg-surface p-8 shadow-card">
              <h3 className="text-3xl font-semibold text-heading">{about.missionTitle}</h3>
              <p className="mt-4 leading-8 text-body">{about.missionText}</p>
            </article>
            <article className="rounded-2xl border border-theme bg-surface p-8 shadow-card">
              <h3 className="text-3xl font-semibold text-heading">{about.visionTitle}</h3>
              <p className="mt-4 leading-8 text-body">{about.visionText}</p>
            </article>
          </div>

          <div className="mt-10 rounded-2xl border border-theme bg-surface p-8 text-center shadow-card">
            <h3 className="text-3xl font-semibold text-heading">{about.ctaTitle}</h3>
            <div className="mt-6">
              <Link to="/contacts">
                <Button>{about.ctaButton}</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AboutPage;
