import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 mt-4 z-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="hidden md:flex glass rounded-lg shadow-lg items-center justify-between h-14 px-4">
          {/* Logo Button */}
          <button
            onClick={() => handleScroll("hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            aria-label="Go to home"
          >
            <img src="/favicon.svg" alt="Hovrlay" className="w-7 h-7" />
            <span className="text-lg font-bold text-white">hovrlay</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-6">
            <button
              onClick={() => handleScroll("features")}
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => handleScroll("pricing")}
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-200"
            >
              Pricing
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center justify-between glass rounded-lg shadow-lg h-14 px-4">
          {/* Logo Button */}
          <button
            onClick={() => handleScroll("hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            aria-label="Go to home"
          >
            <img src="/favicon.svg" alt="Hovrlay" className="w-7 h-7" />
            <span className="text-lg font-bold text-white">hovrlay</span>
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-muted-foreground transition-colors duration-200"
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
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden glass rounded-lg shadow-lg mt-2 mx-4 py-4">
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => handleScroll("features")}
                className="text-base text-muted-foreground hover:text-white transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => handleScroll("pricing")}
                className="text-base text-muted-foreground hover:text-white transition-colors duration-200"
              >
                Pricing
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="text-base text-muted-foreground hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;