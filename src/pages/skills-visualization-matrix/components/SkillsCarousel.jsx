import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const skillDemos = [
    {
      id: 1,
      title: "React Component Architecture",
      description: "Building scalable, reusable components with proper state management and lifecycle optimization.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      tech: ["React", "JavaScript", "CSS"],
      metrics: { performance: "95%", reusability: "90%", maintainability: "88%" }
    },
    {
      id: 2,
      title: "API Integration & Data Flow",
      description: "Implementing robust API connections with error handling, caching, and real-time updates.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=600&h=400&fit=crop",
      tech: ["Node.js", "REST API", "WebSocket"],
      metrics: { reliability: "99%", speed: "150ms", uptime: "99.9%" }
    },
    {
      id: 3,
      title: "Database Design & Optimization",
      description: "Creating efficient database schemas with optimized queries and proper indexing strategies.",
      image: "https://images.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg?w=600&h=400&fit=crop",
      tech: ["MongoDB", "PostgreSQL", "Redis"],
      metrics: { queryTime: "50ms", storage: "Optimized", scalability: "High" }
    },
    {
      id: 4,
      title: "UI/UX Implementation",
      description: "Translating designs into pixel-perfect, responsive interfaces with smooth animations.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      tech: ["Tailwind", "Framer Motion", "Figma"],
      metrics: { responsiveness: "100%", accessibility: "WCAG AA", performance: "98%" }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % skillDemos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, skillDemos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillDemos.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skillDemos.length) % skillDemos.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-cosmic-surface border border-border rounded-2xl p-8 mb-16"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Skills in Action</h3>
        <p className="text-text-secondary">Real project demonstrations and implementation examples</p>
      </div>

      <div className="relative overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-text-primary mb-3">
                    {skillDemos[currentSlide].title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {skillDemos[currentSlide].description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h5 className="text-sm font-semibold text-electric-cyan mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {skillDemos[currentSlide].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cosmic-primary border border-border rounded-full text-xs font-medium text-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h5 className="text-sm font-semibold text-electric-cyan mb-3">Performance Metrics</h5>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(skillDemos[currentSlide].metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-success font-mono">{value}</div>
                        <div className="text-xs text-text-secondary capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden bg-cosmic-primary">
                  <img
                    src={skillDemos[currentSlide].image}
                    alt={skillDemos[currentSlide].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/images/no_image.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-primary/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 bg-electric-cyan/90 backdrop-blur-sm rounded-full flex items-center justify-center text-cosmic-primary hover:bg-electric-cyan transition-colors duration-300"
                  >
                    <Icon name="Play" size={24} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="w-10 h-10 bg-cosmic-surface/80 backdrop-blur-sm border border-border hover:bg-cosmic-surface hover:border-electric-cyan text-text-primary"
          >
            <Icon name="ChevronLeft" size={20} />
          </Button>
        </div>
        
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="w-10 h-10 bg-cosmic-surface/80 backdrop-blur-sm border border-border hover:bg-cosmic-surface hover:border-electric-cyan text-text-primary"
          >
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {skillDemos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-electric-cyan scale-125' :'bg-border hover:bg-text-secondary'
            }`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="flex items-center space-x-2 px-3 py-1 text-xs text-text-secondary hover:text-text-primary transition-colors duration-300"
        >
          <Icon name={isAutoPlaying ? "Pause" : "Play"} size={14} />
          <span>{isAutoPlaying ? "Pause" : "Play"} Auto-scroll</span>
        </button>
      </div>
    </motion.div>
  );
};

export default SkillsCarousel;