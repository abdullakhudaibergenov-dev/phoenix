import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const aboutBlocks = [
  {
    title: 'Phoenix',
    description:
      'Phoenix is a premium corporate advisory partner focused on building resilient teams, efficient operations, and measurable growth outcomes.',
  },
  {
    title: 'Mission',
    description:
      'Our mission is to empower organizations with strategic people solutions that improve performance, strengthen culture, and accelerate long-term success.',
  },
  {
    title: 'Vision',
    description:
      'Our vision is to be the most trusted black-and-gold standard in corporate consulting by combining clarity, excellence, and execution.',
  },
];

function AboutSection() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionTitle
          eyebrow="About"
          title="Built Around Phoenix, Mission, and Vision"
          subtitle="A concise corporate profile with clear identity and purpose."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {aboutBlocks.map((block) => (
            <article key={block.title} className="rounded-2xl border border-zinc-800 bg-surface p-7 shadow-card">
              <h3 className="text-xl font-semibold text-gold">{block.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{block.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
