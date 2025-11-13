import React from "react";
import OpenAILogo from "@/assets/logo-openai.svg?react";
import GrokLogo from "@/assets/logo-grok.svg?react";
import GeminiLogo from "@/assets/logo-gemini.svg?react";
import ClaudeLogo from "@/assets/logo-claude.svg?react";
import SupabaseLogo from "@/assets/logo-supabase.svg?react";
import DeepgramLogo from "@/assets/logo-deepgram.svg?react";

// Define TypeScript interface for logo objects
interface Logo {
  name: string;
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  offsetUp?: boolean;
  offsetDown?: boolean;
}

const PoweredBy = () => {
  const logos: Logo[] = [
    { name: "Supabase", component: SupabaseLogo },
    { name: "Deepgram", component: DeepgramLogo, offsetDown: true },
    { name: "OpenAI", component: OpenAILogo },
    { name: "Grok", component: GrokLogo },
    { name: "Google Gemini", component: GeminiLogo, offsetUp: true },
    { name: "Claude", component: ClaudeLogo }
  ];

  // Duplicate the logos array for the marquee effect (3 sets for better coverage on bigger screens)
  const duplicatedLogos: Logo[] = [...logos, ...logos, ...logos];

  const renderLogos = () => (
    <div className="flex items-center gap-8 md:gap-12 lg:gap-16 animate-marquee flex-shrink-0">
      {duplicatedLogos.map(({ name, component: Logo, offsetUp, offsetDown }, index) => (
        <div
          key={`logo-${index}`}
          className={`flex items-center justify-center min-w-[120px] md:min-w-[140px] h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 ${offsetUp ? '-translate-y-1' : ''} ${offsetDown ? 'translate-y-1' : ''}`}
        >
          <Logo
            role="img"
            aria-label={name}
            className="max-w-full max-h-full object-contain text-foreground"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="mx-2 md:mx-12 lg:mx-16 mb-20 pb-10">
      <div className="text-center mb-8">
        <h3 className="text-2xl lg:text-3xl font-medium text-muted-foreground">
          Powered by the best
        </h3>
      </div>

      <div className="relative overflow-hidden mb-8">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex items-center py-8">
          {renderLogos()}
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;