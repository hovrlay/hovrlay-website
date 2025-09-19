const Features = () => (
  <section id="features" className="py-12 px-4 md:px-8 lg:px-12">
    <div className="container-custom text-center">
      <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-down">
        Features
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mb-8 animate-fade-in-down mx-auto">
        Discover the powerful features of Hovrlay, including real-time AI assistance for meetings, calls, and interviews.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass glass-card p-6 rounded-lg animate-fade-in-down text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Real-Time AI</h3>
          <p className="text-muted-foreground">Get instant suggestions during conversations to enhance your communication.</p>
        </div>
        <div className="glass glass-card p-6 rounded-lg animate-fade-in-down text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Undetectable</h3>
          <p className="text-muted-foreground">Seamlessly integrates into your workflow without detection.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;