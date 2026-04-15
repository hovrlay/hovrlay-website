import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Hovrlay";
  }, []);

  return (
    <div className="min-h-screen bg-background px-5">
      <div className="mx-auto flex min-h-screen max-w-xl items-center justify-center py-16">
        <div className="w-full text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3">
            Page not found
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/"
            className="blue-glassy-button inline-flex h-11 items-center justify-center rounded-[10px] px-6 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Go to homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
