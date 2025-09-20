import Header from "@/components/Header";
import Home from "@/components/Home";
import PoweredBy from "@/components/PoweredBy";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import FAQ from "@/components/FAQ";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

const App = () => (
  <div className="min-h-screen bg-background mt-6">
    <Header />
    
    <Section direction="up">
      <Home />
    </Section>

    <PoweredBy />

    <Section>
      <Demo />
    </Section>

    <Section direction="up">
      <Features />
    </Section>

    <Section>
      <FAQ />
    </Section>

    <Footer />
  </div>
);

export default App;