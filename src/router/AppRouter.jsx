import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import useScrollToTop from '../hooks/useScrollToTop';
import AboutPage from '../pages/AboutPage';
import ContactsPage from '../pages/ContactsPage';
import HomePage from '../pages/HomePage';
import ReferencesPage from '../pages/ReferencesPage';
import ServicesPage from '../pages/ServicesPage';

function AppRouter() {
  useScrollToTop();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default AppRouter;
