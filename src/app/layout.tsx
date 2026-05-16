import type { Metadata } from "next";
import { Geist, EB_Garamond } from "next/font/google";
import "@/index.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hovrlay - Live AI Interview Assistant | Real Time Answers and Insights during Meetings and Interviews",
  description: "AI assistant that provides real time answers and insights during meetings and interviews.",
  authors: [{ name: "Anshul Koshyari" }],
  metadataBase: new URL("https://hovrlay.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hovrlay - Live AI Meeting Assistant",
    description: "AI assistant that provides real time answers and insights during meetings and interviews.",
    url: "https://hovrlay.com",
    siteName: "Hovrlay",
    images: [{ url: "/social-previews/twitter.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hovrlay - Live AI Meeting Assistant",
    description: "AI meeting assistant that provides live meeting notes, instant answers, and real-time insights during calls and interviews.",
    images: ["/social-previews/twitter.jpg"],
  },
  icons: {
    icon: "/favicon/favicon.png",
    apple: [
      { url: "/favicon/favicon.png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/favicon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon/favicon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/favicon/favicon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/favicon/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${ebGaramond.variable}`}>
      <head>
        <link rel="preload" href="/hero/bg.webp" as="image" type="image/webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
