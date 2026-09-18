import Image from "next/image";

const Templates = () => {
  return (
    <section id="templates" className="px-4 md:px-8 lg:px-12">
      <div className="container-custom">
        <div className="text-center mb-14 flex flex-col items-center gap-6">
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-medium section-title-gradient">
            Built for every conversation
          </h2>
          <p className="text-base sm:text-base md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Pick a template or create your own, and Hovrlay tailors its responses accordingly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {["/templates-hero-1.jpg", "/templates-hero-2.jpg"].map((src) => (
            <div
              key={src}
              className="glass overflow-hidden"
              style={{
                borderRadius: "16px",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 0 40px rgba(79,110,247,0.15)"
              }}
            >
              <Image
                src={src}
                alt=""
                width={1600}
                height={1000}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
