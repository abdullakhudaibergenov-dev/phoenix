import ContactSection from '../components/sections/ContactSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HeroSection from '../components/sections/HeroSection';
import HomeStatsSection from '../components/sections/HomeStatsSection';
import ReferencesSection from '../components/sections/ReferencesSection';
import ServicesSection from '../components/sections/ServicesSection';
import SocialMediaSection from '../components/sections/SocialMediaSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HomeStatsSection />
      <ServicesSection />
      <ReferencesSection />
      <ContactSection />
      <SocialMediaSection />
    </>
  );
}

export default HomePage;
