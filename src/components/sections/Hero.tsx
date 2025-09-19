import { Button } from "@/components/ui/button";
import AppleIcon from "@/assets/apple.svg?react";
import WindowsIcon from "@/assets/windows.svg?react";
import DownloadIcon from "@/assets/download.svg?react";
import { handleDownload } from "@/utils/downloads";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="container-custom relative z-10 flex-1 flex flex-col mx-4 px-4 md:mx-8 md:px-8 lg:mx-12 lg:px-12">
        {/* Text content section - takes up 2/3 of available space */}
        <div className="flex-[2] flex items-center justify-center">
          <div className="text-center max-w-5xl">
            <div className="animate-fade-in-down">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
                <span className="text-primary">AI wingman</span> for every conversation
              </h1>
              <p className="text-md md:text-l lg:text-xl text-muted-foreground max-w-3xl mb-6 font-light mx-auto">
                Hovrlay is an undetectable desktop app with real time AI that transforms how you engage in{" "}
                <span className="text-foreground font-semibold">meetings, calls and interviews.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Download buttons section - takes up 1/3 of available space */}
        <div className="flex-[1] flex justify-center items-start animate-fade-in-down">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero-secondary" size="lg" className="group" onClick={() => handleDownload('mac')}>
              <AppleIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download for macOS
              <DownloadIcon className="ml-2 h-4 w-4" />
            </Button>
            
            <Button variant="hero-secondary" size="lg" className="group" onClick={() => handleDownload('windows')}>
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

export default Hero;
