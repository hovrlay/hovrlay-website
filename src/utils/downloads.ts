export type DownloadPlatform = "mac" | "windows" | "linux";

function getDownloadApiBase(): string | null {
  const raw = import.meta.env.VITE_DOWNLOAD_API_BASE;
  if (typeof raw !== "string" || !raw.trim()) {
    return null;
  }
  return raw.replace(/\/$/, "");
}

/** Best-effort client OS for showing a single download CTA. */
export function detectDownloadPlatform(): DownloadPlatform {
  if (typeof navigator === "undefined") {
    return "mac";
  }
  const ua = navigator.userAgent || "";
  const plat = navigator.platform || "";

  if (/Windows|Win32|Win64|WOW64/i.test(ua) || /^Win/i.test(plat)) {
    return "windows";
  }
  if (/Macintosh|MacIntel|Mac OS X|iPhone|iPad|iPod/i.test(ua) || /^Mac/i.test(plat)) {
    return "mac";
  }
  if (/Android/i.test(ua)) {
    return "mac";
  }
  if (/CrOS/i.test(ua)) {
    return "linux";
  }
  if (/Linux/i.test(ua) || /Linux/i.test(plat)) {
    return "linux";
  }
  return "mac";
}

export const handleDownload = (platform: DownloadPlatform) => {
  const base = getDownloadApiBase();
  if (!base) {
    console.error(
      "Missing VITE_DOWNLOAD_API_BASE. Copy .env.example to .env.local and set the URL, " +
        "or define it in your hosting provider’s build environment."
    );
    return;
  }
  window.location.assign(`${base}/${platform}`);
};
