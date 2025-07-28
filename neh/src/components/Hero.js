import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import TextReveal from './TextReveal';
import InteractiveButton from './InteractiveButton';
import MagneticButton from './MagneticButton';
import FloatingElement from './FloatingElement';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
        
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.4, 0.25, 1],
        staggerChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const interactiveElements = [
    { x: '10%', y: '20%', size: 'w-2 h-2', delay: 0 },
    { x: '90%', y: '15%', size: 'w-1 h-1', delay: 0.5 },
    { x: '85%', y: '80%', size: 'w-3 h-3', delay: 1 },
    { x: '15%', y: '85%', size: 'w-1.5 h-1.5', delay: 1.5 },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-primary-50 flex items-center justify-center overflow-hidden"
    >
      {/* Floating Interactive Elements */}
      {interactiveElements.map((element, index) => (
        <FloatingElement
          key={index}
          duration={6 + index}
          intensity={8 + index * 2}
          delay={element.delay}
          direction="both"
          className={`absolute ${element.size} bg-accent-500/20 rounded-full blur-sm`}
          style={{
            left: element.x,
            top: element.y,
          }}
        />
      ))}

      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 opacity-50" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="space-y-8 lg:space-y-12"
        >
          {/* Main Headline */}
          <div className="space-y-4 lg:space-y-6">
            <motion.div
              variants={wordVariants}
              style={{ rotateX, rotateY, transformPerspective: 1200 }}
              className="relative"
            >
              <h1 className="font-display font-black text-display-lg lg:text-display-xl xl:text-display-2xl text-text-primary leading-none tracking-tight">
                <TextReveal
                  splitWords={true}
                  stagger={true}
                  staggerDelay={0.1}
                  duration={0.8}
                  className="block"
                >
                  DIGITAL
                </TextReveal>
                <TextReveal
                  splitWords={true}
                  stagger={true}
                  staggerDelay={0.15}
                  duration={0.8}
                  delay={0.2}
                  className="block bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 bg-clip-text text-transparent"
                >
                  INNOVATION
                </TextReveal>
                <TextReveal
                  splitWords={true}
                  stagger={true}
                  staggerDelay={0.1}
                  duration={0.8}
                  delay={0.4}
                  className="block"
                >
                  REDEFINED
                </TextReveal>
              </h1>
            </motion.div>

            {/* Interactive Text Element */}
            <MagneticButton intensity={0.1} className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-2 border border-neutral-300 rounded-full bg-white/60 backdrop-blur-sm"
              >
                <span className="text-body-md font-medium text-text-secondary">
                  Where creativity meets technology
                </span>
              </motion.div>
            </MagneticButton>
          </div>

          {/* Subtitle */}
          <TextReveal delay={0.8} duration={1} className="max-w-3xl mx-auto">
            <p className="text-heading-lg lg:text-heading-lg font-body text-text-secondary leading-relaxed">
              We craft extraordinary digital experiences that push boundaries, 
              drive engagement, and transform brands into industry leaders.
            </p>
          </TextReveal>

          {/* Action Buttons */}
          <TextReveal delay={1.2} direction="scale" duration={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8">
              <InteractiveButton 
                variant="primary" 
                size="lg"
                href="/contact"
                className="font-medium min-w-48"
              >
                Start Your Project
              </InteractiveButton>
              <InteractiveButton 
                variant="secondary" 
                size="lg"
                href="/work"
                className="font-medium min-w-48"
              >
                View Our Work
              </InteractiveButton>
            </div>
          </TextReveal>

          {/* Scroll Indicator */}
          <TextReveal delay={1.8} direction="fade" duration={0.6}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-body-sm text-text-tertiary font-medium tracking-wide">
                  SCROLL TO EXPLORE
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-text-tertiary to-transparent"></div>
              </div>
            </motion.div>
          </TextReveal>
        </motion.div>
      </div>

      {/* Parallax Background Elements */}
      <motion.div
        style={{ x: useTransform(x, [-300, 300], [-20, 20]) }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ x: useTransform(x, [-300, 300], [30, -30]) }}
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-accent-400/10 to-accent-500/5 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;