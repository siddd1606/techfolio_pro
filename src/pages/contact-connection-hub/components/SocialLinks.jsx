import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SocialLinks = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/techfolio-pro',
      icon: 'Github',
      color: '#333333',
      description: 'Explore my code',
      stats: '50+ repositories'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/techfolio-pro',
      icon: 'Linkedin',
      color: '#0077B5',
      description: "Let\'s connect professionally",
      stats: '500+ connections'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      url: 'https://twitter.com/techfolio_pro',
      icon: 'Twitter',
      color: '#1DA1F2',
      description: 'Follow my dev journey',
      stats: '1.2K followers'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com/techfolio.pro',
      icon: 'Instagram',
      color: '#E4405F',
      description: 'Behind the scenes',
      stats: '800+ followers'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: 'https://youtube.com/@techfolio-pro',
      icon: 'Youtube',
      color: '#FF0000',
      description: 'Coding tutorials',
      stats: '2.5K subscribers'
    },
    {
      id: 'discord',
      name: 'Discord',
      url: 'https://discord.gg/techfolio-pro',
      icon: 'MessageCircle',
      color: '#5865F2',
      description: 'Join the community',
      stats: 'Active daily'
    }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Let's Connect
        </h3>
        <p className="text-text-secondary">
          Find me across the digital landscape
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {socialLinks.map((link) => (
          <motion.div
            key={link.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredLink(link.id)}
            onHoverEnd={() => setHoveredLink(null)}
            onClick={() => handleLinkClick(link.url)}
            className="relative group cursor-pointer"
          >
            <div className={`
              bg-cosmic-surface border border-border rounded-xl p-4 h-full
              transition-all duration-300 hover:border-electric-cyan/50
              ${hoveredLink === link.id ? 'shadow-lg shadow-electric-cyan/20' : ''}
            `}>
              <div className="flex flex-col items-center text-center space-y-3">
                <motion.div
                  animate={{
                    backgroundColor: hoveredLink === link.id ? link.color : 'transparent',
                    scale: hoveredLink === link.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-lg flex items-center justify-center border border-border/50"
                >
                  <Icon
                    name={link.icon}
                    size={24}
                    className={`transition-colors duration-300 ${
                      hoveredLink === link.id ? 'text-white' : 'text-text-secondary'
                    }`}
                  />
                </motion.div>

                <div>
                  <h4 className="font-semibold text-text-primary text-sm">
                    {link.name}
                  </h4>
                  <p className="text-xs text-text-secondary mt-1">
                    {link.stats}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredLink === link.id ? 1 : 0,
                    height: hoveredLink === link.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-electric-cyan font-medium">
                    {link.description}
                  </p>
                </motion.div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredLink === link.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${link.color}20, transparent)`,
                  pointerEvents: 'none'
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-cosmic-surface/50 border border-border/50 rounded-xl p-4"
      >
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-electric-cyan">5.2K+</div>
            <div className="text-xs text-text-secondary">Total Followers</div>
          </div>
          <div>
            <div className="text-lg font-bold text-electric-purple">150+</div>
            <div className="text-xs text-text-secondary">Posts & Updates</div>
          </div>
          <div>
            <div className="text-lg font-bold text-success">98%</div>
            <div className="text-xs text-text-secondary">Response Rate</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialLinks;