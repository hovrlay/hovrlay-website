"use client";

import { useEffect, useRef, useState } from "react";
import ChevronDownIcon from "../assets/chevron-down.svg";
import InvisibleToolSparkleIcon from "../assets/invisible-tool-sparkle.svg";
import SparklesIcon from "@/assets/sparkles.svg";
import WandSparklesIcon from "@/assets/wand-sparkles.svg";
import MessageSquareIcon from "@/assets/message-square.svg";
import MoveGripDotsIcon from "@/assets/move-grip-dots.svg";
import { detectDownloadPlatform } from "@/utils/downloads";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const formatMmSs = (totalSeconds: number) => {
  const safe = Math.max(0, totalSeconds);
  const mm = Math.floor(safe / 60)
    .toString()
    .padStart(2, "0");
  const ss = (safe % 60).toString().padStart(2, "0");
  return `${mm}:${ss}`;
};

/** Compact helpers so three actions stay on one row inside the feature card. */
const listeningDemoHelperButtonClassNameFeatures =
  "flex shrink-0 cursor-pointer items-center gap-0.5 rounded-full border-0 bg-transparent py-1 pl-0.5 pr-0.5 text-[8px] leading-none text-[#edeef2] transition duration-75 ease-out group-hover/static-insight:bg-[#EDEEF2]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 sm:py-1.5 sm:pl-1 sm:pr-1 sm:text-[10px] md:pr-1.5";

const listeningDemoChatKeyPillClassFeatures =
  "inline-flex h-4 shrink-0 items-center justify-center rounded-[4px] border border-white/20 bg-gradient-to-b from-black/10 to-black/15 px-0.5 font-mono text-[7px] leading-none text-white/50";

const TRANSCRIPT_SNIPPETS = [
  "How would you design offline sync for a mobile app?",
  "I'd use a local database with a background sync queue, retries, and conflict resolution",
  "Walk me through designing a distributed cache like Redis",
  "I'd go bottom up. Single node first, then consistent hashing",
  "How would you design the Twitter feed?",
  "Fan out on write, cache per user timeline in Redis...",
];

const TranscriptPill = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let swapTimer: ReturnType<typeof setTimeout> | undefined;
    const interval = setInterval(() => {
      setVisible(false);
      swapTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % TRANSCRIPT_SNIPPETS.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => {
      clearInterval(interval);
      if (swapTimer !== undefined) clearTimeout(swapTimer);
    };
  }, []);

  const isQuestion = index % 2 === 0;
  const animationName = visible
    ? isQuestion
      ? "featuresTranscriptPillEnterLeft"
      : "featuresTranscriptPillEnterRight"
    : isQuestion
      ? "featuresTranscriptPillExitLeft"
      : "featuresTranscriptPillExitRight";

  return (
    <>
      <style>
        {`
          @keyframes featuresTranscriptPillEnterLeft {
            from { opacity: 0; transform: translateX(-28px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes featuresTranscriptPillEnterRight {
            from { opacity: 0; transform: translateX(28px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes featuresTranscriptPillExitLeft {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(-14px); }
          }
          @keyframes featuresTranscriptPillExitRight {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(14px); }
          }
        `}
      </style>
      <div
        className="mx-auto max-w-[85%] rounded-full px-4 py-2"
        style={{
          animation: `${animationName} 400ms ease-out both`,
          background: isQuestion
            ? "rgba(255,255,255,0.6)"
            : "rgba(127,119,221,0.12)",
          border: isQuestion
            ? "0.5px solid rgba(0,0,0,0.08)"
            : "0.5px solid rgba(127,119,221,0.25)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="size-[6px] shrink-0 rounded-full"
            style={{
              backgroundColor: isQuestion ? "#C4C9D8" : "#7F77DD",
            }}
          />
          <p
            className="text-[10px] leading-snug"
            style={{
              color: isQuestion ? "#6B7280" : "#374151",
            }}
          >
            {TRANSCRIPT_SNIPPETS[index]}
          </p>
        </div>
      </div>
    </>
  );
};

const ListeningConversationCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [chatInput, setChatInput] = useState("");
  const downloadPlatform = detectDownloadPlatform();
  const modifierKeyLabel = downloadPlatform === "mac" ? "⌘" : "Ctrl";

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    setElapsedSeconds(0);
    const intervalId = window.setInterval(() => {
      setElapsedSeconds((s) => s + 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isVisible]);

  return (
    <div ref={cardRef} className="relative aspect-[855/855] w-full">
      <style>
        {`
          @keyframes featuresSonarRing {
            0% { transform: scale(1); opacity: 0.7; }
            100% { transform: scale(3.2); opacity: 0; }
          }
        `}
      </style>

      <div className="absolute inset-0 flex h-full min-h-0 flex-col">
        <div className="shrink-0 px-2.5 pt-2.5 sm:px-3 sm:pt-3 md:px-4 md:pt-3.5">
          <div
            className="flex w-full items-center rounded-xl shadow-[0_8px_28px_-6px_rgba(15,23,42,0.18),0_2px_8px_-4px_rgba(15,23,42,0.08)] px-2.5 py-2 backdrop-blur-sm sm:rounded-2xl sm:px-3 sm:py-2.5 md:px-4 md:py-3"
            style={{ backgroundColor: "rgba(255,255,255,0.72)" }}
          >
          <div className="flex items-center gap-1 sm:gap-1.5">
            <div className="relative flex h-[15px] w-[15px] shrink-0 items-center justify-center sm:h-[18px] sm:w-[18px]">
              <div
                className="absolute h-[6px] w-[6px] rounded-full bg-[#7F77DD] sm:h-[7px] sm:w-[7px]"
                style={{ animation: "featuresSonarRing 1.8s ease-out infinite" }}
              />
              <div
                className="absolute h-[6px] w-[6px] rounded-full bg-[#7F77DD] sm:h-[7px] sm:w-[7px]"
                style={{ animation: "featuresSonarRing 1.8s ease-out infinite 0.7s" }}
              />
              <div className="relative z-10 h-[6px] w-[6px] rounded-full bg-[#7F77DD] sm:h-[7px] sm:w-[7px]" />
            </div>
            <span className="text-[10px] font-medium text-[#374151] sm:text-[11px]">Hovrlay</span>
          </div>
          <span className="ml-auto text-[10px] font-medium tabular-nums text-[#6B7280] sm:text-[11px]">
            {formatMmSs(elapsedSeconds)}
          </span>
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-1.5 p-2 sm:gap-2 sm:p-3 md:p-[14px] xl:p-4">
          <div className="flex min-h-0 min-w-0 w-full flex-1 flex-col items-center justify-center">
            <TranscriptPill />
          </div>
          <div className="w-full min-w-0 shrink-0">
          <div className="mb-1.5 flex justify-center sm:mb-2">
            <div
              className="mx-auto flex w-fit items-center gap-0.5 rounded-full px-1.5 py-1 sm:gap-1 sm:px-2 sm:py-1.5"
              style={{
                backgroundColor: "hsla(252, 10%, 10%, 0.8)",
                boxShadow:
                  "0 0 0 1px rgba(207, 226, 255, 0.24), 0 -0.5px 0 0 rgba(255, 255, 255, 0.8)",
              }}
            >
              <button
                type="button"
                className="mr-0.5 flex h-5 items-center gap-0.5 rounded-full bg-[linear-gradient(180deg,#2E3039_0%,#272A31_100%)] px-1.5 text-[9px] font-medium text-white shadow-[0_0.7px_0_0_#AFB3C4_inset] transition-transform hover:scale-105 sm:mr-1 sm:h-6 sm:gap-1 sm:px-2 sm:text-[10px]"
                aria-label="Hide overlay"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3 text-[#b2b3ba] sm:size-3.5"
                  aria-hidden
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <span>Hide</span>
              </button>
              <span className="mx-0.5 h-4 w-px bg-white/70 sm:h-5" aria-hidden />
              <button
                type="button"
                className="ml-0 flex h-5 items-center rounded-full text-white transition-colors sm:ml-0.5 sm:h-6"
                aria-label="Move AI assistant demo card"
              >
                <MoveGripDotsIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
              </button>
            </div>
          </div>

          <div
            className="flex w-full min-w-0 shrink-0 flex-col overflow-hidden rounded-xl border border-white/25 sm:rounded-2xl"
            style={{
              background:
                "linear-gradient(180deg, hsla(252,10%,10%,0.75) 0%, hsla(252,10%,10%,0.8) 100%)",
              boxShadow:
                "0 0 0 1px rgba(207, 226, 255, 0.24), 0 -0.5px 0 0 rgba(255, 255, 255, 0.8)",
            }}
          >
          <div className="min-w-0 px-2 pb-1.5 pt-2 sm:px-2.5 sm:pb-2 sm:pt-2.5 md:px-3 md:pt-3">
            <div className="flex min-h-0 min-w-0 w-full flex-nowrap items-center justify-start gap-x-0.5 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-x-1 md:gap-x-1.5 lg:gap-x-2">
              <span className="group/static-insight flex shrink-0 items-center gap-1 sm:gap-1.5">
                <button type="button" className={listeningDemoHelperButtonClassNameFeatures}>
                  <span className="shrink-0 text-[#b2b3ba] transition-colors duration-150 group-hover/static-insight:text-[#edeef2]">
                    <SparklesIcon className="size-2.5 sm:size-3" aria-hidden />
                  </span>
                  <span className="whitespace-nowrap text-[#edeef2]">Assist</span>
                </button>
              </span>
              <span className="group/static-insight flex shrink-0 items-center gap-1 sm:gap-1.5">
                <div className="size-[3px] shrink-0 rounded-full bg-[#898b91]" aria-hidden />
                <button type="button" className={listeningDemoHelperButtonClassNameFeatures}>
                  <span className="shrink-0 text-[#b2b3ba] transition-colors duration-150 group-hover/static-insight:text-[#edeef2]">
                    <WandSparklesIcon className="size-2.5 sm:size-3" aria-hidden />
                  </span>
                  <span className="whitespace-nowrap text-[#edeef2]">What should I say?</span>
                </button>
              </span>
              <span className="group/static-insight flex shrink-0 items-center gap-1 pr-1 sm:gap-1.5 sm:pr-0">
                <div className="size-[3px] shrink-0 rounded-full bg-[#898b91]" aria-hidden />
                <button type="button" className={listeningDemoHelperButtonClassNameFeatures}>
                  <span className="shrink-0 text-[#b2b3ba] transition-colors duration-150 group-hover/static-insight:text-[#edeef2]">
                    <MessageSquareIcon className="size-2.5 sm:size-3" aria-hidden />
                  </span>
                  <span className="whitespace-nowrap text-[#edeef2]">Follow-up questions</span>
                </button>
              </span>
            </div>
          </div>

          <div className="min-w-0 px-2 pb-2 sm:px-2.5 sm:pb-2.5 md:px-3 md:pb-3">
            <div
              className="flex min-w-0 flex-col rounded-lg sm:rounded-xl"
              style={{
                border: "0.5px solid rgba(155, 155, 155, 0.4)",
                boxShadow: "0 -1px 0 0 rgba(255, 255, 255, 0.25)",
              }}
            >
              <div
                className="relative flex items-center gap-1 p-1.5 sm:gap-1.5 sm:p-2"
                style={{
                  boxShadow: "inset 0 2px 20px -1px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div className="relative flex min-h-[20px] min-w-0 flex-1 items-center sm:min-h-[24px]">
                  {chatInput.length === 0 && (
                    <div className="pointer-events-none absolute inset-0 flex min-w-0 flex-nowrap items-center gap-x-0.5 overflow-hidden font-light text-[8px] leading-tight text-white/60 sm:text-[10px]">
                      <span className="shrink-0">Ask a question, or </span>
                      <span
                        className={`${listeningDemoChatKeyPillClassFeatures} ${
                          downloadPlatform === "mac" ? "min-w-[1rem]" : "min-w-[1.5rem] px-0.5"
                        }`}
                      >
                        {modifierKeyLabel}
                      </span>
                      <span className={`${listeningDemoChatKeyPillClassFeatures} min-w-[1rem]`}>⏎</span>
                      <span className="shrink-0"> to start typing</span>
                    </div>
                  )}
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    aria-label="Chat"
                    title={
                      downloadPlatform === "mac"
                        ? "Type a message. In the app, use ⌘ and Return to focus this field."
                        : "Type a message. In the app, use Ctrl and Enter to focus this field."
                    }
                    className="relative z-10 min-h-[20px] w-full min-w-0 flex-1 bg-transparent py-0.5 text-[8px] text-white outline-none placeholder:text-transparent focus-visible:ring-0 sm:min-h-[24px] sm:text-[10px]"
                  />
                </div>
                <button
                  type="button"
                  className="flex size-[18px] shrink-0 items-center justify-center rounded-full text-white transition-transform duration-150 ease-out hover:scale-[1.03] active:scale-[0.97] sm:size-5"
                  style={{
                    background: "linear-gradient(180deg, #0544a9 0%, #022c70 100%)",
                    boxShadow:
                      "0 0 0 0.5px #0c44a1, 0 -1px 0 0 #022c70 inset, 0 0.5px 0 0 #81b6ff inset",
                  }}
                  aria-label="Send"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    className="ml-0.5 size-2.5"
                    aria-hidden
                  >
                    <path d="M2.5 1.5L10.5 6L2.5 10.5V1.5Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
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
          <h2 className="my-6 text-3xl font-medium section-title-gradient sm:text-4xl md:text-4xl lg:text-5xl">
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

            <div className="w-[320px] shrink-0 sm:w-[360px] lg:w-auto lg:flex-1">
              <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(92.09%_126.39%_at_50%_100%,_#DDE2EE_58.91%,_#BBC5DD_100%)]">
                <ListeningConversationCard />
              </div>
              <p className="mt-6 text-[18px] leading-[1.25] text-foreground">
                <span className="font-medium">Hovrlay listens to the conversation. </span>
                <span className="text-muted-foreground font-light">
                  It transcribes your meeting in real time, gaining context, so it can help when you need it.
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