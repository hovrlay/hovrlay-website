// Hardcoded download URLs for Hovrlay releases
export const DOWNLOAD_URLS = {
  mac: 'https://hovrlay-release.s3.ap-south-1.amazonaws.com/hovrlay.dmg',
  windows: 'https://hovrlay-release.s3.ap-south-1.amazonaws.com/hovrlay.exe',
} as const;

export const handleDownload = (platform: 'mac' | 'windows') => {
  const url = DOWNLOAD_URLS[platform];
  if (url) {
    window.open(url, '_blank');
  } else {
    console.warn(`Download URL not available for ${platform}`);
  }
};
