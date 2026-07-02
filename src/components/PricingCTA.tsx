import Image from "next/image";

const PricingCTA = () => {
  return (
    <div className="relative overflow-x-hidden pt-16 pb-16 md:pt-28 md:pb-28 lg:pb-36">
      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="max-w-[575px] md:max-w-[492px] lg:max-w-[575px]">
          <h3 className="inline text-[20px] leading-tight font-medium -tracking-[0.04em] text-foreground sm:block sm:text-[28px] md:text-[24px] lg:text-[28px]">
            Meeting AI that helps during the call, not after{" "}
          </h3>
          <p className="inline text-[20px] leading-tight font-medium -tracking-[0.04em] text-muted-foreground sm:block sm:text-[28px] md:text-[24px] lg:text-[28px]">
            Try Hovrlay on your next meeting today.
          </p>
          <div className="mt-5 flex flex-col gap-3 md:mt-6 lg:mt-7">
            <a
              href="mailto:support@hovrlay.com"
              className="relative w-fit h-10 lg:h-11 px-5 rounded-[10px] font-medium text-white inline-flex items-center justify-center text-base leading-none overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 before:absolute before:inset-0 before:cursor-pointer before:rounded-[inherit] before:border before:border-transparent before:bg-transparent before:opacity-0 before:transition-opacity before:ease-in-out hover:before:opacity-100 bg-[radial-gradient(84.32%_100%_at_49.77%_0%,#2E3038_46.14%,#1C1D22_100%)] hover:bg-[radial-gradient(84.32%_100%_at_49.77%_0%,#404451_46.14%,#2D2F38_100%)]"
            >
              <span className="relative z-10">Contact Us</span>
            </a>
          </div>
        </div>

        {/* Return key — upper right, partially off screen */}
        <div className="pointer-events-none absolute -top-6 right-0 hidden w-32 md:block lg:-top-10 lg:right-0 lg:w-40 xl:-top-12 xl:right-0 xl:w-48">
          <div className="relative w-full">
            <Image src="/return-btn.png" alt="" width={476} height={476} className="w-full h-auto" />
          </div>
          <div className="absolute top-0 left-0 w-full animate-key-pulse [animation-delay:4s]">
            <Image src="/return-active.png" alt="" width={476} height={476} className="w-full h-auto" />
          </div>
        </div>

        {/* Command key — lower left of return */}
        <div className="pointer-events-none absolute top-10 right-40 hidden w-40 md:block lg:top-14 lg:right-44 lg:w-48 xl:top-16 xl:right-48 xl:w-56">
          <div className="relative w-full">
            <Image src="/command-btn.png" alt="" width={560} height={476} className="w-full h-auto" />
          </div>
          <div className="absolute top-0 left-0 w-full animate-key-pulse">
            <Image src="/command-active.png" alt="" width={560} height={476} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCTA;
