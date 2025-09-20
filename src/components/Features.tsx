import AiIcon from "@/assets/ai.svg?react";
import LightningIcon from "@/assets/lightning.svg?react";
import MemoryIcon from "@/assets/memory.svg?react";
import PlatformIcon from "@/assets/platform.svg?react";
import PrivacyIcon from "@/assets/privacy.svg?react";
import AnalyticsIcon from "@/assets/analytics.svg?react";

const Features = () => (
  <section id="features" className="py-2 px-4 md:px-8 lg:px-12">
    <div className="container-custom">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-semibold text-foreground mb-6 animate-fade-in-down">
          Why Choose Hovrlay?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-down">
          Discover the powerful features that make Hovrlay your intelligent conversation partner for meetings, calls, and interviews.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="glass p-8 rounded-lg animate-fade-in-down">
          <div className="w-12 h-12 mb-3 flex items-center justify-start text-foreground">
            <AiIcon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Real time AI</h3>
          <p className="text-muted-foreground leading-relaxed">
            Get intelligent responses, suggestions and insights right during your conversations, not after. Our advanced language models understand context and provide relevant assistance exactly when you need it.
          </p>
        </div>
        
        <div className="glass p-8 rounded-lg animate-fade-in-down">
          <div className="w-12 h-12 mb-3 flex items-center justify-start text-foreground">
            <LightningIcon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Lightning Fast Performance</h3>
          <p className="text-muted-foreground leading-relaxed">
            Experience near instant response times with our optimized infrastructure. Hovrlay integrates seamlessly into your workflow without any noticeable delay or interruption to your conversations.
          </p>
        </div>
        
        <div className="glass p-8 rounded-lg animate-fade-in-down">
          <div className="w-12 h-12 mb-3 flex items-center justify-start text-foreground">
            <MemoryIcon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Conversation Memory</h3>
          <p className="text-muted-foreground leading-relaxed">
            Hovrlay remembers your past conversations and interactions, providing richer context and more personalized assistance in future meetings. Build stronger relationships through consistent, informed communication.
          </p>
        </div>
        
        <div className="glass p-8 rounded-lg animate-fade-in-down">
          <div className="w-12 h-12 mb-3 flex items-center justify-start text-foreground">
            <PlatformIcon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Universal Compatibility</h3>
          <p className="text-muted-foreground leading-relaxed">
            Works seamlessly across Mac and Windows platforms with any application on your screen. Whether you're using Zoom, Teams, Discord, or any other platform, Hovrlay adapts to your preferred tools.
          </p>
        </div>
        
        <div className="glass p-8 rounded-lg animate-fade-in-down">
          <div className="w-12 h-12 mb-3 flex items-center justify-start text-foreground">
            <PrivacyIcon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Privacy & Security First</h3>
          <p className="text-muted-foreground leading-relaxed">
            Your conversations are protected with enterprise-grade encryption. We only store conversation summaries, not raw audio, and process everything in real-time before securely deleting the data.
          </p>
        </div>
        
        <div className="glass p-8 rounded-lg animate-fade-in-down">
          <div className="w-12 h-12 mb-3 flex items-center justify-start text-foreground">
            <AnalyticsIcon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Performance Analytics</h3>
          <p className="text-muted-foreground leading-relaxed">
            Get detailed insights and feedback after each conversation. Track your communication patterns, identify areas for improvement, and see how Hovrlay helps enhance your professional interactions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;