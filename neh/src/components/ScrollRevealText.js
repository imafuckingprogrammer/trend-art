import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const ScrollRevealText = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.8,
  direction = 'up',
  stagger = false,
  staggerDelay = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 75, x: 0 };
      case 'down':
        return { y: -75, x: 0 };
      case 'left':
        return { y: 0, x: 75 };
      case 'right':
        return { y: 0, x: -75 };
      case 'scale':
        return { y: 0, x: 0, scale: 0.8 };
      default:
        return { y: 75, x: 0 };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
        when: "beforeChildren",
        staggerChildren: stagger ? staggerDelay : 0,
      }
    }
  };

  const childVariants = stagger ? {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      }
    }
  } : {};

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {stagger ? (
        React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
};

export default ScrollRevealText; 