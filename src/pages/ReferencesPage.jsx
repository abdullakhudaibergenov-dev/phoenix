import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionTitle from '../components/common/SectionTitle';
import { referencesData } from '../data/referencesData';
import useLanguage from '../hooks/useLanguage';

function ReferencesPage() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16">
      <Container>
        <RevealOnScroll>
          <SectionTitle
            eyebrow={t.references.eyebrow}
            title={t.references.title}
            subtitle="A curated showcase of organizations that trust Phoenix."
          />
        </RevealOnScroll>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {referencesData.map((item, index) => {
            const content = item.content[language] || item.content.en;
            return (
              <RevealOnScroll key={item.slug} delay={index * 70}>
                <Link
                  to={`/references/${item.slug}`}
                  className="flex h-40 items-center justify-center rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                  <img src={item.logo} alt={`${content.companyName} logo`} className="max-h-16 w-auto object-contain" />
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ReferencesPage;
