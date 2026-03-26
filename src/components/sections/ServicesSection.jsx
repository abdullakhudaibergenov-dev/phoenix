import Container from '../common/Container';

const heroImage =
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80';

const recruitmentImages = [
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    alt: 'Executive recruitment strategy meeting in a boardroom',
    caption: 'Executive Search Strategy',
  },
  {
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    alt: 'Analyst reviewing workforce planning and market intelligence',
    caption: 'Workforce Intelligence & Forecasting',
  },
];

function ServicesSection() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[52vh] items-center justify-center overflow-hidden border-b border-white/10"
        aria-labelledby="recruitment-hero-title"
      >
        <img
          src={heroImage}
          alt="Corporate recruitment and consulting environment"
          className="absolute inset-0 h-full w-full object-cover grayscale"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-[#0a0a0a]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_84%_72%,rgba(255,255,255,0.05),transparent_42%)]" />

        <Container className="relative z-10 flex flex-col items-center py-24 text-center md:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9d9d9]">
            Strategic Human Capital Advisory
          </p>
          <h1
            id="recruitment-hero-title"
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Recruitment
          </h1>
          <span className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#c8a24d]/70 to-transparent" />
        </Container>
      </section>

      <section className="bg-[#111111] py-20 md:py-24" aria-labelledby="strategic-talent-solutions">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
            <article className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#d9d9d9]">
                Strategic Talent Solutions
              </p>
              <div className="mb-8 h-px w-28 bg-gradient-to-r from-[#c8a24d]/55 via-white/25 to-transparent" />

              <h2
                id="strategic-talent-solutions"
                className="mb-8 text-3xl font-semibold leading-tight text-white md:text-4xl"
              >
                Precision recruitment programs built for international employers requiring confident, long-term hiring
                decisions.
              </h2>

              <div className="space-y-6 text-base leading-8 text-[#d9d9d9] md:text-lg">
                <p>
                  Our recruitment advisory model supports organizations that treat talent as a strategic asset rather than
                  a transactional need. We begin with a disciplined employer needs analysis to map business priorities,
                  leadership structure, and capability gaps, then translate those findings into focused workforce planning
                  frameworks that guide each hiring initiative.
                </p>
                <p>
                  Through targeted talent acquisition programs, we combine candidate sourcing, multistage screening, and
                  performance-based evaluation methods to identify professionals who can deliver measurable impact. Our
                  teams integrate role calibration, compensation context, and sector-specific market intelligence to ensure
                  each shortlist is both commercially realistic and competitively positioned.
                </p>
                <p>
                  With access to an international recruitment network across major business corridors, we provide broad yet
                  selective reach for specialist and executive mandates. This global access is strengthened by local labor
                  awareness, process governance, and workforce support services that include onboarding coordination,
                  payroll continuity planning, and post-placement stabilization.
                </p>
                <p>
                  We continuously refine recruitment process optimization through data-led review cycles, forecasting
                  insights, and stakeholder alignment workshops. The result is a consistent best-talent-match approach that
                  reduces hiring risk, improves retention quality, and creates long-term business value for employers
                  building resilient, future-ready teams.
                </p>
              </div>
            </article>

            <aside className="space-y-6 lg:pt-10" aria-label="Recruitment visuals">
              {recruitmentImages.map((image) => (
                <figure
                  key={image.src}
                  className="group overflow-hidden rounded-md border border-white/15 bg-[#1a1a1a] shadow-[0_18px_34px_rgba(0,0,0,0.48)] transition duration-500 hover:-translate-y-1 hover:border-[#c8a24d]/45 hover:shadow-[0_24px_42px_rgba(0,0,0,0.58)]"
                >
                  <div className="relative h-64 overflow-hidden md:h-72">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  </div>
                  <figcaption className="border-t border-white/10 px-5 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#a0a0a0] transition-colors duration-500 group-hover:text-[#d9d9d9]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[#0a0a0a] py-10">
        <Container>
          <p className="max-w-4xl text-sm leading-7 text-[#a0a0a0] md:text-base">
            Our engagement model aligns executive leadership, HR, and operational stakeholders through a structured
            governance cadence, ensuring recruitment outcomes remain aligned with growth strategy, workforce resilience,
            and long-range market positioning.
          </p>
        </Container>
      </section>
    </>
  );
}

export default ServicesSection;
