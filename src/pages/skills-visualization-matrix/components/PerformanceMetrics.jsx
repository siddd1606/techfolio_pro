import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    fps: 60,
    loadTime: 1.2,
    lighthouse: 98,
    memoryUsage: 45,
    bundleSize: 234,
    apiResponse: 85
  });

  const [isMonitoring, setIsMonitoring] = useState(true);

  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      setMetrics(prev => ({
        fps: Math.max(58, Math.min(60, prev.fps + (Math.random() - 0.5) * 2)),
        loadTime: Math.max(0.8, Math.min(2.0, prev.loadTime + (Math.random() - 0.5) * 0.2)),
        lighthouse: Math.max(95, Math.min(100, prev.lighthouse + (Math.random() - 0.5) * 2)),
        memoryUsage: Math.max(30, Math.min(60, prev.memoryUsage + (Math.random() - 0.5) * 5)),
        bundleSize: Math.max(200, Math.min(300, prev.bundleSize + (Math.random() - 0.5) * 10)),
        apiResponse: Math.max(50, Math.min(120, prev.apiResponse + (Math.random() - 0.5) * 10))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isMonitoring]);

  const getMetricColor = (value, thresholds) => {
    if (value >= thresholds.good) return 'text-success';
    if (value >= thresholds.warning) return 'text-warning';
    return 'text-error';
  };

  const getMetricBgColor = (value, thresholds) => {
    if (value >= thresholds.good) return 'bg-success/10 border-success/30';
    if (value >= thresholds.warning) return 'bg-warning/10 border-warning/30';
    return 'bg-error/10 border-error/30';
  };

  const metricConfigs = [
    {
      key: 'fps',
      label: 'Frame Rate',
      value: Math.round(metrics.fps),
      unit: 'FPS',
      icon: 'Zap',
      thresholds: { good: 58, warning: 45 },
      description: 'Smooth 60fps animations'
    },
    {
      key: 'loadTime',
      label: 'Load Time',
      value: metrics.loadTime.toFixed(1),
      unit: 'sec',
      icon: 'Clock',
      thresholds: { good: 1.5, warning: 2.5 },
      description: 'Initial page load speed',
      invert: true
    },
    {
      key: 'lighthouse',
      label: 'Lighthouse',
      value: Math.round(metrics.lighthouse),
      unit: '/100',
      icon: 'Award',
      thresholds: { good: 95, warning: 85 },
      description: 'Overall performance score'
    },
    {
      key: 'memoryUsage',
      label: 'Memory',
      value: Math.round(metrics.memoryUsage),
      unit: 'MB',
      icon: 'HardDrive',
      thresholds: { good: 50, warning: 70 },
      description: 'Current memory usage',
      invert: true
    },
    {
      key: 'bundleSize',
      label: 'Bundle Size',
      value: Math.round(metrics.bundleSize),
      unit: 'KB',
      icon: 'Package',
      thresholds: { good: 250, warning: 400 },
      description: 'Optimized bundle size',
      invert: true
    },
    {
      key: 'apiResponse',
      label: 'API Response',
      value: Math.round(metrics.apiResponse),
      unit: 'ms',
      icon: 'Activity',
      thresholds: { good: 100, warning: 200 },
      description: 'Average API response time',
      invert: true
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-cosmic-surface border border-border rounded-2xl p-8"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">Performance Dashboard</h3>
          <p className="text-text-secondary">Real-time optimization metrics showcase</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-success animate-pulse' : 'bg-text-secondary'}`}></div>
            <span className="text-sm text-text-secondary">
              {isMonitoring ? 'Live Monitoring' : 'Paused'}
            </span>
          </div>
          
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            className="px-3 py-1 text-xs bg-cosmic-primary border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-electric-cyan transition-all duration-300"
          >
            {isMonitoring ? 'Pause' : 'Resume'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metricConfigs.map((config, index) => {
          const colorClass = config.invert 
            ? getMetricColor(config.thresholds.good - config.value + config.thresholds.warning, config.thresholds)
            : getMetricColor(config.value, config.thresholds);
          
          const bgColorClass = config.invert
            ? getMetricBgColor(config.thresholds.good - config.value + config.thresholds.warning, config.thresholds)
            : getMetricBgColor(config.value, config.thresholds);

          return (
            <motion.div
              key={config.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${bgColorClass} transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-cosmic-surface border border-border`}>
                  <Icon name={config.icon} size={20} className={colorClass} />
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold font-mono ${colorClass}`}>
                    {config.value}
                    <span className="text-sm font-normal text-text-secondary ml-1">
                      {config.unit}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-1">
                  {config.label}
                </h4>
                <p className="text-xs text-text-secondary">
                  {config.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-cosmic-primary rounded-full h-1">
                  <motion.div
                    className={`h-1 rounded-full ${colorClass.replace('text-', 'bg-')}`}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: config.invert 
                        ? `${Math.max(0, Math.min(100, (config.thresholds.good * 2 - config.value) / config.thresholds.good * 100))}%`
                        : `${Math.min(100, (config.value / (config.thresholds.good * 1.1)) * 100)}%`
                    }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-success font-mono">A+</div>
            <div className="text-xs text-text-secondary">Overall Grade</div>
          </div>
          <div>
            <div className="text-lg font-bold text-electric-cyan font-mono">99.2%</div>
            <div className="text-xs text-text-secondary">Uptime</div>
          </div>
          <div>
            <div className="text-lg font-bold text-electric-purple font-mono">0</div>
            <div className="text-xs text-text-secondary">Critical Issues</div>
          </div>
          <div>
            <div className="text-lg font-bold text-warning font-mono">
              {new Date().toLocaleDateString()}
            </div>
            <div className="text-xs text-text-secondary">Last Updated</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMetrics;