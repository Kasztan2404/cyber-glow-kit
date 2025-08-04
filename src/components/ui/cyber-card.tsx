import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CyberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowing?: boolean;
  interactive?: boolean;
}

const CyberCard = forwardRef<HTMLDivElement, CyberCardProps>(
  ({ className, glowing = false, interactive = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "cyber-surface rounded-lg p-6 relative overflow-hidden",
          glowing && "shadow-[0_0_30px_hsl(28_100%_50%_/_0.3)]",
          interactive && "transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(28_100%_50%_/_0.4)] cursor-pointer",
          className
        )}
        {...props}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyber-orange to-transparent" />
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-cyber-orange to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-8 h-8">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-cyber-orange to-transparent" />
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-cyber-orange to-transparent" />
        </div>
        
        {children}
      </div>
    );
  }
);
CyberCard.displayName = "CyberCard";

export { CyberCard };