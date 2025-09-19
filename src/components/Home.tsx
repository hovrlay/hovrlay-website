import { Button } from "@/components/Button";
import AppleIcon from "@/assets/apple.svg?react";
import WindowsIcon from "@/assets/windows.svg?react";
import DownloadIcon from "@/assets/download.svg?react";
import { handleDownload } from "@/utils/downloads";

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="container-custom relative z-10 mx-4 px-4 md:mx-8 md:px-8 lg:mx-12 lg:px-12">
        {/* Main content container - centered both horizontally and vertically */}
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          {/* Text content section */}
          <div className="animate-fade-in-down mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
              <span className="text-primary">AI wingman</span> for every conversation
            </h1>
            <p className="text-md md:text-l lg:text-xl text-muted-foreground max-w-3xl mb-8 font-light mx-auto">
              Hovrlay is an undetectable desktop app with real time AI that transforms how you engage in{" "}
              <span className="text-foreground font-semibold">meetings, calls and interviews.</span>
            </p>
          </div>

          {/* Download buttons section */}
          <div className="animate-fade-in-down">
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
