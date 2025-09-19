import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is Hovrlay?",
      answer: "Hovrlay is an AI-powered desktop application that provides real-time assistance during your conversations, meetings, calls, and interviews. It acts as your intelligent wingman, offering suggestions and responses to enhance your communication."
    },
    {
      question: "How does Hovrlay work?",
      answer: "Hovrlay uses advanced AI technology to listen to your conversations in real-time and provides intelligent suggestions, responses, and assistance. It integrates seamlessly into your workflow without being detected by other participants."
    },
    {
      question: "Is Hovrlay compatible with my operating system?",
      answer: "Yes! Hovrlay is available for both macOS and Windows. You can download the appropriate version for your system from our download section."
    },
    {
      question: "Is my data secure with Hovrlay?",
      answer: "Absolutely. Hovrlay prioritizes privacy and security. Only embeddings and metadata are stored in the cloud, and we use enterprise-grade encryption to protect your data. Your conversations remain private and secure."
    },
    {
      question: "Can I use Hovrlay during video calls?",
      answer: "Yes, Hovrlay works with most video calling platforms including Zoom, Microsoft Teams, Google Meet, and others. It provides real-time assistance during your video calls and meetings."
    },
    {
      question: "How much does Hovrlay cost?",
      answer: "We offer flexible pricing plans to suit different needs. Please check our pricing section for detailed information about our current plans and features."
    },
    {
      question: "Do I need an internet connection to use Hovrlay?",
      answer: "Hovrlay requires an internet connection for real-time AI processing and to provide the most accurate and up-to-date assistance. However, some basic features may work offline."
    },
    {
      question: "How do I get support if I have issues?",
      answer: "You can reach our support team at support@hovrlay.com. We're here to help you get the most out of Hovrlay and resolve any technical issues you may encounter."
    }
  ];

  return (
    <section id="faq" className="py-12 px-4 md:px-8 lg:px-12">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in-down">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground mb-12 animate-fade-in-down mx-auto">
          Find answers to common questions about Hovrlay and how it can enhance your conversations.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 animate-fade-in-down">
              <div className="glass rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-foreground/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-foreground transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-foreground/10 pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;