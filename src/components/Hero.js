import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';
import InteractiveButton from './InteractiveButton';
import MagneticButton from './MagneticButton';
import FloatingElement from './FloatingElement';

const Hero = () => {
  const containerRef = useRef(null);

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              className="relative"
              animate={{
                scale: [1, 1.02, 1],
                filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-primary leading-none tracking-tight">
                <motion.div
                  className="block"
                  style={{ 
                    animation: "float 4s ease-in-out infinite"
                  }}
                >
                  DIGITAL
                </motion.div>
                <motion.div
                  className="block bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 bg-clip-text text-transparent"
                  style={{ 
                    animation: "bounce 3s ease-in-out infinite 0.5s"
                  }}
                >
                  INNOVATION
                </motion.div>
                <motion.div
                  className="block"
                  style={{ 
                    animation: "wiggle 5s ease-in-out infinite 1s"
                  }}
                >
                  REDEFINED
                </motion.div>
              </h1>
            </motion.div>

            {/* Interactive Text Element */}
            <MagneticButton intensity={0.1} className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="px-4 sm:px-6 py-2 border border-neutral-300 rounded-full bg-white/60 backdrop-blur-sm mx-4"
              >
                <span className="text-sm sm:text-body-md font-medium text-text-secondary">
                  Where creativity meets technology
                </span>
              </motion.div>
            </MagneticButton>
          </div>

          {/* Subtitle */}
          <TextReveal delay={0.8} duration={1} className="max-w-3xl mx-auto px-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-body text-text-secondary leading-relaxed">
              We craft extraordinary digital experiences that push boundaries, 
              drive engagement, and transform brands into industry leaders.
            </p>
          </TextReveal>

          {/* Action Buttons */}
          <TextReveal delay={1.2} direction="scale" duration={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 px-4">
              <InteractiveButton 
                variant="primary" 
                size="lg"
                href="/contact"
                className="font-medium w-full sm:w-auto sm:min-w-48"
              >
                Start Your Project
              </InteractiveButton>
              <InteractiveButton 
                variant="secondary" 
                size="lg"
                href="/work"
                className="font-medium w-full sm:w-auto sm:min-w-48"
              >
                View Our Work
              </InteractiveButton>
            </div>
          </TextReveal>

        </motion.div>
      </div>

      {/* Static Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-accent-400/10 to-accent-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;