import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import PoweredBy from "@/components/PoweredBy";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import FAQ from "@/components/FAQ";
import Section from "@/components/Section";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const section = urlParams.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location.search]);
  return (
    <>
      <Section direction="up">
        <Hero />
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
    </>
  );
};

export default HomePage;
