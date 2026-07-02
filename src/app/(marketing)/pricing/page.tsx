import type { Metadata } from "next";
import Pricing from "@/components/Pricing";
import PricingCTA from "@/components/PricingCTA";

export const metadata: Metadata = {
  title: "Pricing – Hovrlay",
  description: "Start for free. No subscription, no card required. Purchase AI hours only when you need them.",
};

export default function PricingPage() {
  return (
    <main className="pt-32 pb-8">
      <Pricing />
      <div className="mt-12 md:mt-20">
        <PricingCTA />
      </div>
    </main>
  );
}
