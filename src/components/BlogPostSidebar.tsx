import { useEffect, useState } from "react";
import type { BlogSection } from "@/utils/blog";
import { detectDownloadPlatform, handleDownload } from "@/utils/downloads";

const SCROLL_OFFSET = 112;

interface BlogPostSidebarProps {
  sections: BlogSection[];
}

export function BlogPostSidebar({ sections }: BlogPostSidebarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const platform = detectDownloadPlatform();

  useEffect(() => {
    const sectionIds = sections.map((s) => s.id);

    const updateActiveSection = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      let activeSectionId = "";

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollTop > elementTop - viewportHeight * 0.25) {
            activeSectionId = sectionIds[i];
            break;
          }
        }
      }

      if (activeSectionId) {
        setActiveSection(activeSectionId);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-32 h-fit space-y-8">
        <div className="rounded-2xl bg-gray-900 px-6 py-10 text-white">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight lg:text-3xl">
            Download and try Hovrlay for free today
          </h3>
          <button
            type="button"
            onClick={() => handleDownload(platform)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            Get Started
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="rounded-lg pt-2">
          <h3 className="mb-4 text-sm font-extralight text-gray-400">Table of contents</h3>
          <nav className="flex flex-col" aria-label="Table of contents">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`flex w-full border-l-2 py-2 pl-3 text-left text-sm transition-colors hover:text-gray-900 ${
                    isActive
                      ? "border-gray-900 font-semibold text-gray-900"
                      : "border-gray-300 font-normal text-gray-600"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
