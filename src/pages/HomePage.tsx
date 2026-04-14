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
    <main>
      <div
        className={`hidden md:block fixed top-6 right-3 z-[60] md:right-6 transition-all duration-300 ease-out ${
          showStickyDownload
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <OsDownloadButton />
      </div>

      <Hero />

      <div className="space-y-56 pb-24 md:space-y-60 lg:space-y-64">
        <PoweredBy />
        <Demo />
        <Features />
        <Transcription />
        <Pricing />
        <FAQ />
      </div>
    </main>
  );
};

export default HomePage;
