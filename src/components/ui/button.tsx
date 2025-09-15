import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "hero" | "hero-secondary";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      hero: "bg-primary-gradient text-white font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 border border-white/20 backdrop-blur-sm",
      "hero-secondary": "glass text-white font-semibold hover:bg-white/10 transition-all duration-300 border border-white/20",
    };
    
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-lg px-8 py-4 text-base",
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    return <button className={classes} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
