import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import Icon from '../../../components/AppIcon';

const SkillCategory = ({ category, skills, index }) => {
  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'Frontend':
        return 'Monitor';
      case 'Backend':
        return 'Server';
      case 'Tools':
        return 'Wrench';
      case 'Soft Skills':
        return 'Users';
      default:
        return 'Code';
    }
  };

  const getCategoryColor = (categoryName) => {
    switch (categoryName) {
      case 'Frontend':
        return 'from-electric-cyan to-blue-500';
      case 'Backend':
        return 'from-electric-purple to-purple-600';
      case 'Tools':
        return 'from-success to-green-600';
      case 'Soft Skills':
        return 'from-warning to-orange-600';
      default:
        return 'from-electric-cyan to-electric-purple';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-16"
    >
      <div className="flex items-center space-x-4 mb-8">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(category)} shadow-lg`}>
          <Icon 
            name={getCategoryIcon(category)} 
            size={24} 
            className="text-white" 
          />
        </div>
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary font-inter">
            {category}
          </h2>
          <div className="flex items-center space-x-2 mt-1">
            <div className="w-12 h-0.5 bg-gradient-to-r from-electric-cyan to-electric-purple"></div>
            <span className="text-sm text-text-secondary font-mono">
              {skills.length} skills
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill, skillIndex) => (
          <SkillCard 
            key={skill.id} 
            skill={skill} 
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;