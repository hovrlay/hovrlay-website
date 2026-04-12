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
    listPriceRupees: 2499,
    savePercent: 20,
    pricePerCreditRupees: 249,
    tier: "popular" as const,
    description: "Our most popular pack. Ideal for active job seekers."
  },
  {
    name: "Pro",
    creditCount: 20,
    priceRupees: 3999,
    listPriceRupees: 5999,
    savePercent: 33,
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
        <header className="mb-14 md:mb-18 lg:mb-20">
          <div className="text-center mb-16 md:mb-18">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-foreground ">
              Pricing
            </h2>
          </div>
          <div className="max-w-2xl mx-auto text-center lg:mx-0 lg:text-left">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.tier === "popular";
            const isBest = plan.tier === "bestValue";
            const hasDiscount =
              "listPriceRupees" in plan &&
              plan.listPriceRupees != null &&
              "savePercent" in plan;

            const cardRing =
              isPopular
                ? "ring-2 ring-primary/50 shadow-xl shadow-primary/10 dark:shadow-primary/20"
                : isBest
                  ? "ring-2 ring-emerald-500/40 shadow-xl shadow-emerald-500/10 dark:ring-emerald-400/35 dark:shadow-emerald-500/15"
                  : "ring-1 ring-border/80 shadow-sm";

            return (
              <div key={plan.name} className="flex h-full min-h-0 flex-col pt-5">
                <div
                  className={`relative flex h-full min-h-0 flex-col overflow-visible rounded-2xl bg-card/40 dark:bg-card/30 backdrop-blur-md ${cardRing}`}
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

                  <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-7 md:p-8 pt-7">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                      <h4 className="text-xl font-semibold text-foreground tracking-tight">{plan.name}</h4>
                      {hasDiscount ? (
                        <span
                          className={
                            isPopular
                              ? "inline-flex shrink-0 rounded-full border border-primary/35 bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary dark:bg-blue-950/70 dark:text-blue-200"
                              : "inline-flex shrink-0 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-200"
                          }
                        >
                          Save {plan.savePercent}%
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-gray-400">{plan.description}</p>

                    <div className="mt-5 space-y-1">
                      <p className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0">
                        <span className="text-2xl sm:text-3xl font-medium tabular-nums tracking-tight text-foreground leading-none">
                          {plan.creditCount}
                        </span>
                        <span className="text-sm font-medium text-foreground">credits</span>
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground/90">
                        {plan.creditCount} hour{plan.creditCount === 1 ? "" : "s"} of live AI help
                      </p>
                    </div>

                    <div className="mt-8">
                      {hasDiscount ? (
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="text-base sm:text-lg font-medium tabular-nums text-muted-foreground line-through decoration-muted-foreground/70">
                            {formatINR(plan.listPriceRupees)}
                          </span>
                          <span className="text-4xl sm:text-5xl font-bold tabular-nums tracking-tight text-foreground">
                            {formatINR(plan.priceRupees)}
                          </span>
                        </div>
                      ) : (
                        <p className="text-4xl sm:text-5xl font-bold tabular-nums tracking-tight text-foreground">
                          {formatINR(plan.priceRupees)}
                        </p>
                      )}
                      <p className="mt-1.5 text-xs sm:text-sm font-normal tabular-nums text-muted-foreground">
                        {formatINR(plan.pricePerCreditRupees)} / credit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* —— Footer: trust + Razorpay —— */}
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
        </footer>
      </div>
    </section>
  );
};

export default Pricing;
