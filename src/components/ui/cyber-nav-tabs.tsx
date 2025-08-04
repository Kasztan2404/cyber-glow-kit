import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavTab {
  id: string;
  label: string;
  href?: string;
}

interface CyberNavTabsProps {
  tabs: NavTab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export const CyberNavTabs = ({ tabs, activeTab, onTabChange, className }: CyberNavTabsProps) => {
  const [active, setActive] = useState(activeTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActive(tabId);
    onTabChange?.(tabId);
  };

  return (
    <nav className={cn("nav-background h-16 flex items-center justify-center", className)}>
      <div className="flex items-center space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "cyber-nav-tab font-orbitron",
              active === tab.id && "active"
            )}
            aria-label={`Navigate to ${tab.label}`}
            role="tab"
            aria-selected={active === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Abstract geometric overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-cyber-orange to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-cyber-orange to-transparent" />
      </div>
    </nav>
  );
};