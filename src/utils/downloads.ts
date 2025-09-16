// Hardcoded download URLs for Hovrlay releases
export const DOWNLOAD_URLS = {
  mac: 'https://github.com/hovrlay/hovrlay-app/releases/download/v0.1.0-beta.1/hovrlay-0.1.0-beta.1.dmg',
  windows: null, // Add Windows URL when available
} as const;

export const handleDownload = (platform: 'mac' | 'windows') => {
  const url = DOWNLOAD_URLS[platform];
  if (url) {
    window.open(url, '_blank');
  } else {
    console.warn(`Download URL not available for ${platform}`);
  }
};
