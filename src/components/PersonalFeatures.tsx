"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cardShellClassName =
  "relative overflow-hidden rounded-2xl bg-[radial-gradient(92.09%_126.39%_at_50%_100%,_#DDE2EE_58.91%,_#BBC5DD_100%)]";

const PersonalFeatures = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="personal" className="px-4 md:px-8 lg:px-12">
      <div className="container-custom">
        <div
          ref={headerRef}
          className={`mb-10 text-center animate-scroll-fade-in-up ${headerVisible ? "visible" : ""}`}
        >
          <h2 className="my-6 text-4xl font-medium section-title-gradient sm:text-4xl md:text-5xl lg:text-5xl">
            Made for the way you work
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-base md:text-base lg:text-lg">
            Your personality, your shortcuts, your time.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 md:grid-cols-3 animate-scroll-fade-in-up ${cardsVisible ? "visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          <div>
            <div className={cardShellClassName}>
              <div className="aspect-square w-full">
                <img
                  src="/resume.jpg"
                  alt="Hovrlay resume upload in the Account settings panel"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <p className="mt-6 text-[18px] leading-[1.25] text-foreground">
              <span className="font-medium">Resume Upload. </span>
              <span className="text-muted-foreground font-light">
                Stored locally, Hovrlay reads your past experiences so it sounds like you.
              </span>
            </p>
          </div>

          <div>
            <div className={cardShellClassName}>
              <div className="aspect-square w-full">
                <img
                  src="/keybinds.jpg"
                  alt="Hovrlay customizable keyboard shortcuts settings"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <p className="mt-6 text-[18px] leading-[1.25] text-foreground">
              <span className="font-medium">Custom keybinds. </span>
              <span className="text-muted-foreground font-light">
                Use Hovrlay entirely from your keyboard without ever moving your cursor.
              </span>
            </p>
          </div>

          <div>
            <div className={cardShellClassName}>
              <div className="aspect-square w-full">
                <img
                  src="/fractional-credits.jpg"
                  alt="Hovrlay call duration picker: 30 minutes, 1 hour, or 1 hour 30 minutes"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <p className="mt-6 text-[18px] leading-[1.25] text-foreground">
              <span className="font-medium">Pay only for the time you use. </span>
              <span className="text-muted-foreground font-light">
                Only that time comes off your balance.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalFeatures;
