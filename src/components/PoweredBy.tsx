import React, { useEffect, useRef } from "react";
import OpenAILogo from "@/assets/logo-openai.svg?react";
import GrokLogo from "@/assets/logo-grok.svg?react";
import GeminiLogo from "@/assets/logo-gemini.svg?react";
import ClaudeLogo from "@/assets/logo-claude.svg?react";
import SupabaseLogo from "@/assets/logo-supabase.svg?react";
import ElectronLogo from "@/assets/logo-electron.svg?react";

const PoweredBy = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const logos = [
    { name: "OpenAI", component: OpenAILogo },
    { name: "Grok", component: GrokLogo },
    { name: "Google Gemini", component: GeminiLogo, offsetUp: true },
    { name: "Claude", component: ClaudeLogo },
    { name: "Supabase", component: SupabaseLogo },
    { name: "Electron", component: ElectronLogo, offsetDown: true },
  ];

  useEffect(() => {
    const updateAnimationDuration = () => {
      if (marqueeRef.current) {
        const container = marqueeRef.current;
        const content = container.querySelector('.marquee-content') as HTMLElement;
        
        if (content) {
          const contentWidth = content.scrollWidth / 2;
          
          const baseSpeed = 50; // pixels per second
          const baseDuration = contentWidth / baseSpeed;
          
          container.style.setProperty('--marquee-duration', `${baseDuration * 0.8}s`); // Mobile: 20% faster
          container.style.setProperty('--marquee-duration-md', `${baseDuration * 0.9}s`); // md: 10% faster  
          container.style.setProperty('--marquee-duration-lg', `${baseDuration}s`); // lg: normal speed
        }
      }
    };

    // Update on mount and resize
    updateAnimationDuration();
    window.addEventListener('resize', updateAnimationDuration);
    
    return () => window.removeEventListener('resize', updateAnimationDuration);
  }, []);

  return (
    <section className="mx-2 md:mx-12 lg:mx-16 my-20 py-10">
      <div className="text-center mb-8">
        <h3 className="text-2xl lg:text-3xl font-medium text-muted-foreground">
          Powered by the best
        </h3>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling content */}
        <div ref={marqueeRef} className="flex items-center gap-20 py-8 animate-marquee" style={{ willChange: 'transform' }}>
          <div className="marquee-content flex items-center gap-20 flex-shrink-0">
            {Array.from({ length: 3 }).map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {logos.map(({ name, component: Logo, offsetDown, offsetUp }, logoIndex) => (
                  <div
                    key={`${setIndex}-${logoIndex}`}
                    className={`flex items-center justify-center min-w-[140px] h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 ${offsetDown ? 'translate-y-2' : ''} ${offsetUp ? '-translate-y-1' : ''}`}
                  >
                    <Logo
                      role="img"
                      aria-label={name}
                      className="max-w-full max-h-full object-contain text-foreground"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
