import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const watchedFields = watch();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success animation
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    blur: {
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-cosmic-surface border border-success/20 rounded-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Icon name="CheckCircle" size={32} className="text-success" />
        </motion.div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-text-secondary">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            className="relative"
          >
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              error={errors.name?.message}
              required
              {...register('name', {
                required: 'Full name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                }
              })}
              className="transition-all duration-300"
            />
            <AnimatePresence>
              {watchedFields.name && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-3 top-9"
                >
                  <Icon 
                    name="User" 
                    size={16} 
                    className="text-electric-cyan opacity-60" 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            className="relative"
          >
            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              error={errors.email?.message}
              required
              {...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              className="transition-all duration-300"
            />
            <AnimatePresence>
              {watchedFields.email && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-3 top-9"
                >
                  <Icon 
                    name="Mail" 
                    size={16} 
                    className="text-electric-cyan opacity-60" 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <motion.div
          variants={inputVariants}
          whileFocus="focus"
          className="relative"
        >
          <Input
            label="Subject"
            type="text"
            placeholder="What's this about?"
            error={errors.subject?.message}
            required
            {...register('subject', {
              required: 'Subject is required',
              minLength: {
                value: 5,
                message: 'Subject must be at least 5 characters'
              }
            })}
            className="transition-all duration-300"
          />
          <AnimatePresence>
            {watchedFields.subject && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-3 top-9"
              >
                <Icon 
                  name="MessageSquare" 
                  size={16} 
                  className="text-electric-cyan opacity-60" 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <motion.div
          variants={inputVariants}
          whileFocus="focus"
          className="relative"
        >
          <label className="block text-sm font-medium text-text-primary mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            placeholder="Tell me about your project, opportunity, or just say hello..."
            rows={6}
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters'
              }
            })}
            className={`w-full px-4 py-3 bg-cosmic-surface border rounded-lg text-text-primary placeholder-text-secondary/60 transition-all duration-300 resize-none focus:outline-none focus:ring-2 focus:ring-electric-cyan/50 focus:border-electric-cyan ${
              errors.message ? 'border-error' : 'border-border hover:border-border/80'
            }`}
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-error flex items-center gap-1"
            >
              <Icon name="AlertCircle" size={14} />
              {errors.message.message}
            </motion.p>
          )}
          <AnimatePresence>
            {watchedFields.message && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-3 top-12"
              >
                <Icon 
                  name="FileText" 
                  size={16} 
                  className="text-electric-cyan opacity-60" 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
          iconName={isSubmitting ? "Loader2" : "Send"}
          iconPosition="right"
          className="bg-gradient-to-r from-electric-cyan to-electric-purple hover:from-electric-cyan/90 hover:to-electric-purple/90 text-cosmic-primary font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="text-center"
      >
        <p className="text-sm text-text-secondary">
          I typically respond within 24 hours. Looking forward to connecting!
        </p>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;