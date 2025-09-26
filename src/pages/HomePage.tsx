import Hero from "@/components/Hero";
import PoweredBy from "@/components/PoweredBy";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import FAQ from "@/components/FAQ";
import Section from "@/components/Section";

const HomePage = () => {
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
