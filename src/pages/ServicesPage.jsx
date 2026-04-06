import serviceAdvisory from '../assets/illustrations/service-advisory.svg';
import serviceRecruitment from '../assets/illustrations/service-recruitment.svg';
import serviceTransformation from '../assets/illustrations/service-transformation.svg';
import Container from '../components/common/Container';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionTitle from '../components/common/SectionTitle';

const serviceBlocks = [
  {
    image: serviceAdvisory,
    title: 'Strategic Advisory',
    description:
      'Executive-level strategic consulting that aligns talent, operations, and growth priorities into a single actionable roadmap.',
  },
  {
    image: serviceRecruitment,
    title: 'Recruitment Excellence',
    description:
      'High-precision recruitment programs designed to attract qualified specialists, improve pipeline quality, and accelerate hiring outcomes.',
  },
  {
    image: serviceTransformation,
    title: 'Organizational Transformation',
    description:
      'Structured transformation initiatives that modernize HR architecture, strengthen leadership capability, and improve performance culture.',
  },
];

function ServicesPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Premium Services for Sustainable Growth"
          subtitle="Three focused solution areas designed for long-term corporate performance."
        />

        <div className="space-y-10">
          {serviceBlocks.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index * 100}>
              <article className="rounded-2xl border border-theme bg-surface p-6 shadow-card sm:p-8">
                <img src={service.image} alt={service.title} className="w-full rounded-xl border border-theme" />
                <h3 className="mt-6 text-3xl font-bold text-heading">{service.title}</h3>
                <p className="mt-4 max-w-4xl text-base leading-8 text-body">{service.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesPage;
