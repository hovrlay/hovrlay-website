import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Home from "@/components/Home";
import PoweredBy from "@/components/PoweredBy";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import FAQ from "@/components/FAQ";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-background mt-12 transition-colors duration-300">
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      
      <Section direction="up">
        <Home />
      </Section>

      <PoweredBy />

      <Section>
        <Demo />
      </Section>

      <Section>
        <Features />
      </Section>

      <Section direction="up">
        <FAQ />
      </Section>

      <Footer />
    </div>
  );
};

export default App;