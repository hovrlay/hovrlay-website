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
      <div className="text-left py-8 mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-5">
          See Hovrlay in Action
        </h2>
        <p className="text-base sm:text-base md:text-base lg:text-lg text-muted-foreground max-w-5xl">
          The current development stage of Hovrlay includes a real time transcription, the fastest we have ever seen.<br />These transripts will be fed into our AI models to provide you with the best AI wingman experience.
        </p>
      </div>
      
      {/* Product Demo Video */}
      <div 
        ref={ref}
        className={`animate-scroll-fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <div className="glass rounded-lg overflow-hidden mb-12 sm:max-w-5xl md:max-w-6xl lg:max-w-7xl -mx-6 sm:mx-auto md:mx-auto lg:mx-auto">
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
