import React from "react";

interface IconProps {
  className?: string;
}

export const AppleIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

export const WindowsIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
  >
    <path 
      fill="currentColor" 
      d="M0,3.43v8.13h9.81v-9.48L0,3.43L0,3.43z M11,1.9L24,0v11.49H11V1.9L11,1.9z M0,12.57 v8.13l9.81,1.37V12.57H0L0,12.57z M11,12.7h13v11.37l-13-1.84V12.7L11,12.7z"
    />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
