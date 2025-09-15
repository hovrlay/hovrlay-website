const Header = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pl-4 pr-4 glass">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo Button */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
            aria-label="Go to home"
          >
            <img 
              src="/favicon.svg" 
              alt="Hovrlay" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-white">hovrlay</span>
          </button>

          {/* Simple nav - minimal as requested */}
          <nav className="flex items-center">
            <span className="text-sm text-muted-foreground">Lipi ❤️</span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;