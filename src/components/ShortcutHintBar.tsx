"use client";

import { useEffect, useRef, useState } from "react";
import { Command } from "lucide-react";

const TICK_INTERVAL_MS = 3200;
const STAGGER_MS = 200;
const PULSE_DURATION_MS = 650;

const STEPS = ["up", "left", "down", "right"] as const;
type Step = (typeof STEPS)[number];

const ARROW_ROTATE: Record<Step, string> = {
  up: "",
  down: "rotate-180",
  left: "-rotate-90",
  right: "rotate-90",
};

const pulseKeyframes = `
@keyframes shortcutRipple {
  0%   { opacity: 0;   transform: scale(1.2); }
  30%  { opacity: 0.8; transform: scale(1.0); }
  100% { opacity: 0;   transform: scale(1.3); }
}
`;

function PulseHighlight({ id }: { id: string }) {
  return (
    <div
      key={id}
      className="pointer-events-none absolute inset-0 rounded-[6px] xl:rounded-[8px]"
      style={{
        border: "1.5px solid #4984FD",
        animation: `shortcutRipple ${PULSE_DURATION_MS}ms ease-out forwards`,
      }}
    />
  );
}

interface ShortcutHintBarProps {
  stepIndex?: number;
  onTick?: (stepIndex: number) => void;
}

export default function ShortcutHintBar({ stepIndex: externalStepIndex, onTick }: ShortcutHintBarProps = {}) {
  const [internalStepIndex, setInternalStepIndex] = useState(0);
  const [cmdPulseId, setCmdPulseId] = useState<string | null>(null);
  const [arrowPulseId, setArrowPulseId] = useState<string | null>(null);
  const cleanupTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const controlled = externalStepIndex !== undefined;
  const stepIndex = controlled ? externalStepIndex : internalStepIndex;

  useEffect(() => {
    const tick = (count: number) => {
      const nextStep = count % STEPS.length;
      if (!controlled) setInternalStepIndex(nextStep);
      onTick?.(nextStep);
      setCmdPulseId(`cmd-${count}`);
      setArrowPulseId(null);

      const t1 = setTimeout(() => setArrowPulseId(`arrow-${count}`), STAGGER_MS);
      const t2 = setTimeout(() => setCmdPulseId(null), PULSE_DURATION_MS);
      const t3 = setTimeout(() => setArrowPulseId(null), STAGGER_MS + PULSE_DURATION_MS);
      cleanupTimers.current.push(t1, t2, t3);
    };

    tick(0);
    let count = 1;
    const interval = setInterval(() => { tick(count); count++; }, TICK_INTERVAL_MS);

    return () => {
      clearInterval(interval);
      cleanupTimers.current.forEach(clearTimeout);
    };
  }, []);

  const currentStep = STEPS[stepIndex];
  const displayOrder: Step[] = ["up", "down", "left", "right"];

  return (
    <>
      <style>{pulseKeyframes}</style>
      <div className="flex flex-col gap-4 rounded-xl bg-[linear-gradient(180deg,#EEEFF1_30.83%,#E3E4E9_100%)] p-[9px] shadow-[0px_15px_15px_0px_rgba(0,0,0,0.05)] select-none xl:p-3">
        <div className="flex h-9 items-center justify-between md:h-[38px] lg:h-[34px] xl:h-12">

          {/* Command key */}
          <button
            type="button"
            className="relative overflow-visible flex h-full w-[59px] flex-col items-start justify-center gap-1.5 rounded-[6px] border border-gray-200 bg-white px-[9px] py-[7px] md:w-[62px] md:p-[10px] lg:w-[56px] lg:px-[9px] lg:py-[7px] xl:w-[70px] xl:rounded-[8px] 2xl:w-[78px] 2xl:px-3 2xl:py-2.5"
          >
            <Command className="size-[9px] shrink-0 text-[#374151] md:size-[10px] lg:size-[9px] xl:size-3" aria-hidden="true" />
            <span className="text-[8px] font-semibold leading-none tracking-tight text-[#374151] lg:text-[7px] xl:text-[10px]">
              command
            </span>
            {cmdPulseId && <PulseHighlight id={cmdPulseId} />}
          </button>

          {/* Cross connector */}
          <div className="relative size-[10px] before:absolute before:left-1/2 before:top-1/2 before:block before:h-px before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-400 after:absolute after:left-1/2 after:top-1/2 after:block after:h-px after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90 after:bg-gray-400 2xl:size-[13px]" />

          {/* Arrow keys */}
          <div className="flex h-full gap-[9px] md:gap-[10px] lg:gap-[8px] 2xl:gap-3">
            {displayOrder.map((step) => (
              <button
                key={step}
                type="button"
                className={`relative overflow-visible flex h-full w-9 items-center justify-center rounded-[6px] border border-gray-200 bg-white text-[#374151] md:w-[38px] lg:w-[34px] xl:w-12 xl:rounded-[8px] ${ARROW_ROTATE[step]}`}
              >
                <span className="text-[13px] leading-none xl:text-[15px]">↑</span>
                {arrowPulseId && currentStep === step && (
                  <PulseHighlight id={arrowPulseId} />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
