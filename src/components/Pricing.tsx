"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import RazorpayLogo from "@/assets/logo-razorpay.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { detectDownloadPlatform, handleDownload } from "@/utils/downloads";

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Math.round(amount));
}

function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
}

function formatUSDPerCredit(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2
  }).format(amount);
}

function useIndiaPricingRegion(): boolean {
  const [isIndia, setIsIndia] = useState(false);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") {
        setIsIndia(true);
        return;
      }
      let region: string | undefined;
      try {
        region = new Intl.Locale(navigator.language).maximize().region;
      } catch {
        const parts = navigator.language.split("-");
        region = parts.length > 1 ? parts[parts.length - 1]?.toUpperCase() : undefined;
      }
      if (region === "IN") setIsIndia(true);
    } catch {
      // keep false
    }
  }, []);

  return isIndia;
}

type PricingPlan = {
  name: string;
  creditCount: number;
  priceRupees: number;
  pricePerCreditRupees: number;
  priceUsd: number;
  pricePerCreditUsd: number;
  tier: "default" | "bestValue";
  featurePlaceholder: string;
  listPriceRupees?: number;
  listPriceUsd?: number;
  savePercent?: number;
};

const plans: PricingPlan[] = [
  {
    name: "Starter",
    creditCount: 3,
    priceRupees: 899,
    pricePerCreditRupees: 299,
    priceUsd: 9,
    pricePerCreditUsd: 3,
    tier: "default" as const,
    featurePlaceholder: "Perfect if you have a few interviews coming up and want focused AI help without committing too much."
  },
  {
    name: "Plus",
    creditCount: 8,
    priceRupees: 1999,
    listPriceRupees: 2499,
    listPriceUsd: 24,
    savePercent: 20,
    pricePerCreditRupees: 249,
    priceUsd: 20,
    pricePerCreditUsd: 2.5,
    tier: "default" as const,
    featurePlaceholder: "For active job seekers who need consistent practice and feedback across multiple interviews."
  },
  {
    name: "Pro",
    creditCount: 20,
    priceRupees: 3999,
    listPriceRupees: 5999,
    listPriceUsd: 60,
    savePercent: 33,
    pricePerCreditRupees: 199,
    priceUsd: 40,
    pricePerCreditUsd: 2,
    tier: "bestValue" as const,
    featurePlaceholder: "For serious candidates preparing for high stakes interviews (FAANG, startups, or role switches)."
  }
];

interface PricingCardProps {
  plan: PricingPlan;
  delay?: number;
  useInr: boolean;
}

const PricingCard = ({ plan, delay = 0, useInr }: PricingCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true
  });

  const isBest = plan.tier === "bestValue";
  const hasDiscount = useInr ? plan.listPriceRupees != null : plan.listPriceUsd != null;
  const formatMain = useInr ? formatINR : formatUSD;
  const mainPrice = useInr ? plan.priceRupees : plan.priceUsd;
  const listPrice = useInr ? plan.listPriceRupees : plan.listPriceUsd;
  const perCredit = useInr ? plan.pricePerCreditRupees : plan.pricePerCreditUsd;
  const platform = detectDownloadPlatform();

  const cardRing = isBest
    ? "brand-blue-glassy-ring shadow-xl shadow-primary/20"
    : "ring-1 ring-border shadow-md shadow-slate-300/40";

  return (
    <div
      ref={ref}
      className={`flex h-full min-h-0 flex-col pt-5 animate-scroll-fade-in-up ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`relative flex h-full min-h-0 flex-col overflow-visible rounded-3xl bg-card/60 p-7 sm:p-8 ${cardRing}`}
      >
        {isBest ? (
          <span className="brand-blue-glassy-bg absolute top-0 left-1/2 z-20 inline-flex -translate-x-1/2 -translate-y-1/2 items-center rounded-full border border-white/20 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-md shadow-primary/35">
            Best value
          </span>
        ) : null}

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-2">
            <p className={`text-2xl sm:text-[28px] font-semibold tracking-tight ${isBest ? "text-brand-blue" : "text-foreground"}`}>
              {plan.name}
            </p>
            {hasDiscount && plan.savePercent ? (
              <span className="inline-flex items-center rounded-full border border-[#bfdbfe] bg-[#dbeafe] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#1d4ed8]">
                Save {plan.savePercent}%
              </span>
            ) : null}
          </div>

          <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <p className="text-4xl sm:text-5xl font-semibold tabular-nums tracking-tight text-foreground leading-none">
              {formatMain(mainPrice)}
            </p>
            {hasDiscount && listPrice != null ? (
              <span className="text-xl sm:text-2xl font-light tabular-nums text-muted-foreground line-through decoration-muted-foreground/80">
                {formatMain(listPrice)}
              </span>
            ) : null}
          </div>

          <p className={`mt-4 text-xl sm:text-2xl font-medium tabular-nums tracking-tight ${isBest ? "text-brand-blue" : "text-foreground"}`}>
            {plan.creditCount} credit{plan.creditCount === 1 ? "" : "s"}
          </p>

          <div className="mt-8 border-t border-border pt-6" />

          <div className="space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <p className="flex items-start gap-2">
              <span className="text-brand-blue mt-0.5 text-sm font-semibold" aria-hidden>
                ✓
              </span>
              <span>{plan.creditCount} hours of live AI help</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-brand-blue mt-0.5 text-sm font-semibold" aria-hidden>
                ✓
              </span>
              <span>{useInr ? formatINR(perCredit) : formatUSDPerCredit(perCredit)} per credit</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-brand-blue mt-0.5 text-sm font-semibold" aria-hidden>
                ✓
              </span>
              <span>{plan.featurePlaceholder}</span>
            </p>
          </div>

          <div className="mt-auto pt-8">
            <button
              type="button"
              onClick={() => handleDownload(platform)}
              className={`inline-flex w-full items-center justify-center rounded-sm px-6 py-3 sm:py-4 text-base sm:text-lg font-medium transition-colors ${
                isBest
                  ? "blue-glassy-button text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              Download App to Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const useInr = useIndiaPricingRegion();

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: compareRef, isVisible: compareVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true
  });

  return (
    <section id="pricing" className=" px-4 md:px-8 lg:px-12">
      <div className="container-custom mx-auto max-w-6xl">
        {/* —— Hero —— */}
        <header
          ref={headerRef}
          className={`mb-8 animate-scroll-fade-in-up ${headerVisible ? "visible" : ""}`}
        >
          <div className="mb-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium section-title-gradient">
              Simple credit based pricing
            </h2>
          </div>
                    <div className="mt-8 flex items-center justify-center text-sm text-muted-foreground">
            <span
              className="inline-flex items-center gap-2 text-muted-foreground"
              aria-label="Powered by Razorpay"
            >
              <span className="text-xs uppercase tracking-wider">Powered by</span>
              <RazorpayLogo
                className="h-5 w-auto text-[#3395FF]"
                aria-hidden
              />
            </span>
          </div>
          <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="mt-14 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            <span className="text-lg sm:text-lg font-medium text-foreground">
              Start for free. No subscription. Pay when you need more.
            </span>
            <br />
            <span className="text-sm sm:text-base">
              1 credit = 1 hour of interview assistance
            </span>
          </p>
          </div>

        </header>

        <div className="flex flex-col gap-8">
          <div
            ref={compareRef}
            className={`flex justify-center animate-scroll-fade-in-up ${compareVisible ? "visible" : ""}`}
          >
            <Link
              href="/blog/meeting-bots-comparison"
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground/90 underline-offset-4 transition-colors hover:text-foreground/80 hover:underline"
            >
              See how we compare with other AI meeting assistants
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          {/* —— Plans —— */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} delay={index * 100} useInr={useInr} />
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-muted-foreground/70 mt-2">
            Purchases are completed securely inside the Hovrlay app
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
