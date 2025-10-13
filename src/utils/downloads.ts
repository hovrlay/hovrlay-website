// Hardcoded download URLs for Hovrlay releases
export const DOWNLOAD_URLS = {
  mac: 'https://github.com/hovrlay/hovrlay-releases/releases/download/v0.1.0-beta.4/Hovrlay.dmg',
  windows: 'https://github.com/hovrlay/hovrlay-releases/releases/download/v0.1.0-beta.2/hovrlay.0.1.0-beta.2.exe',
} as const;

export const handleDownload = (platform: 'mac' | 'windows') => {
  const url = DOWNLOAD_URLS[platform];
  if (url) {
    window.open(url, '_blank');
  } else {
    console.warn(`Download URL not available for ${platform}`);
  }
};
