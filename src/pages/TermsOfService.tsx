import { useEffect, useState } from "react";
import UpArrowIcon from "@/assets/up-arrow.svg?react";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.title = "Terms of Service | Hovrlay";
  }, []);

  useEffect(() => {
    const sections = [
      "acceptance-of-terms",
      "description-of-service",
      "user-accounts",
      "acceptable-use",
      "intellectual-property",
      "privacy-and-data-protection",
      "disclaimers",
      "limitation-of-liability",
      "termination",
      "governing-law",
      "contact-information"
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => 
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );
          setActiveSection(mostVisible.target.id);
        } else {
          setActiveSection("");
        }
      },
      {
        rootMargin: "-88px 0px -50% 0px",
        threshold: 0.1
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 mt-16 sm:mt-20 md:mt-24 lg:mt-32 lg:mr-16">
      <div className="text-left mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground mb-4 sm:mb-6">Terms of Service</h1>
        <p className="text-lg md:text-2xl font-light text-muted-foreground">
          Last updated on 28th of September, 2025
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Welcome to Hovrlay! These Terms of Service ("Terms") govern your use of our AI meeting assistant service and website. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
            </p>
          </div>

          {/* Placeholder sections - content to be added later */}
          <div id="acceptance-of-terms" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Acceptance of Terms</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="description-of-service" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Description of Service</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="user-accounts" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">User Accounts</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="acceptable-use" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Acceptable Use</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="intellectual-property" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Intellectual Property</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="privacy-and-data-protection" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Privacy and Data Protection</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="disclaimers" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Disclaimers</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="limitation-of-liability" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Limitation of Liability</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="termination" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Termination</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="governing-law" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Governing Law</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="contact-information" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Contact Information</h2>
            <p className="text-medium md:text-lg text-foreground mb-3 sm:mb-4 leading-relaxed font-light">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a 
                href="mailto:support@hovrlay.com" 
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                support@hovrlay.com
              </a>
            </p>
          </div>
        </div>

        {/* Table of Contents - Hidden on mobile, visible on lg+ */}
        <aside className="lg:col-span-1 hidden lg:block lg:ml-4">
          <nav className="sticky top-32 space-y-4" aria-label="On this page">
            <h2 className="text-sm font-medium tracking-tight text-foreground">On this page</h2>
            <ol className="flex flex-col gap-y-3">
              <li className="flex">
                <a 
                  href="#acceptance-of-terms" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "acceptance-of-terms" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Acceptance of Terms
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#description-of-service" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "description-of-service" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Description of Service
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#user-accounts" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "user-accounts" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  User Accounts
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#acceptable-use" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "acceptable-use" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Acceptable Use
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#intellectual-property" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "intellectual-property" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Intellectual Property
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#privacy-and-data-protection" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "privacy-and-data-protection" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Privacy and Data Protection
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#disclaimers" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "disclaimers" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Disclaimers
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#limitation-of-liability" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "limitation-of-liability" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Limitation of Liability
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#termination" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "termination" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Termination
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#governing-law" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "governing-law" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Governing Law
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#contact-information" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "contact-information" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Contact Information
                </a>
              </li>
            </ol>
            <div className="my-4 h-px w-full bg-border" aria-hidden="true"></div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex w-fit items-center gap-2 text-sm leading-snug tracking-tight text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <UpArrowIcon className="w-5 h-5" />
              Back to top
            </button>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default TermsOfService;
