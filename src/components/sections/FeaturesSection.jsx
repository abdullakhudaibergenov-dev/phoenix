import { featureCards } from '../../data/services';
import FeatureCard from '../common/FeatureCard';
import Container from '../common/Container';

function FeaturesSection() {
  return (
    <section className="relative z-20 py-16">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {featureCards.map((feature) => (
            <FeatureCard key={feature.key} icon={feature.icon} translationKey={feature.key} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;
