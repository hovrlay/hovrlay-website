import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Hovrlay";
  }, []);

  return (
    <div className="flex grow items-center justify-center px-5 py-20">
      <div className="text-center max-w-md md:max-w-lg">
        <h1 className="text-8xl md:text-9xl font-semibold text-foreground mb-4">
          404
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          We know this isn't where you intended to land, but we hope you have some fun while you're here.
        </p>
        <a 
          href="/"
          className="inline-flex items-center justify-center rounded-md text-primary-foreground hover:opacity-90 h-10 px-4 py-2 text-sm font-medium transition-all md:h-11 md:px-6 md:text-base"
          style={{ background: 'var(--hero-gradient)' }}
        >
          Go to homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
