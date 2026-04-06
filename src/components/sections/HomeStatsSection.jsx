import AnimatedCounter from '../common/AnimatedCounter';
import Container from '../common/Container';
import RevealOnScroll from '../common/RevealOnScroll';
import useLanguage from '../../hooks/useLanguage';

function HomeStatsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <Container>
        <RevealOnScroll>
          <div className="rounded-2xl border border-zinc-800 bg-surface p-8 shadow-card sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t.homeStats.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-gold sm:text-4xl">{t.homeStats.title}</h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.homeStats.items.map((item) => (
                <div key={item.label} className="border-l border-gold/40 pl-4">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                  <p className="mt-3 text-sm text-zinc-200">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

export default HomeStatsSection;
