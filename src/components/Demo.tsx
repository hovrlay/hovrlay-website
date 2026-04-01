import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Demo = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  return (
  <section id="demo" className="py-2 px-4 md:px-8 lg:px-12 mb-44">
    <div className="container-custom">
      {/* Product Demo Video */}
      <div 
        ref={ref}
        className={`animate-scroll-fade-in-up ${isVisible ? 'visible' : ''}`}
      >
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
