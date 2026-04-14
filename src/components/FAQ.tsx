import { useState, type ReactNode } from "react";
import ChevronDownIcon from "@/assets/chevron-down.svg?react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
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
              <p 
                className={`max-w-2xl text-sm sm:text-base md:text-base lg:text-base text-muted-foreground leading-relaxed transition-all duration-200 linear ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              {answer}
            </p>
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
      question: "Is Hovrlay free?",
      answer:
        "Yes. Hovrlay is free to try. Download the app and use it in your calls and meetings before you pay anything. No credit card required to get started."
    },
    {
      question: "How do credits work?",
      answer:
        "One credit equals one hour of real time AI assistance. Each session uses one credit and ends automatically after an hour. You buy packs only when you need them, and unused credits stay in your account, they never expire."
    },
    {
      question: "Is Hovrlay compatible with my operating system?",
      answer: "Hovrlay works on Mac, Windows and Linux machines. Download the version that matches your operating system from our download section."
    },
    {
      question: "Is my data secure with Hovrlay?",
      answer: "Yes. We do not store your actual audio recordings. Your conversations are processed in real time and then deleted."
    },
    {
      question: "Can I use Hovrlay during video calls?",
      answer: "Yes. Hovrlay works with any application on your screen, including all video calling platforms like Zoom, Microsoft Teams, Google Meet, Discord, and others."
    },
    {
      question: "Is Hovrlay invisible?",
      answer:
        "Yes. Hovrlay does not show up in screen shares or screenshots, so participants on your call cannot see it. It is completely undetectable across all meeting platforms."
    },
    {
      question: "How do I get support?",
      answer: (
        <>
          Contact us at{" "}
          <a
            href="mailto:support@hovrlay.com"
            className="text-primary underline-offset-2 hover:underline font-medium"
          >
            support@hovrlay.com
          </a>{" "}
          for technical issues or questions.
        </>
      )
    }
  ];

  return (
    <section id="faq" className="px-12 md:px-16 lg:px-20 mx-12 md:mx-16 lg:mx-20">
      <div className="container-custom">
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium section-title-gradient mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-base md:text-base lg:text-lg text-muted-foreground mb-16">
            Find answers to common questions about Hovrlay and how it can help you in your interviews and meetings.
          </p>
        </div>
        
        <div className="max-w-4xl font-light">
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