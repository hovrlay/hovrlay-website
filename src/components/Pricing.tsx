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

const cardClassName =
  "relative flex h-full min-h-0 flex-col overflow-visible rounded-3xl bg-[#f8f9fc] p-4 sm:p-6 shadow-[-14px_-6px_16px_#ffffff59,-7px_-3px_6px_#eef1f74d,7px_3px_8px_#8591ac24,7px_14px_10px_#798cb624,10px_10px_20px_#b2c2dd33,inset_1px_1px_0.5px_#ffffff59]";

const downloadBtnClassName =
  "relative inline-flex h-11 w-full items-center justify-center gap-1 rounded-[6px] px-5 text-base font-medium leading-none tracking-tight whitespace-nowrap text-white transition-colors before:absolute before:inset-0 before:cursor-pointer before:rounded-[inherit] before:border before:border-transparent before:bg-transparent before:opacity-0 before:transition-opacity before:ease-in-out hover:before:opacity-100 bg-[radial-gradient(84.32%_100%_at_49.77%_0%,#2E3038_46.14%,#1C1D22_100%)] hover:bg-[radial-gradient(84.32%_100%_at_49.77%_0%,#404451_46.14%,#2D2F38_100%)] sm:text-base sm:leading-none";


const featureItemClassName = "flex gap-2 text-sm tracking-tight leading-[1.3] text-foreground";

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatUSDPerCredit(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
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

const FreePlanCard = ({ delay = 0 }: { delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });
  const platform = detectDownloadPlatform();

  return (
    <div
      ref={ref}
      className={`flex h-full min-h-0 flex-col pt-5 animate-scroll-fade-in-up ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`${cardClassName} ring-1 ring-border`}>
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-2">
            <p className="text-lg sm:text-xl font-medium tracking-tight text-foreground">Starter</p>
          </div>

          <div className="mt-6">
            <p className="text-4xl font-medium tracking-tight text-foreground leading-none">Free</p>
            <p className="mt-2 text-lg font-normal tracking-tight text-muted-foreground">No card required</p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => handleDownload(platform)}
              className={downloadBtnClassName}
            >
              <span className="relative z-10 inline-flex w-full items-center justify-center gap-1 whitespace-nowrap">
                {downloadButtonLabels[platform]}
              </span>
            </button>
          </div>

          <div className="mt-6 border-t border-border pt-6" />

          <div className="space-y-2">
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>Limited AI usage</span>
            </p>
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>Real-time transcriptions</span>
            </p>
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>Use screen context for AI chat</span>
            </p>
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>Custom keybinds</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StarterPlanCard = ({ delay = 0, useInr }: { delay?: number; useInr: boolean }) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });
  const platform = detectDownloadPlatform();
  const price = useInr ? formatINR(999) : formatUSD(9.99);
  const perCredit = useInr ? formatINR(333) : formatUSDPerCredit(3.33);

  return (
    <div
      ref={ref}
      className={`flex h-full min-h-0 flex-col pt-5 animate-scroll-fade-in-up ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`${cardClassName} ring-1 ring-border`}>
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-2">
            <p className="text-lg sm:text-xl font-medium tracking-tight text-foreground">Basic</p>
          </div>

          <div className="mt-6">
            <p className="text-4xl font-medium tabular-nums tracking-tight text-foreground leading-none">{price}</p>
            <p className="mt-2 text-lg font-normal tabular-nums tracking-tight text-muted-foreground">3 credits · {perCredit}/credit</p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => handleDownload(platform)}
              className={downloadBtnClassName}
            >
              <span className="relative z-10 inline-flex w-full items-center justify-center gap-1 whitespace-nowrap">
                {downloadButtonLabels[platform]}
              </span>
            </button>
          </div>

          <div className="mt-6 border-t border-border pt-6" />

          <div className="space-y-2">
            <p className="text-sm tracking-tight leading-[1.3] font-medium text-foreground">Everything in Starter, plus...</p>
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>3 hours of real-time AI help</span>
            </p>
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>Undetectable to screen share</span>
            </p>
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>Resume upload for tailored AI help</span>
            </p>
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>Priority support </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProPlanCard = ({ delay = 0, useInr }: { delay?: number; useInr: boolean }) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });
  const platform = detectDownloadPlatform();
  const price = useInr ? formatINR(2499) : formatUSD(24.99);
  const perCredit = useInr ? formatINR(250) : formatUSDPerCredit(2.5);

  return (
    <div
      ref={ref}
      className={`flex h-full min-h-0 flex-col pt-5 animate-scroll-fade-in-up ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`${cardClassName} ring-1 ring-border`}>
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-2">
            <p className="text-lg sm:text-xl font-medium tracking-tight text-foreground">Pro</p>
            <span className="inline-flex h-[18px] shrink-0 items-center justify-center rounded-full bg-[#E0E4EB] bg-[linear-gradient(97.12deg,_rgba(255,255,255,0)_13%,_rgba(255,255,255,0.5)_26.4%,_rgba(255,255,255,0)_39.16%,_rgba(255,255,255,0.128542)_59.34%,_rgba(255,255,255,0.5)_75.6%,_rgba(255,255,255,0)_91.98%)] px-2 py-0.5 text-[11px] leading-tight font-semibold tracking-tight whitespace-nowrap text-foreground">Most popular</span>
          </div>

          <div className="mt-6">
            <p className="text-4xl font-medium tabular-nums tracking-tight text-foreground leading-none">{price}</p>
            <p className="mt-2 text-lg font-normal tabular-nums tracking-tight text-muted-foreground">10 credits · {perCredit}/credit</p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => handleDownload(platform)}
              className={downloadBtnClassName}
            >
              <span className="relative z-10 inline-flex w-full items-center justify-center gap-1 whitespace-nowrap">
                {downloadButtonLabels[platform]}
              </span>
            </button>
          </div>

          <div className="mt-6 border-t border-border pt-6" />

          <div className="space-y-2">
            <p className="text-sm tracking-tight leading-[1.3] font-medium text-foreground">Everything in Starter, plus...</p>
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>10 hours of real-time AI help</span>
            </p>
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>Undetectable to screen share</span>
            </p>
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>Resume upload for tailored AI help</span>
            </p>
            <p className={featureItemClassName}>
              <span className="flex h-[1lh] shrink-0 items-center"><CheckIcon className="h-3.5 w-3.5" /></span>
              <span>Priority support </span>
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
    triggerOnce: true,
  });

  const { ref: compareRef, isVisible: compareVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });

  return (
    <section id="pricing" className=" px-4 md:px-8 lg:px-12">
      <div className="container-custom mx-auto max-w-6xl">
        <header
          ref={headerRef}
          className={`mb-8 animate-scroll-fade-in-up ${headerVisible ? "visible" : ""}`}
        >
          <div className="mb-6 text-center">
            <h2 className="my-6 text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-medium section-title-gradient">
              Start for free
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-base md:text-base lg:text-lg">
              No subscription. No card required.
            </p>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-base md:text-base lg:text-lg">
              Purchase credits only when you need. 1 Credit = 1h Call
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
              className="group inline-block max-w-[min(100%,20rem)] text-center font-light text-sm md:text-base lg:text-base text-[#3152F4] underline-offset-4 underline transition-colors sm:max-w-none"
            >
              How we compare with other AI meeting assistants →
            </Link>
          </div>

          <div className="mx-auto w-full max-w-xs md:max-w-2xl xl:max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              <FreePlanCard delay={0} />
              <StarterPlanCard delay={100} useInr={useInr} />
              <ProPlanCard delay={200} useInr={useInr} />
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground/45">
            Credits are purchased inside the app. Secure payments powered by Razorpay
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
