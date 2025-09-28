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
        }
      },
      {
        rootMargin: "-88px 0px -35% 0px",
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
              This Customer Terms of Service is entered into by and between Hovrlay ("Hovrlay") and the entity or person placing an order for or accessing any Services ("Customer" or "you"). If you are accessing or using the Services on behalf of your company, you represent that you are authorized to accept this Agreement on behalf of your company, and all references to "you" or "Customer" reference your company. <strong>Please note that if you sign up for the Services using an email address from your employer or another entity, then (1) you will be deemed to represent such party, (2) your acceptance will bind your employer or that entity to these terms, and (3) the words "Customer", "you" or "your" in this Agreement will refer to your employer or that entity.</strong>
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
            <div className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <ul className="privacy-list text-medium md:text-lg text-foreground space-y-1 sm:space-y-2 leading-relaxed font-light pl-4 sm:pl-6">
                <li><strong>"Affiliate"</strong> means, with respect to a party, any entity which directly or indirectly Controls, is Controlled by, or is under common Control with such party.</li>
                <li><strong>"Agreement"</strong> means this Customer Terms of Service, any Order Forms, and any attachments, linked policies or documents referenced in the foregoing.</li>
                <li><strong>"Beta Services"</strong> means services or features identified as "alpha," "beta," "preview," "early access," or "evaluation," or words or phrases with similar meanings.</li>
                <li><strong>"Hovrlay Materials"</strong> means all software, specifications, documentation and systems and any and all other information, data, documents, materials, works and other content, devices, methods, processes, hardware and other technologies and inventions, technical or functional descriptions, requirements, plans or reports, that are provided or used by Hovrlay in connection with the Services or otherwise comprise or relate to the Services or the Platform. Hovrlay Materials do not include Customer Data.</li>
                <li><strong>"Control"</strong> means 50% or greater voting power, or otherwise having the power to govern the financial and the operating policies or to appoint the management of an organization.</li>
                <li><strong>"Customer Chosen Third-Party Product"</strong> means a product, service, application, functionality, or content that is provided by a third-party or by Customer and that Customer or any of its Authorized Users chooses to interoperate or use in connection with the Services.</li>
                <li><strong>"Customer Data"</strong> means any data in electronic form that Customer or Users make available through the Platform or that is otherwise collected by Hovrlay on behalf of Customer or its Users.</li>
                <li><strong>"Documentation"</strong> means Hovrlay's user guides and other end user documentation for the Services made available by Hovrlay to its customers generally.</li>
                <li><strong>"Fees"</strong> means any fees payable for the Services under the Order Form.</li>
                <li><strong>"Force Majeure Event"</strong> means an event which is unforeseeable, beyond the control of the party affected, and cannot be remedied by the exercise of reasonable diligence, including without limitation: acts of God, acts of government, flood, fire, earthquakes, civil unrest, acts of terror, strikes, computer, telecommunications, Internet service provider or hosting facility failures or delays involving hardware, software or power systems not within Hovrlay's possession or reasonable control, and denial of service attacks.</li>
                <li><strong>"Services"</strong> means the services that Hovrlay will provide to Customer under this Agreement as described in the applicable Order Form.</li>
                <li><strong>"Usage Data"</strong> means any diagnostic and usage-related information and data from the use, performance and operation of the Platform and Services that may include, but is not limited to, usage patterns, traffic logs, and User engagement with the Platform and Services.</li>
                <li><strong>"Users"</strong> means employees, agents, consultants or other representatives authorized by Customer to access or use the Services.</li>
              </ul>
            </div>
          </div>

          <div id="the-services" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">2. The Services</h2>
            
            <div className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">2.1 Services</h3>
              <p className="mb-4">Subject to the terms and conditions set forth in this Agreement and the applicable Order Form, Hovrlay grants to Customer a limited, non-transferable, non-assignable (except as set forth in the Agreement), non-exclusive right to access and use the Services during the Subscription Period for its lawful internal business purposes solely in the form provided by Hovrlay and as permitted by the functionalities provided by Hovrlay therein.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">2.2 Software</h3>
              <p className="mb-4">Hovrlay may make Software available as part of the Services. Subject to the terms and conditions set forth in this Agreement and the applicable Order Form, Hovrlay grants to Customer and its Users a limited non-exclusive, non-transferable, non-sublicensable license to download and install the Software to the extent necessary to use the Services. Software may update automatically. To the extent a component of the Software contains any open source software, the open source license for that software will govern with respect to that component.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">2.3 Hovrlay Ownership</h3>
              <p className="mb-4">All rights and title in and to the Platform, the Services, Software, Usage Data, Aggregate and De-Identified Data, Hovrlay Materials and Documentation, including all enhancements, derivatives, and improvements to the foregoing and all Intellectual Property Rights inherent therein, belong exclusively to Hovrlay and its licensors. No rights are granted to Customer other than as expressly set forth in this Agreement. Nothing herein shall be construed as prohibiting Hovrlay from utilizing the Usage Data for purposes of operating Hovrlay's business; provided that Hovrlay will not disclose any Usage Data to any third-party in a manner that could identify Customer or any individual.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">2.4 Customer Chosen Third-Party Products</h3>
              <p className="mb-4">The Platform may contain features designed to interoperate with Customer Chosen Third-Party Products. Such Customer Chosen Third-Party Products are not under Hovrlay's control, and Hovrlay makes no representations or warranties with respect to, is not responsible or liable for, and does not endorse any Customer Chosen Third-Party Products. Customer and its Authorized Users use all such Customer Chosen Third-Party Products at their own risk and will need to make their own independent judgment regarding any interaction or interoperation between them and the Services. Any acquisition by Customer of Customer Chosen Third-Party Products, and any exchange of Customer Data between Customer and any Customer Chosen Third-Party Product provider, product or service, is solely between Customer and the applicable Customer Chosen Third-Party Product provider. Hovrlay is not responsible for any disclosure, modification or deletion of Customer Data resulting from access by any Customer Chosen Third-Party Product or its provider. Customer is solely responsible for ensuring that it has all necessary licenses and rights to use the Customer Chosen Third-Party Product for the purposes contemplated herein.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">2.5 Free Services</h3>
              <p className="mb-4">Use of Free Services is subject to the terms and conditions of this Agreement. In the event of a conflict between this section and any other portion of this Agreement, this section shall control. Free Services are provided to Customer without charge up to certain limits as described in the Documentation. Usage over these limits requires Customer's purchase of additional resources or services. Customer agrees that Hovrlay, in its sole discretion and for any or no reason, may terminate Customer's access to the Free Services or any part thereof. Customer agrees that any termination of Customer's access to the Free Services may be without prior notice, and Customer agrees that Hovrlay will not be liable to Customer or any third party for such termination.</p>
              <p className="mb-4"><strong>NOTWITHSTANDING THE "REPRESENTATIONS, WARRANTIES, EXCLUSIVE REMEDIES AND DISCLAIMERS" SECTION AND "HOVRLAY INDEMNIFICATION" SECTION BELOW, THE FREE SERVICES ARE PROVIDED "AS-IS" WITHOUT ANY WARRANTY AND HOVRLAY SHALL HAVE NO INDEMNIFICATION OBLIGATIONS NOR LIABILITY OF ANY TYPE WITH RESPECT TO THE FREE SERVICES UNLESS SUCH EXCLUSION OF LIABILITY IS NOT ENFORCEABLE UNDER APPLICABLE LAW IN WHICH CASE HOVRLAY'S LIABILITY WITH RESPECT TO THE FREE SERVICES SHALL NOT EXCEED $100.00.</strong></p>
            </div>
          </div>

          <div id="customer-data" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">3. Customer Data</h2>
            
            <div className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <p className="mb-4">The following applies to consumer users of the Services, inclusive of the Free and Pro plans, who have not opted-out of full authorization. Please see our Enterprise Trust Center for more information on how we handle data for Enterprise customers. Enterprise contracts are governed by a separate agreement and govern full data privacy, no authorization rights, and more data agreements.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">3.1 Customer Ownership</h3>
              <p className="mb-4">Except for the limited rights expressly granted to Hovrlay hereunder, Customer retains all rights, title and interest in and to all Customer Data, including without limitation all related intellectual property rights inherent therein. Customer is solely responsible for the accuracy, quality, legality, reliability, and appropriateness of all Customer Data. Customer shall ensure that it is entitled to transfer the relevant Customer Data to Hovrlay so that Hovrlay and its service providers may lawfully use, process, and transfer the Customer Data in accordance with this Agreement on Customer's behalf.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">3.2 Authorization</h3>
              <p className="mb-4">Customer grants Hovrlay a nonexclusive, worldwide, royalty-free right to reproduce, display, adapt, modify, transmit, distribute and otherwise use the Customer Data (a) to maintain, provide, and improve the Services under this Agreement; (b) to prevent or address technical or security issues and resolve support requests; (c) at Customer's direction or request, including processing initiated by Users through their use of the Platform; and (d) as otherwise required by applicable law. No rights to the Customer Data are granted to Hovrlay hereunder other than as expressly set forth in this Agreement. For Enterprise Tier Services, Hovrlay shall not use any Customer Data to train any Hovrlay or third-party artificial intelligence or machine learning model, except as otherwise set forth in an applicable Order Form. For Free Services and Pro Tier Services, except as otherwise agreed to by Hovrlay, Customer expressly grants Hovrlay and its authorized sub-processors permission to use Customer Data to train Hovrlay's and its authorized sub-processors' artificial intelligence and machine learning models.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">3.3 Aggregate and De-Identified Data</h3>
              <p className="mb-4">Hovrlay may use Customer Data to create aggregated, de-identified, and/or anonymized data sets in a manner that does not permit identification of Customer, its customers, or its Users (collectively, the "Aggregated De-Identified Data"). Hovrlay may use Aggregated De-Identified Data for Hovrlay's lawful business purposes, including to improve, develop, provide, and enhance the Platform and Services and for other development, diagnostic, and corrective purposes in connection with the Platform and Services and any other Hovrlay offerings.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">3.4 Security</h3>
              <p className="mb-4">Hovrlay shall use commercially reasonable measures to maintain the security and integrity of the Services and the Customer Data and to provide technical and organizational safeguards against accidental, unlawful or unauthorized access to or use of, destruction, transfer, disclosure or alteration of Customer Data.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">3.5 Processing</h3>
              <p className="mb-4">Customer shall not provide Hovrlay with any Customer Data that constitutes Restricted Data. Hovrlay shall have no responsibility or liability for any Restricted Data. When and as required by applicable law from time to time, Customer and Hovrlay may enter into additional data processing agreement(s), including but not limited to those required under Article 28 of Regulation (EU) 2016/679, with respect to the processing of personally identifiable information contained within Customer Data.</p>
            </div>
          </div>

          <div id="restrictions-responsibilities-and-rights" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">4. Restrictions, Responsibilities and Rights</h2>
            
            <div className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">4.1 Customer Restrictions</h3>
              <p className="mb-4">Customer shall not:</p>
              <ul className="privacy-list text-medium md:text-lg text-foreground space-y-1 sm:space-y-2 leading-relaxed font-light pl-4 sm:pl-6 mb-4">
                <li>modify, copy, display, republish or create derivative works based on the Services or Hovrlay Materials;</li>
                <li>act as a reseller or distributor of, or a service bureau for, the Platform or Services or otherwise use, exploit, make available or encumber the Platform or Services to or for the benefit of any third party;</li>
                <li>access or use the Platform or Services without the prior written consent of Hovrlay if Customer is or becomes a direct competitor to Hovrlay or its affiliates;</li>
                <li>share access, use, or information about the Platform or Services with a direct competitor of Hovrlay;</li>
                <li>use the Services to post or send infringing, obscene, threatening, libelous, or otherwise unlawful material;</li>
                <li>use manual or automated software, devices, robots, spiders, or other processes to "crawl" or "spider" or to retrieve, index, "scrape", "data mine" or in any way gather information, content or other materials from the Platform in an unauthorized manner;</li>
                <li>intentionally or unintentionally interfere with or disrupt the integrity or performance of the Services or the data contained therein;</li>
                <li>remove or alter any trademark, logo, copyright or other proprietary notices, legends, symbols or labels in the Services;</li>
                <li>use the Services from an embargoed nation or any other country/region that becomes an embargoed nation;</li>
                <li>use the Services in compliance with all applicable local, state, national and foreign laws, treaties and regulations in connection with Customer's use of the Services (including those related to data privacy, international communications, export laws and the transmission of technical or personal data laws which, for clarity, includes laws governing the monitoring or recording of conversations ("Recording Laws")).</li>
              </ul>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">4.2 Customer Responsibilities</h3>
              <p className="mb-4">Customer shall provide Hovrlay with complete and accurate account, billing and payment information and keep such information up to date during the Term. Customer agrees not to provide any person or entity with access to the Services using Customer's account credentials or other security information except as permitted under this Agreement and shall prevent Users from sharing their Hovrlay account access or login information with any other party, including any other Customer employee or third-party contractor. Customer is responsible for maintaining the security and confidentiality of all passwords associated with Customer's account. If Customer becomes aware of any unauthorized or illegal use of Customer's account, Customer shall immediately notify Hovrlay.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">4.3 Artificial Intelligence Features</h3>
              <p className="mb-4">The Services may include certain features, such as chatbot functionality, that use or leverage applications, software, products, or services provided by Hovrlay or third parties that utilize artificial intelligence related technology, including large language models, algorithms and models, and machine learning related technology (collectively, "AI Features"). Customer agrees that Customer is solely responsible for its use of AI Features. Customer acknowledges and agrees that Customer Data will be transmitted to and processed by such AI Features, that in response the AI Features may generate suggested text, information, analyses, results, content, recommendations, and other materials (collectively, "Output"), and that, given the probabilistic nature of artificial intelligence technology, the Output may be inaccurate or inappropriate in response to the input provided.</p>
              <p className="mb-4">Accordingly, all Output is provided "as is" and with "all faults", and Hovrlay makes no representations, warranties, or covenants of any kind or nature with respect to any of the AI Features or any Output, including with respect to accuracy, completeness, truthfulness, timeliness, or suitability. Customer agrees that all decisions made in reliance on any Output are made at Customer's own risk and that Hovrlay shall have no responsibility or liability arising therefrom.</p>
            </div>
          </div>

          <div id="fees-payment-terms" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">5. Fees; Payment Terms</h2>
            
            <div className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">5.1 Fees</h3>
              <p className="mb-4">Customer shall pay Hovrlay the applicable Fees for its Service Plan(s) and any undisputed Fees, in accordance with this Section, as set forth in an Order Form or as otherwise set forth on the Pricing Page. Customer agrees and understands that if Customer does not pay Hovrlay the Fees due for the Services within the agreed time period, Hovrlay reserves the right to suspend Customer's access and use of the Services until such Fees are paid as provided in Section 5.4. If Customer reasonably and in good faith believes that Hovrlay has billed Customer incorrectly, and reasonably and in good faith disputes the Fees billed to Customer, then Customer must contact Hovrlay no later than thirty (30) days after the invoice date on the invoice in which the error or problem appeared, in order to receive an adjustment or credit (if applicable). All Fees are non-refundable and non-creditable, except as expressly set forth in this Agreement.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">5.2 Taxes</h3>
              <p className="mb-4">All Fees and other amounts payable by Customer under this Agreement are exclusive of taxes and similar assessments. Customer is responsible for all sales, use and excise taxes, and any other similar taxes, duties and charges of any kind imposed by any federal, state or local governmental or regulatory authority on any amounts payable by Customer hereunder, other than any taxes imposed on Hovrlay's income.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">5.3 Payment</h3>
              <p className="mb-4">Unless otherwise provided in an Order Form, Customer shall pay all Fees within thirty (30) days after the date of the invoice therefor. Customer shall make all payments hereunder in U.S. dollars. If Customer is paying Fees using a credit card or any digital payment method supported by Hovrlay, Customer authorizes Hovrlay to charge Customer's account for the Services using that payment method. Customer must keep all information in its billing account current to ensure that all Fees are charged to the appropriate account and are timely paid.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">5.4 Late Payment</h3>
              <p className="mb-4">If Customer fails to make any payment when due then, in addition to all other remedies that may be available, Hovrlay may charge interest on the past due amount at the rate of 1.5% per month calculated daily and compounded monthly or, if lower, the highest rate permitted under applicable law. If such failure continues for five (5) days following written notice thereof, Hovrlay may suspend performance of the Services until all past due amounts and interest thereon have been paid, without incurring any obligation or liability to Customer by reason of such suspension.</p>
            </div>
          </div>

          <div id="warranties" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">6. Warranties</h2>
            
            <div className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">6.1 Mutual Warranty</h3>
              <p className="mb-4">Each party represents and warrants that it has the legal power and authority to enter into this Agreement.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">6.2 Disclaimer of Warranties</h3>
              <p className="mb-4">EXCEPT FOR THE EXPRESS WARRANTIES SET FORTH HEREIN, (A) ALL SERVICES ARE PROVIDED ON AN "AS IS" BASIS WITHOUT ANY WARRANTY WHATSOEVER; (B) HOVRLAY EXPRESSLY DISCLAIMS, TO THE MAXIMUM EXTENT PERMISSIBLE UNDER APPLICABLE LAW, ALL WARRANTIES, EXPRESS, IMPLIED AND STATUTORY, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, NONINFRINGEMENT, OR ARISING FROM COURSE OF PERFORMANCE, DEALING, USAGE OR TRADE; AND (C) HOVRLAY MAKES NO WARRANTY REGARDING NONINTERRUPTION OF USE OR FREEDOM FROM BUGS, AND MAKES NO WARRANTY THAT SERVICES WILL BE ERROR-FREE. FREE SERVICES ARE PROVIDED "AS IS" AND AS AVAILABLE EXCLUSIVE OF ANY WARRANTY WHATSOEVER.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">6.3 Beta Services</h3>
              <p className="mb-4">Customer may choose to use Beta Services in its sole discretion. Notwithstanding anything to the contrary in this Agreement or otherwise: (a) Beta Services may not be supported and may be changed or terminated at any time without notice; (b) Beta Services may not be as reliable or available as the Services; (c) Beta Services have not been subjected to the same security requirements, measures, and auditing as the Services; (d) Beta Services constitute Hovrlay's Confidential Information; and (e) BETA SERVICES ARE PROVIDED "AS IS" WITHOUT ANY WARRANTY, INDEMNITY OR SUPPORT AND HOVRLAY'S LIABILITY FOR BETA SERVICES WILL NOT EXCEED FIFTY DOLLARS (US $50).</p>
            </div>
          </div>

          <div id="confidential-information" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">7. Confidential Information</h2>
            
            <div className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">7.1 Definition of Confidential Information</h3>
              <p className="mb-4">As used herein, "Confidential Information" means all confidential and proprietary information of a party ("Disclosing Party") disclosed to the other party ("Receiving Party"), whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information or the circumstances of disclosure, including the terms and conditions of this Agreement (including pricing and other terms reflected in the Order Form hereunder), the Customer Data, the Hovrlay Materials, the Platform, Services, Documentation, and each party's respective business and marketing plans, technology and technical information, product designs, and business processes.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">7.2 Confidentiality</h3>
              <p className="mb-4">The Receiving Party shall not disclose or use any Confidential Information of the Disclosing Party for any purpose outside the scope of this Agreement, except with the Disclosing Party's prior written permission. Either party may disclose Confidential Information to its personnel and agents who are subject to confidentiality obligations at least as restrictive as those of this Agreement. Receiving Party will use at least the same level of care to prevent unauthorized use of the Confidential Information as it uses for its own confidential and proprietary information of like kind, but in no event less than a reasonable standard of care.</p>
            </div>
          </div>

          <div id="term-and-termination" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">8. Term and Termination</h2>
            
            <div className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">8.1 Automatic Renewal; Cancellation</h3>
              <p className="mb-4">The term of this Agreement shall commence on the Effective Date and continue until all Order Forms entered into hereunder have expired or been terminated. Unless otherwise set forth in the applicable Order Form, each Subscription Term will automatically renew, unless either party provides written notice of non-renewal to the other party at least thirty (30) days prior to the renewal. Unless otherwise provided for in the applicable Order Form, Hovrlay reserves the right to increase fees for any renewal terms. Customer authorizes Hovrlay to charge Customer's payment method on file or invoice Customer for each renewal until Customer cancels their subscription.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">8.2 Termination for Material Breach</h3>
              <p className="mb-4">Either party may terminate this Agreement (i) if the other party materially breaches any terms and conditions of this Agreement and does not cure such breach within thirty (30) days of receiving notice of such breach; or (ii) if the other party becomes the subject of a petition in bankruptcy or any proceeding relating to insolvency, receivership, liquidation or assignment for the benefit of creditors. Notwithstanding the foregoing, this Agreement and any Order Form may be immediately terminated by Hovrlay in the event Customer has breached any obligation set forth in Section 4 and, in Hovrlay's determination, that breach cannot be adequately cured.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">8.3 Effect of Termination</h3>
              <p className="mb-4">Upon expiration or termination of this Agreement for any reason, the rights and licenses granted to Customer shall terminate immediately. Hovrlay reserves the right to permanently delete any Customer Data following termination of the Agreement. Upon termination, Hovrlay shall also promptly delete any Customer Content upon Customer's written request. Any data deleted may remain in immutable electronic backups maintained by Hovrlay and used purely for backup, disaster recovery and data protection purposes.</p>
            </div>
          </div>

          <div id="indemnity" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">9. Indemnity</h2>
            
            <div className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">9.1 Hovrlay Indemnification</h3>
              <p className="mb-4">Hovrlay will indemnify, defend and hold harmless Customer from and against any third-party claim that the Services infringe any intellectual property rights of such third party, provided that Customer promptly notifies Hovrlay of the claim and cooperates with Hovrlay in the defense of such claim.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">9.2 Customer Indemnification</h3>
              <p className="mb-4">Customer will indemnify, defend and hold harmless Hovrlay from and against any third-party claim arising from: (a) Customer's use of the Services in violation of this Agreement; (b) Customer Data; or (c) Customer's violation of any applicable law or regulation.</p>
            </div>
          </div>

          <div id="limitation-of-liability" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">10. Limitation of Liability</h2>
            
            <div className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <p className="mb-4">EXCEPT FOR THE PARTIES' INDEMNIFICATION OBLIGATIONS AND FOR CUSTOMER'S BREACH OF SECTION 4, IN NO EVENT SHALL EITHER PARTY, NOR ITS DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS OR CONTENT PROVIDERS, BE LIABLE UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE OR ANY OTHER LEGAL OR EQUITABLE THEORY WITH RESPECT TO THE SUBJECT MATTER OF THIS AGREEMENT FOR ANY LOST PROFITS, DATA LOSS, BREACH OF DATA OR SYSTEM SECURITY, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER, SUBSTITUTE GOODS OR SERVICES (HOWEVER ARISING), IN EACH CASE REGARDLESS OF WHETHER A PARTY WAS ADVISED OF THE POSSIBILITY OF SUCH LOSSES OR DAMAGES OR SUCH LOSSES OR DAMAGES WERE OTHERWISE FORESEEABLE. IN NO EVENT WILL HOVRLAY'S AGGREGATE LIABILITY ARISING OUT OF RELATED TO THIS AGREEMENT EXCEED (IN THE AGGREGATE) THE FEES PAID (OR PAYABLE) BY CUSTOMER TO HOVRLAY UNDER THE APPLICABLE ORDER FOR IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO A CLAIM HEREUNDER.</p>
            </div>
          </div>

          <div id="general-provisions" className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">11. General Provisions</h2>
            
            <div className="text-medium md:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed font-light">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.1 Relationship of the Parties</h3>
              <p className="mb-4">The parties are independent contractors. This Agreement does not create a partnership, franchise, joint venture, agency, fiduciary, or employment relationship between the parties.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.2 Notices</h3>
              <p className="mb-4">Hovrlay may give general notices related to the Services that are applicable to all customers by email or through the Platform. All other notices required to be sent hereunder will be in writing and will be effective upon (i) personal delivery, or (ii) the second business day after mailing, in each case addressed as follows: if to Hovrlay at support@hovrlay.com, and, if to Customer, to Customer's address on record in Hovrlay's account information, or to such other address or individual as the parties may specify from time to time by written notice to the other party.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.3 Waiver and Cumulative Remedies</h3>
              <p className="mb-4">No failure or delay by either party in exercising any right under this Agreement shall constitute a waiver of that right. Other than as expressly stated herein, the remedies provided herein are in addition to, and not exclusive of, any other remedies of a party at law or in equity.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.4 Severability</h3>
              <p className="mb-4">If any provision of this Agreement is held by a court of competent jurisdiction to be contrary to law, the provision shall be modified by the court and interpreted so as best to accomplish the objectives of the original provision to the fullest extent permitted by law, and the remaining provisions of this Agreement shall remain in full force and effect.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.5 Assignment</h3>
              <p className="mb-4">Neither party may assign any of its rights or obligations hereunder, whether by operation of law or otherwise, without the prior written consent of the other party (not to be unreasonably withheld). Notwithstanding the foregoing, either party may assign this Agreement in its entirety (including any Order Forms), without the consent of the other party, to (i) an Affiliate; or (ii) in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of its assets. Any attempt by a party to assign its rights or obligations under this Agreement in breach of this Section shall be void and of no effect. Subject to the foregoing, this Agreement shall bind and inure to the benefit of the parties, their respective successors and permitted assigns.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.6 Subcontractors</h3>
              <p className="mb-4">Hovrlay may use third-party subcontractors who are subject to contractual obligations no less protective than those of this Agreement, as applicable. Hovrlay will remain responsible for their acts, omissions, and any subcontracted obligations.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.7 Publicity</h3>
              <p className="mb-4">Hovrlay may include Customer's name and logo on its website or in other marketing materials or channels solely to reference Customer as Hovrlay customer, subject to any trademark usage instructions provided to Hovrlay. All other uses of each other's name and any publicity shall require the prior written approval and consent of the other party.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.8 Governing Law</h3>
              <p className="mb-4">This Agreement and any disputes arising out of or related hereto shall be governed by and construed in accordance with the laws of India, without giving effect to its conflicts of laws rules.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.9 Arbitration Agreement</h3>
              <p className="mb-4">The parties shall use their best efforts to settle any dispute, claim, question, or disagreement arising out of or relating to the subject matter of these Agreement directly through good-faith negotiations, which shall be a precondition to either party initiating arbitration. If such negotiations do not resolve the dispute, it shall be finally settled by binding arbitration in Mumbai, India. The arbitration will proceed in the English language, in accordance with the Arbitration and Conciliation Act, 2015, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes. Judgment upon the award rendered by such arbitrator may be entered in any court of competent jurisdiction. For users of Free Services, Hovrlay may, in its sole discretion, pay all arbitration fees for claims less than ten thousand ($10,000) dollars.</p>
              <p className="mb-4">You shall have the right to opt out of the provisions of this Section by sending written notice of the decision to opt out to the address listed in Section 11.2 (Notices) postmarked within thirty (30) days of first accepting this Agreement. Customer must include (i) its name and residence address, (ii) the email address and/or telephone number associated with its account, and (iii) a clear statement that it wants to opt out of this arbitration agreement.</p>
              <p className="mb-4"><strong>THE PARTIES WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR JURY. ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS. CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER.</strong></p>
              <p className="mb-4">All aspects of the arbitration proceeding, and any ruling, decision, or award by the arbitrator, will be strictly confidential for the benefit of all parties. In the event the arbitration agreement does not apply, and the parties agree that any judicial proceeding (other than small claims actions) will be brought in the courts located in Mumbai, India.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.10 Force Majeure</h3>
              <p className="mb-4">Except for payment obligations, neither party shall be liable for delay or non-performance of its obligations hereunder (or part thereof) if the cause of delay or non-performance is due to a Force Majeure Event. The party affected shall be relieved from its obligations (or part thereof) as long as the Force Majeure Event lasts and hinders the performance of said obligations (or part thereof). The party affected shall promptly notify the other party and make reasonable efforts to mitigate the effects of the Force Majeure Event.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.11 No Third Party Beneficiaries</h3>
              <p className="mb-4">The parties acknowledge that the covenants set forth in this Agreement are intended solely for the benefit of the parties, their successors and permitted assigns. Nothing herein, whether express or implied, will confer upon any person or entity, other than the parties, their successors and permitted assigns, any legal or equitable right whatsoever to enforce any provision of this Agreement.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.12 Export Control</h3>
              <p className="mb-4">The Services, Hovrlay technology and derivatives thereof may be subject to export laws and regulations of India and other jurisdictions. Each party represents that it is not named on any government denied-party list. Customer shall not, and shall not permit Users to, access or use the Services in violation of any applicable export law or regulation.</p>
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">11.13 Entire Agreement</h3>
              <p className="mb-4">This Agreement, including all exhibits and addenda hereto and all Order Forms and SOWs, sets forth the entire agreement of the parties and supersedes and replaces all prior or contemporaneous writings, negotiations and discussions, whether written or oral, with respect to its subject matter. Neither party has relied upon any representations or warranties whatsoever regarding the subject matter of this Agreement, express or implied, except for the representations and warranties set forth in this Agreement. Hovrlay reserves the right to modify the terms and conditions of this Agreement, at its sole discretion, effective upon the commencement of any renewal subscription term. You are responsible for regularly reviewing this Agreement for updates.</p>
              <p className="mb-4"><strong>CONTINUED USE OF THE SERVICES AFTER ANY SUCH CHANGES SHALL CONSTITUTE YOUR CONSENT TO SUCH CHANGES.</strong> If Hovrlay modifies this Agreement during Customer's subscription term, and Customer objects to the updated agreement, as Customer's exclusive remedy, Customer may choose to terminate this Agreement prior to the next renewal term and cease using the Services. Notwithstanding any language to the contrary therein, no terms or conditions set forth on any Customer purchase order or in any other Customer order documentation shall be incorporated into or form any part of this Agreement, and all such terms or conditions shall be null and void.</p>
          </div>
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
