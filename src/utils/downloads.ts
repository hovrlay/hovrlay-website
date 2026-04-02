const raw = import.meta.env.VITE_DOWNLOAD_API_BASE;
if (typeof raw !== "string" || !raw.trim()) {
  throw new Error(
    "Missing VITE_DOWNLOAD_API_BASE. Copy .env.example to .env.local and set the URL, " +
      "or define it in your hosting provider’s build environment."
  );
}

const DOWNLOAD_API_BASE = raw.replace(/\/$/, "");

export const DOWNLOAD_URLS = {
  mac: `${DOWNLOAD_API_BASE}/mac`,
  windows: `${DOWNLOAD_API_BASE}/windows`,
} as const;

export const handleDownload = (platform: "mac" | "windows") => {
  const url = DOWNLOAD_URLS[platform];
  if (url) {
    window.location.assign(url);
  } else {
    console.warn(`Download URL not available for ${platform}`);
  }
};
