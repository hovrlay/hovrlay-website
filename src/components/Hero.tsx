import { Button } from "@/components/Button";
import AppleIcon from "@/assets/apple.svg?react";
import WindowsIcon from "@/assets/windows.svg?react";
import DownloadIcon from "@/assets/download.svg?react";
import SearchRecordsIcon from "@/assets/search-records.svg?react";
import WandSparklesIcon from "@/assets/wand-sparkles.svg?react";
import MessageQuestionIcon from "@/assets/message-question.svg?react";
import DotIcon from "@/assets/dot.svg?react";
import { handleDownload } from "@/utils/downloads";

const Home = () => {
  const headingText = "Your AI assistant for meetings";
  const words = headingText.split(" ");
  
  // Calculate delays: 0.1s between words for heading
  const wordDelay = 0.2;
  const totalHeadingDelay = words.length * wordDelay;
  const subheadingDelay = totalHeadingDelay + 0.2;
  const buttonsDelay = subheadingDelay + 0.4;
  const demoCardDelay = buttonsDelay + 0.7;
  
  // AI demo text animation: 29 words, 0.05s each = 1.45s, plus animation duration (0.5s)
  const aiResponseWords = 29;
  const aiResponseDelay = demoCardDelay + 0.5 + (aiResponseWords * 0.05);
  const demoBottomSectionDelay = aiResponseDelay;

  return (
    <section 
      id="hero" 
      className="flex items-center justify-center relative pt-36 mb-44"
    >
      {/* Light mode background - top 75% */}
      <div 
        className="absolute top-0 left-0 right-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero/bg-light.svg)',
          height: '80%',
        }}
      />
      
      {/* Dark mode background overlay - top 75% */}
      <div 
        className="absolute top-0 left-0 right-0 bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: 'url(/hero/bg-dark.svg)',
          height: '80%',
        }}
      />
      
      {/* Gradient fade to background color */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 20%, hsl(var(--background)) 80%)',
        }}
      />
      
      <div className="container-custom z-10 mx-4 md:mx-8 lg:mx-12 relative">
        {/* Main content container - centered horizontally */}
        <div className="flex flex-col items-center text-center lg:max-w-4xl lg:mx-auto px-2 sm:px-4">
          {/* Text content section */}
          <div className="mb-20">
            <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl max-w-xl font-medium text-foreground mb-10 leading-tight">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="animate-word"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    marginRight: '0.25em'
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p 
              className="text-sm sm:text-sm md:text-base lg:text-lg text-foreground max-w-xl font-normal mx-auto px-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${subheadingDelay}s` }}
            >
              Takes perfect notes, answers questions in real-time, and makes you the most prepared person on every call.
            </p>
          </div>

          {/* Download buttons section */}
          <div 
            className="mb-32 opacity-0 animate-fade-in-up"
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

          {/* AI Assistant Demo Card */}
          <div 
            className="w-full max-w-xl opacity-0 animate-expand-down"
            style={{ animationDelay: `${demoCardDelay}s` }}
          >
            <div 
              className="flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-[#21232a]/50 to-[#21232a]/80 dark:from-[#21232a]/50 dark:to-[#21232a]/80 p-5 backdrop-blur-sm"
              style={{
                boxShadow: 'rgba(207, 226, 255, 0.24) 0px 0px 0px 1px, rgba(255, 255, 255, 0.8) 0px -0.5px 0px 0px, rgba(0, 0, 0, 0) 0px 174px 49px 0px, rgba(0, 0, 0, 0.08) 0px 112px 45px 0px, rgba(0, 0, 0, 0.14) 0px 63px 38px 0px, rgba(0, 0, 0, 0.16) 0px 28px 28px 0px, rgba(0, 0, 0, 0.2) 0px 7px 15px 0px'
              }}
            >
              {/* Question and Response */}
              <div className="flex h-fit w-full flex-col gap-2 mb-20">
                {/* User Question Bubble */}
                <div className="flex w-full justify-end">
                  <div 
                    className="relative overflow-hidden rounded-2xl px-3 py-1 text-base font-light lg:text-lg text-primary-foreground"
                    style={{
                      background: 'linear-gradient(to bottom, #0743a7, #033381)',
                      borderBottomRightRadius: '4px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.49)',
                      borderBottom: '1px solid rgba(30, 5, 5, 0.49)'
                    }}
                  >
                    What should I say?
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex flex-col gap-1">
                  {/* Searched Records Indicator */}
                  <div className="flex items-center gap-1.5 text-sm font-light lg:text-base text-white/60">
                    <SearchRecordsIcon className="w-4 h-4 -translate-y-px" />
                    <p>Searched records</p>
                  </div>

                  {/* AI Response Text */}
                  <div className="w-full max-w-[90%] text-base leading-[1.3] font-light tracking-[-0.005em] text-primary-foreground lg:text-lg text-left">
                    <p className="text-left">
                      {['"So', 'just', 'to', 'recap—you', 'need', 'new', 'cabinets', 'and', 'lighting.', "I'll", 'send', 'you', 'a', 'quote', 'within', 'the', 'hour.', "Let's", 'do', 'a', 'kickoff', 'call', 'next', 'Wednesday', 'if', 'that', 'works', 'for', 'you?"'].map((word, index) => (
                        <span 
                          key={index}
                          className="animate-word mr-1"
                          style={{ animationDelay: `${demoCardDelay + 0.5 + (index * 0.05)}s` }}
                        >
                          {word}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Metadata and Input */}
              <div 
                className="flex w-full flex-col gap-2 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${demoBottomSectionDelay}s` }}
              >
                {/* Metadata Row */}
                <div className="flex items-center gap-1 px-1.5 text-sm">
                  <div className="flex items-center gap-1 text-[#EDEEF2]">
                    <WandSparklesIcon className="w-4 h-4 text-white/60" />
                    What should I say?
                  </div>
                  <DotIcon className="hidden lg:block w-4 h-4 text-white/60" />
                  <div className="hidden lg:flex items-center gap-1 text-[#EDEEF2]">
                    <MessageQuestionIcon className="w-4 h-4 text-white/60" />
                    Follow-up questions
                  </div>
                </div>

                {/* Input Field */}
                <div className="flex h-12 w-full items-center rounded-xl border border-white/20 bg-[#1a1e2d]/50 px-3 py-2 font-medium text-[#7A7A84]">
                  <span>Ask, </span>
                  <span className="mx-1 inline-flex h-fit items-center justify-center rounded-md border-[0.5px] border-[#80828C] px-0.5 py-px text-[11px] text-[#80828C]">
                    ⌘
                  </span>
                  <span className="mr-1 inline-flex h-fit items-center justify-center rounded-md border-[0.5px] border-[#80828C] px-0.5 py-px text-[11px] text-[#80828C]">
                    ⏎
                  </span>
                  <span> to start typing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
