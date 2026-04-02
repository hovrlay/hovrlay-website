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
            className="inline-flex items-center justify-center rounded-md h-11 px-6 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200"
          >
            Go to homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
