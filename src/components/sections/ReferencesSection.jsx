import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ReferenceSlider from '../sliders/ReferenceSlider';

function ReferencesSection() {
  return (
    <section id="references" className="bg-slate-100 py-20">
      <Container>
        <SectionTitle
          eyebrow="References"
          title="Trusted by Growing Organizations"
          subtitle="Selected collaborations that reflect our quality and impact."
          centered
        />
        <ReferenceSlider />
      </Container>
    </section>
  );
}

export default ReferencesSection;
