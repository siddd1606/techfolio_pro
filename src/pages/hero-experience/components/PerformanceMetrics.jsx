import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    fps: 60,
    loadTime: 1.2,
    memoryUsage: 45,
    isOnline: true
  });

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const updateFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({
          ...prev,
          fps: Math.min(fps, 60),
          memoryUsage: Math.random() * 20 + 40 // Simulated memory usage
        }));
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(updateFPS);
    };

    // Simulate load time calculation
    const loadTime = performance.now() / 1000;
    setMetrics(prev => ({
      ...prev,
      loadTime: Math.min(loadTime, 3.0)
    }));

    updateFPS();

    // Online/offline detection
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const getStatusColor = (value, thresholds) => {
    if (value >= thresholds.good) return 'text-success';
    if (value >= thresholds.warning) return 'text-warning';
    return 'text-error';
  };

  const fpsColor = getStatusColor(metrics.fps, { good: 55, warning: 30 });
  const loadColor = getStatusColor(5 - metrics.loadTime, { good: 3, warning: 2 });
  const memoryColor = getStatusColor(100 - metrics.memoryUsage, { good: 50, warning: 30 });

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 lg:top-24 lg:right-6">
      <div className="bg-cosmic-surface/90 backdrop-blur-cosmic border border-border rounded-lg p-3 shadow-cosmic min-w-[200px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Icon name="Activity" size={14} className="text-electric-cyan" />
            <span className="text-xs font-medium text-text-primary font-mono">Performance</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            <Icon name="X" size={12} />
          </button>
        </div>

        {/* Metrics */}
        <div className="space-y-2">
          {/* FPS */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${fpsColor === 'text-success' ? 'bg-success' : fpsColor === 'text-warning' ? 'bg-warning' : 'bg-error'} animate-pulse`} />
              <span className="text-xs text-text-secondary font-mono">FPS</span>
            </div>
            <span className={`text-xs font-mono ${fpsColor}`}>
              {metrics.fps}
            </span>
          </div>

          {/* Load Time */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={8} className="text-electric-cyan" />
              <span className="text-xs text-text-secondary font-mono">Load</span>
            </div>
            <span className={`text-xs font-mono ${loadColor}`}>
              {metrics.loadTime.toFixed(1)}s
            </span>
          </div>

          {/* Memory Usage */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cpu" size={8} className="text-electric-purple" />
              <span className="text-xs text-text-secondary font-mono">Memory</span>
            </div>
            <span className={`text-xs font-mono ${memoryColor}`}>
              {metrics.memoryUsage.toFixed(0)}%
            </span>
          </div>

          {/* Connection Status */}
          <div className="flex items-center justify-between pt-1 border-t border-border">
            <div className="flex items-center space-x-2">
              <Icon 
                name={metrics.isOnline ? "Wifi" : "WifiOff"} 
                size={8} 
                className={metrics.isOnline ? "text-success" : "text-error"} 
              />
              <span className="text-xs text-text-secondary font-mono">Status</span>
            </div>
            <span className={`text-xs font-mono ${metrics.isOnline ? 'text-success' : 'text-error'}`}>
              {metrics.isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>

        {/* Performance Score */}
        <div className="mt-3 pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-secondary font-mono">Score</span>
            <div className="flex items-center space-x-1">
              <div className="w-12 h-1 bg-cosmic-primary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-electric-cyan to-success transition-all duration-500"
                  style={{ width: `${Math.min((metrics.fps / 60) * 100, 100)}%` }}
                />
              </div>
              <span className="text-xs font-mono text-success">
                {Math.round((metrics.fps / 60) * 100)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;