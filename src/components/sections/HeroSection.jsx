import { Link } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';
import Button from '../common/Button';
import Container from '../common/Container';
import RevealOnScroll from '../common/RevealOnScroll';

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-primary bg-goldGlow py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <RevealOnScroll>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-goldSoft">{t.hero.eyebrow}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <h1 className="text-5xl font-bold leading-tight text-gold sm:text-6xl">{t.hero.title}</h1>
          </RevealOnScroll>
          <RevealOnScroll delay={220}>
            <p className="mt-6 text-lg text-zinc-100">{t.hero.subtitle}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={320}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services">
                <Button>{t.hero.primaryCta}</Button>
              </Link>
              <Link to="/contacts">
                <Button variant="secondary">{t.hero.secondaryCta}</Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
