import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const trailRef = useRef([]);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const trail = [];
    const trailLength = 20;
    
    // Initialize trail points
    for (let i = 0; i < trailLength; i++) {
      trail.push({ x: 0, y: 0, opacity: 0 });
    }
    trailRef.current = trail;

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const updateTrail = () => {
      const trail = trailRef.current;
      
      // Update trail positions
      for (let i = trail.length - 1; i > 0; i--) {
        trail[i].x = trail[i - 1].x;
        trail[i].y = trail[i - 1].y;
        trail[i].opacity = (1 - i / trail.length) * 0.8;
      }
      
      // Set first point to mouse position
      trail[0].x = mouseRef.current.x;
      trail[0].y = mouseRef.current.y;
      trail[0].opacity = 0.8;

      // Update DOM elements
      trail.forEach((point, index) => {
        const element = document.querySelector(`[data-trail-index="${index}"]`);
        if (element) {
          element.style.left = `${point.x}px`;
          element.style.top = `${point.y}px`;
          element.style.opacity = point.opacity;
        }
      });

      animationRef.current = requestAnimationFrame(updateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    updateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {trailRef.current.map((_, index) => (
        <div
          key={index}
          data-trail-index={index}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-electric-cyan to-electric-purple transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-100"
          style={{
            left: '0px',
            top: '0px',
            opacity: 0,
            transform: `translate(-50%, -50%) scale(${1 - index * 0.05})`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;