import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

function AboutSection() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionTitle
          eyebrow="About"
          title="A Strategic Partner for Sustainable Growth"
          subtitle="Phoenix helps organizations build agile teams and modern workforce operations."
        />
        <div className="grid gap-10 rounded-2xl bg-white p-8 shadow-card md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-primary">Who We Are</h3>
            <p className="mt-4 text-slate-600">
              We are a corporate advisory and HR consulting firm focused on measurable outcomes, practical execution,
              and long-term collaboration.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-primary">Mission</h4>
              <p className="mt-2 text-slate-600">Empower businesses with people-first strategies that scale.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Vision</h4>
              <p className="mt-2 text-slate-600">Be the most trusted partner in talent and organizational performance.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Phoenix Values</h4>
              <p className="mt-2 text-slate-600">Clarity, integrity, innovation, and resilience in every engagement.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
