import { Link } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';
import Button from '../common/Button';
import Container from '../common/Container';

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-primary bg-goldGlow py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-goldSoft">{t.hero.eyebrow}</p>
          <h1 className="text-4xl font-bold leading-tight text-zinc-100 sm:text-5xl lg:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 text-lg text-zinc-300">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/services">
              <Button>{t.hero.primaryCta}</Button>
            </Link>
            <Link to="/contacts">
              <Button variant="secondary">{t.hero.secondaryCta}</Button>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-goldSoft">Premium Corporate Solutions</p>
          <h1 className="text-4xl font-bold leading-tight text-zinc-100 sm:text-5xl lg:text-6xl">
            Elevate Your Business with Precision and Leadership
          </h1>
          <p className="mt-6 text-lg text-zinc-300">
            Phoenix delivers executive consulting and HR transformation services designed for sustainable performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/services">
              <Button>Explore Services</Button>
            </Link>
            <Link to="/contacts">
              <Button variant="secondary">Book a Consultation</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
