import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PersonalPhotoSection = () => {
  const [currentEnvironment, setCurrentEnvironment] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const environments = [
    {
      id: 0,
      name: "J Sahil Sidharth",
      image: "/assets/images/20241122_190409677_iOS-1753202784703.jpg",
      description: "Software Developer & Tech Innovator",
      icon: "User",
      isPersonal: true
    },
    {
      id: 1,
      name: "Coding Setup",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop",
      description: "Late night coding sessions",
      icon: "Code"
    },
    {
      id: 2,
      name: "Collaborative Workspace",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600&h=800&fit=crop",
      description: "Team collaboration and brainstorming",
      icon: "Users"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newEnvironment = Math.floor((scrollY / 400) % environments.length);
      setCurrentEnvironment(newEnvironment);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentEnv = environments[currentEnvironment];
  const isPersonalPhoto = currentEnv.isPersonal;

  return (
    <div className="relative h-full flex flex-col justify-center">
      {/* Main Photo Container */}
      <div className="relative">
        {/* Particle Effects Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-cyan rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-electric-purple rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-success rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-electric-cyan rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
          
          {/* Animated rings for personal photo */}
          {isPersonalPhoto && (
            <>
              <div className="absolute inset-0 rounded-2xl border-2 border-electric-cyan/30 animate-pulse-glow"></div>
              <div className="absolute inset-0 rounded-2xl border border-electric-purple/20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
            </>
          )}
        </div>

        <div 
          className={`relative overflow-hidden bg-cosmic-surface border shadow-2xl transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          } ${
            isPersonalPhoto 
              ? 'rounded-3xl border-electric-cyan/40 shadow-electric-cyan/20' 
              : 'rounded-2xl border-border'
          } ${
            isHovered && isPersonalPhoto 
              ? 'scale-105 rotate-1 shadow-2xl shadow-electric-cyan/30' 
              : 'hover:scale-[1.02]'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            boxShadow: isPersonalPhoto 
              ? `0 20px 60px rgba(0, 212, 255, 0.3), 0 8px 32px rgba(139, 92, 246, 0.2), inset 0 0 0 1px rgba(0, 212, 255, 0.1)` 
              : undefined
          }}
        >
          <div className="aspect-[4/5] w-full max-w-md mx-auto relative">
            {/* Hexagonal frame for personal photo */}
            {isPersonalPhoto && (
              <div className="absolute inset-2 z-10 pointer-events-none">
                <div className="w-full h-full relative">
                  {/* Hexagonal border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/20 via-transparent to-electric-purple/20 rounded-2xl"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-electric-cyan rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-electric-cyan rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-electric-purple rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-electric-purple rounded-br-lg"></div>
                </div>
              </div>
            )}

            <Image
              src={currentEnv.image}
              alt={currentEnv.description}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isPersonalPhoto ? 'rounded-2xl' : 'rounded-lg'
              } ${
                isHovered && isPersonalPhoto ? 'brightness-110 contrast-110' : ''
              }`}
            />
            
            {/* Advanced Overlay Effects */}
            <div className={`absolute inset-0 transition-all duration-500 ${
              isPersonalPhoto 
                ? 'bg-gradient-to-t from-cosmic-primary/60 via-electric-cyan/5 to-electric-purple/10 rounded-2xl' :'bg-gradient-to-t from-cosmic-primary/80 via-transparent to-transparent rounded-lg'
            }`}></div>

            {/* Animated gradient overlay for personal photo */}
            {isPersonalPhoto && (
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                isHovered ? 'opacity-20' : 'opacity-0'
              }`} style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(0, 212, 255, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent)'
              }}></div>
            )}

            {/* 3D Transform effect for personal photo */}
            {isPersonalPhoto && isHovered && (
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-electric-purple/10 rounded-2xl animate-pulse"></div>
            )}
            
            {/* Environment Label */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className={`backdrop-blur-sm border rounded-lg p-3 transition-all duration-300 ${
                isPersonalPhoto 
                  ? 'bg-cosmic-surface/95 border-electric-cyan/30 shadow-lg shadow-electric-cyan/20'
                  : 'bg-cosmic-surface/90 border-border'
              }`}>
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={currentEnv.icon} 
                    size={16} 
                    className={isPersonalPhoto ? "text-electric-cyan animate-pulse" : "text-electric-cyan"} 
                  />
                  <span className={`font-medium text-sm ${
                    isPersonalPhoto ? 'text-text-primary font-semibold' : 'text-text-primary'
                  }`}>
                    {currentEnv.name}
                  </span>
                </div>
                <p className={`text-xs mt-1 ${
                  isPersonalPhoto ? 'text-electric-cyan/80' : 'text-text-secondary'
                }`}>
                  {currentEnv.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-cyan/20 rounded-full animate-float border border-electric-cyan/30"></div>
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-electric-purple/20 rounded-full animate-float border border-electric-purple/30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 -right-8 w-6 h-6 bg-success/20 rounded-full animate-float border border-success/30" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional decorative elements for personal photo */}
        {isPersonalPhoto && (
          <>
            <div className="absolute -top-8 left-1/4 w-4 h-4 bg-electric-cyan/30 rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-8 right-1/4 w-3 h-3 bg-electric-purple/40 rotate-45 animate-float" style={{ animationDelay: '2.5s' }}></div>
          </>
        )}
      </div>

      {/* Enhanced Environment Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {environments.map((env, index) => (
          <button
            key={env.id}
            onClick={() => setCurrentEnvironment(index)}
            className={`relative transition-all duration-300 ${
              currentEnvironment === index 
                ? env.isPersonal
                  ? 'w-4 h-4 bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/50 animate-pulse-glow' 
                  : 'w-4 h-4 bg-electric-cyan rounded-full scale-125 shadow-lg shadow-electric-cyan/30' :'w-3 h-3 bg-border rounded-full hover:bg-text-secondary hover:scale-110'
            }`}
            aria-label={`Switch to ${env.name}`}
          >
            {currentEnvironment === index && env.isPersonal && (
              <div className="absolute inset-0 rounded-full border-2 border-electric-cyan animate-ping"></div>
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Scroll Hint */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <div className="flex flex-col items-center space-y-2 text-text-secondary">
          <span className="text-xs font-mono tracking-wide">Scroll to explore environments</span>
          <div className="relative">
            <Icon name="ChevronDown" size={16} className="animate-bounce text-electric-cyan" />
            <div className="absolute inset-0 animate-ping">
              <Icon name="ChevronDown" size={16} className="text-electric-cyan/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPhotoSection;