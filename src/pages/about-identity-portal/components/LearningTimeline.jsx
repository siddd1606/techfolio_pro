import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LearningTimeline = () => {
  const [visibleMilestones, setVisibleMilestones] = useState(new Set());
  const [activeMilestone, setActiveMilestone] = useState(null);

  const milestones = [
    {
      id: 1,
      year: "2022",
      title: "First Hello World",
      description: "Wrote my first line of code in Python during Introduction to Programming course. The excitement of seeing 'Hello, World!' on the screen sparked my passion for development.",
      icon: "Sparkles",
      color: "from-yellow-500 to-orange-500",
      achievements: ["Completed CS101", "Built first calculator", "Learned basic syntax"]
    },
    {
      id: 2,
      year: "2022",
      title: "Web Development Discovery",
      description: "Discovered the magic of HTML, CSS, and JavaScript. Built my first interactive webpage and realized the power of creating user experiences through code.",
      icon: "Globe",
      color: "from-blue-500 to-cyan-500",
      achievements: ["HTML/CSS mastery", "JavaScript fundamentals", "First responsive website"]
    },
    {
      id: 3,
      year: "2023",
      title: "React & Modern Frameworks",
      description: "Dove deep into React ecosystem, learning component-based architecture, state management, and modern development practices. Built several projects using React and Node.js.",
      icon: "Code",
      color: "from-cyan-500 to-blue-600",
      achievements: ["React proficiency", "Component architecture", "State management"]
    },
    {
      id: 4,
      year: "2023",
      title: "Full-Stack Development",
      description: "Expanded into backend development with Node.js, Express, and databases. Created complete full-stack applications with authentication, APIs, and data persistence.",
      icon: "Server",
      color: "from-green-500 to-emerald-600",
      achievements: ["Backend APIs", "Database design", "Authentication systems"]
    },
    {
      id: 5,
      year: "2024",
      title: "Cloud & DevOps",
      description: "Learned cloud deployment, CI/CD pipelines, and modern DevOps practices. Deployed applications on AWS and implemented automated testing and deployment workflows.",
      icon: "Cloud",
      color: "from-purple-500 to-indigo-600",
      achievements: ["AWS deployment", "CI/CD pipelines", "Docker containers"]
    },
    {
      id: 6,
      year: "2024",
      title: "Current: Advanced Projects",
      description: "Working on capstone projects involving AI integration, advanced React patterns, and scalable architecture. Focusing on performance optimization and user experience.",
      icon: "Rocket",
      color: "from-electric-cyan to-electric-purple",
      achievements: ["AI integration", "Performance optimization", "Advanced patterns"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const milestoneId = parseInt(entry.target.dataset.milestone);
            setVisibleMilestones(prev => new Set([...prev, milestoneId]));
          }
        });
      },
      { threshold: 0.5 }
    );

    const milestoneElements = document.querySelectorAll('[data-milestone]');
    milestoneElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 font-inter">
          Learning Journey
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          From first "Hello World" to building complex applications - every milestone represents growth, challenges overcome, and new horizons discovered.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-cyan via-electric-purple to-success transform lg:-translate-x-1/2"></div>

        {/* Milestones */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              data-milestone={milestone.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} p-0.5 transition-all duration-500 ${
                  visibleMilestones.has(milestone.id) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}>
                  <div className="w-full h-full bg-cosmic-primary rounded-full flex items-center justify-center border-2 border-transparent hover:border-white/20 transition-all duration-300">
                    <Icon 
                      name={milestone.icon} 
                      size={24} 
                      className="text-white" 
                    />
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full lg:w-5/12 ml-20 lg:ml-0 ${
                index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
              }`}>
                <div
                  className={`bg-cosmic-surface border border-border rounded-xl p-6 hover:border-electric-cyan/30 transition-all duration-500 cursor-pointer transform ${
                    visibleMilestones.has(milestone.id) 
                      ? 'translate-y-0 opacity-100' :'translate-y-8 opacity-0'
                  } ${
                    activeMilestone === milestone.id ? 'scale-105 shadow-2xl' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveMilestone(activeMilestone === milestone.id ? null : milestone.id)}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${milestone.color} flex items-center justify-center`}>
                        <Icon name={milestone.icon} size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary">
                          {milestone.title}
                        </h3>
                        <span className="text-sm text-electric-cyan font-mono">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    <Icon 
                      name={activeMilestone === milestone.id ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-text-secondary" 
                    />
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Achievements */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeMilestone === milestone.id ? 'max-h-40' : 'max-h-0'
                  }`}>
                    <div className="border-t border-border pt-4">
                      <h4 className="text-sm font-medium text-text-primary mb-2">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-electric-cyan/10 text-electric-cyan text-xs rounded-full border border-electric-cyan/20"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${milestone.color} transition-all duration-1000 delay-500`}
                        style={{ 
                          width: visibleMilestones.has(milestone.id) ? '100%' : '0%' 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Status Indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-success text-sm font-medium">Currently Learning: AI/ML Integration & Advanced React Patterns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningTimeline;