import { featureCards } from '../../data/services';
import FeatureCard from '../common/FeatureCard';
import Container from '../common/Container';

function FeaturesSection() {
  return (
    <section className="-mt-10 pb-16">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {featureCards.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;
