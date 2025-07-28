import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ isVisible, targetPage, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete(), 300);
            return 100;
          }
          return prev + 2;
        });
      }, 20);

      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="fixed inset-0 z-[9999] bg-primary-50 flex flex-col items-center justify-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-accent-500 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-32 right-32 w-40 h-40 bg-accent-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent-600 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex items-center justify-center space-x-3 mb-8"
            >
              <div className="w-12 h-12 bg-text-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-display font-bold text-2xl text-text-primary tracking-tight">
                TREND ART
              </span>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="space-y-2"
            >
              <h2 className="text-heading-lg font-display font-semibold text-text-primary">
                Switching the page for ya
              </h2>
              <p className="text-body-lg text-text-secondary">
                Getting {targetPage} ready...
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '200px', opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mx-auto"
            >
              <div className="h-1 bg-neutral-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-500 via-accent-400 to-accent-600 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="text-body-sm text-text-tertiary mt-2 text-center"
              >
                {progress}%
              </motion.p>
            </motion.div>

            {/* Loading Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="flex space-x-2 justify-center"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-accent-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;