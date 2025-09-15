import { Button } from "@/components/ui/button";
import { Download, Apple, MonitorSpeaker } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-down">
            Meet{" "}
            <span className="gradient-text">Hovrlay</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Real-time AI that transforms how you engage in{" "}
            <span className="text-foreground font-semibold">meetings, calls and interviews</span>
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            By observing your screen and recalling past discussions, Hovrlay delivers context-aware AI insights and tailored suggestions in real-time on a sleek, translucent overlay.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="lg" className="group">
              <Apple className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download for macOS
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            
            <Button variant="hero-secondary" size="lg" className="group">
              <MonitorSpeaker className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download for Windows
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Product preview hint */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="glass-card max-w-md mx-auto text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3" />
                <span className="text-sm font-medium text-muted-foreground">
                  AI-powered overlay interface
                </span>
              </div>
              <p className="text-xs text-muted-foreground/60">
                Experience seamless, context-aware assistance during your most important conversations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary/60 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;