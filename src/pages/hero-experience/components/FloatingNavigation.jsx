import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  const navigationItems = [
    { id: 'hero', name: 'Hero', path: '/hero-experience', icon: 'Home' },
    { id: 'about', name: 'About', path: '/about-identity-portal', icon: 'User' },
    { id: 'skills', name: 'Skills', path: '/skills-visualization-matrix', icon: 'Code' },
    { id: 'projects', name: 'Projects', path: '/project-universe-showcase', icon: 'Folder' },
    { id: 'contact', name: 'Contact', path: '/contact-connection-hub', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div 
      className={`fixed top-1/2 left-6 transform -translate-y-1/2 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <nav className="bg-cosmic-surface/90 backdrop-blur-cosmic border border-border rounded-2xl p-2 shadow-cosmic">
        <div className="flex flex-col space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`group relative p-3 rounded-xl transition-all duration-300 ${
                isActivePath(item.path)
                  ? 'bg-electric-cyan/20 text-electric-cyan' :'text-text-secondary hover:text-text-primary hover:bg-cosmic-primary/50'
              }`}
              title={item.name}
            >
              <Icon 
                name={item.icon} 
                size={20} 
                className="transition-colors duration-300" 
              />
              
              {/* Active indicator */}
              {isActivePath(item.path) && (
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-electric-cyan rounded-full" />
              )}
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-cosmic-primary border border-border rounded-lg text-xs font-medium text-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {item.name}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-cosmic-primary" />
              </div>
            </Link>
          ))}
        </div>
        
        {/* Progress indicator */}
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center justify-center">
            <div className="w-1 h-16 bg-cosmic-primary rounded-full overflow-hidden">
              <div 
                className="w-full bg-gradient-to-t from-electric-cyan to-electric-purple transition-all duration-300"
                style={{ 
                  height: `${Math.min((window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` 
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FloatingNavigation;