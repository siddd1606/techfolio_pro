import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PersonalStorySection = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const storyData = {
    hook: {
      title: "The Journey Begins",
      content: `What started as curiosity about "how websites work" during a late-night browsing session has evolved into a passionate pursuit of creating digital experiences that matter. From debugging my first HTML page at 2 AM to building full-stack applications that solve real problems, every line of code tells a story of growth, persistence, and innovation.`,
      icon: "Sparkles"
    },
    education: {
      title: "Academic Foundation",
      content: `Currently in my 3rd year of Computer Science at GNITC Hyderabad, maintaining strong academic performance while diving deep into algorithms, data structures, and software engineering principles. Beyond coursework, I've completed specialized certifications in React development, cloud computing, and modern web technologies. My academic journey at GNITC is complemented by hands-on projects that bridge theoretical knowledge with practical application.`,
      icon: "GraduationCap"
    },
    passion: {
      title: "Passion Projects",
      content: `When I'm not working on assignments, you'll find me contributing to open-source projects, building side applications that solve everyday problems, or experimenting with emerging technologies like AI integration and 3D web experiences. My GitHub showcases everything from productivity tools to creative coding experiments, each project teaching me something new about the craft of development.`,
      icon: "Heart"
    },
    aspirations: {
      title: "Career Vision",
      content: `As I approach my final year at GNITC Hyderabad, I envision myself as a full-stack developer who doesn't just write code but crafts meaningful experiences. My goal is to join a forward-thinking team where I can contribute to products that make a real impact while continuing to grow as both a technical expert and collaborative team member. I'm particularly excited about opportunities in fintech, healthcare technology, or sustainable tech solutions.`,
      icon: "Target"
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleResumeDownload = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'TechFolio_Pro_Resume.pdf';
    link.click();
  };

  return (
    <div className="space-y-8">
      {/* Main Hook */}
      <div 
        data-section="hook"
        className={`transform transition-all duration-1000 ${
          visibleSections.has('hook') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4 font-inter">
            J Sahil Sidharth
            <span className="block text-electric-cyan">GNITC Student & Developer</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {storyData.hook.content}
          </p>
        </div>
      </div>

      {/* Expandable Story Sections */}
      <div className="space-y-4">
        {Object.entries(storyData).slice(1).map(([key, section], index) => (
          <div
            key={key}
            data-section={key}
            className={`transform transition-all duration-1000 delay-${index * 200} ${
              visibleSections.has(key) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="bg-cosmic-surface border border-border rounded-xl p-6 hover:border-electric-cyan/30 transition-all duration-300">
              <button
                onClick={() => toggleSection(key)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-electric-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-electric-cyan/20 transition-colors duration-300">
                    <Icon 
                      name={section.icon} 
                      size={20} 
                      className="text-electric-cyan" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-electric-cyan transition-colors duration-300">
                    {section.title}
                  </h3>
                </div>
                <Icon 
                  name={expandedSection === key ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-text-secondary group-hover:text-electric-cyan transition-all duration-300" 
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                expandedSection === key ? 'max-h-96 mt-4' : 'max-h-0'
              }`}>
                <p className="text-text-secondary leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resume Download CTA */}
      <div 
        data-section="cta"
        className={`transform transition-all duration-1000 delay-800 ${
          visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-r from-electric-cyan/10 to-electric-purple/10 border border-electric-cyan/20 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Ready to Connect?
          </h3>
          <p className="text-text-secondary mb-6">
            Download my resume to see the complete picture of my skills and experience.
          </p>
          
          <Button
            variant="default"
            size="lg"
            onClick={handleResumeDownload}
            iconName="Download"
            iconPosition="left"
            className="bg-gradient-to-r from-electric-cyan to-electric-purple hover:from-electric-cyan/80 hover:to-electric-purple/80 text-cosmic-primary font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </Button>
          
          <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="FileText" size={14} />
              <span>PDF Format</span>
            </div>
            <div className="w-1 h-1 bg-text-secondary rounded-full"></div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>Updated Dec 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div 
        data-section="stats"
        className={`transform transition-all duration-1000 delay-1000 ${
          visibleSections.has('stats') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Projects Built", value: "20+", icon: "Code" },
            { label: "Academic Year", value: "3rd", icon: "GraduationCap" },
            { label: "GitHub Commits", value: "400+", icon: "GitBranch" },
            { label: "GNITC Experience", value: "3 Years", icon: "Calendar" }
          ].map((stat, index) => (
            <div key={index} className="bg-cosmic-surface border border-border rounded-lg p-4 text-center hover:border-electric-cyan/30 transition-all duration-300">
              <Icon 
                name={stat.icon} 
                size={24} 
                className="text-electric-cyan mx-auto mb-2" 
              />
              <div className="text-2xl font-bold text-text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalStorySection;