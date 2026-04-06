import serviceAdvisory from '../assets/illustrations/service-advisory.svg';
import serviceRecruitment from '../assets/illustrations/service-recruitment.svg';
import serviceTransformation from '../assets/illustrations/service-transformation.svg';
import useLanguage from '../hooks/useLanguage';
import Container from '../components/common/Container';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionTitle from '../components/common/SectionTitle';

function ServicesPage() {
  const { t } = useLanguage();
  const copy = t.services;
  const serviceBlocks = [
    { image: serviceAdvisory, ...t.services.pageBlocks.advisory },
    { image: serviceRecruitment, ...t.services.pageBlocks.recruitment },
    { image: serviceTransformation, ...t.services.pageBlocks.transformation },
  ];

  return (
    <section className="py-16">
      <Container>
        <SectionTitle eyebrow={copy.sectionEyebrow} title={copy.pageTitle} subtitle={copy.pageSubtitle} />

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
