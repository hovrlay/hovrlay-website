"use client";

import AppleIcon from "@/assets/apple.svg";
import WindowsIcon from "@/assets/windows.svg";
import PlatformIcon from "@/assets/platform.svg";
import LaptopIcon from "@/assets/laptop.svg";
import {
  detectDownloadPlatform,
  downloadButtonLabels,
  handleDownload,
  type DownloadPlatform
} from "@/utils/downloads";

const platformMeta: Record<DownloadPlatform, { Icon: typeof AppleIcon }> = {
  windows: { Icon: WindowsIcon },
  mac: { Icon: AppleIcon },
  linux: { Icon: PlatformIcon }
};

export function OsDownloadButton() {
  const platform = detectDownloadPlatform();
  const label = downloadButtonLabels[platform];
  const { Icon } = platformMeta[platform];

  return (
    <button
      type="button"
      onClick={() => handleDownload(platform)}
      className="blue-glassy-button group relative inline-flex items-center justify-center gap-[6px] whitespace-nowrap rounded-[10px] px-5 py-[10px] text-[16px] font-medium text-white tracking-[-0.13px] overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
    >
      {/* Glassy blurred border */}
      <span className="pointer-events-none absolute inset-0 z-20 blur-[1px]" aria-hidden="true">
        <span className="blurred-border absolute -top-px -left-px z-20 h-[calc(100%+2px)] w-[calc(100%+2px)] rounded-[10px]" />
      </span>

      {/* Narrow shimmer sweep */}
      <div
        className="pointer-events-none absolute -top-4 -left-10 h-[calc(100%+2rem)] w-14 opacity-10 animate-shimmer-sweep"
        aria-hidden="true"
        style={{
          background: "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
        }}
      />

      <span className="relative z-10 inline-flex items-center gap-[6px]">
        <LaptopIcon className="h-5 w-5 shrink-0 md:hidden" aria-hidden />
        <span className="md:hidden">Get the desktop app</span>
        <Icon className="hidden h-5 w-5 shrink-0 md:block" aria-hidden />
        <span className="hidden md:inline">{label}</span>
      </span>
    </button>
  );
}