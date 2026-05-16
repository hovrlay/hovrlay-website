"use client";

import { usePathname } from "next/navigation";
import { OsDownloadButton } from "@/components/OsDownloadButton";

export function FixedDownloadButton() {
  const pathname = usePathname();
  const shouldShow =
    pathname === "/privacy-policy" ||
    pathname === "/terms" ||
    pathname === "/blog" ||
    pathname.startsWith("/blog/");

  if (!shouldShow) return null;

  return (
    <div className="fixed top-6 right-3 z-[60] md:right-6">
      <OsDownloadButton />
    </div>
  );
}
