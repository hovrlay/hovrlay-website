import AiIcon from "@/assets/ai.svg?react";
import LightningIcon from "@/assets/lightning.svg?react";
import MemoryIcon from "@/assets/memory.svg?react";
import PlatformIcon from "@/assets/platform.svg?react";
import PrivacyIcon from "@/assets/privacy.svg?react";
import AnalyticsIcon from "@/assets/analytics.svg?react";

const Features = () => (
  <section id="features" className="py-12 px-4 md:px-8 lg:px-12">
    <div className="container-custom text-center">
      <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in-down">
        Why Choose Hovrlay?
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mb-8 animate-fade-in-down mx-auto">
        Discover the powerful features of Hovrlay, including real-time AI assistance for meetings, calls, and interviews.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-lg animate-fade-in-down text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-foreground">
            <AiIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Real time AI</h3>
          <p className="text-muted-foreground">Get AI responses and suggestions during your conversations in real time</p>
        </div>
        
        <div className="glass p-6 rounded-lg animate-fade-in-down text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-foreground">
            <LightningIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
          <p className="text-muted-foreground">Instant responses and seamless integration with your workflow</p>
        </div>
        
        <div className="glass p-6 rounded-lg animate-fade-in-down text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-foreground">
            <MemoryIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Conversation Memory</h3>
          <p className="text-muted-foreground">Recalls past conversations for richer context in your next meeting</p>
        </div>
        
        <div className="glass p-6 rounded-lg animate-fade-in-down text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-foreground">
            <PlatformIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Multi Platform</h3>
          <p className="text-muted-foreground">Works across both macOS and Windows seamlessly</p>
        </div>
        
        <div className="glass p-6 rounded-lg animate-fade-in-down text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-foreground">
            <PrivacyIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Privacy First</h3>
          <p className="text-muted-foreground">Only embeddings and metadata are stored in cloud</p>
        </div>
        
        <div className="glass p-6 rounded-lg animate-fade-in-down text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-foreground">
            <AnalyticsIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Analytics & Feedback</h3>
          <p className="text-muted-foreground">Meeting analytics and feedback at the end of each call</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;