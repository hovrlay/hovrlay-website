const Contact = () => (
  <section id="contact" className="py-12 px-4 md:px-8 lg:px-12">
    <div className="container-custom text-center">
      <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in-down">
        Contact
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mb-8 animate-fade-in-down mx-auto">
        Get in touch with our team for support or inquiries.
      </p>
      <div className="glass glass-card p-6 rounded-lg animate-fade-in-down max-w-xl mx-auto text-center">
        <p className="text-muted-foreground mb-4">
          Email us at <a href="mailto:support@hovrlay.com" className="text-primary hover:underline">support@hovrlay.com</a>
        </p>
        <p className="text-muted-foreground">
          Follow us on <a href="https://x.com/hovrlay" className="text-primary hover:underline">X</a> for updates.
        </p>
      </div>
    </div>
  </section>
);

export default Contact;