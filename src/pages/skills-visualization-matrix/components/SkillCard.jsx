import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillCard = ({ skill, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-success border-success/30 bg-success/10';
      case 'Advanced':
        return 'text-electric-cyan border-electric-cyan/30 bg-electric-cyan/10';
      case 'Intermediate':
        return 'text-electric-purple border-electric-purple/30 bg-electric-purple/10';
      default:
        return 'text-text-secondary border-border bg-cosmic-surface/50';
    }
  };

  const getProficiencyWidth = (level) => {
    switch (level) {
      case 'Expert':
        return 'w-full';
      case 'Advanced':
        return 'w-4/5';
      case 'Intermediate':
        return 'w-3/5';
      default:
        return 'w-2/5';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-64 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-cosmic-surface border border-border rounded-xl p-6 flex flex-col items-center justify-center group hover:border-electric-cyan/50 transition-all duration-300">
          <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-electric-cyan/20 to-electric-purple/20 group-hover:scale-110 transition-transform duration-300">
            <Icon 
              name={skill.icon} 
              size={32} 
              className="text-electric-cyan group-hover:text-electric-purple transition-colors duration-300" 
            />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2 text-center">
            {skill.name}
          </h3>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
            {skill.proficiency}
          </div>
          <div className="mt-4 w-full bg-cosmic-primary rounded-full h-2">
            <div className={`h-2 rounded-full bg-gradient-to-r from-electric-cyan to-electric-purple ${getProficiencyWidth(skill.proficiency)} transition-all duration-500`}></div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-cosmic-surface border border-electric-cyan/50 rounded-xl p-6 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-primary">{skill.name}</h3>
              <div className={`px-2 py-1 rounded text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
                {skill.proficiency}
              </div>
            </div>
            
            <div className="flex-1 space-y-3">
              <div>
                <h4 className="text-sm font-medium text-electric-cyan mb-2">Experience</h4>
                <p className="text-xs text-text-secondary">{skill.experience}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-electric-cyan mb-2">Key Projects</h4>
                <div className="space-y-1">
                  {skill.projects.map((project, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-electric-purple rounded-full"></div>
                      <span className="text-xs text-text-secondary">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-electric-cyan mb-2">Learning Timeline</h4>
                <p className="text-xs text-text-secondary">{skill.timeline}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;