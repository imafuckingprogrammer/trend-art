import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ isVisible, imageUrl, cursorText }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9998]"
      style={{
        left: mousePosition.x - 80,
        top: mousePosition.y - 80,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1
      }}
      exit={{ 
        scale: 0, 
        opacity: 0
      }}
      transition={{ 
        duration: 0.2, 
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      <div className="relative w-40 h-40">
        <div className="w-full h-full overflow-hidden shadow-hard rounded-lg">
          <img 
            src={imageUrl} 
            alt="Service preview"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-accent-500/10 blur-xl -z-10 rounded-lg"></div>
      </div>
    </motion.div>
  );
};

export default CustomCursor;