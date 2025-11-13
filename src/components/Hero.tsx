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
            <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl max-w-3xl font-semibold text-foreground mb-10 leading-tight">
              Your <span className="hero-gradient">AI assistant</span> for meetings
            </h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mb-8 font-light mx-auto px-2">
              Takes perfect notes, answers questions in real-time, and makes you the most prepared person on every call.
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
