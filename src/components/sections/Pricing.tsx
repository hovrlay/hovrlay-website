const Pricing = () => (
  <section id="pricing" className="py-12 px-4 md:px-8 lg:px-12">
    <div className="container-custom text-center">
      <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-down">
        Pricing
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mb-8 animate-fade-in-down mx-auto">
        Explore our flexible pricing plans tailored to your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass glass-card p-6 rounded-lg animate-fade-in-down text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
          <p className="text-2xl font-bold text-white mb-4">$0/month</p>
          <p className="text-muted-foreground">Basic features for individual users.</p>
        </div>
        <div className="glass glass-card p-6 rounded-lg animate-fade-in-down text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
          <p className="text-2xl font-bold text-white mb-4">$10/month</p>
          <p className="text-muted-foreground">Advanced features for professionals.</p>
        </div>
        <div className="glass glass-card p-6 rounded-lg animate-fade-in-down text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
          <p className="text-2xl font-bold text-white mb-4">Custom</p>
          <p className="text-muted-foreground">Tailored solutions for teams.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;