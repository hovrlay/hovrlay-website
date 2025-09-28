import { useEffect, useState } from "react";
import UpArrowIcon from "@/assets/up-arrow.svg?react";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.title = "Terms of Service | Hovrlay";
  }, []);

  useEffect(() => {
    const sections = [
      "definitions",
      "the-services",
      "customer-data",
      "restrictions-responsibilities-and-rights",
      "fees-payment-terms",
      "warranties",
      "confidential-information",
      "term-and-termination",
      "indemnity",
      "limitation-of-liability",
      "general-provisions",
      "contact-us"
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
              This Customer Terms of Service is entered into by and between Hovrlay ("Hovrlay") and the entity or person placing an order for or accessing any Services ("Customer" or "you"). If you are accessing or using the Services on behalf of your company, you represent that you are authorized to accept this Agreement on behalf of your company, and all references to "you" or "Customer" reference your company. Please note that if you sign up for the Services using an email address from your employer or another entity, then (1) you will be deemed to represent such party, (2) your acceptance will bind your employer or that entity to these terms, and (3) the words "Customer", "you" or "your" in this Agreement will refer to your employer or that entity.
            </p>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              This Agreement permits Customer to purchase subscriptions to online software-as-a-service products and other services from Hovrlay pursuant to any Hovrlay ordering documents, online registration, order descriptions or order confirmations referencing this Agreement ("Order Form(s)") and sets forth the basic terms and conditions under which those products and services will be delivered.
            </p>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              The "Effective Date" of this Agreement is the earlier of (a) Customer's initial access to the Services (as defined below) through any online provisioning, registration or order process or (b) the effective date of the first Order Form referencing this Agreement.
            </p>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <strong>PLEASE NOTE: IF YOU SUBSCRIBE TO THE SERVICES FOR A SUBSCRIPTION TERM, THEN YOUR SUBSCRIPTION AND THIS AGREEMENT WILL BE AUTOMATICALLY RENEWED FOR SUCCESSIVE BILLING PERIODS AT OUR THEN-CURRENT PRICING FOR SUCH SERVICES UNLESS YOU OPT OUT OF THE AUTO-RENEWAL IN ACCORDANCE WITH SECTION 8 BELOW.</strong>
            </p>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <strong>PLEASE NOTE: THAT SECTION 11.9 OF THIS AGREEMENT CONTAINS AN ARBITRATION AGREEMENT THAT REQUIRES MOST DISPUTES BETWEEN US TO BE RESOLVED ON AN INDIVIDUAL, NON-CLASS ACTION BASIS THROUGH BINDING AND FINAL ARBITRATION INSTEAD OF IN COURT. SEE SECTION 11.9 FOR MORE INFORMATION REGARDING THIS ARBITRATION CLAUSE AND HOW TO OPT OUT.</strong>
            </p>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <strong>BY INDICATING YOUR ACCEPTANCE OF THIS AGREEMENT OR ACCESSING OR USING ANY SERVICES, YOU ARE AGREEING TO BE BOUND BY ALL TERMS, CONDITIONS, AND NOTICES CONTAINED OR REFERENCED IN THIS AGREEMENT. IF YOU DO NOT AGREE TO THIS AGREEMENT, PLEASE DO NOT USE ANY SERVICES. FOR CLARITY, EACH PARTY EXPRESSLY AGREES THAT THIS AGREEMENT IS LEGALLY BINDING UPON IT.</strong>
            </p>
          </div>

          {/* Terms of Service Sections */}
          <div id="definitions" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">1. Definitions</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="the-services" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">2. The Services</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="customer-data" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">3. Customer Data</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="restrictions-responsibilities-and-rights" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">4. Restrictions, Responsibilities and Rights</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="fees-payment-terms" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">5. Fees; Payment Terms</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="warranties" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">6. Warranties</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="confidential-information" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">7. Confidential Information</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="term-and-termination" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">8. Term and Termination</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="indemnity" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">9. Indemnity</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="limitation-of-liability" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">10. Limitation of Liability</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="general-provisions" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">11. General Provisions</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Content to be added...
            </p>
          </div>

          <div id="contact-us" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Contact Us</h2>
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
                  href="#definitions" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "definitions" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  1. Definitions
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#the-services" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "the-services" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  2. The Services
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#customer-data" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "customer-data" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  3. Customer Data
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#restrictions-responsibilities-and-rights" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "restrictions-responsibilities-and-rights" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  4. Restrictions, Responsibilities and Rights
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#fees-payment-terms" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "fees-payment-terms" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  5. Fees; Payment Terms
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#warranties" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "warranties" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  6. Warranties
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#confidential-information" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "confidential-information" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  7. Confidential Information
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#term-and-termination" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "term-and-termination" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  8. Term and Termination
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#indemnity" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "indemnity" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  9. Indemnity
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
                  10. Limitation of Liability
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#general-provisions" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "general-provisions" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  11. General Provisions
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#contact-us" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "contact-us" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Contact Us
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
