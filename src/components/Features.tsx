import { useEffect, useRef, useState } from "react";
import chevronDown from "../assets/chevron-down.svg";
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
          <h2 className="my-6 text-3xl font-semibold section-title-gradient sm:text-4xl md:text-4xl lg:text-5xl">
            Why Choose Hovrlay?
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-base md:text-base lg:text-lg">
            Suite of features to use Hovrlay in your meetings, calls, and interviews.
          </p>
        </div>

        <div className="mx-auto w-full max-w-7xl overflow-x-auto pb-2 lg:overflow-visible">
          <div className="flex w-max gap-5 lg:w-full">
            <div className="w-[320px] shrink-0 sm:w-[360px] lg:w-auto lg:flex-1">
              <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(92.09%_126.39%_at_50%_100%,_#DDE2EE_58.91%,_#BBC5DD_100%)]">
                <div className="relative aspect-[855/855] w-full">
                  <div className="absolute inset-x-[14px] top-[14px] rounded-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,#F9FAFB_100%)] px-[8px] py-[7px] md:inset-x-[16px] md:top-[16px] md:rounded-xl md:px-[10px] md:py-[9px] xl:inset-x-[18px] xl:top-[18px] xl:px-[12px] xl:py-[10px]">
                    <div className="mb-[3px] flex items-center justify-between gap-1.5 md:mb-[5px] xl:mb-[6px]">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[8px] font-medium tracking-tight text-foreground md:text-[10px] xl:text-[12px]">
                          Meeting participants
                        </span>
                        <span className="text-[8px] font-medium tracking-tight text-[#9AA4B2] md:text-[10px] xl:text-[12px]">(4)</span>
                      </div>

                      <div className="flex items-center gap-1 rounded bg-[#EAEDF5] px-2 py-1 text-[8px] font-medium xl:text-[10px] 2xl:text-[11px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          className="size-[9px] xl:size-[12px]"
                          aria-hidden="true"
                        >
                          <g clipPath="url(#bots-detected-shield-clip)">
                            <path
                              d="M10.5 1.99962C9.055 1.99962 7.689 1.69512 6.201 1.04162L6 0.953125L5.799 1.04162C4.311 1.69512 2.945 1.99962 1.5 1.99962H1V5.99963C1 10.8446 5.8425 11.9771 5.8915 11.9876L6 12.0116L6.1085 11.9876C6.1575 11.9771 11 10.8446 11 5.99963V1.99962H10.5ZM5.14 8.72163L3.293 6.87463L4 6.16763L5.11 7.27763L7.9705 4.16812L8.7065 4.84512L5.14 8.72163Z"
                              fill="#42DB7F"
                            />
                          </g>
                          <defs>
                            <clipPath id="bots-detected-shield-clip">
                              <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>No bots detected</span>
                      </div>
                    </div>

                    <div className="divide-y divide-[#E2E8F0]">
                      <div className="flex items-center justify-between py-[5px] md:py-[7px] xl:py-[8px]">
                        <div className="flex min-w-0 items-center gap-1.5 md:gap-2">
                          <img src="/avatar1.png" alt="Alex Morgan" className="size-[16px] rounded-full object-cover md:size-[20px] xl:size-[24px]" />
                          <div className="min-w-0">
                            <p className="truncate text-[8px] font-medium tracking-tight text-[#111827] md:text-[10px] xl:text-[12px]">Alex Morgan (You)</p>
                            <p className="truncate text-[7px] font-normal text-[#6B7280] md:text-[8px] xl:text-[10px]">alex.morgan@hovrlay.com</p>
                          </div>
                        </div>
                        <span className="text-[7px] font-medium text-[#374151] md:text-[8px] xl:text-[10px]">Owner</span>
                      </div>

                      <div className="flex items-center justify-between py-[5px] md:py-[7px] xl:py-[8px]">
                        <div className="flex min-w-0 items-center gap-1.5 md:gap-2">
                          <img src="/avatar2.png" alt="Jamie Lee" className="size-[16px] rounded-full object-cover md:size-[20px] xl:size-[24px]" />
                          <div className="min-w-0">
                            <p className="truncate text-[8px] font-medium tracking-tight text-[#111827] md:text-[10px] xl:text-[12px]">Jamie Lee</p>
                            <p className="truncate text-[7px] font-normal text-[#6B7280] md:text-[8px] xl:text-[10px]">jamie.lee@hovrlay.com</p>
                          </div>
                        </div>
                        <button type="button" className="flex items-center gap-0.5 text-[7px] font-medium text-[#374151] md:gap-1 md:text-[8px] xl:text-[10px]">
                          Speaker
                          <img src={chevronDown} alt="" aria-hidden="true" className="size-[8px] md:size-[9px] xl:size-[10px]" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between py-[5px] md:py-[7px] xl:py-[8px]">
                        <div className="flex min-w-0 items-center gap-1.5 md:gap-2">
                          <img src="/avatar3.png" alt="Sam Rivera" className="size-[16px] rounded-full object-cover md:size-[20px] xl:size-[24px]" />
                          <div className="min-w-0">
                            <p className="truncate text-[8px] font-medium tracking-tight text-[#111827] md:text-[10px] xl:text-[12px]">Sam Rivera</p>
                            <p className="truncate text-[7px] font-normal text-[#6B7280] md:text-[8px] xl:text-[10px]">sam.rivera@hovrlay.com</p>
                          </div>
                        </div>
                        <button type="button" className="flex items-center gap-0.5 text-[7px] font-medium text-[#374151] md:gap-1 md:text-[8px] xl:text-[10px]">
                          Speaker
                          <img src={chevronDown} alt="" aria-hidden="true" className="size-[8px] md:size-[9px] xl:size-[10px]" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between py-[5px] md:py-[7px] xl:py-[8px]">
                        <div className="flex min-w-0 items-center gap-1.5 md:gap-2">
                          <img src="/avatar4.png" alt="Taylor Brooks" className="size-[16px] rounded-full object-cover md:size-[20px] xl:size-[24px]" />
                          <div className="min-w-0">
                            <p className="truncate text-[8px] font-medium tracking-tight text-[#111827] md:text-[10px] xl:text-[12px]">Taylor Brooks</p>
                            <p className="truncate text-[7px] font-normal text-[#6B7280] md:text-[8px] xl:text-[10px]">taylor.brooks@hovrlay.com</p>
                          </div>
                        </div>
                        <button type="button" className="flex items-center gap-0.5 text-[7px] font-medium text-[#374151] md:gap-1 md:text-[8px] xl:text-[10px]">
                          Speaker
                          <img src={chevronDown} alt="" aria-hidden="true" className="size-[8px] md:size-[9px] xl:size-[10px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[18px] leading-[1.25] text-foreground">
                <span className="font-medium">Doesn't join meetings. </span>
                <span className="text-muted-foreground font-light">Hovrlay never joins your meetings, so there are no bots and no extra people on the guest list.</span>
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
              <p className="mt-6 text-[18px] leading-[1.25] text-foreground">
                <span className="font-medium">Invisible to screen share. </span> 
                <span className="text-muted-foreground font-light">Hovrlay never shows up in shared screens, recordings, or external meeting tools.</span>
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
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#8C929D]">
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