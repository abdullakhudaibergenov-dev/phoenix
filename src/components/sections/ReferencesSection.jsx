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
        <ReferenceSlider />
      </Container>
    </section>
  );
}

export default ReferencesSection;
