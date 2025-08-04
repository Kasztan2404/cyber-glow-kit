import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CyberContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "surface" | "elevated";
  animated?: boolean;
  particles?: boolean;
}

const CyberContainer = forwardRef<HTMLDivElement, CyberContainerProps>(
  ({ className, variant = "default", animated = false, particles = false, children, ...props }, ref) => {
    const baseClasses = "relative rounded-lg";
    
    const variantClasses = {
      default: "bg-background",
      surface: "cyber-surface",
      elevated: "cyber-surface shadow-lg border-cyber-orange/30",
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          animated && "geometric-pattern",
          className
        )}
        {...props}
      >
        {particles && <ParticleField />}
        {children}
      </div>
    );
  }
);
CyberContainer.displayName = "CyberContainer";

// Particle field component for ambient effects
const ParticleField = () => {
  const particles = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`,
      }}
    />
  ));

  return <div className="particle-field">{particles}</div>;
};

export { CyberContainer };