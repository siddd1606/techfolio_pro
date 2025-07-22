import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveSkillBubbles = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    {
      id: 1,
      name: "React",
      proficiency: 90,
      icon: "Code",
      color: "from-blue-500 to-cyan-500",
      projects: ["E-commerce Platform", "Task Management App", "Portfolio Website"],
      position: { top: "10%", left: "15%" }
    },
    {
      id: 2,
      name: "JavaScript",
      proficiency: 95,
      icon: "Zap",
      color: "from-yellow-500 to-orange-500",
      projects: ["Interactive Dashboard", "Real-time Chat App", "API Integration"],
      position: { top: "25%", right: "20%" }
    },
    {
      id: 3,
      name: "Node.js",
      proficiency: 85,
      icon: "Server",
      color: "from-green-500 to-emerald-500",
      projects: ["REST API", "Authentication System", "Database Management"],
      position: { top: "45%", left: "10%" }
    },
    {
      id: 4,
      name: "Python",
      proficiency: 80,
      icon: "Code2",
      color: "from-purple-500 to-indigo-500",
      projects: ["Data Analysis Tool", "Machine Learning Model", "Automation Scripts"],
      position: { top: "60%", right: "15%" }
    },
    {
      id: 5,
      name: "MongoDB",
      proficiency: 75,
      icon: "Database",
      color: "from-green-600 to-teal-600",
      projects: ["User Management System", "Content Management", "Analytics Platform"],
      position: { top: "80%", left: "25%" }
    },
    {
      id: 6,
      name: "AWS",
      proficiency: 70,
      icon: "Cloud",
      color: "from-orange-500 to-red-500",
      projects: ["Cloud Deployment", "Serverless Functions", "Storage Solutions"],
      position: { top: "35%", right: "30%" }
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="absolute pointer-events-auto"
          style={skill.position}
        >
          <div
            className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-110 ${
              hoveredSkill === skill.id ? 'z-50' : 'z-10'
            }`}
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Skill Bubble */}
            <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${skill.color} p-0.5 animate-float`}>
              <div className="w-full h-full bg-cosmic-primary rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-white/20 transition-all duration-300">
                <Icon 
                  name={skill.icon} 
                  size={24} 
                  className="text-white" 
                />
              </div>
            </div>

            {/* Proficiency Ring */}
            <div className="absolute inset-0 rounded-full">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray={`${skill.proficiency * 2.83} 283`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Skill Tooltip */}
            {hoveredSkill === skill.id && (
              <div 
                className="fixed bg-cosmic-surface border border-border rounded-lg p-4 shadow-2xl z-50 w-64 pointer-events-none"
                style={{
                  left: mousePosition.x + 20,
                  top: mousePosition.y - 100,
                  transform: 'translateY(-50%)'
                }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <Icon name={skill.icon} size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold">{skill.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-1 bg-border rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-electric-cyan to-electric-purple transition-all duration-1000"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                      <span className="text-xs text-text-secondary">{skill.proficiency}%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-text-primary mb-2">Recent Projects:</h5>
                  <ul className="space-y-1">
                    {skill.projects.map((project, index) => (
                      <li key={index} className="text-xs text-text-secondary flex items-center space-x-2">
                        <div className="w-1 h-1 bg-electric-cyan rounded-full"></div>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-electric-cyan/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-electric-purple/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-success/50 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-warning/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default InteractiveSkillBubbles;