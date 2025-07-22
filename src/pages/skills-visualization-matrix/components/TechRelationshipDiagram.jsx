import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechRelationshipDiagram = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    {
      id: 'react',
      name: 'React',
      icon: 'Atom',
      position: { x: 50, y: 30 },
      connections: ['javascript', 'nodejs', 'tailwind'],
      color: 'text-electric-cyan'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: 'Code',
      position: { x: 20, y: 50 },
      connections: ['react', 'nodejs', 'mongodb'],
      color: 'text-warning'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: 'Server',
      position: { x: 80, y: 50 },
      connections: ['react', 'javascript', 'mongodb'],
      color: 'text-success'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: 'Database',
      position: { x: 50, y: 70 },
      connections: ['nodejs', 'javascript'],
      color: 'text-electric-purple'
    },
    {
      id: 'tailwind',
      name: 'Tailwind',
      icon: 'Palette',
      position: { x: 80, y: 30 },
      connections: ['react'],
      color: 'text-electric-cyan'
    },
    {
      id: 'git',
      name: 'Git',
      icon: 'GitBranch',
      position: { x: 20, y: 30 },
      connections: ['react', 'javascript'],
      color: 'text-text-secondary'
    }
  ];

  const getConnectionPath = (tech1, tech2) => {
    const x1 = tech1.position.x;
    const y1 = tech1.position.y;
    const x2 = tech2.position.x;
    const y2 = tech2.position.y;
    
    return `M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 10} ${x2} ${y2}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-cosmic-surface border border-border rounded-2xl p-8 mb-16"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Technology Ecosystem</h3>
        <p className="text-text-secondary">Interactive diagram showing how technologies connect in real projects</p>
      </div>

      <div className="relative w-full h-96 bg-cosmic-primary/30 rounded-xl overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {/* Connection Lines */}
          {technologies.map(tech => 
            tech.connections.map(connectionId => {
              const connectedTech = technologies.find(t => t.id === connectionId);
              if (!connectedTech) return null;
              
              const isHighlighted = selectedTech && (selectedTech.id === tech.id || selectedTech.id === connectionId);
              
              return (
                <motion.path
                  key={`${tech.id}-${connectionId}`}
                  d={getConnectionPath(tech, connectedTech)}
                  stroke={isHighlighted ? '#00d4ff' : '#2a2a2a'}
                  strokeWidth={isHighlighted ? '0.3' : '0.1'}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              );
            })
          )}
        </svg>

        {/* Technology Nodes */}
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group ${
              selectedTech?.id === tech.id ? 'z-20' : 'z-10'
            }`}
            style={{
              left: `${tech.position.x}%`,
              top: `${tech.position.y}%`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setSelectedTech(tech)}
            onMouseLeave={() => setSelectedTech(null)}
            whileHover={{ scale: 1.2 }}
          >
            <div className={`w-16 h-16 rounded-full bg-cosmic-surface border-2 ${
              selectedTech?.id === tech.id ? 'border-electric-cyan shadow-lg shadow-electric-cyan/30' : 'border-border'
            } flex items-center justify-center transition-all duration-300 group-hover:border-electric-cyan`}>
              <Icon 
                name={tech.icon} 
                size={24} 
                className={`${tech.color} transition-colors duration-300`}
              />
            </div>
            
            {/* Tech Name Label */}
            <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-cosmic-surface border border-border rounded text-xs font-medium text-text-primary whitespace-nowrap transition-all duration-300 ${
              selectedTech?.id === tech.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              {tech.name}
            </div>
          </motion.div>
        ))}

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-cyan/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Selected Technology Info */}
      {selectedTech && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-cosmic-primary/50 border border-electric-cyan/30 rounded-lg"
        >
          <div className="flex items-center space-x-3 mb-2">
            <Icon name={selectedTech.icon} size={20} className={selectedTech.color} />
            <h4 className="text-lg font-semibold text-text-primary">{selectedTech.name}</h4>
          </div>
          <p className="text-sm text-text-secondary">
            Connected to {selectedTech.connections.length} other technologies in the ecosystem
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TechRelationshipDiagram;