import Container from '../common/Container';

const heroImage =
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80';

const recruitmentImages = [
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    alt: 'Executive recruitment strategy meeting in a modern boardroom',
    caption: 'Executive Search & Advisory',
  },
  {
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    alt: 'Corporate analyst reviewing workforce and talent data',
    caption: 'Talent Intelligence & Workforce Planning',
  },
];

function ServicesSection() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[50vh] items-center justify-center overflow-hidden border-b border-[#c8a24d]/25"
        aria-labelledby="recruitment-hero-title"
      >
        <img
          src={heroImage}
          alt="Professional corporate recruitment environment"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-[#0b0b0b]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,162,77,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_45%)]" />

        <Container className="relative z-10 flex flex-col items-center py-24 text-center md:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e3c173]">
            Strategic Human Capital Services
          </p>
          <h1
            id="recruitment-hero-title"
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Recruitment
          </h1>
          <span className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#c8a24d] to-transparent" />
        </Container>
      </section>

      <section className="bg-[#0f0f0f] py-20 md:py-24" aria-labelledby="strategic-talent-solutions">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
            <article className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b468]">
                Strategic Talent Solutions
              </p>
              <h2
                id="strategic-talent-solutions"
                className="mb-8 text-3xl font-semibold leading-tight text-white md:text-4xl"
              >
                Building resilient organizations through precision recruitment and market-led workforce strategy.
              </h2>

              <div className="space-y-6 text-base leading-8 text-zinc-300 md:text-lg">
                <p>
                  Our recruitment practice is designed for organizations that require disciplined growth, leadership
                  continuity, and measurable hiring outcomes. We begin with a structured employer needs analysis,
                  aligning each search with your operating model, commercial priorities, culture, and long-term talent
                  architecture. This allows us to define role profiles with strategic clarity rather than transactional
                  urgency.
                </p>
                <p>
                  Through integrated talent acquisition programs, we combine direct candidate sourcing, advanced
                  screening frameworks, and market intelligence to identify high-performing professionals across
                  specialist and executive functions. Every shortlist is supported by competency-based assessment,
                  compensation benchmarking, and risk-calibrated hiring recommendations so decision makers can proceed
                  with confidence.
                </p>
                <p>
                  Our international talent network spans key business hubs, enabling targeted access to qualified
                  candidates in competitive markets while maintaining local regulatory awareness. We support employers
                  with recruitment process optimization, onboarding advisory, and payroll and workforce support models
                  that strengthen retention and operational stability from day one.
                </p>
                <p>
                  By combining strategic workforce planning with deep sector expertise, we deliver the best talent-match
                  approach for both immediate appointments and future leadership pipelines. The result is long-term value
                  for employers: stronger teams, reduced hiring friction, and a recruitment function that performs as a
                  true strategic partner to the business.
                </p>
              </div>
            </article>

            <aside className="space-y-6 lg:pt-10" aria-label="Recruitment visuals">
              {recruitmentImages.map((image) => (
                <figure
                  key={image.src}
                  className="group overflow-hidden rounded-md border border-[#c8a24d]/45 bg-[#121212] shadow-[0_18px_34px_rgba(0,0,0,0.42)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(0,0,0,0.55)]"
                >
                  <div className="relative h-64 overflow-hidden md:h-72">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  </div>
                  <figcaption className="border-t border-[#c8a24d]/30 px-5 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ead39d]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ServicesSection;
