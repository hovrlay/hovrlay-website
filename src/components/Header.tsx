const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold gradient-text">Hovrlay</span>
          </div>

          {/* Simple nav - minimal as requested */}
          <nav className="hidden md:flex items-center space-x-8">
            <span className="text-sm text-muted-foreground">Real-time AI for meetings</span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;