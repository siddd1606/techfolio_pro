import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop < window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.querySelector('#about-section') || 
                       document.querySelector('[data-section="about"]') ||
                       window;
    
    if (nextSection === window) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    } else {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center space-y-4">
      {/* Scroll Progress */}
      <div className="hidden lg:flex flex-col items-center space-y-2">
        <div className="w-px h-16 bg-border relative overflow-hidden">
          <div 
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-electric-cyan to-electric-purple transition-all duration-300"
            style={{ height: `${Math.min(scrollProgress * 2, 100)}%` }}
          />
        </div>
        <span className="text-xs text-text-secondary font-mono">
          {Math.round(scrollProgress)}%
        </span>
      </div>

      {/* Scroll Button */}
      <button
        onClick={handleScrollDown}
        className="group flex flex-col items-center space-y-2 p-3 rounded-full bg-cosmic-surface/80 backdrop-blur-cosmic border border-border hover:border-electric-cyan transition-all duration-300 hover:scale-110"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center space-y-1">
          <Icon 
            name="ChevronDown" 
            size={20} 
            className="text-text-secondary group-hover:text-electric-cyan transition-colors duration-300 animate-bounce" 
          />
          <Icon 
            name="ChevronDown" 
            size={16} 
            className="text-text-secondary/60 group-hover:text-electric-cyan/60 transition-colors duration-300 animate-bounce" 
            style={{ animationDelay: '0.1s' }}
          />
        </div>
      </button>

      {/* Scroll Text */}
      <div className="flex flex-col items-center space-y-1">
        <span className="text-xs text-text-secondary font-mono opacity-80">
          Scroll to explore
        </span>
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-electric-cyan rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-electric-cyan rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 h-1 bg-electric-cyan rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;