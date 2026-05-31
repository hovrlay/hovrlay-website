"use client";

import { OsDownloadButton } from "@/components/OsDownloadButton";
import { detectDownloadPlatform } from "@/utils/downloads";
import SparklesIcon from "@/assets/sparkles.svg";
import WandSparklesIcon from "@/assets/wand-sparkles.svg";
import MessageSquareIcon from "@/assets/message-square.svg";
import RefreshCwIcon from "@/assets/refresh-cw.svg";
import DemoOverlayChevronIcon from "@/assets/demo-overlay-chevron.svg";
import StopIcon from "@/assets/stop.svg";
import SettingsIcon from "@/assets/settings.svg";
import CommandIcon from "@/assets/command.svg";
import ReturnIcon from "@/assets/return.svg";
import MonitorIcon from "@/assets/monitor.svg";
import SendIcon from "@/assets/send.svg";
import { type PointerEvent, useEffect, useRef, useState } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  phase: number;
  speed: number;
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  trailLength: number;
};

type DemoCardPosition = { x: number; y: number };

/** Overscroll dampening while dragging (edge cushion). */
const DEMO_EDGE_RUBBER = 0.26;

const rubberBandAxis = (value: number, min: number, max: number): number => {
  if (value < min) {
    return min + (value - min) * DEMO_EDGE_RUBBER;
  }
  if (value > max) {
    return max + (value - max) * DEMO_EDGE_RUBBER;
  }
  return value;
};

const clampAxis = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

const demoHelperButtonClassName =
  "flex cursor-pointer items-center gap-1.5 rounded-full border-0 bg-transparent py-2 pl-1.5 pr-2 text-xs leading-none text-white transition duration-75 ease-out group-hover/static-insight:bg-[#EDEEF2]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30";

const demoChatKeyPillClass =
  "inline-flex h-[18px] shrink-0 items-center justify-center rounded-[5px] border border-white/20 bg-gradient-to-b from-black/10 to-black/15 px-0.5 font-mono text-[8px] leading-none text-white/50 md:h-[22px] md:text-[9px]";

const Hero = () => {
  const heroCanvasWrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const [demoChatInput, setDemoChatInput] = useState("");
  const [isDemoOverlayVisible, setIsDemoOverlayVisible] = useState(true);
  const [shouldAnimateDemoContent, setShouldAnimateDemoContent] =
    useState(true);
  const [demoCardPosition, setDemoCardPosition] = useState<DemoCardPosition>({
    x: 0,
    y: 0,
  });
  const [isDemoCardDragging, setIsDemoCardDragging] = useState(false);
  const isDemoCardDraggingRef = useRef(false);
  const demoBoundsRef = useRef<HTMLDivElement | null>(null);
  const demoCardRef = useRef<HTMLDivElement | null>(null);
  const hasUserDraggedDemoCardRef = useRef(false);
  const dragStartRef = useRef<{
    pointerId: number;
    pointerOffsetX: number;
    pointerOffsetY: number;
    startClientX: number;
    startClientY: number;
  } | null>(null);
  const downloadPlatform = detectDownloadPlatform();
  const headingText = "#1 AI Assistant for Interviews";
  const words = headingText.split(" ");

  // Calculate delays: 0.1s between words for heading
  const wordDelay = 0.2;
  const totalHeadingDelay = words.length * wordDelay;
  const subheadingDelay = totalHeadingDelay + 0.2;
  const buttonsDelay = subheadingDelay + 0.4;
  const demoCardDelay = buttonsDelay + 0.7;

  const aiDemoResponseText =
    "A closure in JavaScript is a function that retains access to its outer scope even after the outer function has returned. For example, a counter function that increments a private variable — the inner function closes over that variable.";
  const aiDemoResponseDisplayText = `\u201C${aiDemoResponseText}\u201D`;
  const [visibleAiResponseChars, setVisibleAiResponseChars] = useState(0);
  const userQuestionDelay = demoCardDelay + 0.55;
  // Response streaming starts shortly after the user question appears.
  const aiResponseStartDelay = userQuestionDelay + 0.35;

  const handleToggleDemoOverlay = () => {
    setShouldAnimateDemoContent(false);
    setIsDemoOverlayVisible((current) => !current);
  };

  const getDemoCardBounds = (bounds: HTMLElement, card: HTMLElement) => {
    const maxX = Math.max(0, bounds.clientWidth - card.offsetWidth);
    const maxY = Math.max(0, bounds.clientHeight - card.offsetHeight);
    return { maxX, maxY };
  };

  const getClampedDemoCardPosition = (
    x: number,
    y: number,
  ): DemoCardPosition => {
    const bounds = demoBoundsRef.current;
    const card = demoCardRef.current;
    if (!bounds || !card) {
      return { x, y };
    }
    const { maxX, maxY } = getDemoCardBounds(bounds, card);
    return { x: clampAxis(x, 0, maxX), y: clampAxis(y, 0, maxY) };
  };

  const getRubberDemoCardPosition = (
    x: number,
    y: number,
  ): DemoCardPosition => {
    const bounds = demoBoundsRef.current;
    const card = demoCardRef.current;
    if (!bounds || !card) {
      return { x, y };
    }
    const { maxX, maxY } = getDemoCardBounds(bounds, card);
    return {
      x: rubberBandAxis(x, 0, maxX),
      y: rubberBandAxis(y, 0, maxY),
    };
  };

  useEffect(() => {
    const syncDemoCardPosition = () => {
      const bounds = demoBoundsRef.current;
      const card = demoCardRef.current;
      if (!bounds || !card) {
        return;
      }

      setDemoCardPosition((current) => {
        if (!hasUserDraggedDemoCardRef.current) {
          const { maxX } = getDemoCardBounds(bounds, card);
          const centeredX = maxX / 2;
          return getClampedDemoCardPosition(centeredX, 0);
        }
        return getClampedDemoCardPosition(current.x, current.y);
      });
    };

    syncDemoCardPosition();
    window.addEventListener("resize", syncDemoCardPosition);
    const bounds = demoBoundsRef.current;
    const resizeObserver =
      typeof ResizeObserver !== "undefined" && bounds
        ? new ResizeObserver(() => {
            syncDemoCardPosition();
          })
        : null;
    resizeObserver?.observe(bounds);

    return () => {
      window.removeEventListener("resize", syncDemoCardPosition);
      resizeObserver?.disconnect();
    };
  }, []);

  const DRAG_THRESHOLD = 4;

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = demoBoundsRef.current;
    if (!bounds) return;
    const boundsRect = bounds.getBoundingClientRect();
    dragStartRef.current = {
      pointerId: event.pointerId,
      pointerOffsetX: event.clientX - boundsRect.left - demoCardPosition.x,
      pointerOffsetY: event.clientY - boundsRect.top - demoCardPosition.y,
      startClientX: event.clientX,
      startClientY: event.clientY,
    };
  };

  const handleDemoCardPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("button, input, textarea, a, [role='button']")) return;
    startDrag(event);
  };

  useEffect(() => {
    const onPointerMove = (event: globalThis.PointerEvent) => {
      const dragStart = dragStartRef.current;
      const bounds = demoBoundsRef.current;
      if (!dragStart || !bounds || dragStart.pointerId !== event.pointerId)
        return;

      const dx = event.clientX - dragStart.startClientX;
      const dy = event.clientY - dragStart.startClientY;
      const dist = Math.hypot(dx, dy);

      if (!isDemoCardDraggingRef.current && dist >= DRAG_THRESHOLD) {
        isDemoCardDraggingRef.current = true;
        setIsDemoCardDragging(true);
      }

      if (isDemoCardDraggingRef.current) {
        const boundsRect = bounds.getBoundingClientRect();
        const rawX = event.clientX - boundsRect.left - dragStart.pointerOffsetX;
        const rawY = event.clientY - boundsRect.top - dragStart.pointerOffsetY;
        hasUserDraggedDemoCardRef.current = true;
        setDemoCardPosition(getRubberDemoCardPosition(rawX, rawY));
      }
    };

    const onPointerUp = (event: globalThis.PointerEvent) => {
      const dragStart = dragStartRef.current;
      if (!dragStart || dragStart.pointerId !== event.pointerId) return;
      dragStartRef.current = null;
      isDemoCardDraggingRef.current = false;
      setIsDemoCardDragging(false);
      setDemoCardPosition((current) =>
        getClampedDemoCardPosition(current.x, current.y),
      );
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointercancel", onPointerUp);
    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  useEffect(() => {
    if (!shouldAnimateDemoContent) {
      setVisibleAiResponseChars(aiDemoResponseDisplayText.length);
      return;
    }

    setVisibleAiResponseChars(0);
    const streamingStartMs = aiResponseStartDelay * 1000;
    const charsPerTick = 3;
    const tickMs = 18;
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setVisibleAiResponseChars((current) => {
          const next = Math.min(
            aiDemoResponseDisplayText.length,
            current + charsPerTick,
          );
          if (
            next >= aiDemoResponseDisplayText.length &&
            intervalId !== undefined
          ) {
            window.clearInterval(intervalId);
          }
          return next;
        });
      }, tickMs);
    }, streamingStartMs);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [
    aiDemoResponseDisplayText,
    aiResponseStartDelay,
    shouldAnimateDemoContent,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = heroCanvasWrapRef.current;
    if (!canvas || !wrap) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const initStars = (w: number, h: number) => {
      const centerX = w / 2;
      const centerY = h / 2;
      starsRef.current = Array.from({ length: 300 }, () => ({
        x: centerX + (Math.random() - 0.5) * 3000,
        y: centerY + (Math.random() - 0.5) * 3000,
        radius: Math.random(),
        phase: Math.random() * 2 * Math.PI,
        speed: 2 + Math.random() * 3,
      }));
    };

    const syncCanvasSize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (w < 1 || h < 1) {
        return;
      }
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        initStars(w, h);
      }
    };

    syncCanvasSize();
    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            syncCanvasSize();
          })
        : null;
    resizeObserver?.observe(wrap);

    let animationFrameId = 0;
    let startTime = 0;
    let lastFrameTimestamp = 0;
    let lastShootingStarSpawn = 0;
    const margin = 200;
    const shootingStarSpawnInterval = 5000;
    const maxShootingStars = 1;

    const spawnShootingStar = (w: number, h: number) => {
      const startX = w * (0.2 + Math.random() * 0.8);
      const startY = -20 + Math.random() * (h * 0.35);
      const speed = 780 + Math.random() * 220;

      shootingStarsRef.current.push({
        x: startX,
        y: startY,
        vx: -speed * (0.58 + Math.random() * 0.14),
        vy: speed * (0.52 + Math.random() * 0.16),
        life: 0,
        maxLife: 1.1 + Math.random() * 0.5,
        trailLength: 70 + Math.random() * 40,
      });
    };

    const rotatePoint = (
      x: number,
      y: number,
      px: number,
      py: number,
      angle: number,
    ) => {
      const dx = x - px;
      const dy = y - py;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      return {
        x: px + dx * cos - dy * sin,
        y: py + dx * sin + dy * cos,
      };
    };

    const render = (timestamp: number) => {
      const w = canvas.width;
      const h = canvas.height;
      if (w < 1 || h < 1) {
        animationFrameId = window.requestAnimationFrame(render);
        return;
      }

      if (startTime === 0) {
        startTime = timestamp;
      }
      if (lastFrameTimestamp === 0) {
        lastFrameTimestamp = timestamp;
      }

      const elapsed = timestamp - startTime;
      const deltaSeconds = (timestamp - lastFrameTimestamp) / 1000;
      lastFrameTimestamp = timestamp;
      const angle = (elapsed / 400000) * 2 * Math.PI;
      const px = w * 1.25;
      const py = h * 1.5;
      const canvasBottom = h;

      ctx.clearRect(0, 0, w, h);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.translate(px, py);
      ctx.rotate(angle);
      ctx.translate(-px, -py);

      for (const star of starsRef.current) {
        const rotated = rotatePoint(star.x, star.y, px, py, angle);
        if (
          rotated.x < -margin ||
          rotated.x > w + margin ||
          rotated.y < -margin ||
          rotated.y > h + margin
        ) {
          const targetX = -margin + Math.random() * (w + margin * 2);
          const targetY = -margin + Math.random() * (h + margin * 2);
          const unrotated = rotatePoint(targetX, targetY, px, py, -angle);
          star.x = unrotated.x;
          star.y = unrotated.y;
        }

        const opacity =
          0.65 +
          0.35 *
            Math.sin(
              (elapsed / (star.speed * 1000)) * 2 * Math.PI + star.phase,
            );
        ctx.globalAlpha = opacity;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
      }

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = 1;

      if (
        elapsed - lastShootingStarSpawn >= shootingStarSpawnInterval &&
        shootingStarsRef.current.length < maxShootingStars
      ) {
        spawnShootingStar(w, h);
        lastShootingStarSpawn = elapsed;
      }

      shootingStarsRef.current = shootingStarsRef.current.filter(
        (shootingStar) => {
          shootingStar.x += shootingStar.vx * deltaSeconds;
          shootingStar.y += shootingStar.vy * deltaSeconds;
          shootingStar.life += deltaSeconds;

          const lifeProgress = shootingStar.life / shootingStar.maxLife;
          const fadeOut =
            lifeProgress > 0.65 ? 1 - (lifeProgress - 0.65) / 0.35 : 1;
          const alpha = Math.max(0, fadeOut);

          const directionLength =
            Math.hypot(shootingStar.vx, shootingStar.vy) || 1;
          const dirX = shootingStar.vx / directionLength;
          const dirY = shootingStar.vy / directionLength;
          const trailEndX = shootingStar.x - dirX * shootingStar.trailLength;
          const trailEndY = shootingStar.y - dirY * shootingStar.trailLength;
          const gradient = ctx.createLinearGradient(
            shootingStar.x,
            shootingStar.y,
            trailEndX,
            trailEndY,
          );

          gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.72})`);
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(trailEndX, trailEndY);
          ctx.stroke();

          return (
            shootingStar.life < shootingStar.maxLife &&
            shootingStar.y <= canvasBottom &&
            shootingStar.x >= -margin
          );
        },
      );

      animationFrameId = window.requestAnimationFrame(render);
    };

    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <section id="hero" className="relative isolate">
      <div className="bg-image-hero select-none pointer-events-none" />
      <div
        ref={heroCanvasWrapRef}
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-1/2"
        aria-hidden
      >
        <canvas ref={canvasRef} className="canvas-hero" />
      </div>

      {/* Text content section (title, subheading, download CTA) */}
      <div className="flex flex-col items-center justify-center text-center pt-[7rem] pb-[4.5rem] md:pb-24 max-md:px-6">
        <a
          href="https://www.producthunt.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-[rgba(8,9,10,0.15)] p-1 pr-1.5 backdrop-blur-md transition-colors hover:bg-[rgba(8,9,10,0.07)] opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${buttonsDelay}s` }}
        >
          <span className="rounded-full bg-[#0c8c5e] px-2.5 py-1 text-[11px] uppercase leading-none text-white ]">
            New
          </span>
          <span className="text-sm leading-none text-white whitespace-nowrap">
            Launching soon on Product Hunt
          </span>
          <svg
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 shrink-0 select-none text-white"
            aria-hidden
          >
            <path
              d="M9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1ZM11.53 9.53L8.53 12.53C8.384 12.676 8.192 12.75 8 12.75C7.808 12.75 7.616 12.677 7.47 12.53C7.177 12.237 7.177 11.762 7.47 11.469L9.94 8.999L7.47 6.529C7.177 6.236 7.177 5.761 7.47 5.468C7.763 5.175 8.238 5.175 8.531 5.468L11.531 8.468C11.824 8.761 11.824 9.236 11.531 9.529L11.53 9.53Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <h1 className="font-heading max-w-[32rem] text-[48px] md:text-[60px] lg:text-[72px] text-primary-foreground text-balance leading-tight">
          {words.map((word, index) => (
            <span
              key={index}
              className="animate-word"
              style={{
                animationDelay: `${index * 0.15}s`,
                marginRight: "0.25em",
              }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p
          className="text-primary-foreground text-[13px] md:text-[15px] lg:text-[17px] mt-8 md:mt-12 text-center text-balance max-w-[30.5rem] opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${subheadingDelay}s` }}
        >
          Get answers to every interview question in real time without being
          detected. Start free, no credit card required.
        </p>
        {/* Scroll anchor for sticky CTA on HomePage */}
        <div
          id="hero-download-cta"
          className="mt-12 md:mt-16 p-1 opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${buttonsDelay}s` }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OsDownloadButton />
          </div>
        </div>
      </div>

      {/* Demo bounds: single layer for min-height (hero reserve) + drag limits; card is shorter, aspect-sized inside. */}
      <div
        ref={demoBoundsRef}
        className="relative mx-auto box-border aspect-[1080/656] w-[min(95vw,1200px)] max-w-[67.5rem] opacity-0 animate-expand-down min-h-[440px] sm:min-h-[380px]"
        style={{
          animationDelay: `${demoCardDelay}s`,
        }}
      >
        <div
          ref={demoCardRef}
          className={`absolute left-0 top-0 flex min-h-[360px] w-full min-w-[min(100%,500px)] max-w-[580px] flex-col text-center select-none ${
            isDemoCardDragging
              ? "cursor-grabbing touch-none"
              : "cursor-grab transition-transform duration-200 ease-out"
          }`}
          style={{
            transform: `translate3d(${demoCardPosition.x}px, ${demoCardPosition.y}px, 0)`,
          }}
        >
          <div
            className="mb-2 mx-auto flex w-fit max-w-full shrink-0 items-center gap-1 rounded-full px-3 py-1.5"
            style={{
              backgroundColor: "hsla(252, 10%, 10%, 0.8)",
              boxShadow:
                "0 0 0 1px rgba(207, 226, 255, 0.24), 0 -0.5px 0 0 rgba(255, 255, 255, 0.8)",
            }}
            onPointerDown={handleDemoCardPointerDown}
          >
            <button
              type="button"
              className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#2E3039_0%,#272A31_100%)] shadow-[0_0.7px_0_0_#AFB3C4_inset] transition-transform hover:scale-105"
              aria-label="Settings"
            >
              <SettingsIcon className="size-4 text-white" aria-hidden />
            </button>
            <button
              type="button"
              onClick={handleToggleDemoOverlay}
              className="mr-1 flex h-8 items-center gap-1 rounded-full bg-[linear-gradient(180deg,#2E3039_0%,#272A31_100%)] px-3 text-xs font-medium text-white shadow-[0_0.7px_0_0_#AFB3C4_inset] transition-transform hover:scale-105"
              aria-label={
                isDemoOverlayVisible ? "Hide overlay" : "Show overlay"
              }
            >
              <DemoOverlayChevronIcon
                className={`size-4 text-[#b2b3ba] transition-transform ${
                  isDemoOverlayVisible ? "" : "rotate-180"
                }`}
                aria-hidden
              />
              <span>{isDemoOverlayVisible ? "Hide" : "Show"}</span>
            </button>
            <button
              type="button"
              className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#2E3039_0%,#272A31_100%)] shadow-[0_0.7px_0_0_#AFB3C4_inset] transition-transform hover:scale-105"
              aria-label="Stop"
            >
              <StopIcon className="size-4 text-white" aria-hidden />
            </button>
          </div>
          <div
            className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/25 transition-opacity duration-150 ${
              isDemoOverlayVisible
                ? "visible opacity-100"
                : "pointer-events-none invisible opacity-0"
            }`}
            style={{
              background:
                "linear-gradient(180deg, hsla(252,10%,10%,0.75) 0%, hsla(252,10%,10%,0.8) 100%)",
              boxShadow:
                "0 0 0 1px rgba(207, 226, 255, 0.24), 0 -0.5px 0 0 rgba(255, 255, 255, 0.8)",
            }}
            aria-hidden={!isDemoOverlayVisible}
            onPointerDown={handleDemoCardPointerDown}
          >
            <div className="relative flex min-h-0 min-w-0 flex-1 flex-col p-4 pb-2">
              <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overflow-x-hidden pb-1.5 pr-1 [scrollbar-color:rgba(255,255,255,0.35)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30 hover:[&::-webkit-scrollbar-thumb]:bg-white/45 [&::-webkit-scrollbar-track]:bg-transparent">
                <div className="flex justify-end pt-1.5">
                  <div
                    className={`w-fit max-w-72 cursor-pointer select-text rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[0.125rem] px-2.5 py-1.5 font-light text-sm text-white ${
                      shouldAnimateDemoContent
                        ? "opacity-0 animate-fade-in-up"
                        : ""
                    }`}
                    style={{
                      background:
                        "linear-gradient(180deg, #0544a9 0%, #022c70 100%)",
                      boxShadow:
                        "0 0 0 0.5px #0c44a1, 0 -1px 0 0 #022c70 inset, 0 0.5px 0 0 #81b6ff inset",
                      animationDelay: shouldAnimateDemoContent
                        ? `${userQuestionDelay}s`
                        : undefined,
                    }}
                  >
                    What should I say?
                  </div>
                </div>

                <div className="flex items-center font-light gap-1.5 text-[13px] text-white/40">
                  <MonitorIcon className="size-3 shrink-0" aria-hidden />
                  <span>Viewed screen</span>
                </div>

                <div className="w-full text-sm font-light leading-[1.6] text-[#edeef2]">
                  <p className="relative text-left">
                    {shouldAnimateDemoContent && (
                      <span className="pointer-events-none invisible select-none">
                        {aiDemoResponseDisplayText}
                      </span>
                    )}
                    <span
                      className={
                        shouldAnimateDemoContent ? "absolute inset-0" : ""
                      }
                    >
                      {shouldAnimateDemoContent
                        ? aiDemoResponseDisplayText.slice(
                            0,
                            visibleAiResponseChars,
                          )
                        : aiDemoResponseDisplayText}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-1 gap-y-1 font-light mt-10">
                <span className="group/static-insight flex items-center gap-2">
                  <button type="button" className={demoHelperButtonClassName}>
                    <span className="shrink-0 text-[#b2b3ba] transition-colors duration-150 group-hover/static-insight:text-[#ffffff]">
                      <SparklesIcon className="size-3.5" aria-hidden />
                    </span>
                    <span className="truncate">Assist</span>
                  </button>
                </span>
                <span className="group/static-insight flex items-center gap-2">
                  <div
                    className="size-[3px] shrink-0 rounded-full bg-[#898b91]"
                    aria-hidden
                  />
                  <button type="button" className={demoHelperButtonClassName}>
                    <span className="shrink-0 text-[#b2b3ba] transition-colors duration-150 group-hover/static-insight:text-[#ffffff]">
                      <WandSparklesIcon className="size-3.5" aria-hidden />
                    </span>
                    <span className="truncate">What should I say?</span>
                  </button>
                </span>
                <span className="group/static-insight hidden min-[500px]:flex items-center gap-2">
                  <div
                    className="size-[3px] shrink-0 rounded-full bg-[#898b91]"
                    aria-hidden
                  />
                  <button type="button" className={demoHelperButtonClassName}>
                    <span className="shrink-0 text-[#b2b3ba] transition-colors duration-150 group-hover/static-insight:text-[#ffffff]">
                      <MessageSquareIcon className="size-3.5" aria-hidden />
                    </span>
                    <span className="truncate">Follow-up questions</span>
                  </button>
                </span>
                <span className="group/static-insight hidden min-[600px]:flex items-center gap-2">
                  <div
                    className="size-[3px] shrink-0 rounded-full bg-[#898b91]"
                    aria-hidden
                  />
                  <button type="button" className={demoHelperButtonClassName}>
                    <span className="shrink-0 text-[#b2b3ba] transition-colors duration-150 group-hover/static-insight:text-[#ffffff]">
                      <RefreshCwIcon className="size-3.5" aria-hidden />
                    </span>
                    <span className="truncate">Recap</span>
                  </button>
                </span>
              </div>
            </div>

            <div
              className="flex shrink-0 flex-col rounded-xl mx-3 mb-3"
              style={{
                border: "0.5px solid rgba(155, 155, 155, 0.4)",
                boxShadow: "0 -1px 0 0 rgba(255, 255, 255, 0.25)",
              }}
            >
              <div
                className="relative flex items-center gap-2 p-1.5 min-[500px]:gap-2.5 min-[500px]:p-2"
                style={{
                  boxShadow: "inset 0 2px 20px -1px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div className="relative flex min-h-[22px] min-w-0 flex-1 items-center min-[500px]:min-h-[24px]">
                  {demoChatInput.length === 0 && (
                    <div className="pointer-events-none absolute inset-0 flex min-w-0 flex-nowrap items-center gap-x-1 overflow-hidden font-light text-[13px] text-white/60 min-[500px]:flex-wrap min-[500px]:gap-y-0.5 min-[500px]:text-[13px]">
                      <span className="shrink-0 min-[500px]:hidden">
                        Ask a question, or{" "}
                      </span>
                      <span className="hidden shrink-0 min-[500px]:inline">
                        Ask about your screen or conversation, or{" "}
                      </span>
                      <span
                        className={`${demoChatKeyPillClass} ${
                          downloadPlatform === "mac"
                            ? "min-w-[1.125rem]"
                            : "min-w-[1.75rem] px-1 min-[500px]:min-w-[2rem]"
                        }`}
                      >
                        {downloadPlatform === "mac" ? (
                          <CommandIcon className="size-[0.6rem]" aria-hidden />
                        ) : (
                          "Ctrl"
                        )}
                      </span>
                      <span
                        className={`${demoChatKeyPillClass} min-w-[1.125rem] min-[500px]:min-w-[1.25rem]`}
                      >
                        <ReturnIcon className="size-[0.6rem]" aria-hidden />
                      </span>
                      <span className="hidden shrink-0 min-[500px]:inline">
                        {" "}
                        for suggestions
                      </span>
                    </div>
                  )}
                  <input
                    type="text"
                    value={demoChatInput}
                    onChange={(e) => setDemoChatInput(e.target.value)}
                    aria-label="Chat"
                    title={
                      downloadPlatform === "mac"
                        ? "Type a message. In the app, use ⌘ and Return to focus this field."
                        : "Type a message. In the app, use Ctrl and Enter to focus this field."
                    }
                    className="relative z-10 min-h-[22px] w-full min-w-0 flex-1 bg-transparent py-0 text-[11px] text-white outline-none placeholder:text-transparent focus-visible:ring-0 min-[500px]:min-h-[24px] min-[500px]:py-0.5 min-[500px]:text-[13px]"
                  />
                </div>
                <button
                  type="button"
                  className="flex size-6 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-150 ease-out hover:scale-[1.03] active:scale-[0.97] min-[500px]:size-7"
                  style={{
                    background:
                      "linear-gradient(180deg, #0544a9 0%, #022c70 100%)",
                    boxShadow:
                      "0 0 0 0.5px #0c44a1, 0 -1px 0 0 #022c70 inset, 0 0.5px 0 0 #81b6ff inset",
                  }}
                  aria-label="Send"
                >
                  <SendIcon className="size-3" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
