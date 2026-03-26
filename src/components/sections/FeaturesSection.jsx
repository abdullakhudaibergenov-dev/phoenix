import { featureCards } from '../../data/services';
import FeatureCard from '../common/FeatureCard';
import Container from '../common/Container';
import RevealOnScroll from '../common/RevealOnScroll';

function FeaturesSection() {
  return (
    <section className="relative z-20 py-16">
      <Container>
        <RevealOnScroll>
          <div className="grid gap-5 md:grid-cols-3">
            {featureCards.map((feature, index) => (
              <FeatureCard key={feature.key} icon={feature.icon} translationKey={feature.key} delay={index * 90} />
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

export default FeaturesSection;
