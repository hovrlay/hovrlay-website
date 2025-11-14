import { Button } from "@/components/Button";
import AppleIcon from "@/assets/apple.svg?react";
import WindowsIcon from "@/assets/windows.svg?react";
import DownloadIcon from "@/assets/download.svg?react";
import { handleDownload } from "@/utils/downloads";

const Home = () => {
  const headingText = "Your AI assistant for meetings";
  const words = headingText.split(" ");
  
  // Calculate delays: 0.1s between words for heading
  const wordDelay = 0.1;
  const totalHeadingDelay = words.length * wordDelay;
  const subheadingDelay = totalHeadingDelay + 0.2;
  const buttonsDelay = subheadingDelay + 0.4;

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(/hero/bg-light.svg)',
      }}
    >
      {/* Dark mode background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: 'url(/hero/bg-dark.svg)',
        }}
      />
      
      {/* Gradient fade to background color */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, hsl(var(--background)) 100%)',
        }}
      />
      
      <div className="container-custom z-10 mx-4 md:mx-8 lg:mx-12 relative">
        {/* Main content container - centered horizontally */}
        <div className="flex flex-col items-center text-center lg:max-w-4xl lg:mx-auto px-2 sm:px-4">
          {/* Text content section */}
          <div className="mb-20">
            <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl max-w-3xl font-semibold text-foreground mb-10 leading-tight">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="animate-word"
                  style={{
                    animationDelay: `${index * wordDelay}s`,
                    marginRight: '0.25em'
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p 
              className="text-sm sm:text-sm md:text-base lg:text-lg text-foreground max-w-2xl mb-8 font-light mx-auto px-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${subheadingDelay}s` }}
            >
              Takes perfect notes, answers questions in real-time, and makes you the most prepared person on every call.
            </p>
          </div>

          {/* Download buttons section */}
          <div 
            className="mb-16 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${buttonsDelay}s` }}
          >
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
