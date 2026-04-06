import { Link } from 'react-router-dom';
import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';
import RevealOnScroll from '../common/RevealOnScroll';

const copyByLang = {
  en: {
    eyebrow: 'Company',
    title: 'Phoenix Corporate',
    description: 'We help organizations build resilient teams, strengthen operating models, and execute growth with confidence.',
    button: 'About Us →',
  },
  ru: {
    eyebrow: 'Компания',
    title: 'Phoenix Corporate',
    description: 'Мы помогаем компаниям создавать устойчивые команды, усиливать операционные модели и уверенно масштабироваться.',
    button: 'О нас →',
  },
  tr: {
    eyebrow: 'Şirket',
    title: 'Phoenix Corporate',
    description: 'Kuruluşların güçlü ekipler kurmasına, operasyonel modeli geliştirmesine ve güvenle büyümesine destek oluyoruz.',
    button: 'Hakkımızda →',
  },
};

function CompanyInfoSection() {
  const { language } = useLanguage();
  const copy = copyByLang[language] || copyByLang.en;

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
