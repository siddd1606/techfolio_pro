import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const contactDetails = [
    {
      id: 'email',
      label: 'Email Address',
      value: 'hello@techfolio-pro.dev',
      icon: 'Mail',
      type: 'email',
      action: 'mailto:hello@techfolio-pro.dev'
    },
    {
      id: 'phone',
      label: 'Phone Number',
      value: '+1 (555) 123-4567',
      icon: 'Phone',
      type: 'phone',
      action: 'tel:+15551234567'
    },
    {
      id: 'location',
      label: 'Location',
      value: 'San Francisco, CA',
      icon: 'MapPin',
      type: 'location',
      action: null
    },
    {
      id: 'timezone',
      label: 'Timezone',
      value: 'PST (UTC-8)',
      icon: 'Clock',
      type: 'timezone',
      action: null
    }
  ];

  const copyToClipboard = async (text, itemId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemId);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleAction = (item) => {
    if (item.action) {
      if (item.type === 'email' || item.type === 'phone') {
        window.location.href = item.action;
      }
    } else {
      copyToClipboard(item.value, item.id);
    }
  };

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
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
          Get In Touch
        </h3>
        <p className="text-text-secondary">
          Ready to collaborate? Here's how to reach me
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {contactDetails.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAction(item)}
            className={`
              bg-cosmic-surface border border-border rounded-xl p-4
              transition-all duration-300 hover:border-electric-cyan/50
              ${item.action || item.type === 'location' || item.type === 'timezone' ? 'cursor-pointer' : ''}
              group relative overflow-hidden
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-cosmic-primary/50 rounded-lg flex items-center justify-center group-hover:bg-electric-cyan/20 transition-colors duration-300">
                  <Icon
                    name={item.icon}
                    size={20}
                    className="text-text-secondary group-hover:text-electric-cyan transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="text-sm text-text-secondary font-medium">
                    {item.label}
                  </p>
                  <p className="text-text-primary font-semibold">
                    {item.value}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <AnimatePresence>
                  {copiedItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 10 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 10 }}
                      className="text-success text-sm font-medium"
                    >
                      Copied!
                    </motion.div>
                  )}
                </AnimatePresence>

                {(item.action || item.type === 'location' || item.type === 'timezone') && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon
                      name={
                        item.type === 'email' ? 'ExternalLink' :
                        item.type === 'phone'? 'ExternalLink' : 'Copy'
                      }
                      size={16}
                      className="text-text-secondary group-hover:text-electric-cyan transition-colors duration-300"
                    />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Hover effect background */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-electric-cyan/5 to-electric-purple/5 rounded-xl"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Quick copy buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="Copy"
          iconPosition="left"
          onClick={() => copyToClipboard('hello@techfolio-pro.dev', 'quick-email')}
          className="border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/10"
        >
          {copiedItem === 'quick-email' ? 'Email Copied!' : 'Copy Email'}
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="Calendar"
          iconPosition="left"
          onClick={() => window.open('https://calendly.com/techfolio-pro', '_blank')}
          className="border-electric-purple/30 text-electric-purple hover:bg-electric-purple/10"
        >
          Schedule Call
        </Button>
      </motion.div>

      {/* Availability status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-success/10 border border-success/20 rounded-xl p-4"
      >
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 bg-success rounded-full"
          />
          <div>
            <p className="text-success font-semibold text-sm">
              Available for New Opportunities
            </p>
            <p className="text-text-secondary text-xs">
              Open to full-time positions, freelance projects, and collaborations
            </p>
          </div>
        </div>
      </motion.div>

      {/* Response time info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center bg-cosmic-surface/30 border border-border/30 rounded-xl p-4"
      >
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Icon name="Clock" size={16} className="text-electric-cyan" />
          <span className="text-sm font-semibold text-text-primary">
            Quick Response Time
          </span>
        </div>
        <p className="text-xs text-text-secondary">
          I typically respond to emails within 4-6 hours during business days
        </p>
      </motion.div>
    </div>
  );
};

export default ContactInfo;