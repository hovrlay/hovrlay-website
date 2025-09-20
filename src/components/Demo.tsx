import PlayIcon from "@/assets/play.svg?react";

const Demo = () => (
  <section id="demo" className="py-2 px-4 md:px-8 lg:px-12">
    <div className="container-custom">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-5 animate-fade-in-down">
          See Hovrlay in Action
        </h2>
        <p className="text-base sm:text-base md:text-lg text-muted-foreground max-w-3xl animate-fade-in-down mx-auto">
          Watch how Hovrlay transforms your conversations.
        </p>
      </div>
      
      {/* Video placeholder - ready for your product demo */}
      <div className="animate-fade-in-down">
        <div className="glass rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="aspect-video bg-muted/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <PlayIcon />
              </div>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Product Demo Video</p>
              <p className="text-xs sm:text-sm text-muted-foreground/70 mt-2">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Demo;