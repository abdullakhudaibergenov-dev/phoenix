import { useMemo, useState } from 'react';
import Container from '../components/common/Container';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionTitle from '../components/common/SectionTitle';
import companyLogo from '../assets/logos/company-placeholder.svg';
import phoenixLogo from '../assets/phoenix-logo.svg';
import avatarLogo from '../assets/logos/avatar-placeholder.svg';
import useLanguage from '../hooks/useLanguage';

const filtersByLang = {
  en: ['Hospitality', 'Manufacturing', 'Construction'],
  ru: ['Гостиницы', 'Производство', 'Строительство'],
  tr: ['Konaklama', 'Üretim', 'İnşaat'],
};

const logos = [companyLogo, phoenixLogo, avatarLogo];

const showcase = [
  { name: 'Orion Hotels', category: 'Hospitality' },
  { name: 'Blue Haven Resort', category: 'Hospitality' },
  { name: 'Summit Suites', category: 'Hospitality' },
  { name: 'Apex Steel', category: 'Manufacturing' },
  { name: 'Nordic Components', category: 'Manufacturing' },
  { name: 'Luma Industrial', category: 'Manufacturing' },
  { name: 'TR Build Group', category: 'Construction' },
  { name: 'Ankara Infra', category: 'Construction' },
  { name: 'UrbanCore Projects', category: 'Construction' },
];

function ReferencesPage() {
  const { language } = useLanguage();
  const filters = filtersByLang[language] || filtersByLang.en;
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const reverseMap = {
    [filters[0]]: 'Hospitality',
    [filters[1]]: 'Manufacturing',
    [filters[2]]: 'Construction',
  };

  const filtered = useMemo(
    () => showcase.filter((item) => item.category === reverseMap[activeFilter]),
    [activeFilter],
  );

  return (
    <section className="py-16">
      <Container>
        <RevealOnScroll>
          <SectionTitle
            eyebrow={language === 'ru' ? 'Кейсы' : language === 'tr' ? 'Referanslar' : 'References'}
            title={language === 'ru' ? 'Наши корпоративные партнеры' : language === 'tr' ? 'Kurumsal İş Ortaklarımız' : 'Our Corporate Partners'}
            subtitle={language === 'ru' ? 'Минималистичная витрина клиентов по ключевым направлениям.' : language === 'tr' ? 'Temel sektörlere göre sade müşteri vitrini.' : 'A minimal client showcase across key industry verticals.'}
          />
        </RevealOnScroll>

        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? 'border-[color:var(--heading)] bg-[color:var(--heading)] text-black'
                  : 'border-theme bg-surface text-body hover:text-heading'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item, index) => (
            <RevealOnScroll key={item.name} delay={index * 60}>
              <article className="flex h-40 items-center justify-center rounded-xl border border-[color:var(--heading)] bg-surface p-6 shadow-sm transition duration-300 hover:scale-[1.02] hover:shadow-md">
                <img src={logos[index % logos.length]} alt={`${item.name} logo`} className="max-h-14 w-auto object-contain" />
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ReferencesPage;
