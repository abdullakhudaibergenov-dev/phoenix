import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import ReferenceDetailPage from '../components/references/ReferenceDetailPage';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import useScrollToTop from '../hooks/useScrollToTop';
import AboutPage from '../pages/AboutPage';
import ContactsPage from '../pages/ContactsPage';
import HomePage from '../pages/HomePage';
import ReferencesPage from '../pages/ReferencesPage';
import ServicesPage from '../pages/ServicesPage';

function AppRouter() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-app text-body">
      <Header />
      <Breadcrumbs />
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
      <ScrollToTopButton />
    </div>
  );
}

export default AppRouter;
