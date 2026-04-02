function getDownloadApiBase(): string | null {
  const raw = import.meta.env.VITE_DOWNLOAD_API_BASE;
  if (typeof raw !== "string" || !raw.trim()) {
    return null;
  }
  return raw.replace(/\/$/, "");
}

export const handleDownload = (platform: "mac" | "windows") => {
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
