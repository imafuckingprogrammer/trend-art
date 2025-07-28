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
        left: mousePosition.x - 64,
        top: mousePosition.y - 64,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="relative w-32 h-32">
        {/* Image */}
        <motion.div
          className="w-full h-full rounded-full overflow-hidden shadow-hard border-4 border-white"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.1 }}
        >
          <img 
            src={imageUrl} 
            alt="Service preview"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Text Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span 
            className="text-white font-bold text-xs bg-text-primary/80 px-3 py-1 rounded-full backdrop-blur-sm"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {cursorText}
          </motion.span>
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-accent-500/20 blur-lg -z-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default CustomCursor;