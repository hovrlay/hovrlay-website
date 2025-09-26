import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex grow items-center justify-center px-5 py-20 md:px-8">
      <div className="flex max-w-md flex-col items-center justify-center md:max-w-lg">
        <h1 className="text-8xl leading-none font-semibold tracking-tighter text-foreground md:text-9xl md:leading-none">
          <span className="sr-only">Error</span>
          404
          <span className="sr-only">: Page Not Found</span>
        </h1>
        <p className="mt-2.5 text-center text-base leading-normal tracking-tight text-foreground md:text-lg md:leading-normal">
          We know this isn't where you intended to land, but we hope you have some fun while you're here.
        </p>
        <Link 
          to="/"
          className="relative inline-flex w-fit items-center justify-center gap-1 font-medium tracking-tight whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 [&_a]:relative [&_a]:z-10 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 before:absolute before:inset-0 before:cursor-pointer before:rounded-[inherit] before:border before:border-transparent before:opacity-0 before:transition-opacity before:ease-in-out hover:before:opacity-100 bg-primary text-primary-foreground before:bg-black/15 dark:text-foreground dark:before:bg-black/25 h-10 rounded-md px-5 text-sm leading-none lg:h-11 lg:rounded-lg lg:text-base lg:leading-none mt-6 xl:mt-8"
        >
          <span className="relative z-10 inline-flex whitespace-nowrap items-center justify-center gap-1 w-full">
            Go to homepage
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
