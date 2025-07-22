import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate online/offline status
    const statusTimer = setInterval(() => {
      setIsOnline(prev => Math.random() > 0.1 ? true : prev);
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, []);

  const getTimeZoneInfo = () => {
    const pstTime = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    const hour = new Date().getHours();
    let status = 'Available';
    let statusColor = 'success';
    let statusIcon = 'CheckCircle';

    if (hour >= 22 || hour < 8) {
      status = 'Sleeping';
      statusColor = 'warning';
      statusIcon = 'Moon';
    } else if (hour >= 9 && hour < 17) {
      status = 'Working';
      statusColor = 'electric-cyan';
      statusIcon = 'Code';
    } else {
      status = 'Available';
      statusColor = 'success';
      statusIcon = 'CheckCircle';
    }

    return { pstTime, status, statusColor, statusIcon };
  };

  const { pstTime, status, statusColor, statusIcon } = getTimeZoneInfo();

  const availabilityData = [
    {
      type: 'Full-time Opportunities',
      status: 'Open',
      icon: 'Briefcase',
      color: 'success',
      description: 'Actively seeking new challenges'
    },
    {
      type: 'Freelance Projects',
      status: 'Available',
      icon: 'Zap',
      color: 'electric-cyan',
      description: 'Short-term engagements welcome'
    },
    {
      type: 'Collaborations',
      status: 'Interested',
      icon: 'Users',
      color: 'electric-purple',
      description: 'Open source & side projects'
    },
    {
      type: 'Mentoring',
      status: 'Limited',
      icon: 'GraduationCap',
      color: 'warning',
      description: 'Select opportunities only'
    }
  ];

  const responseTimeData = [
    { platform: 'Email', time: '< 4 hours', icon: 'Mail', priority: 'high' },
    { platform: 'LinkedIn', time: '< 8 hours', icon: 'Linkedin', priority: 'medium' },
    { platform: 'Discord', time: '< 1 hour', icon: 'MessageCircle', priority: 'high' },
    { platform: 'Twitter', time: '< 24 hours', icon: 'Twitter', priority: 'low' }
  ];

  return (
    <div className="space-y-6">
      {/* Current Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-cosmic-surface border border-border rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-text-primary">
            Current Status
          </h3>
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-3 h-3 rounded-full ${
                isOnline ? 'bg-success' : 'bg-warning'
              }`}
            />
            <span className={`text-sm font-medium ${
              isOnline ? 'text-success' : 'text-warning'
            }`}>
              {isOnline ? 'Online' : 'Away'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-${statusColor}/20`}>
                <Icon
                  name={statusIcon}
                  size={16}
                  className={`text-${statusColor}`}
                />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Current Activity</p>
                <p className={`font-semibold text-${statusColor}`}>{status}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-electric-cyan/20">
                <Icon name="Clock" size={16} className="text-electric-cyan" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Local Time (PST)</p>
                <p className="font-semibold text-text-primary font-mono">
                  {pstTime}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-electric-purple/20">
                <Icon name="Calendar" size={16} className="text-electric-purple" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">This Week</p>
                <p className="font-semibold text-text-primary">
                  Moderate Availability
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-success/20">
                <Icon name="MessageSquare" size={16} className="text-success" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Response Rate</p>
                <p className="font-semibold text-success">98% within 24h</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Availability Types */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-cosmic-surface border border-border rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-text-primary mb-4">
          Opportunity Types
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availabilityData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center space-x-3 p-3 rounded-lg bg-cosmic-primary/30 border border-border/50"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${item.color}/20`}>
                <Icon
                  name={item.icon}
                  size={18}
                  className={`text-${item.color}`}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-text-primary text-sm">
                    {item.type}
                  </p>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${item.color}/20 text-${item.color}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Response Times */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-cosmic-surface border border-border rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-text-primary mb-4">
          Response Times
        </h3>
        
        <div className="space-y-3">
          {responseTimeData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-cosmic-primary/30 border border-border/50"
            >
              <div className="flex items-center space-x-3">
                <Icon
                  name={item.icon}
                  size={16}
                  className="text-text-secondary"
                />
                <span className="text-text-primary font-medium">
                  {item.platform}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-text-secondary text-sm font-mono">
                  {item.time}
                </span>
                <div className={`w-2 h-2 rounded-full ${
                  item.priority === 'high' ? 'bg-success' :
                  item.priority === 'medium' ? 'bg-warning' : 'bg-text-secondary'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-electric-cyan/10 border border-electric-cyan/20 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Info" size={16} className="text-electric-cyan" />
            <p className="text-sm text-electric-cyan">
              For urgent matters, email is the fastest way to reach me
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AvailabilityStatus;