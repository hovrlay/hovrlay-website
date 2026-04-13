import { useEffect, useRef, useState } from "react";
import invisibleToolSparkle from "../assets/invisible-tool-sparkle.svg";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const Features = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const updateSliderFromClientX = (clientX: number) => {
    const sliderEl = sliderRef.current;
    if (!sliderEl) return;

    const rect = sliderEl.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(clamp(nextPosition, 0, 100));
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateSliderFromClientX(event.clientX);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (event: PointerEvent) => {
      updateSliderFromClientX(event.clientX);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  return (
    <section id="features" className="px-4 py-2 md:px-8 lg:px-12">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <h2 className="my-6 text-3xl font-semibold text-foreground sm:text-4xl md:text-4xl lg:text-5xl">
            Why Choose Hovrlay?
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-base md:text-base lg:text-lg">
            Suite of features to use Hovrlay in your meetings, calls, and interviews.
          </p>
        </div>

        <div className="mx-auto w-full max-w-7xl overflow-x-auto pb-2 lg:overflow-visible">
          <div className="flex w-max gap-5 lg:w-full">
            <div className="w-[320px] shrink-0 sm:w-[360px] lg:w-auto lg:flex-1">
              <div className="aspect-[315/300] rounded-2xl border border-dashed border-[#BBC5DD] bg-[#EEF2FA]/60" />
              <p className="mt-4 text-[28px] leading-[1.25] tracking-tight text-[#9CA3AF]">
                <span className="font-semibold">Feature headline.</span> Description for this card will be added here.
              </p>
            </div>

            <div className="w-[320px] shrink-0 sm:w-[360px] lg:w-auto lg:flex-1">
              <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(92.09%_126.39%_at_50%_100%,_#DDE2EE_58.91%,_#BBC5DD_100%)] select-none">
                <div
                  ref={sliderRef}
                  className="relative aspect-[855/855] w-full cursor-ew-resize"
                  onPointerDown={handlePointerDown}
                >
                <div className="absolute inset-0">
                  <img
                    src="/invisible-tool.png"
                    alt="Invisible overlay example"
                    className="absolute inset-0 h-full w-full object-cover object-left"
                  />
                  <div
                    className="absolute inset-0 z-10"
                    style={{ clipPath: `inset(0% 0% 0% ${sliderPosition}%)` }}
                  >
                    <span className="absolute right-4 top-4 flex h-[24px] items-center justify-center rounded-[6px] bg-[#676B74] px-2 text-[10px] font-semibold tracking-tight text-white md:right-6 md:top-6 md:h-[29px] md:px-[8px] md:text-[12px]">
                      Invisible to others
                    </span>
                  </div>
                </div>

                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0% ${100 - sliderPosition}% 0% 0%)` }}
                >
                  <img
                    src="/invisible-tool.png"
                    alt="Visible overlay example"
                    className="absolute inset-0 h-full w-full object-cover object-left"
                  />

                  <div className="absolute inset-0 m-[7px] rounded-xl border-2 border-[#00FF26] md:m-2.5 md:rounded-2xl" />

                  <span className="absolute left-4 top-4 z-10 flex h-[24px] items-center justify-center rounded-[6px] bg-[#676B74] px-2 text-[10px] font-semibold tracking-tight text-white md:left-6 md:top-6 md:h-[29px] md:px-[8px] md:text-[12px]">
                    Visible to you
                  </span>

                  <div className="absolute left-4 right-4 top-4 z-20 mt-10 rounded-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,#F9FAFB_100%)] px-3 pb-2 pt-1 md:left-6 md:right-6 md:top-6 md:mt-11 md:px-4 md:pb-2 md:pt-2">
                    <div className="flex items-center gap-1 text-[8px] font-semibold tracking-tight text-[#1F2A37] md:text-[10px]">
                      <img src={invisibleToolSparkle} alt="" aria-hidden="true" className="size-[8px] md:size-[10px]" />
                      AI Response
                    </div>

                    <div className="mt-[4px] inline-block text-[9px] leading-normal tracking-tight text-[#111827] md:mt-[6px] md:text-[10px]">
                      Add a check for missing
                      <span className="relative mx-[3px] font-mono text-[8px] leading-none text-[#4984FD] before:absolute before:left-1/2 before:top-1/2 before:z-[-1] before:h-[calc(100%+2px)] before:w-[calc(100%+4px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[3px] before:bg-[#4984FD1A] md:mx-[4px] md:text-[8px]">
                        userId
                      </span>
                      before calling the API.
                      <br />
                      Also handle
                      <span className="relative mx-[3px] font-mono text-[8px] leading-none text-[#4984FD] before:absolute before:left-1/2 before:top-1/2 before:z-[-1] before:h-[calc(100%+2px)] before:w-[calc(100%+4px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[3px] before:bg-[#4984FD1A] md:mx-[4px] md:text-[8px]">
                        data.name
                      </span>
                      safely to avoid undefined.
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 top-0 z-10 w-px -translate-x-1/2 bg-[#111827] shadow-[-1px_0px_8px_0px_#00000036]"
                  style={{ left: `${sliderPosition}%` }}
                />

                <div
                  className="absolute top-1/2 z-20 flex size-[18px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#111827] shadow-[0px_4px_10px_0px_#00000026] transition-transform duration-[210ms] ease-in md:size-6"
                  style={{ left: `${sliderPosition}%`, transform: "translate(-50%, -50%)" }}
                >
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-[12px] md:size-4"
                  >
                    <path d="M4.5 7.375L1.5 4.375L4.5 1.375" stroke="white" strokeMiterlimit="10" strokeLinecap="square" />
                    <path d="M11.5 7.375L14.5 4.375L11.5 1.375" stroke="white" strokeMiterlimit="10" strokeLinecap="square" />
                  </svg>
                </div>
                </div>
              </div>
              <p className="mt-4 text-[18px] leading-[1.25] tracking-tight text-[#111827]">
                <span className="font-semibold">Invisible to screen share.</span> Hovrlay never shows up in shared screens, recordings, or external meeting tools.
              </p>
            </div>

            {Array.from({ length: 1 }).map((_, idx) => (
              <div key={`feature-placeholder-${idx}`} className="w-[320px] shrink-0 sm:w-[360px] lg:w-auto lg:flex-1">
                <div className="aspect-[315/300] rounded-2xl border border-dashed border-[#BBC5DD] bg-[#EEF2FA]/60" />
                <p className="mt-4 text-[28px] leading-[1.25] tracking-tight text-[#9CA3AF]">
                  <span className="font-semibold">Feature headline.</span> Description for this card will be added here.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-5xl px-2 py-3 md:mt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
            Compatible with every tool
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10 md:mt-6 md:gap-x-12">
            {[
              { src: "/zoom.footer.png", label: "Zoom" },
              { src: "/slack.footer.png", label: "Slack" },
              { src: "/webex.footer.png", label: "Webex" },
              { src: "/teams.footer.png", label: "Microsoft Teams" },
              { src: "/meet.footer.png", label: "Google Meet" },
            ].map((tool) => (
              <div key={tool.label} className="flex items-center gap-2.5">
                <img src={tool.src} alt={tool.label} className="h-6 w-6 object-contain md:h-7 md:w-7" />
                <span className="text-lg font-medium text-[#1F2937] dark:text-[#D1D5DB]">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;