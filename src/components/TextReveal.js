import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const TextReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.8,
  direction = 'up',
  stagger = false,
  staggerDelay = 0.1,
  splitWords = false,
  splitChars = false,
  threshold = 0.1,
  margin = "-50px"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 60, x: 0 };
      case 'down':
        return { y: -60, x: 0 };
      case 'left':
        return { y: 0, x: 60 };
      case 'right':
        return { y: 0, x: -60 };
      case 'scale':
        return { y: 0, x: 0, scale: 0.8 };
      case 'fade':
        return { y: 0, x: 0 };
      default:
        return { y: 60, x: 0 };
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

  const childVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      scale: direction === 'scale' ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration * 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      }
    }
  };

  const renderContent = () => {
    if (splitChars && typeof children === 'string') {
      return children.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ));
    }

    if (splitWords && typeof children === 'string') {
      return children.split(' ').map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ));
    }

    if (stagger && React.Children.count(children) > 1) {
      return React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ));
    }

    return children;
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {renderContent()}
    </motion.div>
  );
};

export default TextReveal;