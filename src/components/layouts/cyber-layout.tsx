import { useState, useEffect } from "react";
import { CyberNavTabs } from "@/components/ui/cyber-nav-tabs";
import { CyberContainer } from "@/components/ui/cyber-container";
import { HomePage } from "@/components/pages/HomePage";
import { FunctionsPage } from "@/components/pages/FunctionsPage";
import { AboutPage } from "@/components/pages/AboutPage";

interface CyberLayoutProps {
  children?: React.ReactNode;
}

const navTabs = [
  { id: "home", label: "Home" },
  { id: "functions", label: "Functions" },
  { id: "about", label: "About Us" },
];

export const CyberLayout = ({ children }: CyberLayoutProps) => {
  const [activeTab, setActiveTab] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement for subtle interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "functions":
        return <FunctionsPage />;
      case "about":
        return <AboutPage />;
      default:
        return children || <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-cyber overflow-hidden">
      {/* Top Navigation */}
      <CyberNavTabs
        tabs={navTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="relative min-h-[calc(100vh-4rem)]">
        <CyberContainer 
          variant="default" 
          animated 
          particles
          className="min-h-full"
        >
          {/* Dynamic background overlay responsive to mouse */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                          hsl(28 100% 50% / 0.1) 0%, 
                          transparent 30%)`,
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            {renderTabContent()}
          </div>

          {/* Ambient geometric elements */}
          <div className="absolute top-10 right-10 w-2 h-16 bg-gradient-to-b from-cyber-red to-transparent opacity-40 rotate-12" />
          <div className="absolute bottom-20 left-20 w-12 h-2 bg-gradient-to-r from-transparent via-cyber-orange-light to-transparent opacity-30" />
          <div className="absolute top-1/3 left-10 w-1 h-8 bg-cyber-orange-glow opacity-60" />
          <div className="absolute bottom-1/4 right-1/4 w-8 h-1 bg-gradient-to-r from-cyber-red to-cyber-orange opacity-25" />
        </CyberContainer>
      </main>
    </div>
  );
};