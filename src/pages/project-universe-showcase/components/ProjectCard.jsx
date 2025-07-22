import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectCard = ({ project, onProjectClick, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -20,
      rotateX: 5,
      rotateY: 5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="relative group cursor-pointer perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onProjectClick(project)}
    >
      <div className="relative bg-cosmic-surface border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.div variants={imageVariants}>
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Hover Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate={isHovered ? "hover" : "hidden"}
            className="absolute inset-0 bg-gradient-to-t from-cosmic-primary/90 via-cosmic-primary/50 to-transparent flex items-end justify-between p-4"
          >
            <div className="flex space-x-2">
              {project.liveUrl && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-electric-cyan text-cosmic-primary rounded-lg hover:bg-electric-purple transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl, '_blank');
                  }}
                >
                  <Icon name="ExternalLink" size={16} />
                </motion.button>
              )}
              {project.githubUrl && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-text-primary text-cosmic-primary rounded-lg hover:bg-text-secondary transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank');
                  }}
                >
                  <Icon name="Github" size={16} />
                </motion.button>
              )}
            </div>
            <div className="text-right">
              <div className="text-xs text-text-secondary mb-1">{project.category}</div>
              <div className="text-sm text-electric-cyan font-medium">{project.status}</div>
            </div>
          </motion.div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === 'Production' ?'bg-success/20 text-success border border-success/30'
                : project.status === 'MVP' ?'bg-warning/20 text-warning border border-warning/30' :'bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/30'
            }`}>
              {project.status}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-text-primary group-hover:text-electric-cyan transition-colors duration-300">
              {project.title}
            </h3>
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon name="ArrowUpRight" size={20} className="text-text-secondary group-hover:text-electric-cyan transition-colors duration-300" />
            </motion.div>
          </div>

          <p className="text-text-secondary text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech, techIndex) => (
              <div
                key={techIndex}
                className="px-2 py-1 bg-cosmic-primary border border-border rounded-md text-xs text-text-secondary hover:text-electric-cyan hover:border-electric-cyan/30 transition-all duration-200"
              >
                {tech}
              </div>
            ))}
            {project.techStack.length > 4 && (
              <div className="px-2 py-1 bg-cosmic-primary border border-border rounded-md text-xs text-text-secondary">
                +{project.techStack.length - 4}
              </div>
            )}
          </div>

          {/* Project Metrics */}
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={12} />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={12} />
                <span>{project.teamSize}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={12} className="text-electric-cyan" />
              <span className="text-electric-cyan font-medium">{project.rating}</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-electric-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            scale: [1, 1.2, 1],
            opacity: isHovered ? [0.5, 1, 0.5] : 0
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute -bottom-1 -left-1 w-3 h-3 bg-electric-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            scale: [1, 1.3, 1],
            opacity: isHovered ? [0.3, 0.8, 0.3] : 0
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;