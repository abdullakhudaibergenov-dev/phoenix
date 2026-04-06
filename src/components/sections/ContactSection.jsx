import useLanguage from '../../hooks/useLanguage';
import ContactForm from '../common/ContactForm';
import Container from '../common/Container';
import RevealOnScroll from '../common/RevealOnScroll';
import SectionTitle from '../common/SectionTitle';

function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contacts" className="py-20">
      <Container>
        <RevealOnScroll>
          <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />
        </RevealOnScroll>

        <div className="grid gap-8 lg:grid-cols-5">
          <RevealOnScroll className="lg:col-span-2">
            <div className="space-y-4 rounded-xl border border-theme bg-surface p-6 text-sm text-body">
              <h3 className="text-2xl font-semibold text-heading">{t.contact.infoTitle}</h3>
              <p>Ankara, Anadolu Bulivari, TR Invest Corner 2</p>
              <p>+90 533 038 37 73</p>
              <p>info@phoenix.tr</p>
              <p>{t.contact.hours}</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={120} className="lg:col-span-3">
            <ContactForm />
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
