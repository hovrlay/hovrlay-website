import PlayIcon from "@/assets/play.svg?react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Demo = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  return (
  <section id="demo" className="py-2 px-4 md:px-8 lg:px-12">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-5">
          See Hovrlay in Action
        </h2>
        <p className="text-base sm:text-base md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
          Watch how Hovrlay transforms your conversations.
        </p>
      </div>
      
      {/* Video placeholder - ready for your product demo */}
      <div 
        ref={ref}
        className={`animate-scroll-fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <div className="glass rounded-lg overflow-hidden max-w-4xl mx-auto mb-12">
          <div className="aspect-video bg-muted/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <PlayIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <p className="text-muted-foreground text-sm sm:text-base md:text-base lg:text-lg">Product Demo Video</p>
              <p className="text-xs sm:text-sm text-muted-foreground/70 mt-2">Coming Soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Demo;