import Container from '../components/common/Container';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionTitle from '../components/common/SectionTitle';
import ReferenceOverviewCard from '../components/references/ReferenceOverviewCard';
import ReferencesMenu from '../components/references/ReferencesMenu';
import { referencesData } from '../data/referencesData';
import useLanguage from '../hooks/useLanguage';

function ReferencesPage() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <Container>
        <RevealOnScroll>
          <SectionTitle eyebrow={t.references.eyebrow} title={t.references.title} subtitle={t.references.subtitle} />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <ReferencesMenu />
        </RevealOnScroll>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {referencesData.map((item, index) => (
            <ReferenceOverviewCard key={item.slug} item={item} delay={index * 70} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ReferencesPage;
