import { services } from '../../data/services';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';

function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Tailored HR and Business Services"
          subtitle="Our modular service portfolio adapts to your team, stage, and strategic objectives."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
