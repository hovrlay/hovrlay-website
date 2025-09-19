import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";

const App = () => (
  <div className="min-h-screen relative">
    {/* Common background gradient for all sections */}
    <div className="absolute inset-0 bg-hero-gradient" />
    
    {/* Floating background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-float" />
    </div>

    <div className="relative z-10">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </div>
  </div>
);

export default App;