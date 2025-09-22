import AiIcon from "@/assets/ai.svg?react";
import LightningIcon from "@/assets/lightning.svg?react";
import MemoryIcon from "@/assets/memory.svg?react";
import PlatformIcon from "@/assets/platform.svg?react";
import PrivacyIcon from "@/assets/privacy.svg?react";
import AnalyticsIcon from "@/assets/analytics.svg?react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FeatureBoxProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const FeatureBox = ({ icon: Icon, title, description, delay = 0 }: FeatureBoxProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`glass p-8 rounded-lg animate-scroll-fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex gap-5 -ml-2 -mt-2">
        <div className="w-10 h-10 flex items-center justify-center text-foreground flex-shrink-0 bg-gray-200 dark:bg-gray-600 rounded-sm">
          <Icon className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-medium text-foreground mb-4">{title}</h3>
          <p className="text-sm sm:text-sm md:text-sm lg:text-base font-light text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section id="features" className="py-2 px-4 md:px-8 lg:px-12">
    <div className="container-custom">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-foreground my-6">
          Why Choose Hovrlay?
        </h2>
        <p className="text-base sm:text-base md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the powerful features that make Hovrlay your intelligent conversation partner for meetings, calls, and interviews.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <FeatureBox
          icon={AiIcon}
          title="Real time AI"
          description="Get intelligent responses, suggestions and insights right during your conversations, not after. Our advanced language models understand context and provide relevant assistance exactly when you need it."
          delay={0}
        />
        
        <FeatureBox
          icon={LightningIcon}
          title="Lightning Fast Performance"
          description="Experience near instant response times with our optimized infrastructure. Hovrlay integrates seamlessly into your workflow without any noticeable delay or interruption to your conversations."
          delay={0}
        />
        
        <FeatureBox
          icon={MemoryIcon}
          title="Conversation Memory"
          description="Hovrlay remembers your past conversations and interactions, providing richer context and more personalized assistance in future meetings. Build stronger relationships through consistent, informed communication."
          delay={100}
        />
        
        <FeatureBox
          icon={PlatformIcon}
          title="Universal Compatibility"
          description="Works seamlessly across Mac and Windows platforms with any application on your screen. Whether you're using Zoom, Teams, Discord, or any other platform, Hovrlay adapts to your preferred tools."
          delay={100}
        />
        
        <FeatureBox
          icon={PrivacyIcon}
          title="Privacy & Security First"
          description="Your conversations are protected with enterprise-grade encryption. We only store conversation summaries, not raw audio, and process everything in real-time before securely deleting the data."
          delay={200}
        />
        
        <FeatureBox
          icon={AnalyticsIcon}
          title="Performance Analytics"
          description="Get detailed insights and feedback after each conversation. Track your communication patterns, identify areas for improvement, and see how Hovrlay helps enhance your professional interactions."
          delay={200}
        />
      </div>
    </div>
  </section>
);

export default Features;