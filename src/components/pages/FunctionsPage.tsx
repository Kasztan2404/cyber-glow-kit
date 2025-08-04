import { useState } from "react";
import { CyberButton } from "@/components/ui/cyber-button";
import { CyberCard } from "@/components/ui/cyber-card";

interface SystemFunction {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'maintenance';
  type: 'core' | 'utility' | 'security';
}

const systemFunctions: SystemFunction[] = [
  {
    id: 'data-processing',
    name: 'Data Processing Core',
    description: 'High-speed data analysis and pattern recognition',
    status: 'active',
    type: 'core'
  },
  {
    id: 'network-scanner',
    name: 'Network Scanner',
    description: 'Real-time network monitoring and threat detection',
    status: 'active',
    type: 'security'
  },
  {
    id: 'quantum-encryption',
    name: 'Quantum Encryption',
    description: 'Advanced encryption protocols for secure communication',
    status: 'inactive',
    type: 'security'
  },
  {
    id: 'ai-assistant',
    name: 'AI Assistant Module',
    description: 'Intelligent system automation and decision support',
    status: 'active',
    type: 'utility'
  },
  {
    id: 'backup-system',
    name: 'Backup System',
    description: 'Automated data backup and recovery protocols',
    status: 'maintenance',
    type: 'utility'
  },
  {
    id: 'firewall',
    name: 'Advanced Firewall',
    description: 'Multi-layer security barrier and intrusion prevention',
    status: 'active',
    type: 'security'
  }
];

export const FunctionsPage = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'core' | 'utility' | 'security'>('all');
  const [runningFunction, setRunningFunction] = useState<string | null>(null);

  const filteredFunctions = selectedType === 'all' 
    ? systemFunctions 
    : systemFunctions.filter(func => func.type === selectedType);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-cyber-orange-light border-cyber-orange-light';
      case 'inactive':
        return 'text-cyber-red border-cyber-red';
      case 'maintenance':
        return 'text-cyber-orange-dark border-cyber-orange-dark';
      default:
        return 'text-muted-foreground border-border';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'core':
        return 'bg-cyber-red/20 text-cyber-red-light';
      case 'security':
        return 'bg-cyber-orange/20 text-cyber-orange-light';
      case 'utility':
        return 'bg-cyber-orange-dark/20 text-cyber-orange';
      default:
        return 'bg-surface-medium text-muted-foreground';
    }
  };

  const handleFunctionToggle = (functionId: string, currentStatus: string) => {
    if (currentStatus === 'maintenance') return;
    
    setRunningFunction(functionId);
    setTimeout(() => {
      setRunningFunction(null);
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-orbitron font-bold mb-4 text-cyber-orange-light">
            System Functions
          </h1>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Manage and monitor all system modules and their operational status
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          {['all', 'core', 'utility', 'security'].map((type) => (
            <CyberButton
              key={type}
              variant={selectedType === type ? 'default' : 'outline'}
              onClick={() => setSelectedType(type as any)}
              className="capitalize"
            >
              {type === 'all' ? 'All Functions' : `${type} Systems`}
            </CyberButton>
          ))}
        </div>

        {/* Functions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFunctions.map((func) => (
            <CyberCard 
              key={func.id} 
              interactive 
              className={`transition-all duration-300 ${func.status === 'active' ? 'border-cyber-orange/30' : 'border-cyber-red/20'}`}
            >
              <div className="space-y-4">
                {/* Function Header */}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-orbitron font-bold text-cyber-orange-light mb-2">
                      {func.name}
                    </h3>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getTypeColor(func.type)}`}>
                      {func.type.toUpperCase()}
                    </span>
                  </div>
                  <div className={`px-2 py-1 rounded border text-xs font-mono ${getStatusColor(func.status)}`}>
                    {func.status.toUpperCase()}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-rajdhani text-sm">
                  {func.description}
                </p>

                {/* Action Button */}
                <div className="pt-2">
                  {runningFunction === func.id ? (
                    <div className="text-center">
                      <div className="inline-flex items-center text-cyber-orange-light">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyber-orange-light mr-2"></div>
                        Processing...
                      </div>
                    </div>
                  ) : (
                    <CyberButton 
                      size="sm" 
                      variant={func.status === 'active' ? 'default' : 'outline'}
                      onClick={() => handleFunctionToggle(func.id, func.status)}
                      disabled={func.status === 'maintenance'}
                      className="w-full"
                    >
                      {func.status === 'active' ? 'Restart' : 
                       func.status === 'maintenance' ? 'Under Maintenance' : 'Activate'}
                    </CyberButton>
                  )}
                </div>
              </div>
            </CyberCard>
          ))}
        </div>

        {/* System Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <CyberCard className="text-center border-cyber-orange/30">
            <h4 className="text-2xl font-orbitron font-bold text-cyber-orange-light mb-2">
              {systemFunctions.filter(f => f.status === 'active').length}
            </h4>
            <p className="text-muted-foreground">Active Functions</p>
          </CyberCard>
          <CyberCard className="text-center border-cyber-red/30">
            <h4 className="text-2xl font-orbitron font-bold text-cyber-red mb-2">
              {systemFunctions.filter(f => f.status === 'inactive').length}
            </h4>
            <p className="text-muted-foreground">Inactive Functions</p>
          </CyberCard>
          <CyberCard className="text-center border-cyber-orange-dark/30">
            <h4 className="text-2xl font-orbitron font-bold text-cyber-orange-dark mb-2">
              {systemFunctions.filter(f => f.status === 'maintenance').length}
            </h4>
            <p className="text-muted-foreground">Under Maintenance</p>
          </CyberCard>
        </div>
      </div>
    </div>
  );
};