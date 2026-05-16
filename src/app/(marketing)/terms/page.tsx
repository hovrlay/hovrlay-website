import type { Metadata } from "next";
import TermsOfService from "@/views/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service | Hovrlay",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <TermsOfService />;
}
