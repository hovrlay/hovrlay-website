"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StatItemProps {
  value: string;
  unit?: string;
  label: string;
  description: string | React.ReactNode;
  delay?: number;
}

const StatItem = ({ value, unit, label, description, delay = 0 }: StatItemProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-start gap-x-12 lg:flex-row animate-scroll-fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mt-2 text-5xl text-foreground lg:w-40 lg:flex-shrink-0">
        {value}
        {unit && <span className="text-3xl">{unit}</span>}
      </div>
      <div className="flex flex-col gap-y-3 flex-1">
        <span className="text-2xl md:text-3xl text-foreground">{label}</span>
        <span className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </span>
      </div>
    </div>
  );
};

const Transcription = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="transcription" 
      className="w-full"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-x-12 lg:gap-x-24 lg:flex-row px-4 md:px-8">
        {/* Image/Visual Element - Hidden on mobile, shown on desktop */}
        <div 
          ref={imageRef}
          className={`hidden lg:block animate-scroll-fade-in-up ${imageVisible ? 'visible' : ''}`}
        >
          <img 
            src="/transcript-preview.jpg" 
            alt="Real-time transcript"
            width={450}
            height={569}
            className="rounded-2xl pointer-events-none select-none w-[400px] h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-y-12 lg:gap-y-20 w-full lg:flex-1">
          <h2 
            ref={headerRef}
            className={`text-4xl md:text-5xl lg:text-5xl font-medium section-title-gradient leading-tight animate-scroll-fade-in-up ${headerVisible ? 'visible' : ''}`}
          >
            Real-time transcription
          </h2>

          <div className="flex flex-col gap-y-8">
            <StatItem
              value="12+"
              label="Languages"
              description={
                <>
                  We support over 12 different languages, including{" "}
                  <br className="hidden lg:block" />
                  English, Chinese, Spanish, and more.
                </>
              }
              delay={100}
            />

            <div className="h-[1px] w-full bg-gray-300/50"></div>

            <StatItem
              value="250"
              unit="ms"
              label="Response time"
              description={
                <>
                  We have the fastest live transcription available in the market. Test us against any other competitor.
                </>
              }
              delay={200}
            />

            <div className="h-[1px] w-full bg-gray-300/50"></div>

            <StatItem
              value="95%"
              label="Transcription accuracy"
              description={
                <>
                  Trusted by many teams for reliable transcription.{" "}
                  <br className="hidden lg:block" />
                  All processed with industry leading accuracy.
                </>
              }
              delay={300}
            />
          </div>
        </div>

        {/* Mobile Image - Shown only on mobile */}
        <div 
          className="mt-8 lg:hidden animate-scroll-fade-in-up visible"
        >
          <img 
            src="/transcript-preview.jpg" 
            alt="Real-time transcript"
            width={450}
            height={569}
            className="rounded-2xl pointer-events-none select-none w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Transcription;

