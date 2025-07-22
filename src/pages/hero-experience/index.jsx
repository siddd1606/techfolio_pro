import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import ParticleBackground from './components/ParticleBackground';
import Interactive3DShape from './components/Interactive3DShape';
import TypewriterText from './components/TypewriterText';
import PerformanceMetrics from './components/PerformanceMetrics';
import ScrollIndicator from './components/ScrollIndicator';
import CursorTrail from './components/CursorTrail';
import FloatingNavigation from './components/FloatingNavigation';

const HeroExperience = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroTexts = [
    "I craft digital experiences that bridge imagination and innovation",
    "Building the future through code, creativity, and cutting-edge technology", 
    "Transforming complex problems into elegant, user-centered solutions"
  ];

  const techStack = [
    { name: 'React', icon: 'Code', color: 'text-electric-cyan' },
    { name: 'Node.js', icon: 'Server', color: 'text-success' },
    { name: 'TypeScript', icon: 'FileCode', color: 'text-electric-purple' },
    { name: 'Three.js', icon: 'Box', color: 'text-warning' },
    { name: 'Next.js', icon: 'Zap', color: 'text-electric-cyan' },
    { name: 'MongoDB', icon: 'Database', color: 'text-success' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleResumeDownload = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/J_Sahil_Sidharth_Resume.pdf';
    link.download = 'J_Sahil_Sidharth_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-cosmic-primary text-text-primary overflow-hidden relative">
      {/* Header */}
      <Header />
      
      {/* Background Elements */}
      <ParticleBackground />
      <CursorTrail />
      
      {/* Floating Navigation */}
      <FloatingNavigation />
      
      {/* Performance Metrics */}
      <PerformanceMetrics />

      {/* Main Hero Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              
              {/* Greeting */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm text-text-secondary font-mono">
                    Available for opportunities
                  </span>
                </div>
                <h1 className="text-lg text-text-secondary font-mono">
                  Hello, I'm
                </h1>
              </div>

              {/* Name */}
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-7xl font-bold text-text-primary font-inter leading-tight">
                  J Sahil
                  <span className="block text-transparent bg-gradient-to-r from-electric-cyan to-electric-purple bg-clip-text">
                    Sidharth
                  </span>
                </h2>
                <div className="text-xl lg:text-2xl text-text-secondary font-medium">
                  <TypewriterText 
                    texts={heroTexts}
                    speed={80}
                    deleteSpeed={40}
                    delayBetween={3000}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                3rd year Computer Science student at GNITC Hyderabad, passionate about full-stack development 
                and digital innovation. I specialize in creating immersive web applications that push the boundaries 
                of what's possible in the browser, transforming complex technical challenges into intuitive solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/project-universe-showcase">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-electric-cyan to-electric-purple hover:from-electric-cyan/80 hover:to-electric-purple/80 text-cosmic-primary font-semibold"
                    iconName="Folder"
                    iconPosition="left"
                    iconSize={20}
                  >
                    View My Work
                  </Button>
                </Link>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleResumeDownload}
                  className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-cosmic-primary"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={20}
                >
                  Download Resume
                </Button>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-sm text-text-secondary font-mono uppercase tracking-wider">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-4">
                  {techStack.map((tech, index) => (
                    <div
                      key={tech.name}
                      className={`flex items-center space-x-2 px-3 py-2 bg-cosmic-surface/50 border border-border rounded-lg hover:border-electric-cyan/50 transition-all duration-300 transform hover:scale-105 ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <Icon name={tech.icon} size={16} className={tech.color} />
                      <span className="text-sm text-text-primary font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/jsahilsidharth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-electric-cyan transition-colors duration-300"
                  aria-label="GitHub Profile"
                >
                  <Icon name="Github" size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/jsahilsidharth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-electric-cyan transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Icon name="Linkedin" size={24} />
                </a>
                <a
                  href="mailto:jsahilsidharth@gnitc.ac.in"
                  className="text-text-secondary hover:text-electric-cyan transition-colors duration-300"
                  aria-label="Email Contact"
                >
                  <Icon name="Mail" size={24} />
                </a>
                <a
                  href="https://twitter.com/jsahilsidharth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-electric-cyan transition-colors duration-300"
                  aria-label="Twitter Profile"
                >
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>

            {/* Right Content - 3D Interactive Shape */}
            <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="relative">
                <Interactive3DShape />
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-electric-cyan/20 to-transparent rounded-full blur-xl animate-float" />
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-electric-purple/20 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
                
                {/* Code Snippet Overlay */}
                <div className="absolute -bottom-16 -left-8 bg-cosmic-surface/90 backdrop-blur-cosmic border border-border rounded-lg p-4 font-mono text-xs text-text-secondary max-w-xs hidden lg:block">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-error rounded-full" />
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    <div className="w-2 h-2 bg-success rounded-full" />
                  </div>
                  <code className="text-electric-cyan">
                    const <span className="text-text-primary">developer</span> = {`{`}
                    <br />
                    &nbsp;&nbsp;passion: <span className="text-success">"innovation"</span>,
                    <br />
                    &nbsp;&nbsp;focus: <span className="text-success">"user experience"</span>
                    <br />
                    {`}`};
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {[
              { label: 'Projects Completed', value: '20+', icon: 'Folder' },
              { label: 'Academic Year', value: '3rd', icon: 'Calendar' },
              { label: 'Technologies', value: '12+', icon: 'Code' },
              { label: 'Problem Solving', value: '100%', icon: 'Star' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center space-y-2 p-6 bg-cosmic-surface/30 border border-border rounded-lg hover:border-electric-cyan/50 transition-all duration-300"
              >
                <Icon name={stat.icon} size={24} className="text-electric-cyan mx-auto" />
                <div className="text-2xl lg:text-3xl font-bold text-text-primary font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Background Gradient Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-5"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.1) 0%, transparent 50%)`
        }}
      />
    </div>
  );
};

export default HeroExperience;