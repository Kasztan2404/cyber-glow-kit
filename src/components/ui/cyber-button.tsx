import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cyberButtonVariants = cva(
  "cyber-button font-orbitron inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "cyber-button",
        secondary: "bg-surface-medium text-cyber-orange border-cyber-orange hover:bg-cyber-orange hover:text-deep-black",
        outline: "border border-cyber-orange bg-transparent text-cyber-orange hover:bg-cyber-orange hover:text-deep-black",
        ghost: "text-cyber-orange hover:bg-surface-dark hover:text-cyber-orange-glow",
        link: "text-cyber-orange underline-offset-4 hover:underline hover:text-cyber-orange-glow",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CyberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cyberButtonVariants> {
  asChild?: boolean;
}

const CyberButton = forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    
    return (
      <Comp
        className={cn(cyberButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        
        {/* Subtle geometric accent */}
        <span className="absolute top-1 right-1 w-1 h-1 bg-cyber-orange-glow opacity-50 rounded-full" />
      </Comp>
    );
  }
);
CyberButton.displayName = "CyberButton";

export { CyberButton, cyberButtonVariants };