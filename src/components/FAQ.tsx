import { useState } from "react";
import ChevronDownIcon from "@/assets/chevron-down.svg?react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  delay: number;
}

const FAQItem = ({ question, answer, index, isOpen, onToggle, delay }: FAQItemProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`mb-4 animate-scroll-fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="glass rounded-lg overflow-hidden">
        <button
          onClick={() => onToggle(index)}
          className="w-full p-4 text-left flex items-center justify-between transition-colors duration-200"
        >
          <h3 className="text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-foreground pr-4">
            {question}
          </h3>
          <div className="flex-shrink-0">
            <ChevronDownIcon
              className={`w-5 h-5 text-foreground transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>
        
        <div 
          className={`overflow-hidden transition-all duration-200 linear ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="px-4 pb-4">
            <div className="border-t border-foreground/10 pt-4">
              <p 
                className={`text-sm sm:text-base md:text-base lg:text-base text-muted-foreground leading-relaxed transition-all duration-200 linear ${
                  isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <section id="faq" className="pt-4 pb-12 px-4 md:px-8 lg:px-12">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-base md:text-base lg:text-lg text-muted-foreground mb-16 mx-auto">
            Find answers to common questions about Hovrlay and how it can enhance your conversations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openItems.includes(index)}
              onToggle={toggleItem}
              delay={Math.floor(index / 2) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;