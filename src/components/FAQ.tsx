import { useState } from "react";
import ChevronDownIcon from "@/assets/chevron-down.svg?react";

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
      question: "How does Hovrlay work?",
      answer: "Hovrlay runs in the background and observes your screen while listening to your audio during calls and meetings. It uses AI to understand the conversation context and provides real time suggestions, responses and insights to help you communicate better."
    },
    {
      question: "Is Hovrlay compatible with my operating system?",
      answer: "Hovrlay works on both Mac and Windows computers. Download the version that matches your operating system from our download section."
    },
    {
      question: "Is my data secure with Hovrlay?",
      answer: "Yes. We use enterprise grade encryption to protect your data. We only store conversation summaries, not your actual audio recordings. Your conversations are processed in real-time and then deleted."
    },
    {
      question: "Can I use Hovrlay during video calls?",
      answer: "Yes. Hovrlay works with any application on your screen, including all video calling platforms like Zoom, Microsoft Teams, Google Meet, Discord, and others."
    },
    {
      question: "How much does Hovrlay cost?",
      answer: "We offer different pricing plans to fit various needs. Contact our sales team for current pricing and feature details."
    },
    {
      question: "How do I get support?",
      answer: "Contact us at support@hovrlay.com for technical issues or questions."
    }
  ];

  return (
    <section id="faq" className="py-12 px-4 md:px-8 lg:px-12">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-5xl font-semibold text-foreground mb-6 animate-fade-in-down">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground mb-16 animate-fade-in-down mx-auto">
            Find answers to common questions about Hovrlay and how it can enhance your conversations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 animate-fade-in-down">
              <div className="glass rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <ChevronDownIcon
                      className={`w-5 h-5 text-foreground transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-200 linear ${
                    openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-foreground/10 pt-4">
                      <p 
                        className={`text-muted-foreground leading-relaxed transition-all duration-200 linear ${
                          openItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;