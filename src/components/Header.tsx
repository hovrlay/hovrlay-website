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
        className="text-base text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors duration-200"
      >
        Features
      </button>
      <button
        onClick={() => handleScroll("demo")}
        className="text-base text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors duration-200"
      >
        Demo
      </button>
      <button
        onClick={() => handleScroll("faq")}
        className="text-base text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors duration-200"
      >
        FAQ
      </button>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
    </nav>
  );

  const hamburgerButton = (
    <button
      onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      className="text-foreground hover:text-muted-foreground transition-colors duration-200"
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
    <nav className="md:hidden glass rounded-lg shadow-lg mt-2 ml-auto mr-4 py-4 w-48">
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => handleScroll("features")}
          className="text-base text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors duration-200"
        >
          Features
        </button>
        <button
          onClick={() => handleScroll("demo")}
          className="text-base text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors duration-200"
        >
          Demo
        </button>
        <button
          onClick={() => handleScroll("faq")}
          className="text-base text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors duration-200"
        >
          FAQ
        </button>
      </div>
    </nav>
  );

  return (
    <header className="fixed top-0 left-0 right-0 mt-4 z-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex glass rounded-lg shadow-lg items-center justify-between h-16 px-6">
          {hovrlayButton}
          {desktopNavigation}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between glass rounded-lg shadow-lg h-16 px-6">
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