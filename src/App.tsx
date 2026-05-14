import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";
import AuthCallback from "@/components/AuthCallback";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import PaymentSuccess from "@/pages/PaymentSuccess";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import { OsDownloadButton } from "@/components/OsDownloadButton";

const EXACT_CHROME_PATHS = new Set(["/", "/privacy-policy", "/terms"]);
const EXACT_LEGAL_PATHS = new Set(["/privacy-policy", "/terms"]);

const isBlogPath = (pathname: string) =>
  pathname === "/blog" || pathname.startsWith("/blog/");

const hasChrome = (pathname: string) =>
  EXACT_CHROME_PATHS.has(pathname) || isBlogPath(pathname);

const hasLegalChrome = (pathname: string) =>
  EXACT_LEGAL_PATHS.has(pathname) || isBlogPath(pathname);

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
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const AppLayout = () => {
  const location = useLocation();
  const isLegalPage = hasLegalChrome(location.pathname);
  const isStandalonePage = !hasChrome(location.pathname);

  return (
    <div className="min-h-screen bg-background">
      {!isStandalonePage ? (
        <Header />
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
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;