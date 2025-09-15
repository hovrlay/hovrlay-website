import { Button } from "@/components/ui/button";
import { AppleIcon, WindowsIcon, DownloadIcon } from "@/components/ui/icons";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-left max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-12 mb-28 animate-fade-in-down">
            Your <span className="gradient-text">AI wingman</span> for every conversation
          </h1>
          
          <p className="text-md md:text-l lg:text-xl text-muted-foreground max-w-3xl mb-6 animate-fade-in-down" style={{ animationDelay: "0.2s" }}>
            Hovrlay is an undetectable desktop app with real-time AI that transforms how you engage in{" "}
            <span className="text-foreground font-semibold">meetings, calls and interviews.</span>
          </p>
            
          <p className="text-md md:text-l lg:text-xl text-muted-foreground max-w-4xl animate-fade-in-down mb-20" style={{ animationDelay: "0.2s" }}>
            By observing your computer screen, Hovrlay understands the context of the conversation and delivers live insights and suggestions on a sleek, translucent overlay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-down" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero-secondary" size="lg" className="group">
              <AppleIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download for macOS
              <DownloadIcon className="ml-2 h-4 w-4" />
            </Button>
            
            <Button variant="hero-secondary" size="lg" className="group">
              <WindowsIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download for Windows
              <DownloadIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
