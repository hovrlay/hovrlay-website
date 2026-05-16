import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FixedDownloadButton } from "@/components/FixedDownloadButton";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FixedDownloadButton />
      {children}
      <Footer />
    </div>
  );
}
