import { Link, useLocation, useNavigate } from "react-router-dom";
import EmailIcon from "@/assets/email.svg?react";
import XIcon from "@/assets/x.svg?react";
import LinkedInIcon from "@/assets/linkedin.svg?react";
import GitHubIcon from "@/assets/github.svg?react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/?section=${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) { element.scrollIntoView({ behavior: "smooth" }); }
    }
  };

  return (
    <footer className="bg-background border-t border-border pt-12 pb-8 mx-6 md:mx-12 lg:mx-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-3">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2 mb-2 hover:opacity-80 transition-opacity duration-200"
              aria-label="Go to home"
            >
              <img src="/logo.svg" alt="Hovrlay" className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">hovrlay</span>
            </Link>
            <p className="font-light text-muted-foreground mb-8 max-w-md">
            AI meeting assistant that provides live meeting notes, instant answers, and real-time insights during calls and interviews
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:hello@hovrlay.com" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Email us"
              >
                <EmailIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/hovrlay" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Follow us on X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/hovrlay" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Connect with us on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/hovrlay/hovrlay-releases" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="View our GitHub repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleSectionClick("features")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick("demo")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Demo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick("hero")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick("hero")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Download
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleSectionClick("faq")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a 
                  href="mailto:support@hovrlay.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="text-sm text-muted-foreground text-left">
            <span>&copy; 2025 Hovrlay. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
