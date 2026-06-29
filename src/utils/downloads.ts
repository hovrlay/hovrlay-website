export type DownloadPlatform = "mac" | "windows" | "linux";

export const MICROSOFT_STORE_URL = "https://apps.microsoft.com/detail/9PMRJFKL8NGH";

export const downloadButtonLabels: Record<DownloadPlatform, string> = {
  mac: "Get for Mac",
  windows: "Get from Microsoft Store",
  linux: "Get for Linux",
};

function getDownloadApiBase(): string | null {
  const raw = process.env.NEXT_PUBLIC_DOWNLOAD_API_BASE;
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
  if (platform === "windows") {
    window.location.assign(MICROSOFT_STORE_URL);
    return;
  }

  const base = getDownloadApiBase();
  if (!base) {
    console.error(
      "Missing NEXT_PUBLIC_DOWNLOAD_API_BASE. Add it to .env.local for local dev, " +
        "or set it in your Vercel project environment variables for production."
    );
    return;
  }
  window.location.assign(`${base}/${platform}`);
};
