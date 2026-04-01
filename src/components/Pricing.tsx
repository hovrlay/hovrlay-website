import { Button } from "@/components/Button";
import AppleIcon from "@/assets/apple.svg?react";
import WindowsIcon from "@/assets/windows.svg?react";

const plans = [
  { name: "Starter", credits: "3 Call Credits", price: "₹799" },
  { name: "Plus", credits: "8 Call Credits", price: "₹1,799", isPopular: true },
  { name: "Pro", credits: "20 Call Credits", price: "₹3,999" }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-14 md:py-20 px-4 md:px-8 lg:px-12">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-foreground my-6">
            Pricing
          </h2>
          <p className="text-base sm:text-base md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Call Credits never expire. Buy once, use anytime, no subscription required.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <div className="w-full rounded-full border border-border/70 bg-[#111111] px-4 md:px-6 py-3">
            <div className="flex items-center justify-center text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-2 px-2">
                <span className="text-sm" aria-hidden="true">↺</span>
                <span>30-Day Money Back</span>
              </div>
              <div className="mx-3 h-4 w-px bg-border/70" />
              <div className="flex items-center gap-2 px-2">
                <span className="text-sm" aria-hidden="true">⏱</span>
                <span>Credits Never Expire</span>
              </div>
              <div className="mx-3 h-4 w-px bg-border/70" />
              <div className="flex items-center gap-2 px-2">
                <span className="text-sm" aria-hidden="true">📞</span>
                <span>1 Credit = 1 Call</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className="pt-4">
              <div
                className={`h-full rounded-lg p-8 border ${
                  plan.isPopular
                    ? "relative overflow-visible bg-[#171717] border-primary/60"
                    : "bg-[#111111] border-border/70"
                }`}
              >
                {plan.isPopular ? (
                  <span className="absolute top-0 right-4 -translate-y-1/2 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground whitespace-nowrap z-10">
                    Most Popular
                  </span>
                ) : null}

                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">{plan.credits}</p>

                <div className="h-px w-full bg-border/70 mb-6" />

                <p className="text-5xl font-medium text-foreground">{plan.price}</p>
                <p className="text-sm text-muted-foreground mt-3">Never expires</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Purchase in the Hovrlay app</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            All payments are made securely inside the Hovrlay app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              variant="hero-secondary"
              size="lg"
              className="group"
              onClick={() => {
                window.location.href = "#";
              }}
            >
              <AppleIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download for macOS
            </Button>
            <Button
              variant="hero-secondary"
              size="lg"
              className="group"
              onClick={() => {
                window.location.href = "#";
              }}
            >
              <WindowsIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download for Windows
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
