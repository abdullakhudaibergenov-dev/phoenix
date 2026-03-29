import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import ReferenceDetailPage from '../components/references/ReferenceDetailPage';
import { PUBLIC_COMING_SOON_MODE } from '../config/featureFlags';
import useScrollToTop from '../hooks/useScrollToTop';
import AboutPage from '../pages/AboutPage';
import ComingSoonPage from '../pages/ComingSoonPage';
import ContactsPage from '../pages/ContactsPage';
import HomePage from '../pages/HomePage';
import ReferencesPage from '../pages/ReferencesPage';
import ServicesPage from '../pages/ServicesPage';

function FullSiteRoutes() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/references/:slug" element={<ReferenceDetailPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function ComingSoonRoutes() {
  return (
    <Routes>
      <Route path="*" element={<ComingSoonPage />} />
    </Routes>
  );
}

function AppRouter() {
  useScrollToTop();

  return PUBLIC_COMING_SOON_MODE ? <ComingSoonRoutes /> : <FullSiteRoutes />;
}

export default AppRouter;
