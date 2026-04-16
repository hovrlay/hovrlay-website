import RazorpayLogo from "@/assets/logo-razorpay.svg?react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { detectDownloadPlatform, handleDownload } from "@/utils/downloads";

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Math.round(amount));
}

type PricingPlan = {
  name: string;
  creditCount: number;
  priceRupees: number;
  pricePerCreditRupees: number;
  tier: "default" | "bestValue";
  featurePlaceholder: string;
  listPriceRupees?: number;
  savePercent?: number;
};

const plans: PricingPlan[] = [
  {
    name: "Starter",
    creditCount: 3,
    priceRupees: 899,
    pricePerCreditRupees: 299,
    tier: "default" as const,
    featurePlaceholder: "Perfect if you have a few interviews coming up and want focused AI help without committing too much."
  },
  {
    name: "Plus",
    creditCount: 8,
    priceRupees: 1999,
    listPriceRupees: 2499,
    savePercent: 20,
    pricePerCreditRupees: 249,
    tier: "default" as const,
    featurePlaceholder: "For active job seekers who need consistent practice and feedback across multiple interviews."
  },
  {
    name: "Pro",
    creditCount: 20,
    priceRupees: 3999,
    listPriceRupees: 5999,
    savePercent: 33,
    pricePerCreditRupees: 199,
    tier: "bestValue" as const,
    featurePlaceholder: "For serious candidates preparing for high stakes interviews (FAANG, startups, or role switches)."
  }
];

interface PricingCardProps {
  plan: PricingPlan;
  delay?: number;
}

const PricingCard = ({ plan, delay = 0 }: PricingCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true
  });

  const isBest = plan.tier === "bestValue";
  const hasDiscount = plan.listPriceRupees != null;
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
              {formatINR(plan.priceRupees)}
            </p>
            {hasDiscount ? (
              <span className="text-2xl sm:text-3xl font-light tabular-nums text-muted-foreground line-through decoration-muted-foreground/80">
                {formatINR(plan.listPriceRupees!)}
              </span>
            ) : null}
          </div>

          <p className={`mt-4 text-xl sm:text-2xl font-semibold tabular-nums tracking-tight ${isBest ? "text-brand-blue" : "text-foreground"}`}>
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
              <span>{formatINR(plan.pricePerCreditRupees)} per credit</span>
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
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.1,
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
              Start for free. Pay when you need more.
            </span>
            <br />
            <span className="text-sm sm:text-base">
              1 credit = 1 hour of live AI help. Includes free usage.
            </span>
          </p>
          </div>

        </header>

        <div className="flex flex-col gap-8">
          {/* Emphasis pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground">
              Start for free
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground">
              No subscription
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground">
              Credits never expire
            </span>
          </div>

          {/* —— Plans —— */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} delay={index * 100} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
