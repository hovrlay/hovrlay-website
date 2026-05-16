import type { Metadata } from "next";
import NotFound from "@/views/NotFound";

export const metadata: Metadata = {
  title: "Page Not Found | Hovrlay",
};

export default function NotFoundPage() {
  return <NotFound />;
}
