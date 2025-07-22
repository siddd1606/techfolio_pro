import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, onProjectClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  if (projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-24 h-24 mx-auto mb-6 bg-cosmic-surface rounded-full flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-electric-cyan/30 border-t-electric-cyan rounded-full animate-spin"></div>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Found</h3>
        <p className="text-text-secondary">Try adjusting your filters to see more projects.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onProjectClick={onProjectClick}
        />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;