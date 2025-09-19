import Header from "@/components/Header";
import Home from "@/components/Home";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import FAQ from "@/components/FAQ";
import Section from "@/components/Section";

const App = () => (
  <div className="min-h-screen bg-background">
    <Header />
    
    <Section direction="up">
      <Home />
    </Section>

    <Section>
      <Demo />
    </Section>

    <Section direction="up">
      <Features />
    </Section>

    <Section>
      <FAQ />
    </Section>
  </div>
);

export default App;