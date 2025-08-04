import { CyberButton } from "@/components/ui/cyber-button";
import { CyberCard } from "@/components/ui/cyber-card";
import { CyberDemo } from "@/components/ui/cyber-demo";
import cyberHeroBg from "@/assets/cyber-hero-bg.jpg";

export const HomePage = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center p-8 relative">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cyberHeroBg})` }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center p-12 bg-surface-black/50 backdrop-blur-sm rounded-lg border border-cyber-orange/20">
          <h1 className="text-6xl font-orbitron font-bold mb-6 leading-tight">
            <span style={{ background: 'var(--gradient-cyber-fire)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              QUANTUM
            </span>
            <span className="block text-4xl text-foreground mt-2">Interface System</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 font-rajdhani max-w-2xl mx-auto leading-relaxed">
            Advanced cybernetic interface for next-generation productivity and system control. 
            Experience the future of digital interaction with enhanced user-friendly design.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <CyberButton size="lg" className="px-8 bg-cyber-red border-cyber-red hover:bg-cyber-red-light">
              Initialize System
            </CyberButton>
            <CyberButton variant="outline" size="lg" className="px-8 border-cyber-orange-light text-cyber-orange-light hover:bg-cyber-orange-light">
              Access Terminal
            </CyberButton>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="p-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-12 text-cyber-orange-light">
            System Modules
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CyberCard interactive glowing className="border-cyber-red/30">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg"
                     style={{ background: 'var(--gradient-cyber-fire)' }}>
                  <div className="w-6 h-6 bg-deep-black rounded-sm" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3 text-cyber-red-light">Neural Link</h3>
                <p className="text-muted-foreground font-rajdhani">
                  Direct interface connection for enhanced system integration and control.
                </p>
              </div>
            </CyberCard>
            
            <CyberCard interactive className="border-cyber-orange/30">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg"
                     style={{ background: 'var(--gradient-cyber-orange)' }}>
                  <div className="w-6 h-6 bg-deep-black rounded-full" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3 text-cyber-orange-light">Quantum Core</h3>
                <p className="text-muted-foreground font-rajdhani">
                  Advanced processing unit for real-time data analysis and computation.
                </p>
              </div>
            </CyberCard>
            
            <CyberCard interactive className="border-cyber-orange-dark/30">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg"
                     style={{ background: 'var(--gradient-warm)' }}>
                  <div className="w-6 h-6 bg-deep-black transform rotate-45" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3 text-cyber-orange">Cyber Shield</h3>
                <p className="text-muted-foreground font-rajdhani">
                  Military-grade security protocols for maximum system protection.
                </p>
              </div>
            </CyberCard>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="p-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <CyberDemo />
        </div>
      </section>
    </div>
  );
};