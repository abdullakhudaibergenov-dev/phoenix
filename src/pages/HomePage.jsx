import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HeroSection from '../components/sections/HeroSection';
import ReferencesSection from '../components/sections/ReferencesSection';
import ServicesSection from '../components/sections/ServicesSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <ReferencesSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
