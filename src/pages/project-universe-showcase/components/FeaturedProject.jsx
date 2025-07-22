import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onProjectClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) return null;

  const nextSlide = () => {
    if (project.gallery) {
      setCurrentSlide((prev) => (prev + 1) % project.gallery.length);
    }
  };

  const prevSlide = () => {
    if (project.gallery) {
      setCurrentSlide((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-cosmic-surface to-cosmic-primary border border-border shadow-2xl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan via-transparent to-electric-purple"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Featured Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <div className="px-3 py-1 bg-electric-cyan/20 border border-electric-cyan/30 rounded-full flex items-center space-x-2">
              <Icon name="Star" size={14} className="text-electric-cyan" />
              <span className="text-electric-cyan text-sm font-medium">Featured Project</span>
            </div>
            <div className="px-3 py-1 bg-success/20 border border-success/30 rounded-full">
              <span className="text-success text-sm font-medium">{project.status}</span>
            </div>
          </motion.div>

          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
              {project.title}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-text-primary">Key Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights?.slice(0, 4).map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-cosmic-primary/30 rounded-lg">
                  <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                  <span className="text-text-secondary text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-text-primary">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-1 bg-cosmic-primary border border-border rounded-lg text-sm text-text-secondary hover:text-electric-cyan hover:border-electric-cyan/30 transition-all duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="default"
              size="lg"
              iconName="Eye"
              iconPosition="left"
              onClick={() => onProjectClick(project)}
              className="bg-electric-cyan text-cosmic-primary hover:bg-electric-purple"
            >
              View Case Study
            </Button>
            
            <div className="flex gap-3">
              {project.liveUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ExternalLink"
                  iconPosition="left"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Github"
                  iconPosition="left"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  Source Code
                </Button>
              )}
            </div>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-border"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-electric-cyan">{project.duration}</div>
              <div className="text-xs text-text-secondary">Development Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-electric-cyan">{project.teamSize}</div>
              <div className="text-xs text-text-secondary">Team Size</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-electric-cyan">{project.rating}</div>
              <div className="text-xs text-text-secondary">Project Rating</div>
            </div>
          </motion.div>
        </div>

        {/* Visual Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          {/* Main Image/Gallery */}
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            {project.gallery && project.gallery.length > 0 ? (
              <>
                <Image
                  src={project.gallery[currentSlide]}
                  alt={`${project.title} screenshot ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-cosmic-primary/80 text-text-primary rounded-full hover:bg-cosmic-primary transition-colors duration-200 backdrop-blur-sm"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-cosmic-primary/80 text-text-primary rounded-full hover:bg-cosmic-primary transition-colors duration-200 backdrop-blur-sm"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {project.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                            index === currentSlide ? 'bg-electric-cyan' : 'bg-text-secondary/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}

            {/* Overlay Elements */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <div className="px-3 py-1 bg-cosmic-primary/80 backdrop-blur-sm rounded-full text-xs text-text-primary">
                {project.category}
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-electric-cyan rounded-full opacity-60"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-electric-purple rounded-full opacity-40"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;