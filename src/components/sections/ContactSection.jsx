import ContactForm from '../common/ContactForm';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

function ContactSection() {
  return (
    <section id="contacts" className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let’s Build Something Great Together"
          subtitle="Reach out to discuss your goals and get a customized solution plan."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 rounded-xl border border-gold/30 bg-primary p-6 text-sm text-zinc-300 lg:col-span-2">
            <h3 className="text-xl font-semibold text-gold">Contact Information</h3>
            <p>123 Business Avenue, New York, NY 10001</p>
            <p>+1 (555) 100-2000</p>
            <p>hello@phoenixcorp.com</p>
            <p>Mon - Fri: 09:00 - 18:00</p>
            <div className="pt-2 text-lg text-gold">◯ ◯ ◯ ◯</div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
