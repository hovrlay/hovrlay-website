import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Demo = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  return (
  <section id="demo" className="px-4 md:px-8 lg:px-12">
    <div className="container-custom">
      {/* Product Demo Video */}
      <div 
        ref={ref}
        className={`animate-scroll-fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-14 flex flex-col items-center gap-6">
          <span className="inline-flex items-center rounded-full border border-border/70 bg-muted/50 backdrop-blur-sm px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
            LIVE DEMO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium section-title-gradient">
            Watch Hovrlay in action
          </h2>
          <p className="text-base sm:text-base md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Real time AI assistance, invisible to everyone but you.
          </p>
        </div>

        <div
          className="glass overflow-hidden sm:max-w-3xl md:max-w-4xl lg:max-w-5xl -mx-6 sm:mx-auto md:mx-auto lg:mx-auto"
          style={{
            borderRadius: "16px",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 0 40px rgba(79,110,247,0.15)"
          }}
        >
          <div className="relative aspect-video">
            <video 
              width="1216" 
              height="620" 
              loop 
              autoPlay
              playsInline
              muted
              controls
              className="w-full h-full object-cover"
              src="/product-demo.mp4"
            >
              Your browser doesn't support video playback.
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Demo;
