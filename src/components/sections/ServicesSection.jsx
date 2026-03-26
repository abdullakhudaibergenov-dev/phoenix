import { services } from '../../data/services';
import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';
import RevealOnScroll from '../common/RevealOnScroll';

function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20">
      <Container>
        <RevealOnScroll>
          <SectionTitle
            eyebrow={t.services.sectionEyebrow}
            title={t.services.sectionTitle}
            subtitle={t.services.sectionSubtitle}
            centered
          />
        </RevealOnScroll>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.key} translationKey={service.key} delay={index * 80} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
