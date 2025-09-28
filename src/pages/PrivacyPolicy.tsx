import { useEffect, useState } from "react";
import UpArrowIcon from "@/assets/up-arrow.svg?react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.title = "Privacy Policy | Hovrlay";
  }, []);

  useEffect(() => {
    const sections = [
      "scope-and-applicability",
      "what-information-do-we-collect",
      "how-we-use-your-information",
      "how-do-we-secure-your-personal-information",
      "data-retention",
      "managing-your-privacy",
      "how-we-respond-to-do-not-track-signals",
      "region-specific-disclosures",
      "children-under-16",
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground mb-4 sm:mb-6">Privacy Policy</h1>
        <p className="text-lg md:text-2xl font-light text-muted-foreground">
          Last updated on 28th of September, 2025
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">

          <div className="mb-8 sm:mb-10 md:mb-12">
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Your privacy is important to us. This Privacy Policy ("Policy") applies to services provided by Hovrlay, Inc. ("we", "us", or "Hovrlay") and our website (the "Site"), product pages, mobile or web applications, or other digital products that link to or reference this Policy (collectively, the "Services") and explains what information we collect from users of our Services (a "user", "you", or "your"), including information that may be used to personally identify you ("Personal Information") and how we use it. We encourage you to read the details below. This Policy applies to any visitor to or user of our Services. Any capitalized terms used herein but not defined shall have the meaning set forth in our Terms of Service, available at{" "}
              <a 
                href="https://hovrlay.com/terms" 
                className="text-primary hover:text-primary/80 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://hovrlay.com/terms
              </a>
              .
            </p>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              We reserve the right to change this Policy at any time. We will notify you of any changes to this Policy by posting a new Policy to this page and/or by sending notice to the primary email address specified in your account. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically reviewing this Policy to check for any changes. Changes to this Policy are effective when they are posted on this page. You acknowledge that your continued use of our Services after we publish or send a notice about our changes to this Policy means that the collection, use and sharing of your Personal Information is subject to the updated Policy.
            </p>
          </div>

          <div id="scope-and-applicability" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Scope and Applicability</h2>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              The Policy applies to your information when you visit our website or otherwise use the Services. Please note that this Policy does not apply to the extent that we process Personal Information in the role of a processor (or a comparable role such as a "service provider" in certain jurisdictions) on behalf of our Customers, including where we collect Customer Data on behalf of our Customers, or where our Customers otherwise collect, use, share or process Personal Information via our Services. Each of our Customers, not Hovrlay, controls what information about you is collected by the Services on behalf of such Customer. For detailed privacy information applicable to situations where a Customer who uses the Services is the controller, please reach out to the respective customer directly. We are not responsible for the privacy or data security practices of our Customers, which may differ from those set forth in this Privacy Policy. If not stated otherwise either in this Privacy Policy or in a separate disclosure, we process such Personal Information in the role of a processor or service provider on behalf of a Customer (and/or its affiliates), who is the responsible controller of the applicable Personal Information.
            </p>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              This Privacy Policy also does not apply to any third-party applications or services that are used in connection with our Services, or any other products, services or accounts provided by other entities under their own terms of service and privacy policy (collectively, "Third-Party Services"). For example, a Customer may connect, directly or through another application, third party applications and platforms, and other products and services to Hovrlay. These Third-Party Services are not part of our Services and are provided by independent third parties under their policies and terms. Lastly, the Site or Services may contain links to other websites. We have no control over these websites and they are subject to their own terms of use and privacy policies.
            </p>
          </div>

      <div className="max-w-none">
        <section id="what-information-do-we-collect" className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">What Information Do We Collect?</h2>
          
          <div className="text-medium md:text-lg text-foreground mb-6 sm:mb-8 leading-relaxed font-light">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">Information You Provide to Us</h3>
            
            <ul className="privacy-list text-medium md:text-lg text-foreground space-y-1 sm:space-y-2 leading-relaxed font-light pl-4 sm:pl-6">
              <li><strong>Account Information.</strong> To create an account for the Services or to enable certain features, we may require that you provide us with information for your account such as name, email, profile picture, password, and authentication credentials.</li>
              <li><strong>Recordings and Other Customer Data.</strong> In using our Services, our customers may submit or upload, or instruct Hovrlay to collect, audio recordings, transcriptions and/or screenshots, seek customer support, or provide other Customer Data (defined in our Terms of Service) to us. Our use of and processing of Customer Data is governed by our Terms of Service or other services agreement with the Customer.</li>
              <li><strong>Business Contact Information.</strong> If you are a business representative, we collect your information in connection with the performance of the agreement or potential agreement with us. This information may include your first name, last name, Hovrlay contact information (e.g., email, phone, address), job title, and any other information related to the performance of the agreement with us.</li>
              <li><strong>Other Information You Provide.</strong> We receive other information from you when you choose to interact with us in other ways, such as if you sign up for one of our webinars or newsletters, participate in a research study or event, or otherwise communicate with us.</li>
            </ul>
          </div>

          <div className="text-medium md:text-lg text-foreground mb-6 sm:mb-8 leading-relaxed font-light">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">Information We Collect Automatically</h3>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              When you visit, use, and interact with the Services, we may receive the following information about your visit, use, or interactions ("Technical Information"):
            </p>
            
            <ul className="privacy-list text-medium md:text-lg text-foreground space-y-1 sm:space-y-2 leading-relaxed font-light pl-4 sm:pl-6">
              <li><strong>Log Data.</strong> Information that your browser automatically sends whenever you use our website ("log data"). Log data includes your internet protocol address, browser type and settings, the date and time of your request, and how you interacted with our website.</li>
              <li><strong>Usage Data.</strong> We may automatically collect information about your use of the Services, such as the types of content that you view or engage with, the features you use and the actions you take, as well as your time zone, country, the dates and times of access, user agent and version, type of computer or mobile device, computer connection, IP address, and the like.</li>
              <li><strong>Device Information.</strong> Includes name of the device, operating system, and browser you are using. Information collected may depend on the type of device you use and its settings.</li>
              <li><strong>Analytics.</strong> We may use a variety of online analytics products that use cookies to help us analyze how users use our Services and enhance your experience when you use the Services.</li>
              <br />
              We use cookies and other tracking technologies to help us collect and process Technical Information. Please see the "Cookies and Tracking" section below for more information.
            </ul>
          </div>

          <div className="text-medium md:text-lg text-foreground leading-relaxed font-light">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">Information We Receive from Third Parties</h3>
            
            <ul className="privacy-list text-medium md:text-lg text-foreground space-y-1 sm:space-y-2 leading-relaxed font-light pl-4 sm:pl-6">
              <li><strong>Third-Party Authentication.</strong> If you sign up or login to our Services using one of our sign-on providers (e.g., Google, Github, etc.), we collect authentication information provided to us by the provider to allow you to log in.</li>
              <li><strong>Marketing Information.</strong> We may receive marketing or demographic information about you from third parties or partners, for example, data about your organization or industry or other public information from sources like social media or online professional profiles.</li>
              <li><strong>Service Providers.</strong> We may receive information from our service providers, who help us operate our business.</li>
              <li><strong>Information from Other Sources.</strong> We may obtain information from other sources, including, but not limited to, publicly available sources, third-party data providers, brand partnerships, and third-party integrations you consent to, or through transactions such as mergers and acquisitions. We may combine this information with other information we collect from or about you.</li>
            </ul>
          </div>
        </section>

        <section id="how-we-use-your-information" className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">How Do We Use The Information We Collect?</h2>
          <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
            We use the information we collect:
          </p>
          <ul className="privacy-list text-medium md:text-lg text-foreground space-y-1 sm:space-y-2 leading-relaxed font-light pl-4 sm:pl-6">
            <li>To deliver and improve the Services and your overall user experience</li>
            <li>To protect, investigate, and deter against fraudulent, unauthorized, or illegal activity</li>
            <li>To link or combine user information with other Personal Information</li>
            <li>To develop, improve or expand our business, products and services</li>
            <li>To conduct internal reporting, auditing, and research, including focus groups and surveys</li>
            <li>To compare and verify information for accuracy and update our records</li>
            <li>To email, message, or otherwise contact you with information and updates about us and the Services</li>
            <li>To respond to your comments and questions and provide customer service</li>
            <li>To send you information including confirmations, invoices, technical notices, updates, security alerts, and support and administrative messages</li>
            <li>To analyze how you use the Services with tools, such as Posthog and other analytics tools, to help us understand traffic patterns and know if there are problems with the Services</li>
            <li>To combine information with other data we already have to improve your experience with our Services or inform you of products and services we think may be of interest to you</li>
            <li>In connection with a merger, acquisition, reorganization or similar transaction</li>
            <li>When required by law or to respond to legal process</li>
            <li>To protect our users, other individual lives, and/or the rights or property of Hovrlay</li>
            <li>To maintain the security of the Services</li>
            <li>At your direction or instruction, or for any other purpose with your consent</li>
            <li>To create aggregate and de-identified data. We will maintain such data in a de-identified form and will not attempt to re-identify any de-identified data, except that we may attempt to re-identify the data solely for the purpose of determining whether our deidentification processes are compliant with applicable laws</li>
          </ul>
        </section>

        <section id="how-do-we-secure-your-personal-information" className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">How Do We Secure Your Personal Information?</h2>
          <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
            We take reasonable steps to protect your Personal Information against unauthorized access, alteration, disclosure, misuse, or destruction. Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure. The safety and security of your Personal Information also depends on you. If you have an account with us, you are responsible for keeping your membership details confidential. Your account is protected by your account password and we urge you to take steps to keep your Personal Information safe by not disclosing your password and by logging out of your account after each use. We further protect your Personal Information from potential security breaches by implementing certain technological security measures including encryption, firewalls and secure socket layer technology. However, these measures do not guarantee that your Personal Information will not be accessed, disclosed, altered or destroyed by breach of such firewalls and secure server software. By using the Services, you acknowledge that you understand and agree to assume these risks.
          </p>
        </section>

        <section id="data-retention" className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Data Retention</h2>
          <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
            We retain your Personal Information while your account is in existence or as needed to provide the Services to you. This includes data you or others provided to us and data generated or inferred from your use of the Services. Please note that we may retain information that is otherwise deleted in de-identified and aggregated form, in archived or backup copies as required pursuant to records retention obligations, or otherwise as required by law. We may retain an archived copy of your records as required by law or for legitimate business purposes. We will also retain certain Technical Information for internal analysis purposes or to improve the functionality of our Services.
          </p>
        </section>

        <section id="managing-your-privacy" className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Managing Your Privacy</h2>
          <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
            All users may request to review, update, correct or delete the Personal Information furnished by a user in their user account by contacting us at{" "}
            <a 
              href="mailto:support@hovrlay.com" 
              className="text-primary hover:text-primary/80 transition-colors duration-200"
            >
              support@hovrlay.com
            </a>
            {" "}or by accessing your user account. For your protection, we may only share and update the Personal Information associated with the specific email address that you use to send us your request, and we may need to verify your identity before doing so. We will try to comply with such requests in a reasonably timely manner. If you completely and permanently delete all of your Personal Information, then your user account may become deactivated. If you wish to cancel your account, you may do so through your account page, and any personally identifiable information associated with your account will be deleted as soon as is reasonably practical or as required by applicable law. Please note that we may retain information that is otherwise deleted in de-identified and aggregated form, in archived or backup copies as required pursuant to records retention obligations, or otherwise as required by law. We may retain an archived copy of your records as required by law or for legitimate business purposes.
          </p>
          <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
            We may use some of the information we collect for marketing purposes, including to send you promotional communications about new Company features, products, events, or other opportunities. If you wish to stop receiving these communications or to opt out of use of your information for these purposes, please follow the opt-out instructions, such as clicking "Unsubscribe" (or similar opt-out language) in those communications. You may also change your marketing email preferences via your account settings.
          </p>
        </section>

        <section id="how-we-respond-to-do-not-track-signals" className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">How We Respond to Do Not Track Signals</h2>
          <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
            Your browser settings may allow you to automatically transmit a Do Not Track signal to websites and other online services you visit. We do not alter our practices when we receive a Do Not Track signal from a visitor's browser because we do not track our visitors to provide targeted advertising.
          </p>
          <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
            To find out more about Do Not Track, please visit{" "}
            <a 
              href="http://www.allaboutdnt.com" 
              className="text-primary hover:text-primary/80 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.allaboutdnt.com
            </a>
            .
          </p>
        </section>







        <section id="region-specific-disclosures" className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Region-Specific Disclosures</h2>
          
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">A Note to Users Outside India</h3>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Hovrlay is based in India. The Services are controlled and operated by us from India and are not intended to subject us to the laws or jurisdiction of any state, country or territory other than that of the laws of the country(ies) where the Services are controlled. Your Personal Information may be stored and processed in any country where we have facilities or in which we engage service providers, and by using the Services you consent to the transfer of information to countries outside of your country of residence, including India, which may have data protection rules that are different from those of your country. In certain circumstances, courts, law enforcement agencies, regulatory agencies or security authorities in those other countries may be entitled to access your Personal Information.
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">A Note to European Residents</h3>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              We typically will process your information pursuant to the following legal bases:
            </p>
            <ul className="privacy-list text-medium md:text-lg text-foreground space-y-1 sm:space-y-2 leading-relaxed font-light pl-4 sm:pl-6">
              <li><strong>With your consent</strong></li>
              <li><strong>As necessary to perform our agreement</strong> to provide Services to you</li>
              <li><strong>As necessary for our legitimate interests</strong></li>
            </ul>
            <br />
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              We also may process your information where it is necessary to comply with a legal obligation to which we are subject.
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">Your Rights</h3>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              The laws of certain jurisdictions may provide data subjects with various rights in connection with the processing of Personal Information, including:
            </p>
            <ul className="privacy-list text-medium md:text-lg text-foreground space-y-1 sm:space-y-2 leading-relaxed font-light pl-4 sm:pl-6">
              <li>The right to withdraw any previously provided consent</li>
              <li>The right to access certain information about you that we process</li>
              <li>The right to have us correct or update any personal information</li>
              <li>The right to have certain personal information erased</li>
              <li>The right to have us temporarily block our processing of certain personal information</li>
              <li>The right to have personal information exported into common machine-readable format</li>
              <li>The right to object to our processing of personal information in cases of direct marketing, or when we rely on legitimate interests as our lawful basis to process your information</li>
              <li>The right to lodge a complaint with the appropriate data protection authority</li>
            </ul>
            <br />
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Where we are deemed a data controller under the laws of certain jurisdictions, we will take steps to help ensure that you are able to exercise your rights regarding Personal Information about you in accordance with applicable law. To do so, you may contact us at{" "}
              <a 
                href="mailto:support@hovrlay.com" 
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                support@hovrlay.com
              </a>
              . Please note these rights may be limited in certain circumstances as provided by applicable law. We will promptly review all such requests in accordance with applicable laws. Depending on where you live, you may also have a right to lodge a complaint with a supervisory authority or other regulatory agency if you believe that we have violated any of the rights concerning Personal Information about you. We encourage you to first reach out to us at{" "}
              <a 
                href="mailto:support@hovrlay.com" 
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                support@hovrlay.com
              </a>
              , so we have an opportunity to address your concerns directly before you do so.
            </p>
            <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              Under the laws of certain jurisdictions, when processing personal data of data subjects in connection with the provision of Services to our Customers, we may be deemed a 'data processor' while our Customers are deemed 'data controllers'. Where we are deemed a data processor, you should contact our Customer, the data controller, to pursue any such legal data subject rights. We will reasonably cooperate with our Customers to support and comply with any such data subject rights requests.
            </p>
          </div>
        </section>

        <section id="children-under-16" className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Children Under 16</h2>
          <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
            The Services are not directed to individuals who are under age of sixteen (16) and we do not solicit nor knowingly collect Personal Information from children under the age of sixteen (16).
          </p>
          <p className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
            If you believe that we have unknowingly collected any Personal Information from someone under the age of sixteen (16), please contact us immediately at{" "}
            <a 
              href="mailto:support@hovrlay.com" 
              className="text-primary hover:text-primary/80 transition-colors duration-200"
            >
              support@hovrlay.com
            </a>
            {" "}and the information will be deleted.
          </p>
        </section>

        <section id="contact-us" className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">Contact Us</h2>
          <p className="text-medium md:text-lg text-foreground mb-3 sm:mb-4 leading-relaxed font-light">
            If you have any questions about this privacy policy, please contact us at{" "}
            <a 
              href="mailto:support@hovrlay.com" 
              className="text-primary hover:text-primary/80 transition-colors duration-200"
            >
              support@hovrlay.com
            </a>
          </p>
        </section>
          </div>
        </div>

        {/* Table of Contents - Hidden on mobile, visible on lg+ */}
        <aside className="lg:col-span-1 hidden lg:block lg:ml-4">
          <nav className="sticky top-32 space-y-4" aria-label="On this page">
            <h2 className="text-sm font-medium tracking-tight text-foreground">On this page</h2>
            <ol className="flex flex-col gap-y-3">
              <li className="flex">
                <a 
                  href="#scope-and-applicability" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "scope-and-applicability" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Scope and Applicability
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#what-information-do-we-collect" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "what-information-do-we-collect" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  What Information Do We Collect?
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#how-we-use-your-information" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "how-we-use-your-information" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  How Do We Use The Information We Collect?
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#how-do-we-secure-your-personal-information" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "how-do-we-secure-your-personal-information" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  How Do We Secure Your Personal Information?
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#data-retention" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "data-retention" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Data Retention
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#managing-your-privacy" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "managing-your-privacy" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Managing Your Privacy
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#how-we-respond-to-do-not-track-signals" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "how-we-respond-to-do-not-track-signals" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  How We Respond to Do Not Track Signals
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#region-specific-disclosures" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "region-specific-disclosures" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Region-Specific Disclosures
                </a>
              </li>
              <li className="flex">
                <a 
                  href="#children-under-16" 
                  className={`text-sm leading-snug font-normal transition-colors duration-300 ${
                    activeSection === "children-under-16" 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Children Under 16
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

export default PrivacyPolicy;