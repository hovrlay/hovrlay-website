"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CheckIcon from "@/assets/check.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  detectDownloadPlatform,
  downloadButtonLabels,
  handleDownload,
} from "@/utils/downloads";

const pricingDownloadButtonClassName =
  "relative inline-flex h-11 w-full items-center justify-center gap-1 rounded-[6px] px-5 text-base font-medium leading-none tracking-tight whitespace-nowrap text-white transition-colors before:absolute before:inset-0 before:cursor-pointer before:rounded-[inherit] before:border before:border-transparent before:bg-transparent before:opacity-0 before:transition-opacity before:ease-in-out hover:before:opacity-100 bg-[radial-gradient(84.32%_100%_at_49.77%_0%,#2E3038_46.14%,#1C1D22_100%)] hover:bg-[radial-gradient(84.32%_100%_at_49.77%_0%,#404451_46.14%,#2D2F38_100%)] sm:text-base sm:leading-none";

const pricingPillClassName =
  "inline-flex h-[18px] shrink-0 items-center justify-center rounded-full bg-[#E0E4EB] bg-[linear-gradient(97.12deg,_rgba(255,255,255,0)_13%,_rgba(255,255,255,0.5)_26.4%,_rgba(255,255,255,0)_39.16%,_rgba(255,255,255,0.128542)_59.34%,_rgba(255,255,255,0.5)_75.6%,_rgba(255,255,255,0)_91.98%)] px-2 py-0.5 text-[11px] leading-tight font-semibold tracking-tight whitespace-nowrap text-foreground";

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

  const cardRing = isBest ? "brand-blue-glassy-ring" : "ring-1 ring-border";

  return (
    <div
      ref={ref}
      className={`flex h-full min-h-0 flex-col pt-5 animate-scroll-fade-in-up ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`relative flex h-full min-h-0 flex-col overflow-visible rounded-3xl bg-[#f8f9fc] p-4 sm:p-6 shadow-[-14px_-6px_16px_#ffffff59,-7px_-3px_6px_#eef1f74d,7px_3px_8px_#8591ac24,7px_14px_10px_#798cb624,10px_10px_20px_#b2c2dd33,inset_1px_1px_0.5px_#ffffff59] ${cardRing}`}
      >
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <p className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                {plan.name}
              </p>
              {hasDiscount && plan.savePercent ? (
                <span className={pricingPillClassName} aria-label={`Discount: ${plan.savePercent}%`}>
                  -{plan.savePercent}%
                </span>
              ) : null}
            </div>
            {isBest ? (
              <span className={pricingPillClassName}>Most popular</span>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <p className="text-4xl font-medium tabular-nums tracking-tight text-foreground leading-none">
              {formatMain(mainPrice)}
            </p>
            {hasDiscount && listPrice != null ? (
              <span className="text-xl font-light tabular-nums text-muted-foreground line-through decoration-muted-foreground/80">
                {formatMain(listPrice)}
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-xl sm:text-2xl font-medium tabular-nums tracking-tight text-foreground">
            {plan.creditCount} credit{plan.creditCount === 1 ? "" : "s"}
          </p>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => handleDownload(platform)}
              className={pricingDownloadButtonClassName}
            >
              <span className="relative z-10 inline-flex w-full items-center justify-center gap-1 whitespace-nowrap">
                {downloadButtonLabels[platform]}
              </span>
            </button>
          </div>

          <div className="mt-6 border-t border-border pt-6" />

          <div className="space-y-2 text-sm sm:text-sm tracking-tight leading-[1.3] text-foreground">
            <p className="flex gap-2">
              <span className="flex h-[1lh] shrink-0 items-center">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span>{plan.creditCount} hours of live AI help</span>
            </p>
            <p className="flex gap-2">
              <span className="flex h-[1lh] shrink-0 items-center">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span>{useInr ? formatINR(perCredit) : formatUSDPerCredit(perCredit)} /credit</span>
            </p>
            <p className="flex gap-2">
              <span className="flex h-[1lh] shrink-0 items-center">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span>{plan.featurePlaceholder}</span>
            </p>
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
            <h2 className="my-6 text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-medium section-title-gradient">
              Your first interview is free
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-base md:text-base lg:text-lg">
              No subscription. No credit card required.
            </p>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-base md:text-base lg:text-lg">
              Purchase credits only if you need more interview hours.
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-8">
          <div
            ref={compareRef}
            className={`flex justify-center mb-12 animate-scroll-fade-in-up ${compareVisible ? "visible" : ""}`}
          >
            <Link
              href="/blog/meeting-bots-comparison"
              className="group inline-flex items-center gap-1.5 text-md text-brand-blue underline-offset-4 transition-colors hover:text-brand-blue hover:underline"
            >
              How we compare with other AI meeting assistants
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          {/* —— Plans —— */}
          <div className="mx-auto w-full max-w-xs md:max-w-2xl xl:max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {plans.map((plan, index) => (
                <PricingCard key={plan.name} plan={plan} delay={index * 100} useInr={useInr} />
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground/45">
            Secure payments powered by Razorpay
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
