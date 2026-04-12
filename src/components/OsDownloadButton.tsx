import type { ComponentProps } from "react";
import { Button } from "@/components/Button";
import AppleIcon from "@/assets/apple.svg?react";
import WindowsIcon from "@/assets/windows.svg?react";
import PlatformIcon from "@/assets/platform.svg?react";
import {
  detectDownloadPlatform,
  handleDownload,
  type DownloadPlatform
} from "@/utils/downloads";

type ButtonProps = ComponentProps<typeof Button>;

const labels: Record<DownloadPlatform, string> = {
  windows: "Get for Windows",
  mac: "Get for Mac",
  linux: "Get for Linux"
};

type OsDownloadButtonProps = Pick<ButtonProps, "variant" | "size" | "className">;

export function OsDownloadButton({
  variant = "hero-secondary",
  size = "lg",
  className
}: OsDownloadButtonProps) {
  const platform = detectDownloadPlatform();

  const icon =
    platform === "windows" ? (
      <WindowsIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform shrink-0" />
    ) : platform === "mac" ? (
      <AppleIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform shrink-0" />
    ) : (
      <PlatformIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform shrink-0" />
    );

  return (
    <Button
      variant={variant}
      size={size}
      className={["group", className].filter(Boolean).join(" ")}
      onClick={() => handleDownload(platform)}
    >
      {icon}
      {labels[platform]}
    </Button>
  );
}
