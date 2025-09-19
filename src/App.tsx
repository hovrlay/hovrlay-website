import Header from "@/components/Header";
import Home from "@/components/Home";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import FAQ from "@/components/FAQ";

const App = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Home />
    <Demo />
    <Features />
    <FAQ />
  </div>
);

export default App;