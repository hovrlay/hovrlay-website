import { Button } from "@/components/ui/button";
import { AppleIcon, WindowsIcon, DownloadIcon } from "@/components/ui/icons";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container-custom relative z-10 flex-1 flex flex-col mx-4 px-4 md:mx-8 md:px-8 lg:mx-12 lg:px-12">
        {/* Text content section - takes up 2/3 of available space */}
        <div className="flex-[2] flex items-center">
          <div className="text-center md:text-left max-w-5xl">
            <div className="animate-fade-in-down">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                <span className="gradient-text">AI wingman</span> for every conversation
              </h1>
              <p className="text-md md:text-l lg:text-xl text-muted-foreground max-w-3xl mb-6 font-light">
                Hovrlay is an undetectable desktop app with real time AI that transforms how you engage in{" "}
                <span className="text-foreground font-semibold">meetings, calls and interviews.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Download buttons section - takes up 1/3 of available space */}
        <div className="flex-[1] flex justify-center items-start animate-fade-in-down">
          <div className="flex flex-col sm:flex-row gap-4">
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
