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
      <div className="mt-2 text-5xl font-medium text-foreground lg:w-40 lg:flex-shrink-0">
        {value}
        {unit && <span className="text-3xl">{unit}</span>}
      </div>
      <div className="flex flex-col gap-y-3 flex-1">
        <span className="text-2xl md:text-3xl font-light text-foreground">{label}</span>
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
      className="w-full py-20 my-10"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-x-12 lg:flex-row px-4 md:px-8">
        {/* Image/Visual Element - Hidden on mobile, shown on desktop */}
        <div 
          ref={imageRef}
          className={`hidden lg:block animate-scroll-fade-in-up ${imageVisible ? 'visible' : ''}`}
        >
          <div className="glass rounded-3xl p-6 shadow-xl">
            <img 
              src="/transcript-preview.png" 
              alt="Real-time transcript"
              width={450}
              height={569}
              className="rounded-2xl pointer-events-none select-none w-[400px] h-auto"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-y-12 lg:gap-y-16 w-full lg:flex-1">
          <h2 
            ref={headerRef}
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight animate-scroll-fade-in-up ${headerVisible ? 'visible' : ''}`}
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

            <div className="h-[1px] w-full bg-gray-300/50 dark:bg-gray-700/50"></div>

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

            <div className="h-[1px] w-full bg-gray-300/50 dark:bg-gray-700/50"></div>

            <StatItem
              value="95%"
              label="Transcription accuracy"
              description={
                <>
                  Trusted by many teams for reliable transcription.{" "}
                  <br className="hidden lg:block" />
                  All processed with industry-leading accuracy.
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
          <div className="glass rounded-3xl p-6 shadow-xl">
            <img 
              src="/transcript-preview.png" 
              alt="Real-time transcript"
              width={450}
              height={569}
              className="rounded-2xl pointer-events-none select-none w-full max-w-md mx-auto h-auto"
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLDivElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback placeholder */}
            <div className="w-full max-w-md mx-auto h-[400px] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-center px-8">
                <div className="text-6xl mb-4">🎙️</div>
                <p className="text-lg text-muted-foreground">
                  Real-time transcript preview
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Add transcript-preview.png to /public folder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transcription;

