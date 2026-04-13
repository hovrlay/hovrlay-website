import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header = ({ isDarkMode, onToggleDarkMode }: HeaderProps) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLegalPage = location.pathname === "/privacy-policy" || location.pathname === "/terms";

  const handleScroll = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/?section=${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) { element.scrollIntoView({ behavior: "smooth" }); }
    }
    setIsHamburgerOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const hovrlayButton = (
    <a
      href="/"
      onClick={handleLogoClick}
      className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
      aria-label="Go to home"
    >
      <img src="/logo.svg" alt="Hovrlay" className="w-8 h-8" />
      <span className="text-xl font-bold text-foreground">hovrlay</span>
    </a>
  );

  const desktopNavigation = (
    <nav className="flex items-center gap-6">
      <button
        onClick={() => handleScroll("features")}
        className="text-base text-black dark:text-white hover:opacity-70 transition-opacity duration-200"
      >
        Features
      </button>
      <button
        onClick={() => handleScroll("demo")}
        className="text-base text-black dark:text-white hover:opacity-70 transition-opacity duration-200"
      >
        Demo
      </button>
      <button
        onClick={() => handleScroll("faq")}
        className="text-base text-black dark:text-white hover:opacity-70 transition-opacity duration-200"
      >
        FAQ
      </button>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
    </nav>
  );

  const hamburgerButton = (
    <button
      onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      className="text-black dark:text-white hover:opacity-70 transition-opacity duration-200"
      aria-label="Toggle menu"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isHamburgerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  );

  const hamburgerDropdown = (
    <nav className="md:hidden mt-2 ml-4 py-4 w-48 bg-background/95 backdrop-blur-sm rounded-md border border-border/40">
      <div className="flex flex-col items-start gap-4 px-4">
        <button
          onClick={() => handleScroll("features")}
          className="text-base text-black dark:text-white hover:opacity-70 transition-opacity duration-200"
        >
          Features
        </button>
        <button
          onClick={() => handleScroll("demo")}
          className="text-base text-black dark:text-white hover:opacity-70 transition-opacity duration-200"
        >
          Demo
        </button>
        <button
          onClick={() => handleScroll("faq")}
          className="text-base text-black dark:text-white hover:opacity-70 transition-opacity duration-200"
        >
          FAQ
        </button>
      </div>
    </nav>
  );

  return (
    <header className={`${isLegalPage ? "fixed" : "absolute"} top-0 left-0 right-0 z-50`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-16">
          {hovrlayButton}
          {desktopNavigation}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between h-16">
          {hovrlayButton}
          <div className="flex items-center gap-4">
            <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
            {hamburgerButton}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isHamburgerOpen && hamburgerDropdown}
      </div>
    </header>
  );
};

export default Header;