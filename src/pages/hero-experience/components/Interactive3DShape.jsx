import React, { useRef, useEffect, useState } from 'react';

const Interactive3DShape = () => {
  const containerRef = useRef(null);
  const shapeRef = useRef(null);
  const animationRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const shape = shapeRef.current;
    if (!container || !shape) return;

    let autoRotation = { x: 0, y: 0 };
    let targetRotation = { x: 0, y: 0 };

    const animate = () => {
      if (!isInteracting) {
        autoRotation.x += 0.005;
        autoRotation.y += 0.003;
        targetRotation = autoRotation;
      }

      // Smooth interpolation
      rotation.x += (targetRotation.x - rotation.x) * 0.1;
      rotation.y += (targetRotation.y - rotation.y) * 0.1;

      shape.style.transform = `
        perspective(1000px) 
        rotateX(${rotation.x}rad) 
        rotateY(${rotation.y}rad)
        scale(${isInteracting ? 1.1 : 1})
      `;

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      if (!isInteracting) return;
      
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      
      targetRotation.x = deltaY * Math.PI * 0.3;
      targetRotation.y = deltaX * Math.PI * 0.3;
    };

    const handleMouseEnter = () => {
      setIsInteracting(true);
    };

    const handleMouseLeave = () => {
      setIsInteracting(false);
      targetRotation = autoRotation;
    };

    animate();

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isInteracting, rotation]);

  return (
    <div 
      ref={containerRef}
      className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto cursor-pointer"
    >
      <div
        ref={shapeRef}
        className="w-full h-full transition-all duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Dodecahedron faces */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-electric-cyan/30 bg-gradient-to-br from-electric-cyan/10 to-electric-purple/10 backdrop-blur-sm"
            style={{
              transform: `
                rotateY(${i * 30}deg) 
                rotateX(${(i % 3) * 60}deg) 
                translateZ(120px)
              `,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-transparent" />
          </div>
        ))}
        
        {/* Center core */}
        <div className="absolute inset-1/4 bg-gradient-to-br from-electric-cyan/20 to-electric-purple/20 rounded-full blur-sm animate-pulse-glow" />
        
        {/* Orbital rings */}
        <div className="absolute inset-0 border-2 border-electric-cyan/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-8 border border-electric-purple/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
      </div>
      
      {/* Interaction hint */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-text-secondary font-mono opacity-60">
        {isInteracting ? 'Interacting...' : 'Hover to interact'}
      </div>
    </div>
  );
};

export default Interactive3DShape;