import { Link } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';
import RevealOnScroll from '../common/RevealOnScroll';

function CompanyInfoSection() {
  const { t } = useLanguage();
  const copy = t.companyInfo;

  return (
    <section className="py-20">
      <Container>
        <RevealOnScroll>
          <div className="rounded-2xl border border-theme bg-surface p-8 shadow-card sm:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-heading">{copy.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-bold text-heading sm:text-5xl">{copy.title}</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-body">{copy.description}</p>
            <Link to="/about" className="mt-6 inline-flex rounded-lg border border-theme px-5 py-3 text-sm font-semibold text-body transition hover:border-[color:var(--heading)] hover:text-heading">
              {copy.button}
            </Link>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

export default CompanyInfoSection;
