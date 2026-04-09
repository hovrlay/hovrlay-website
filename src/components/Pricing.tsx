import { Button } from "@/components/Button";
import AppleIcon from "@/assets/apple.svg?react";
import WindowsIcon from "@/assets/windows.svg?react";
import { handleDownload } from "@/utils/downloads";
import PricingInfoRefreshIcon from "@/assets/pricing-info-refresh.svg?react";
import PricingInfoClockIcon from "@/assets/pricing-info-clock.svg?react";
import PricingInfoPhoneIcon from "@/assets/pricing-info-phone.svg?react";
import RazorpayLogo from "@/assets/logo-razorpay.svg?react";

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Math.round(amount));
}

const plans = [
  {
    name: "Starter",
    creditCount: 3,
    priceRupees: 899,
    pricePerCreditRupees: 299,
    tier: "default" as const,
    description: "Great for your first few interviews or mock rounds."
  },
  {
    name: "Plus",
    creditCount: 8,
    priceRupees: 1999,
    pricePerCreditRupees: 249,
    tier: "popular" as const,
    description: "Our most popular pack. Ideal for active job seekers."
  },
  {
    name: "Pro",
    creditCount: 20,
    priceRupees: 3999,
    pricePerCreditRupees: 199,
    tier: "bestValue" as const,
    description: "Best for serious job hunters running several interviews per week."
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-16 md:py-24 lg:py-28 px-4 sm:px-6">
      <div className="container-custom relative max-w-6xl mx-auto">
        {/* —— Hero —— */}
        <header className="mb-14 md:mb-20 lg:mb-24">
          <div className="text-center mb-16 md:mb-18">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-foreground ">
              Pricing
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
            <div className="max-w-2xl lg:text-left text-center lg:mx-0 mx-auto">
                <span className="block mt-1 text-primary font-medium text-2xl sm:text-3xl md:text-4xl tracking-tight">
                  Use it when you need it.
                </span>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
                <span className="font-medium text-foreground">
                  Download and try for free. No card needed.
                </span>{" "}
                Top up with credits only when your trial ends.{" "}
                <span className="text-foreground/90">No subscription. Credits never expire.</span>
              </p>
            </div>

            <div className="lg:shrink-0 lg:max-w-xs w-full max-w-md mx-auto lg:mx-0 ">
              <div className="rounded-2xl border border-border/80 bg-muted/30 dark:bg-muted/20 px-5 py-4 backdrop-blur-sm mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  How credits work
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <PricingInfoPhoneIcon
                      className="h-4 w-4 shrink-0 text-primary mt-0.5"
                      aria-hidden
                    />
                    <span>
                      <span className="text-foreground font-medium">1 credit = 1 hour</span> of
                      real time AI assistance.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <PricingInfoClockIcon
                      className="h-4 w-4 shrink-0 text-primary mt-0.5"
                      aria-hidden
                    />
                    <span>
                      Credits sit in your account until you use them.{" "}
                      <span className="text-foreground font-medium">They never expire</span>.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Emphasis pills */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs sm:text-sm font-medium text-foreground shadow-sm">
              Start for free
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground">
              No subscription
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground">
              Credits never expire
            </span>
          </div>
        </header>

        {/* —— Plans —— */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-6xl mx-auto lg:mx-0">
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <PricingInfoRefreshIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden />
              30-day money-back
            </span>
            <span className="hidden sm:inline h-3 w-px bg-border" aria-hidden />
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
              Secure payments via Razorpay
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.tier === "popular";
            const isBest = plan.tier === "bestValue";

            const cardRing =
              isPopular
                ? "ring-2 ring-primary/50 shadow-xl shadow-primary/10 dark:shadow-primary/20"
                : isBest
                  ? "ring-2 ring-emerald-500/40 shadow-xl shadow-emerald-500/10 dark:ring-emerald-400/35 dark:shadow-emerald-500/15"
                  : "ring-1 ring-border/80 shadow-sm";

            return (
              <div key={plan.name} className="flex flex-col min-h-0 pt-5">
                <div
                  className={`relative flex flex-col h-full overflow-visible rounded-2xl bg-card/40 dark:bg-card/30 backdrop-blur-md ${cardRing}`}
                >
                  {isPopular ? (
                    <span className="absolute top-0 right-4 z-20 inline-flex -translate-y-1/2 items-center rounded-full border border-primary/30 bg-gradient-to-r from-primary to-blue-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground shadow-md shadow-primary/25">
                      Most popular
                    </span>
                  ) : null}
                  {isBest ? (
                    <span className="absolute top-0 right-4 z-20 inline-flex -translate-y-1/2 items-center rounded-full border border-emerald-400/40 bg-gradient-to-r from-emerald-600 to-teal-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-md shadow-emerald-600/25 dark:from-emerald-500 dark:to-teal-500">
                      Best value
                    </span>
                  ) : null}

                  <div className="flex flex-col flex-1 p-6 sm:p-7 md:p-8 pt-7">
                    <h4 className="text-xl font-semibold text-foreground tracking-tight">{plan.name}</h4>

                    <p className="mt-6 text-base font-normal text-gray-500 leading-snug">
                      {plan.creditCount} credits · {plan.creditCount} hour
                      {plan.creditCount === 1 ? "" : "s"} of live AI help
                    </p>

                    <div className="mt-8 pt-8 border-t border-border/60">
                      <p className="text-4xl sm:text-5xl font-semibold tabular-nums tracking-tight text-foreground">
                        {formatINR(plan.priceRupees)}
                      </p>
                      <p className="mt-2 text-lg font-normal tabular-nums text-muted-foreground">
                        {formatINR(plan.pricePerCreditRupees)} per credit
                      </p>
                    </div>

                    <p className="mt-6 text-sm leading-relaxed text-gray-400 flex-1">
                      {plan.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* —— Footer: trust + Razorpay + downloads —— */}
        <footer className="mt-10 pt-12 md:pt-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Purchases are completed in the Hovrlay app.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <span
                className="inline-flex items-center gap-2 text-muted-foreground"
                aria-label="Powered by Razorpay"
              >
                <span className="text-xs uppercase tracking-wider">Powered by</span>
                <RazorpayLogo
                  className="h-5 w-auto text-[#3395FF] dark:text-[#5CB3FF]"
                  aria-hidden
                />
              </span>
            </div>
          </div>

          <div className="mt-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto sm:max-w-none">
            <Button
              variant="hero-secondary"
              size="lg"
              className="group w-full sm:w-auto justify-center"
              onClick={() => handleDownload("mac")}
            >
              <AppleIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform shrink-0" />
              Download for macOS
            </Button>
            <Button
              variant="hero-secondary"
              size="lg"
              className="group w-full sm:w-auto justify-center"
              onClick={() => handleDownload("windows")}
            >
              <WindowsIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform shrink-0" />
              Download for Windows
            </Button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Pricing;
