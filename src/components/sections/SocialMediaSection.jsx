import linkedinBg from '../../assets/social/linkedin-bg.svg';
import instagramBg from '../../assets/social/instagram-bg.svg';
import useLanguage from '../../hooks/useLanguage';
import Container from '../common/Container';
import RevealOnScroll from '../common/RevealOnScroll';
import SectionTitle from '../common/SectionTitle';
import SocialCard from '../common/SocialCard';

function SocialMediaSection() {
  const { t } = useLanguage();

  return (
    <section className="pb-20">
      <Container>
        <RevealOnScroll>
          <SectionTitle eyebrow={t.social.eyebrow} title={t.social.title} subtitle={t.social.subtitle} />
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          <RevealOnScroll>
            <SocialCard
              label={t.social.linkedin.label}
              title={t.social.linkedin.title}
              image={linkedinBg}
              link="https://www.linkedin.com"
              followText={t.social.followText}
            />
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <SocialCard
              label={t.social.instagram.label}
              title={t.social.instagram.title}
              image={instagramBg}
              link="https://www.instagram.com"
              followText={t.social.followText}
            />
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}

export default SocialMediaSection;
