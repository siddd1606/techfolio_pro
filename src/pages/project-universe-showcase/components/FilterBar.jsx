import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FilterBar = ({ 
  categories, 
  techStacks, 
  statuses, 
  activeFilters, 
  onFilterChange, 
  onClearFilters,
  projectCount 
}) => {
  const filterSections = [
    {
      id: 'category',
      label: 'Category',
      icon: 'Folder',
      options: categories,
      activeValue: activeFilters.category
    },
    {
      id: 'techStack',
      label: 'Technology',
      icon: 'Code',
      options: techStacks,
      activeValue: activeFilters.techStack
    },
    {
      id: 'status',
      label: 'Status',
      icon: 'Activity',
      options: statuses,
      activeValue: activeFilters.status
    }
  ];

  const hasActiveFilters = Object.values(activeFilters).some(filter => filter !== 'all');

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-cosmic-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 mb-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {filterSections.map((section) => (
            <div key={section.id} className="flex-1 min-w-0">
              <label className="block text-sm font-medium text-text-secondary mb-2">
                <Icon name={section.icon} size={14} className="inline mr-1" />
                {section.label}
              </label>
              <select
                value={section.activeValue}
                onChange={(e) => onFilterChange(section.id, e.target.value)}
                className="w-full px-3 py-2 bg-cosmic-primary border border-border rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:border-transparent transition-all duration-200"
              >
                <option value="all">All {section.label}s</option>
                {section.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Results & Clear */}
        <div className="flex items-center justify-between lg:justify-end gap-4">
          <div className="text-sm text-text-secondary">
            <span className="font-medium text-electric-cyan">{projectCount}</span> projects found
          </div>
          
          {hasActiveFilters && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClearFilters}
              className="flex items-center space-x-2 px-3 py-2 bg-cosmic-primary border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-electric-cyan/30 transition-all duration-200"
            >
              <Icon name="X" size={14} />
              <span className="text-sm">Clear</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 pt-4 border-t border-border"
        >
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-text-secondary">Active filters:</span>
            {Object.entries(activeFilters).map(([key, value]) => {
              if (value === 'all') return null;
              
              const section = filterSections.find(s => s.id === key);
              return (
                <motion.div
                  key={`${key}-${value}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center space-x-1 px-2 py-1 bg-electric-cyan/10 border border-electric-cyan/20 rounded-md text-xs"
                >
                  <Icon name={section?.icon || 'Tag'} size={12} className="text-electric-cyan" />
                  <span className="text-electric-cyan">{value}</span>
                  <button
                    onClick={() => onFilterChange(key, 'all')}
                    className="text-electric-cyan hover:text-text-primary transition-colors duration-200"
                  >
                    <Icon name="X" size={10} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FilterBar;