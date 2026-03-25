import { services } from '../../data/services';
import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';

function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20">
      <Container>
        <SectionTitle
          eyebrow={t.services.sectionEyebrow}
          title={t.services.sectionTitle}
          subtitle={t.services.sectionSubtitle}
          eyebrow="Services"
          title="Tailored HR and Business Services"
          subtitle="Our modular service portfolio adapts to your team, stage, and strategic objectives."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.key} translationKey={service.key} />
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
