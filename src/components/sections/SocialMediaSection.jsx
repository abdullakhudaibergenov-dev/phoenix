import linkedinBg from '../../assets/social/linkedin-bg.svg';
import instagramBg from '../../assets/social/instagram-bg.svg';
import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';
import RevealOnScroll from '../common/RevealOnScroll';
import SectionTitle from '../common/SectionTitle';
import SocialCard from '../common/SocialCard';

const socialCopy = {
  en: { eyebrow: 'Social', title: 'Social Presence', subtitle: 'Connect with Phoenix across our official channels.', follow: 'Follow Us' },
  ru: { eyebrow: 'Соцсети', title: 'Социальное присутствие', subtitle: 'Следите за Phoenix в наших официальных каналах.', follow: 'Подписаться' },
  tr: { eyebrow: 'Sosyal', title: 'Sosyal Varlık', subtitle: 'Phoenix ile resmi sosyal kanallarımızda bağlantıda kalın.', follow: 'Takip Et' },
};

function SocialMediaSection() {
  const { language } = useLanguage();
  const copy = socialCopy[language] || socialCopy.en;

  return (
    <section className="pb-20">
      <Container>
        <RevealOnScroll>
          <SectionTitle eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          <RevealOnScroll>
            <SocialCard label="LinkedIn" image={linkedinBg} link="https://www.linkedin.com" followText={copy.follow} />
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <SocialCard label="Instagram" image={instagramBg} link="https://www.instagram.com" followText={copy.follow} />
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}

export default SocialMediaSection;
