import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ReferenceSlider from '../sliders/ReferenceSlider';

function ReferencesSection() {
  const { t } = useLanguage();

  return (
    <section id="references" className="bg-surface py-20">
      <Container>
        <SectionTitle eyebrow={t.references.eyebrow} title={t.references.title} subtitle={t.references.subtitle} centered />
  return (
    <section id="references" className="bg-surface py-20">
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
