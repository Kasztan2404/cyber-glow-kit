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
            }, 1500);
            return 100;
          }
          return prev + 1.5;
        });
      }, 40);

      return () => clearInterval(interval);
    }
  }, [activeDemo]);

  const demos = [
    {
      id: "neural",
      title: "Neural Scan",
      description: "Initialize biometric authentication",
      color: "cyber-red",
    },
    {
      id: "quantum",
      title: "Quantum Sync", 
      description: "Synchronize quantum processors",
      color: "cyber-orange",
    },
    {
      id: "security",
      title: "Security Check",
      description: "Run system security protocols", 
      color: "cyber-orange-light",
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
          
          {/* Progress bar with enhanced styling */}
          <div className="relative h-3 bg-surface-dark rounded-full overflow-hidden border border-cyber-orange/30">
            <div 
              className="absolute top-0 left-0 h-full transition-all duration-100 ease-out rounded-full"
              style={{ 
                width: `${progress}%`,
                background: activeDemo === 'neural' ? 'var(--gradient-cyber-fire)' :
                           activeDemo === 'quantum' ? 'var(--gradient-cyber-orange)' :
                           'var(--gradient-warm)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
          </div>
          
          <div className="text-center text-sm text-muted-foreground font-rajdhani">
            {progress.toFixed(1)}% Complete • {demos.find(d => d.id === activeDemo)?.title}
          </div>
        </div>
      )}

      {progress === 100 && (
        <div className="text-center space-y-2">
          <div className="text-cyber-orange-light font-bold text-lg animate-pulse">
            ✓ Operation Complete
          </div>
          <div className="text-sm text-muted-foreground font-rajdhani">
            System ready for next operation
          </div>
        </div>
      )}
    </CyberCard>
  );
};