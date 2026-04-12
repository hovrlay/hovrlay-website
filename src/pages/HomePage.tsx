import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { OsDownloadButton } from "@/components/OsDownloadButton";
import Hero from "@/components/Hero";
import PoweredBy from "@/components/PoweredBy";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import Transcription from "@/components/Transcription";
import FAQ from "@/components/FAQ";
import Section from "@/components/Section";

const HomePage = () => {
  const location = useLocation();
  const [showStickyDownload, setShowStickyDownload] = useState(false);

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

  useEffect(() => {
    const el = document.getElementById("hero-download-cta");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrolledPastHeroCta = entry.boundingClientRect.bottom < 0;
        setShowStickyDownload(scrolledPastHeroCta);
      },
      { threshold: [0, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {showStickyDownload ? (
        <div className="fixed top-6 right-3 z-[60] md:right-6">
          <OsDownloadButton />
        </div>
      ) : null}

      <Hero />

      <PoweredBy />

      <Section >
      <Demo />
      </Section>

      <Section direction="up">
        <Features />
      </Section>

      <Section>
        <Transcription />
      </Section>

      <Section direction="up">
        <Pricing />
      </Section>
      
      <Section direction="up">
        <FAQ />
      </Section>
    </div>
  );
};

export default HomePage;
