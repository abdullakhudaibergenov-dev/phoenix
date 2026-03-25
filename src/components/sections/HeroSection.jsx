import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Container from '../common/Container';

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-slate-900 to-slate-800 py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.35),transparent_55%)]" />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Corporate Excellence</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Build High-Performance Teams with Confidence
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            We deliver premium consulting and HR solutions designed to strengthen growth, culture, and long-term value.
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
