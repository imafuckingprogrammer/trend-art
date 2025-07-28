import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ 
  children, 
  duration = 6, 
  intensity = 10,
  delay = 0,
  className = '',
  direction = 'y',
  ...props 
}) => {
  const getFloatAnimation = () => {
    switch (direction) {
      case 'x':
        return {
          x: [-intensity, intensity, -intensity],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay
          }
        };
      case 'y':
        return {
          y: [-intensity, intensity, -intensity],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay
          }
        };
      case 'both':
        return {
          x: [-intensity/2, intensity/2, -intensity/2],
          y: [-intensity, intensity, -intensity],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay
          }
        };
      case 'rotate':
        return {
          rotate: [-intensity/4, intensity/4, -intensity/4],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay
          }
        };
      default:
        return {
          y: [-intensity, intensity, -intensity],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay
          }
        };
    }
  };

  return (
    <motion.div
      className={className}
      animate={getFloatAnimation()}
      initial={{ 
        x: 0, 
        y: 0, 
        rotate: 0 
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;