import { CyberCard } from "@/components/ui/cyber-card";
import { CyberButton } from "@/components/ui/cyber-button";

export const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Elena Vasquez",
      role: "Chief Systems Architect",
      specialty: "Quantum Computing",
      status: "online"
    },
    {
      name: "Marcus Chen",
      role: "Lead Security Engineer",
      specialty: "Cybersecurity",
      status: "online"
    },
    {
      name: "Zara Al-Rahman",
      role: "AI Development Lead",
      specialty: "Neural Networks",
      status: "away"
    },
    {
      name: "Viktor Petrov",
      role: "Interface Designer",
      specialty: "User Experience",
      status: "online"
    }
  ];

  const stats = [
    { label: "System Uptime", value: "99.97%", color: "cyber-orange-light" },
    { label: "Security Level", value: "ULTRA", color: "cyber-red" },
    { label: "Processing Speed", value: "847 THz", color: "cyber-orange" },
    { label: "Active Users", value: "2,847", color: "cyber-orange-dark" }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-orbitron font-bold mb-4 text-cyber-orange-light">
            About Quantum Interface
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto">
            The future of human-computer interaction through advanced cybernetic systems
          </p>
        </div>

        {/* Mission Statement */}
        <CyberCard className="mb-12 border-cyber-orange/30">
          <div className="text-center p-8">
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-cyber-red-light">
              Mission Statement
            </h2>
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed max-w-4xl mx-auto">
              We are pioneering the next generation of cybernetic interfaces, bridging the gap between 
              human intuition and digital precision. Our quantum-powered systems enable seamless 
              interaction with complex data structures, providing users with unprecedented control 
              and insight into their digital environments.
            </p>
          </div>
        </CyberCard>

        {/* System Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <CyberCard key={index} className={`text-center border-${stat.color}/30`}>
              <h3 className={`text-2xl font-orbitron font-bold text-${stat.color} mb-2`}>
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground font-rajdhani">
                {stat.label}
              </p>
            </CyberCard>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-8 text-cyber-orange-light">
            Development Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <CyberCard key={index} interactive className="text-center border-cyber-orange/20">
                <div className="space-y-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                       style={{ background: 'var(--gradient-cyber-fire)' }}>
                    <span className="text-2xl font-orbitron font-bold text-deep-black">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Info */}
                  <div>
                    <h3 className="font-orbitron font-bold text-cyber-orange-light mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-rajdhani mb-2">
                      {member.role}
                    </p>
                    <p className="text-xs text-cyber-orange font-rajdhani mb-3">
                      {member.specialty}
                    </p>
                    
                    {/* Status */}
                    <div className="flex items-center justify-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        member.status === 'online' ? 'bg-cyber-orange-light' : 'bg-cyber-orange-dark'
                      }`} />
                      <span className="text-xs text-muted-foreground capitalize">
                        {member.status}
                      </span>
                    </div>
                  </div>
                </div>
              </CyberCard>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <CyberCard className="border-cyber-red/30">
          <div className="p-8">
            <h2 className="text-2xl font-orbitron font-bold text-center mb-8 text-cyber-red-light">
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-orbitron font-bold text-cyber-orange-light mb-4">Frontend</h3>
                <ul className="space-y-2 text-muted-foreground font-rajdhani">
                  <li>React 18.x</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Vite Build System</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="font-orbitron font-bold text-cyber-orange mb-4">Core Systems</h3>
                <ul className="space-y-2 text-muted-foreground font-rajdhani">
                  <li>Quantum Processing Unit</li>
                  <li>Neural Network Engine</li>
                  <li>Encryption Algorithms</li>
                  <li>Real-time Analytics</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="font-orbitron font-bold text-cyber-red mb-4">Security</h3>
                <ul className="space-y-2 text-muted-foreground font-rajdhani">
                  <li>Multi-layer Firewall</li>
                  <li>Biometric Authentication</li>
                  <li>Quantum Encryption</li>
                  <li>Intrusion Detection</li>
                </ul>
              </div>
            </div>
          </div>
        </CyberCard>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-orbitron font-bold mb-6 text-cyber-orange-light">
            Get In Touch
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <CyberButton variant="outline" className="border-cyber-red text-cyber-red hover:bg-cyber-red">
              Contact Support
            </CyberButton>
            <CyberButton className="bg-cyber-orange border-cyber-orange hover:bg-cyber-orange-light">
              Request Demo
            </CyberButton>
            <CyberButton variant="outline" className="border-cyber-orange-dark text-cyber-orange-dark hover:bg-cyber-orange-dark">
              Documentation
            </CyberButton>
          </div>
        </div>
      </div>
    </div>
  );
};