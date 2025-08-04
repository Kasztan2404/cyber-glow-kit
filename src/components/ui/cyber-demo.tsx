import { useState, useEffect } from "react";
import { CyberButton } from "./cyber-button";
import { CyberCard } from "./cyber-card";

export const CyberDemo = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (activeDemo) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setActiveDemo(null);
              setProgress(0);
            }, 1000);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [activeDemo]);

  const demos = [
    {
      id: "neural",
      title: "Neural Scan",
      description: "Initialize biometric authentication",
    },
    {
      id: "quantum",
      title: "Quantum Sync",
      description: "Synchronize quantum processors",
    },
    {
      id: "security",
      title: "Security Check",
      description: "Run system security protocols",
    },
  ];

  return (
    <CyberCard className="p-8">
      <h3 className="text-2xl font-orbitron font-bold mb-6 text-cyber-orange text-center">
        Interactive System Demo
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {demos.map((demo) => (
          <CyberButton
            key={demo.id}
            variant={activeDemo === demo.id ? "default" : "outline"}
            onClick={() => {
              if (!activeDemo) {
                setActiveDemo(demo.id);
                setProgress(0);
              }
            }}
            disabled={activeDemo !== null}
            className="h-auto p-4 flex-col"
          >
            <span className="font-bold">{demo.title}</span>
            <span className="text-xs opacity-70">{demo.description}</span>
          </CyberButton>
        ))}
      </div>

      {activeDemo && (
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-cyber-orange font-rajdhani">
              {demos.find(d => d.id === activeDemo)?.title} in progress...
            </p>
          </div>
          
          {/* Progress bar */}
          <div className="relative h-2 bg-surface-dark rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyber-orange to-cyber-orange-glow transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            {progress}% Complete
          </div>
        </div>
      )}

      {progress === 100 && (
        <div className="text-center text-cyber-orange font-bold animate-pulse">
          ✓ Operation Complete
        </div>
      )}
    </CyberCard>
  );
};