"use client";

import { useEffect, useRef, useState } from "react";
import ChevronDownIcon from "../assets/chevron-down.svg";
import InvisibleToolSparkleIcon from "../assets/invisible-tool-sparkle.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ShortcutHintBar from "./ShortcutHintBar";

const SLIDES = [
  {
    bg: "/bg-blue.jpg",
    card: "/video-player-card.png",
    cardW: 476,
    cardH: 363,
    cardClass: "absolute bottom-[-117px] left-[-86px] w-[130%] max-w-[475px]",
    cardEnter: "translateX(-40px)",
  },
  {
    bg: "/bg-purple.jpg",
    card: "/file-browser-card.png",
    cardW: 337,
    cardH: 264,
    cardClass: "absolute bottom-[-80px] right-[-60px] w-[110%] max-w-[360px]",
    cardEnter: "translateX(40px)",
  },
  {
    bg: "/bg-pink.jpg",
    card: "/messaging-card.png",
    cardW: 401,
    cardH: 260,
    cardClass: "absolute top-[-41px] right-[-93px] w-[110%] max-w-[401px]",
    cardEnter: "translateY(-50px)",
  },
  {
    bg: "/bg-purple-dark.jpg",
    card: "/video-conference-card.png",
    cardW: 355,
    cardH: 238,
    cardClass: "absolute top-[-11px] left-[-75px] w-[100%] max-w-[350px]",
    cardEnter: "translateX(-50px)",
  },
] as const;

// Glass overlay corner position per step
const OVERLAY_POSITION: Record<number, string> = {
  0: "top-5 right-4 xl:top-7 xl:right-6",
  1: "top-5 left-4 xl:top-7 xl:left-6",
  2: "bottom-5 left-4 xl:bottom-7 xl:left-6",
  3: "bottom-5 right-4 xl:bottom-7 xl:right-6",
};

const carouselKeyframes = `
@keyframes carouselBgIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes carouselCardIn {
  from { opacity: 0; transform: var(--card-enter-transform); }
  to   { opacity: 1; transform: none; }
}
@keyframes carouselOverlayIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
`;


const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const Features = () => {
  const [carouselStep, setCarouselStep] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: toolsRef, isVisible: toolsVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

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
    <section id="features" className="px-4 md:px-8 lg:px-12">
      <div className="container-custom">
        <div ref={headerRef} className={`mb-10 text-center animate-scroll-fade-in-up ${headerVisible ? "visible" : ""}`}>
          <h2 className="my-6 text-4xl font-medium section-title-gradient sm:text-4xl md:text-5xl lg:text-5xl">
            Undetectable by Design
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-base md:text-base lg:text-lg">
            Suite of features to use Hovrlay without a trace.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`mx-auto w-full max-w-7xl overflow-x-auto pb-2 lg:overflow-visible animate-scroll-fade-in-up ${cardsVisible ? "visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex w-max gap-5 lg:w-full">
            <div className="w-[320px] shrink-0 sm:w-[360px] lg:w-auto lg:flex-1">
              <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(92.09%_126.39%_at_50%_100%,_#DDE2EE_58.91%,_#BBC5DD_100%)]">
                <div className="relative aspect-[855/855] w-full">
                  <div className="absolute inset-x-[14px] top-[14px] rounded-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,#F9FAFB_100%)] px-[8px] py-[7px] md:inset-x-[16px] md:top-[16px] md:rounded-xl md:px-[10px] md:py-[9px] xl:inset-x-[18px] xl:top-[18px] xl:px-[12px] xl:py-[10px]">
                    <div className="mb-[3px] flex items-center justify-between gap-1.5 md:mb-[5px] xl:mb-[6px]">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[8px] font-medium tracking-tight text-muted-foreground md:text-[10px] xl:text-[12px]">
                          Meeting participants
                        </span>
                        <span className="text-[8px] font-medium tracking-tight text-[#9AA4B2] md:text-[10px] xl:text-[12px]">(4)</span>
                      </div>

                      <div className="flex items-center gap-1 rounded bg-gray-300 px-2 py-1 text-[8px] font-medium xl:text-[10px] 2xl:text-[11px]">
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
                          <ChevronDownIcon aria-hidden="true" className="size-[8px] md:size-[9px] xl:size-[10px]" />
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
                          <ChevronDownIcon aria-hidden="true" className="size-[8px] md:size-[9px] xl:size-[10px]" />
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
                          <ChevronDownIcon aria-hidden="true" className="size-[8px] md:size-[9px] xl:size-[10px]" />
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
                  className="relative aspect-[855/855] w-full"
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
                      <InvisibleToolSparkleIcon aria-hidden="true" className="size-[8px] md:size-[10px]" />
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
                  className="pointer-events-none absolute bottom-0 top-0 z-10 w-px -translate-x-1/2 bg-[#111827] shadow-[-1px_0px_8px_0px_#00000036]"
                  style={{ left: `${sliderPosition}%` }}
                />

                <div
                  className="absolute top-1/2 z-20 flex size-[18px] -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-[#111827] shadow-[0px_4px_10px_0px_#00000026] transition-transform duration-[210ms] ease-in md:size-6"
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
            <div className="w-[320px] shrink-0 sm:w-[360px] lg:w-auto lg:flex-1">
              <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(92.09%_126.39%_at_50%_100%,_#DDE2EE_58.91%,_#BBC5DD_100%)]">
                <style>{carouselKeyframes}</style>
                <div className="aspect-[855/855] w-full flex flex-col items-center justify-center gap-4 p-6">
                  {/* Carousel + bar share the same width via this wrapper */}
                  <div className="inline-flex flex-col items-stretch gap-4">
                  {/* Carousel */}
                  <div className="relative flex h-[195px] w-full justify-between overflow-hidden rounded-xl px-[10px] py-[14px] md:h-[206px] md:rounded-[10px] lg:h-[185px] lg:rounded-[10px] xl:h-[240px] xl:rounded-xl 2xl:h-[260px] 2xl:px-[14px] 2xl:pt-[25px]">
                    {/* Backgrounds — all rendered, active one fades in over the previous */}
                    {SLIDES.map((slide, i) => (
                      <img
                        key={slide.bg}
                        src={slide.bg}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        style={
                          i === carouselStep
                            ? { zIndex: 1, animation: "carouselBgIn 400ms ease-out forwards" }
                            : { zIndex: 0, opacity: 1 }
                        }
                      />
                    ))}

                    {/* Card image — oversized, anchored to quadrant, bleeds out of container */}
                    <img
                      key={`card-${carouselStep}`}
                      src={SLIDES[carouselStep].card}
                      alt=""
                      width={SLIDES[carouselStep].cardW}
                      height={SLIDES[carouselStep].cardH}
                      className={SLIDES[carouselStep].cardClass}
                      style={{
                        opacity: 0,
                        zIndex: 2,
                        "--card-enter-transform": SLIDES[carouselStep].cardEnter,
                        animation: "carouselCardIn 380ms ease-out 250ms forwards",
                      } as React.CSSProperties}
                    />

                    {/* Glass overlay — crossfades, repositions per step */}
                    <div
                      key={`overlay-${carouselStep}`}
                      className={`absolute flex w-fit flex-col rounded-[8px] ${OVERLAY_POSITION[carouselStep]}`}
                      style={{ opacity: 0, zIndex: 2, animation: "carouselOverlayIn 300ms ease-out 700ms forwards" }}
                    >
                      <div className="relative flex w-[140px] flex-col items-center gap-y-2 md:w-[148px] lg:w-[133px] xl:w-[174px] 2xl:w-[186px]">
                        {/* Top pill — 3 bars */}
                        <div className="relative mx-auto flex h-[17px] w-full items-center justify-center gap-x-1.5 overflow-hidden rounded-[6px] bg-[rgba(0,0,0,0.10)] px-[6px] [box-shadow:0_2px_4.2px_0_rgba(0,0,0,0.20),0_13.025px_26.05px_0_rgba(0,0,0,0.20)] [backdrop-filter:blur(3px)] lg:px-[6px] lg:py-[5px] xl:px-[7px] xl:py-1.5 2xl:h-[23px] before:absolute before:inset-0 before:rounded-[6px] before:bg-[linear-gradient(to_right,hsla(0,0%,100%,0.4),hsla(0,0%,100%,0.1),hsla(0,0%,100%,0.4))] before:p-[1px] before:content-[''] before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:![mask-composite:exclude]">
                          <div className="relative h-[6px] w-full rounded-[4px] bg-[rgba(255,255,255,0.70)] 2xl:rounded-full" />
                          <div className="relative h-[6px] w-full rounded-[4px] bg-[rgba(255,255,255,0.70)] 2xl:rounded-full" />
                          <div className="relative h-[6px] w-full rounded-[4px] bg-[rgba(255,255,255,0.70)] 2xl:rounded-full" />
                        </div>

                        {/* AI Response card */}
                        <div className="relative w-full overflow-hidden rounded-[6px] bg-[rgba(0,0,0,0.10)] px-[7px] py-[6px] [box-shadow:0_2px_4.2px_0_rgba(0,0,0,0.20),0_13.025px_26.05px_0_rgba(0,0,0,0.20)] [backdrop-filter:blur(3px)] lg:px-[5px] lg:py-[6px] xl:px-1.5 xl:py-[9px] before:absolute before:inset-0 before:rounded-[6px] before:bg-[linear-gradient(to_right,hsla(0,0%,100%,0.4),hsla(0,0%,100%,0.1),hsla(0,0%,100%,0.4))] before:p-[1px] before:content-[''] before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:![mask-composite:exclude]">
                          <div className="relative flex items-center gap-[3px] xl:gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="size-[9px] xl:size-[12px]">
                              <g clipPath="url(#carousel-sparkle-clip)">
                                <path d="M7.49805 4.5L11.1914 6L7.49805 7.5L5.99805 11.1934L4.49805 7.5L0.804688 6L4.49805 4.5L5.99805 0.806641L7.49805 4.5ZM2.77539 1.72461L4 2.25L2.77539 2.77539L2.25 4L1.72461 2.77539L0.5 2.25L1.72461 1.72461L2.25 0.5L2.77539 1.72461Z" fill="url(#carousel-sparkle-grad)" />
                              </g>
                              <defs>
                                <linearGradient id="carousel-sparkle-grad" x1="2.24968" y1="0.5" x2="8.00001" y2="8.499" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.409729" stopColor="white" stopOpacity="0.6" />
                                  <stop offset="1" stopColor="white" />
                                </linearGradient>
                                <clipPath id="carousel-sparkle-clip">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <span className="text-[7px] leading-tight font-semibold tracking-tight text-white xl:text-[9px]">AI Response</span>
                          </div>
                          <div className="relative mt-1.5 ml-[3px] flex w-full flex-col gap-[4px] xl:gap-[5px]">
                            <div className="h-[5px] w-[70%] rounded-full bg-white/70" />
                            <div className="h-[5px] w-[95%] rounded-full bg-white/70" />
                            <div className="h-[5px] w-[95%] rounded-full bg-white/70" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ShortcutHintBar onTick={setCarouselStep} />
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[18px] leading-[1.25] text-foreground">
                <span className="font-medium">Follows your eyes. </span>
                <span className="text-muted-foreground font-light">
                  Hovrlay window is fully moveable so you can position it exactly where you're looking.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div
          ref={toolsRef}
          className={`mx-auto mt-16 w-full max-w-5xl px-2 py-3 md:mt-20 animate-scroll-fade-in-up ${toolsVisible ? "visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-[#8C929D]">
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
                <img src={tool.src} alt={tool.label} className="h-6 w-6 object-contain md:h-8 md:w-8" />
                <span className="text-lg font-medium text-[#1F2937]">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;