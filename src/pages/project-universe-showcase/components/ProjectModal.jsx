import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical', icon: 'Code' },
    { id: 'process', label: 'Process', icon: 'GitBranch' },
    { id: 'impact', label: 'Impact', icon: 'TrendingUp' }
  ];

  const nextImage = () => {
    if (project?.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    }
  };

  const prevImage = () => {
    if (project?.gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-cosmic-primary/90 backdrop-blur-lg"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-6xl max-h-[90vh] bg-cosmic-surface border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-electric-purple rounded-xl flex items-center justify-center">
                  <Icon name="Folder" size={24} className="text-cosmic-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
                  <p className="text-text-secondary">{project.category} • {project.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
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
                    size="sm"
                    iconName="Github"
                    iconPosition="left"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    Code
                  </Button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 text-text-secondary hover:text-text-primary hover:bg-cosmic-primary rounded-lg transition-colors duration-200"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors duration-200 relative ${
                    activeTab === tab.id
                      ? 'text-electric-cyan bg-electric-cyan/5' :'text-text-secondary hover:text-text-primary hover:bg-cosmic-primary/50'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-cyan"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      {/* Image Gallery */}
                      {project.gallery && project.gallery.length > 0 && (
                        <div className="relative">
                          <div className="relative h-80 rounded-xl overflow-hidden">
                            <Image
                              src={project.gallery[currentImageIndex]}
                              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                            
                            {project.gallery.length > 1 && (
                              <>
                                <button
                                  onClick={prevImage}
                                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-cosmic-primary/80 text-text-primary rounded-full hover:bg-cosmic-primary transition-colors duration-200"
                                >
                                  <Icon name="ChevronLeft" size={20} />
                                </button>
                                <button
                                  onClick={nextImage}
                                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-cosmic-primary/80 text-text-primary rounded-full hover:bg-cosmic-primary transition-colors duration-200"
                                >
                                  <Icon name="ChevronRight" size={20} />
                                </button>
                                
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                  {project.gallery.map((_, index) => (
                                    <button
                                      key={index}
                                      onClick={() => setCurrentImageIndex(index)}
                                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                        index === currentImageIndex ? 'bg-electric-cyan' : 'bg-text-secondary/50'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Project Description */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Project Overview</h3>
                        <p className="text-text-secondary leading-relaxed">{project.fullDescription}</p>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.features?.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-cosmic-primary/30 rounded-lg">
                              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'technical' && (
                    <div className="space-y-6">
                      {/* Tech Stack */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Technology Stack</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {project.techStack.map((tech, index) => (
                            <div key={index} className="p-3 bg-cosmic-primary/30 rounded-lg text-center">
                              <div className="text-sm font-medium text-text-primary">{tech}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Architecture */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Architecture & Design</h3>
                        <div className="space-y-3">
                          {project.architecture?.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <Icon name="ArrowRight" size={16} className="text-electric-cyan mt-0.5 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Code Quality */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Code Quality Metrics</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {project.metrics?.map((metric, index) => (
                            <div key={index} className="text-center p-4 bg-cosmic-primary/30 rounded-lg">
                              <div className="text-2xl font-bold text-electric-cyan">{metric.value}</div>
                              <div className="text-xs text-text-secondary">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'process' && (
                    <div className="space-y-6">
                      {/* Development Timeline */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Development Process</h3>
                        <div className="space-y-4">
                          {project.timeline?.map((phase, index) => (
                            <div key={index} className="flex items-start space-x-4">
                              <div className="flex-shrink-0 w-8 h-8 bg-electric-cyan/20 rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-electric-cyan rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-text-primary">{phase.phase}</h4>
                                <p className="text-sm text-text-secondary mt-1">{phase.description}</p>
                                <div className="text-xs text-electric-cyan mt-2">{phase.duration}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Challenges & Solutions */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Challenges & Solutions</h3>
                        <div className="space-y-4">
                          {project.challenges?.map((challenge, index) => (
                            <div key={index} className="p-4 bg-cosmic-primary/30 rounded-lg">
                              <h4 className="font-medium text-text-primary mb-2 flex items-center">
                                <Icon name="AlertTriangle" size={16} className="text-warning mr-2" />
                                Challenge
                              </h4>
                              <p className="text-sm text-text-secondary mb-3">{challenge.problem}</p>
                              <h4 className="font-medium text-text-primary mb-2 flex items-center">
                                <Icon name="Lightbulb" size={16} className="text-success mr-2" />
                                Solution
                              </h4>
                              <p className="text-sm text-text-secondary">{challenge.solution}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'impact' && (
                    <div className="space-y-6">
                      {/* Results & Metrics */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Project Impact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {project.impact?.map((result, index) => (
                            <div key={index} className="text-center p-6 bg-gradient-to-br from-electric-cyan/10 to-electric-purple/10 rounded-xl border border-electric-cyan/20">
                              <div className="text-3xl font-bold text-electric-cyan mb-2">{result.value}</div>
                              <div className="text-sm text-text-primary font-medium mb-1">{result.metric}</div>
                              <div className="text-xs text-text-secondary">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Lessons Learned */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Key Learnings</h3>
                        <div className="space-y-3">
                          {project.learnings?.map((learning, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-cosmic-primary/30 rounded-lg">
                              <Icon name="BookOpen" size={16} className="text-electric-cyan mt-0.5 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">{learning}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Future Enhancements */}
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Future Roadmap</h3>
                        <div className="space-y-3">
                          {project.futureEnhancements?.map((enhancement, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-cosmic-primary/30 rounded-lg">
                              <Icon name="Rocket" size={16} className="text-electric-purple mt-0.5 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">{enhancement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;