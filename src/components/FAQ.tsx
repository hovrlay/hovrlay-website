"use client";

import { useState, type ReactNode } from "react";
import ChevronDownIcon from "@/assets/chevron-down.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  delay: number;
  isLast: boolean;
}

const FAQItem = ({
  question,
  answer,
  index,
  isOpen,
  onToggle,
  delay,
  isLast,
}: FAQItemProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`animate-scroll-fade-in-up ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={isLast ? "" : "border-b border-neutral-200"}
      >
        <button
          type="button"
          onClick={() => onToggle(index)}
          className="w-full py-5 px-0 text-left flex items-center justify-between gap-4 bg-transparent hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-medium text-foreground pr-4">
            {question}
          </h3>
          <div className="flex-shrink-0 text-neutral-400">
            <ChevronDownIcon
              className={`w-5 h-5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="pb-5 ">
              <p className="max-w-2xl text-sm sm:text-base md:text-base lg:text-base text-muted-foreground leading-relaxed">
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
      question: "How does Hovrlay compare to Cluely?",
      answer: (
        <>
          Cluely costs $150/mo. If you are interviewing at big tech companies where the Interview process goes on for multiple months, you are looking at $500+ before you even land an offer. Hovrlay has usage based pricing. $25 gets most people through their entire job search. Beyond pricing, Hovrlay has much faster AI responses and the app itself is considerably smaller.
        </>
      )
    },
    {
      question: "Why Hovrlay vs. a regular AI notetaker?",
      answer:
        "Unlike regular AI notetakers like Otter or Fireflies that work after your meeting ends, Hovrlay provides real time meeting intelligence during your calls. While other AI meeting assistants create meeting summaries afterward, Hovrlay helps you answer technical questions, handle objections, and perform better during high stakes conversations."
    },
    {
      question: "Is Hovrlay free?",
      answer:
        "Yes, you can use Hovrlay for free. No credit card required to get started. Download the app and use it in your calls and meetings before you pay anything. "
    },
    {
      question: "How do hours work?",
      answer:
        "At the start of each call, choose your call duration — 30 minutes, 1 hour, or 1.5 hours. That duration is deducted from your balance when the session ends. You buy extra hours only when you need them. Hours never expire."
    },
    {
      question: "Is my data secure with Hovrlay?",
      answer: "Yes. We do not store your actual audio recordings. Your conversations are processed in real time and then deleted."
    },
    {
      question: "How is it undetectable in meetings?",
      answer: (
        <>
          Unlike other meeting AI tools, it never joins your calls as a participant, doesn&apos;t appear in meeting recordings and won&apos;t show up in screen shares (limitations{" "}
          <a
            href="/blog/supported-apps-undetectability"
            className="text-[#0099CC] underline-offset-2 underline"
          >
            here
          </a>
          ). It captures meeting audio in the background and provides a discreet, translucent overlay that only you can see, making it completely undetectable to other meeting participants.
        </>
      )
    },
    {
      question: "What languages and apps are supported?",
      answer: "Hovrlay works with all major meeting platforms including Zoom, Microsoft Teams, Webex and Slack calls. It supports English and major international languages for meeting transcription and real time insights."
    },
    {
      question: "How do I get support?",
      answer: (
        <>
          Contact us at{" "}
          <a
            href="mailto:support@hovrlay.com"
            className="text-[#0099CC] underline-offset-2 underline"
          >
            support@hovrlay.com
          </a>{" "}
          for technical issues or questions.
        </>
      )
    }
  ];

  return (
    <section id="faq" className="px-4 md:px-8 lg:px-12">
      <div className="container-custom mx-auto max-w-6xl mb-24">
        <div className="mx-auto max-w-4xl text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium section-title-gradient mb-16">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="mx-auto max-w-4xl font-light">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openItems.includes(index)}
              onToggle={toggleItem}
              delay={Math.floor(index / 2) * 100}
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;