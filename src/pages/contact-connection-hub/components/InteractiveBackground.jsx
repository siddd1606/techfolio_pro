import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    const createParticles = () => {
      const particles = [];
      for (let i = 0; i < 20; i++) {
        particles.push({
          id: i,
          x: Math.random() * container.offsetWidth,
          y: Math.random() * container.offsetHeight,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
      return particles;
    };

    particlesRef.current = createParticles();

    const animateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= container.offsetWidth) {
          particle.speedX *= -1;
        }
        if (particle.y <= 0 || particle.y >= container.offsetHeight) {
          particle.speedY *= -1;
        }

        // Keep particles within bounds
        particle.x = Math.max(0, Math.min(container.offsetWidth, particle.x));
        particle.y = Math.max(0, Math.min(container.offsetHeight, particle.y));
      });
    };

    const interval = setInterval(animateParticles, 50);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Attract particles to mouse
    particlesRef.current.forEach(particle => {
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.speedX += (dx / distance) * force * 0.01;
        particle.speedY += (dy / distance) * force * 0.01;
      }
    });
  };

  const geometricShapes = [
    { type: 'circle', size: 60, x: '10%', y: '20%', delay: 0 },
    { type: 'square', size: 40, x: '85%', y: '15%', delay: 0.5 },
    { type: 'triangle', size: 50, x: '15%', y: '80%', delay: 1 },
    { type: 'circle', size: 30, x: '90%', y: '70%', delay: 1.5 },
    { type: 'square', size: 35, x: '70%', y: '85%', delay: 2 },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 via-transparent to-electric-purple/5" />

      {/* Animated geometric shapes */}
      {geometricShapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size
          }}
        >
          {shape.type === 'circle' && (
            <div className="w-full h-full rounded-full border border-electric-cyan/20 bg-electric-cyan/5" />
          )}
          {shape.type === 'square' && (
            <div className="w-full h-full border border-electric-purple/20 bg-electric-purple/5 rotate-45" />
          )}
          {shape.type === 'triangle' && (
            <div className="w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,10 90,90 10,90"
                  fill="rgba(139, 92, 246, 0.05)"
                  stroke="rgba(139, 92, 246, 0.2)"
                  strokeWidth="1"
                />
              </svg>
            </div>
          )}
        </motion.div>
      ))}

      {/* Floating particles */}
      {particlesRef.current.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-electric-cyan/30"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity
          }}
          animate={{
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-electric-cyan"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-cosmic-primary/20" />
    </div>
  );
};

export default InteractiveBackground;