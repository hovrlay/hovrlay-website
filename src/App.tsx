import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";

const App = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Features />
    <Pricing />
    <Contact />
  </div>
);

export default App;