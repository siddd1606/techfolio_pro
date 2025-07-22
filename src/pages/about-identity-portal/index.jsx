import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import PersonalPhotoSection from './components/PersonalPhotoSection';
import PersonalStorySection from './components/PersonalStorySection';
import InteractiveSkillBubbles from './components/InteractiveSkillBubbles';
import LearningTimeline from './components/LearningTimeline';

const AboutIdentityPortal = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-cosmic-primary text-text-primary">
      <Header />
      
      {/* Hero Section with Split Layout */}
      <section className="pt-20 lg:pt-24 min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-cyan/10 rounded-full blur-3xl parallax-element"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl parallax-element"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-h-screen items-center">
            {/* Left Side - Personal Photo */}
            <div className="relative order-2 lg:order-1">
              <PersonalPhotoSection />
              {/* Interactive Skill Bubbles Overlay */}
              <div className="hidden lg:block">
                <InteractiveSkillBubbles />
              </div>
            </div>

            {/* Right Side - Personal Story */}
            <div className="order-1 lg:order-2 space-y-8">
              <PersonalStorySection />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col items-center space-y-2 text-text-secondary animate-bounce">
            <span className="text-xs font-mono">Scroll to explore timeline</span>
            <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-text-secondary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Timeline Section */}
      <section className="py-20 lg:py-32 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,212,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <LearningTimeline />
        </div>
      </section>

      {/* Skills Showcase Section - Mobile Only */}
      <section className="lg:hidden py-16 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-inter">
              Technical Skills
            </h2>
            <p className="text-text-secondary">
              Interactive skill visualization - tap to explore
            </p>
          </div>
          
          <div className="relative h-96">
            <InteractiveSkillBubbles />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/5 to-electric-purple/5"></div>
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 font-inter">
              Ready to Build Something Amazing Together?
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              I'm always excited to collaborate on innovative projects and contribute to teams that value creativity, technical excellence, and meaningful impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact-connection-hub"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-cyan to-electric-purple text-cosmic-primary px-8 py-4 rounded-lg font-semibold hover:from-electric-cyan/80 hover:to-electric-purple/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Let's Connect</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="/project-universe-showcase"
                className="inline-flex items-center space-x-2 border border-electric-cyan text-electric-cyan px-8 py-4 rounded-lg font-semibold hover:bg-electric-cyan hover:text-cosmic-primary transition-all duration-300"
              >
                <span>View My Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-text-secondary text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TechFolio Pro. Crafted with passion and precision.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-text-secondary hover:text-electric-cyan transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-text-secondary hover:text-electric-cyan transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-text-secondary hover:text-electric-cyan transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutIdentityPortal;