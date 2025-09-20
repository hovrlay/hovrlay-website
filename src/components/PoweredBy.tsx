import React from "react";
import OpenAILogo from "@/assets/logo-openai.svg?react";
import GrokLogo from "@/assets/logo-grok.svg?react";
import GeminiLogo from "@/assets/logo-gemini.svg?react";
import ClaudeLogo from "@/assets/logo-claude.svg?react";
import SupabaseLogo from "@/assets/logo-supabase.svg?react";
import ElectronLogo from "@/assets/logo-electron.svg?react";

const PoweredBy = () => {

  const logos = [
    { name: "OpenAI", component: OpenAILogo },
    { name: "Grok", component: GrokLogo },
    { name: "Google Gemini", component: GeminiLogo },
    { name: "Claude", component: ClaudeLogo },
    { name: "Supabase", component: SupabaseLogo },
    { name: "Electron", component: ElectronLogo },
  ];

  return (
    <section className="mx-2 md:mx-12 lg:mx-16 my-20">
      <div className="text-center mb-8">
        <h3 className="text-2xl lg:text-3xl font-medium text-muted-foreground">
          Powered by the best
        </h3>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling content */}
        <div className="flex items-center gap-20 py-8 animate-marquee">
          {Array.from({ length: 2 }).map((_, setIndex) => (
            <React.Fragment key={setIndex}>
              {logos.map(({ name, component: Logo }, logoIndex) => (
                <div
                  key={`${setIndex}-${logoIndex}`}
                  className="flex items-center justify-center flex-shrink-0 min-w-[160px] h-12"
                >
                  <Logo
                    role="img"
                    aria-label={name}
                    className="max-w-full max-h-full text-foreground"
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
