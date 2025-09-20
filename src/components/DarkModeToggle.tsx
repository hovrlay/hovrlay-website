import SunIcon from "@/assets/sun.svg?react";
import MoonIcon from "@/assets/moon.svg?react";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const DarkModeToggle = ({ isDarkMode, onToggle }: DarkModeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="w-8 h-8 rounded-full bg-background border border-border hover:bg-muted transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="w-full h-full flex items-center justify-center">
        {isDarkMode ? (
          // Moon icon
          <MoonIcon className="w-4 h-4 text-foreground transition-all duration-300" />
        ) : (
          // Sun icon
          <SunIcon className="w-4 h-4 text-foreground transition-all duration-300" />
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;
