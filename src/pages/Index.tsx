import { CyberLayout } from "@/components/layouts/cyber-layout";
import { CyberButton } from "@/components/ui/cyber-button";
import { CyberCard } from "@/components/ui/cyber-card";
import { CyberContainer } from "@/components/ui/cyber-container";
import { CyberDemo } from "@/components/ui/cyber-demo";
import cyberHeroBg from "@/assets/cyber-hero-bg.jpg";

const Index = () => {
  return (
    <CyberLayout>
      <div className="relative min-h-[calc(100vh-4rem)] flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center p-8 relative">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cyberHeroBg})` }}
          />
          
          <CyberContainer variant="elevated" className="relative z-10 max-w-4xl mx-auto text-center p-12">
            <h1 className="text-6xl font-orbitron font-bold mb-6 text-cyber-orange leading-tight">
              QUANTUM
              <span className="block text-4xl text-foreground mt-2">Interface System</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 font-rajdhani max-w-2xl mx-auto leading-relaxed">
              Advanced cybernetic interface for next-generation productivity and system control. 
              Experience the future of digital interaction.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <CyberButton size="lg" className="px-8">
                Initialize System
              </CyberButton>
              <CyberButton variant="outline" size="lg" className="px-8">
                Access Terminal
              </CyberButton>
            </div>
          </CyberContainer>
        </section>

        {/* Feature Grid */}
        <section className="p-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-orbitron font-bold text-center mb-12 text-cyber-orange">
              System Modules
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CyberCard interactive glowing>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-orange to-cyber-orange-glow rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-deep-black rounded-sm" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-3 text-cyber-orange">Neural Link</h3>
                  <p className="text-muted-foreground font-rajdhani">
                    Direct interface connection for enhanced system integration and control.
                  </p>
                </div>
              </CyberCard>
              
              <CyberCard interactive>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-orange to-cyber-orange-glow rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-deep-black rounded-full" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-3 text-cyber-orange">Quantum Core</h3>
                  <p className="text-muted-foreground font-rajdhani">
                    Advanced processing unit for real-time data analysis and computation.
                  </p>
                </div>
              </CyberCard>
              
              <CyberCard interactive>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-orange to-cyber-orange-glow rounded-lg mx-auto mb-4 flex items-center justify-center">
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
    </CyberLayout>
  );
};

export default Index;
