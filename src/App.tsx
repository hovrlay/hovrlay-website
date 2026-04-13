import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";
import AuthCallback from "@/components/AuthCallback";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import PaymentSuccess from "@/pages/PaymentSuccess";
import { OsDownloadButton } from "@/components/OsDownloadButton";

const CHROME_PATHS = new Set([
  "/",
  "/auth/callback",
  "/privacy-policy",
  "/terms"
]);

const AppContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we have a stored redirect path from 404.html
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== '/') {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

interface AppLayoutProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const AppLayout = ({ isDarkMode, onToggleDarkMode }: AppLayoutProps) => {
  const location = useLocation();
  const isLegalPage =
    location.pathname === "/privacy-policy" || location.pathname === "/terms";

  const isStandalonePage =
    location.pathname === "/payment-success" ||
    location.pathname === "/auth/callback" ||
    !CHROME_PATHS.has(location.pathname);

  return (
    <div className="min-h-screen bg-background">
      {!isStandalonePage ? (
        <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      ) : null}
      {isLegalPage ? (
        <div className="fixed top-6 right-3 z-[60] md:right-6">
          <OsDownloadButton />
        </div>
      ) : null}

      <AppContent />

      {!isStandalonePage ? <Footer /> : null}
    </div>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) { return saved === 'true'; }
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <AppLayout isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
    </Router>
  );
};

export default App;