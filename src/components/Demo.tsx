const Demo = () => (
  <section id="demo" className="py-12 px-4 md:px-8 lg:px-12">
    <div className="container-custom text-center">
      <h2 className="text-5xl font-semibold text-foreground mb-6 animate-fade-in-down">
        See Hovrlay in Action
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mb-16 animate-fade-in-down mx-auto">
        Watch how Hovrlay transforms your conversations with real time AI.
      </p>
      
      {/* Video placeholder - ready for your product demo */}
      <div className="animate-fade-in-down">
        <div className="glass rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="aspect-video bg-muted/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-primary" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-muted-foreground text-lg">Product Demo Video</p>
              <p className="text-sm text-muted-foreground/70 mt-2">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Demo;