"use client";

import { usePathname, useRouter } from "next/navigation";
import EmailIcon from "@/assets/email.svg";
import XIcon from "@/assets/x.svg";
import GitHubIcon from "@/assets/github.svg";
import DiscordIcon from "@/assets/discord.svg";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSectionClick = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(`/?section=${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) { element.scrollIntoView({ behavior: "smooth" }); }
    }
  };

  return (
    <footer className="bg-background pb-8 px-4 md:px-8 lg:px-12">
      <div className="container-custom mx-auto max-w-7xl border-t border-border pt-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-3">
            <a
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2 mb-2 hover:opacity-80 transition-opacity duration-200"
              aria-label="Go to home"
            >
              <img src="/logo.svg" alt="Hovrlay" className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">hovrlay</span>
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleSectionClick("features")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("demo")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("pricing")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleSectionClick("faq")}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href="mailto:support@hovrlay.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-muted-foreground text-left">
              &copy; 2026 Hovrlay. All rights reserved.
            </span>
            <div className="flex gap-4">
              <a
                href="https://x.com/hovrlay"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Hovrlay on X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/GvAy5YAbq"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Join our Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/hovrlay/hovrlay-releases"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Hovrlay releases on GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@hovrlay.com"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Email us"
              >
                <EmailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
