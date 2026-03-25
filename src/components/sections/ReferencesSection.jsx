import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import useLanguage from '../../hooks/useLanguage';
import { referencesData } from '../../data/referencesData';
import ReferenceOverviewCard from '../references/ReferenceOverviewCard';
import ReferencesMenu from '../references/ReferencesMenu';

function ReferencesSection() {
  const { t } = useLanguage();

  return (
    <section id="references" className="bg-surface py-20">
      <Container>
        <SectionTitle eyebrow={t.references.eyebrow} title={t.references.title} subtitle={t.references.subtitle} centered />
        <ReferencesMenu />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {referencesData.slice(0, 3).map((item) => (
            <ReferenceOverviewCard key={item.slug} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ReferencesSection;
