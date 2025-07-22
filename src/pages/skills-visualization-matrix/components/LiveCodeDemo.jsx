import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveCodeDemo = () => {
  const [activeDemo, setActiveDemo] = useState('react');
  const [counter, setCounter] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = {
    react: {
      title: 'React Component',
      description: 'Interactive counter with state management',
      code: `const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-4 border rounded">
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`,
      component: (
        <div className="p-4 bg-cosmic-surface border border-border rounded-lg">
          <h3 className="text-lg font-semibold text-text-primary mb-3">Count: {counter}</h3>
          <Button
            variant="outline"
            onClick={() => setCounter(counter + 1)}
            iconName="Plus"
            iconPosition="left"
            className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-cosmic-primary"
          >
            Increment
          </Button>
        </div>
      )
    },
    css: {
      title: 'CSS Animation',
      description: 'Smooth transitions and transforms',
      code: `.floating-box {
  animation: float 3s ease-in-out infinite;
  transform: translateY(0px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}`,
      component: (
        <div className="p-4 bg-cosmic-surface border border-border rounded-lg flex items-center justify-center">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-electric-purple rounded-lg flex items-center justify-center cursor-pointer"
            animate={isAnimating ? { y: [-20, 0, -20] } : { y: 0 }}
            transition={{ duration: 2, repeat: isAnimating ? Infinity : 0 }}
            onClick={() => setIsAnimating(!isAnimating)}
          >
            <Icon name="Sparkles" size={24} className="text-white" />
          </motion.div>
        </div>
      )
    },
    api: {
      title: 'API Integration',
      description: 'Fetch data with error handling',
      code: `const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message);
    }
    
    return data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
};`,
      component: (
        <div className="p-4 bg-cosmic-surface border border-border rounded-lg">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-electric-cyan to-electric-purple rounded-full flex items-center justify-center">
              <Icon name="User" size={20} className="text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text-primary">John Doe</h4>
              <p className="text-xs text-text-secondary">Software Engineer</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-xs text-success">API Connected</span>
          </div>
        </div>
      )
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-cosmic-surface border border-border rounded-2xl p-8 mb-16"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Skills in Action</h3>
        <p className="text-text-secondary">Live demonstrations of coding capabilities</p>
      </div>

      {/* Demo Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.entries(demos).map(([key, demo]) => (
          <button
            key={key}
            onClick={() => setActiveDemo(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeDemo === key
                ? 'bg-electric-cyan text-cosmic-primary' :'bg-cosmic-primary text-text-secondary hover:text-text-primary hover:bg-cosmic-primary/80'
            }`}
          >
            {demo.title}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Code Display */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Icon name="Code" size={20} className="text-electric-cyan" />
            <h4 className="text-lg font-semibold text-text-primary">
              {demos[activeDemo].title}
            </h4>
          </div>
          <p className="text-sm text-text-secondary mb-4">
            {demos[activeDemo].description}
          </p>
          <div className="bg-cosmic-primary border border-border rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-text-primary font-mono whitespace-pre-wrap">
              <code>{demos[activeDemo].code}</code>
            </pre>
          </div>
        </div>

        {/* Live Demo */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Icon name="Play" size={20} className="text-success" />
            <h4 className="text-lg font-semibold text-text-primary">Live Demo</h4>
          </div>
          <p className="text-sm text-text-secondary mb-4">
            Interactive example you can try right now
          </p>
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {demos[activeDemo].component}
          </motion.div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-success font-mono">60</div>
            <div className="text-xs text-text-secondary">FPS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-electric-cyan font-mono">&lt;100</div>
            <div className="text-xs text-text-secondary">MS Response</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-electric-purple font-mono">98</div>
            <div className="text-xs text-text-secondary">Lighthouse Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning font-mono">0</div>
            <div className="text-xs text-text-secondary">Memory Leaks</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveCodeDemo;