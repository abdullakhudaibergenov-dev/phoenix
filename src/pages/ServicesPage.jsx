import serviceAdvisory from '../assets/illustrations/service-advisory.svg';
import serviceRecruitment from '../assets/illustrations/service-recruitment.svg';
import serviceTransformation from '../assets/illustrations/service-transformation.svg';
import useLanguage from '../hooks/useLanguage';
import Container from '../components/common/Container';
import RevealOnScroll from '../components/common/RevealOnScroll';
import SectionTitle from '../components/common/SectionTitle';

const blocks = {
  en: [
    { image: serviceAdvisory, title: 'Strategic Advisory', description: 'Executive-level consulting that aligns talent, operations, and growth priorities into one actionable roadmap.' },
    { image: serviceRecruitment, title: 'Recruitment Excellence', description: 'High-precision recruitment programs to attract qualified specialists and accelerate hiring outcomes.' },
    { image: serviceTransformation, title: 'Organizational Transformation', description: 'Structured initiatives that modernize HR architecture, leadership capability, and performance culture.' },
  ],
  ru: [
    { image: serviceAdvisory, title: 'Стратегический консалтинг', description: 'Консалтинг для руководителей, объединяющий таланты, операции и цели роста в единую дорожную карту.' },
    { image: serviceRecruitment, title: 'Рекрутмент-экспертиза', description: 'Точный подбор, который помогает привлекать сильных специалистов и ускорять найм.' },
    { image: serviceTransformation, title: 'Трансформация организации', description: 'Системные изменения в HR-архитектуре, лидерстве и культуре производительности.' },
  ],
  tr: [
    { image: serviceAdvisory, title: 'Stratejik Danışmanlık', description: 'Yetenek, operasyon ve büyüme hedeflerini tek bir uygulanabilir yol haritasında birleştiren üst düzey danışmanlık.' },
    { image: serviceRecruitment, title: 'İşe Alım Mükemmelliği', description: 'Nitelikli uzmanları çekmek ve işe alım sonuçlarını hızlandırmak için yüksek hassasiyetli işe alım programları.' },
    { image: serviceTransformation, title: 'Kurumsal Dönüşüm', description: 'İK mimarisini, liderlik kapasitesini ve performans kültürünü geliştiren yapılandırılmış dönüşüm girişimleri.' },
  ],
};

const titles = {
  en: { eyebrow: 'Services', title: 'Premium Services for Sustainable Growth', subtitle: 'Three focused solution areas designed for long-term corporate performance.' },
  ru: { eyebrow: 'Услуги', title: 'Премиальные услуги для устойчивого роста', subtitle: 'Три ключевых направления для долгосрочной корпоративной эффективности.' },
  tr: { eyebrow: 'Hizmetler', title: 'Sürdürülebilir Büyüme için Premium Hizmetler', subtitle: 'Uzun vadeli kurumsal performans için üç odaklı çözüm alanı.' },
};

function ServicesPage() {
  const { language } = useLanguage();
  const copy = titles[language] || titles.en;
  const serviceBlocks = blocks[language] || blocks.en;

  return (
    <section className="py-16">
      <Container>
        <SectionTitle eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />

        <div className="space-y-10">
          {serviceBlocks.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index * 100}>
              <article className="rounded-2xl border border-theme bg-surface p-6 shadow-card sm:p-8">
                <img src={service.image} alt={service.title} className="w-full rounded-xl border border-theme" />
                <h3 className="mt-6 text-3xl font-bold text-heading">{service.title}</h3>
                <p className="mt-4 max-w-4xl text-base leading-8 text-body">{service.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesPage;
