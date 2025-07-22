import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import SocialLinks from './components/SocialLinks';
import ContactInfo from './components/ContactInfo';
import InteractiveBackground from './components/InteractiveBackground';
import AvailabilityStatus from './components/AvailabilityStatus';

const ContactConnectionHub = () => {
  useEffect(() => {
    // Smooth scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - TechFolio Pro | Let's Connect & Collaborate</title>
        <meta 
          name="description" 
          content="Ready to collaborate? Get in touch with TechFolio Pro for opportunities, projects, or just to say hello. Quick response guaranteed." 
        />
        <meta name="keywords" content="contact, collaboration, opportunities, hire developer, tech projects" />
        <meta property="og:title" content="Contact - TechFolio Pro | Let's Connect & Collaborate" />
        <meta property="og:description" content="Ready to collaborate? Get in touch for opportunities, projects, or just to say hello." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://techfolio-pro.dev/contact-connection-hub" />
      </Helmet>

      <div className="min-h-screen bg-cosmic-primary text-text-primary relative overflow-hidden">
        <Header />
        <InteractiveBackground />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="pt-24 lg:pt-32 pb-16 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-electric-cyan/10 border border-electric-cyan/20 rounded-full px-4 py-2 mb-6"
                >
                  <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse" />
                  <span className="text-electric-cyan text-sm font-medium">
                    Available for New Opportunities
                  </span>
                </motion.div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-text-primary via-electric-cyan to-electric-purple bg-clip-text text-transparent">
                  Let's Create Something
                  <br />
                  <span className="text-electric-cyan">Amazing Together</span>
                </h1>
                
                <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                  Ready to collaborate on your next project? Whether it's a full-time opportunity, 
                  freelance work, or just a friendly chat about technology, I'd love to hear from you.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Main Content */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pb-20 px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Form - Main Column */}
                <motion.div
                  variants={sectionVariants}
                  className="lg:col-span-2"
                >
                  <div className="bg-cosmic-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-2xl">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-text-primary mb-2">
                        Send Me a Message
                      </h2>
                      <p className="text-text-secondary">
                        Fill out the form below and I'll get back to you as soon as possible.
                      </p>
                    </div>
                    <ContactForm />
                  </div>
                </motion.div>

                {/* Sidebar */}
                <motion.div
                  variants={sectionVariants}
                  className="space-y-8"
                >
                  {/* Contact Information */}
                  <div className="bg-cosmic-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-2xl">
                    <ContactInfo />
                  </div>

                  {/* Social Links */}
                  <div className="bg-cosmic-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-2xl">
                    <SocialLinks />
                  </div>
                </motion.div>
              </div>

              {/* Availability Status - Full Width */}
              <motion.div
                variants={sectionVariants}
                className="mt-12"
              >
                <div className="bg-cosmic-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-2xl">
                  <AvailabilityStatus />
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                variants={sectionVariants}
                className="mt-12 text-center"
              >
                <div className="bg-gradient-to-r from-electric-cyan/10 to-electric-purple/10 border border-electric-cyan/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    Ready to Start a Conversation?
                  </h3>
                  <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                    Whether you have a specific project in mind, want to discuss opportunities, 
                    or just want to connect with a fellow developer, I'm always excited to meet new people 
                    and explore potential collaborations.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.a
                      href="mailto:hello@techfolio-pro.dev"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 bg-electric-cyan text-cosmic-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-electric-cyan/90"
                    >
                      <span>Email Me Directly</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://calendly.com/techfolio-pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 bg-transparent border border-electric-purple text-electric-purple px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-electric-purple/10"
                    >
                      <span>Schedule a Call</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-border bg-cosmic-surface/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-text-secondary text-sm">
                © {new Date().getFullYear()} TechFolio Pro. Crafted with passion and precision.
              </p>
              <p className="text-text-secondary text-xs mt-2">
                Built with React, Tailwind CSS, and lots of ☕
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactConnectionHub;