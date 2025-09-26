import { Button } from "@/components/Button";
import AppleIcon from "@/assets/apple.svg?react";
import WindowsIcon from "@/assets/windows.svg?react";
import DownloadIcon from "@/assets/download.svg?react";
import { handleDownload } from "@/utils/downloads";

const Home = () => {
  return (
    <section id="hero" className="py-10 mt-20">
      <div className="container-custom animate-fade-in-down z-10 mx-4 md:mx-8 lg:mx-12">
        {/* Main content container - centered horizontally */}
        <div className="flex flex-col items-center text-center lg:max-w-4xl lg:mx-auto px-2 sm:px-4">
          {/* Text content section */}
          <div className="mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-10 leading-tight">
              <span className="hero-gradient">AI wingman</span> for every conversation
            </h1>
            <p className="text-base sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mb-8 font-light mx-auto px-2">
              Hovrlay is an undetectable desktop app with real time AI that transforms how you engage in{" "}
              <span className="text-foreground font-semibold">meetings, calls and interviews.</span>
            </p>
          </div>

          {/* Download buttons section */}
          <div className="mb-16">
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
      </div>
    </section>
  );
};

export default Home;
