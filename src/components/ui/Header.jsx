import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/hero-experience', icon: 'Home' },
    { name: 'About', path: '/about-identity-portal', icon: 'User' },
    { name: 'Skills', path: '/skills-visualization-matrix', icon: 'Code' },
    { name: 'Projects', path: '/project-universe-showcase', icon: 'Folder' },
    { name: 'Contact', path: '/contact-connection-hub', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-90 transition-all duration-400 cosmic ${
        isScrolled 
          ? 'bg-cosmic-primary/95 backdrop-blur-cosmic border-b border-border shadow-cosmic' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/hero-experience" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-electric-cyan to-electric-purple rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-cosmic-primary font-bold text-lg lg:text-xl font-mono">
                  TP
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan to-electric-purple rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-text-primary font-inter">
                TechFolio Pro
              </h1>
              <p className="text-xs text-text-secondary font-mono">
                Digital Experience Architect
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.path)
                    ? 'text-electric-cyan bg-cosmic-surface' :'text-text-secondary hover:text-text-primary hover:bg-cosmic-surface/50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={item.icon} 
                    size={16} 
                    className={`transition-colors duration-300 ${
                      isActivePath(item.path) ? 'text-electric-cyan' : 'text-current'
                    }`}
                  />
                  <span>{item.name}</span>
                </div>
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-electric-cyan rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                variant="outline"
                size="sm"
                className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-cosmic-primary transition-all duration-300"
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                Resume
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-cosmic-surface/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? 'X' : 'Menu'} 
                size={24} 
                className="transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-400 cosmic ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2 border-t border-border">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'text-electric-cyan bg-cosmic-surface' :'text-text-secondary hover:text-text-primary hover:bg-cosmic-surface/50'
                }`}
              >
                <Icon 
                  name={item.icon} 
                  size={20} 
                  className={`transition-colors duration-300 ${
                    isActivePath(item.path) ? 'text-electric-cyan' : 'text-current'
                  }`}
                />
                <span>{item.name}</span>
                {isActivePath(item.path) && (
                  <div className="ml-auto w-2 h-2 bg-electric-cyan rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 px-4">
              <Button
                variant="outline"
                fullWidth
                className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-cosmic-primary transition-all duration-300"
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                Download Resume
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Performance Metrics (Floating) */}
      <div className="hidden xl:block fixed top-24 right-6 z-80">
        <div className="bg-cosmic-surface/90 backdrop-blur-cosmic border border-border rounded-lg p-3 shadow-cosmic">
          <div className="flex items-center space-x-3 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
              <span className="text-text-secondary font-mono">60 FPS</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center space-x-1">
              <Icon name="Zap" size={12} className="text-electric-cyan" />
              <span className="text-text-secondary font-mono">1.2s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Status */}
      <div className="hidden xl:block fixed top-6 right-6 z-80">
        <div className="bg-success/10 border border-success/20 rounded-full px-3 py-1 flex items-center space-x-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-success text-xs font-medium">Available for opportunities</span>
        </div>
      </div>
    </header>
  );
};

export default Header;