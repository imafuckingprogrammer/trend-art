import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import InteractiveButton from './InteractiveButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }
    }
  };


  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1],
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <MagneticButton intensity={0.2}>
              <motion.div
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center space-x-3"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-text-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-base sm:text-lg lg:text-xl">T</span>
                </div>
                <span className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-text-primary tracking-tight">
                  TREND ART
                </span>
              </motion.div>
            </MagneticButton>
          </Link>

          {/* Desktop Navigation - Clean Tab Style */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 sm:p-1.5 border border-neutral-200 shadow-soft gap-0.5 sm:gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative"
                >
                  <motion.div
                    className={`px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full font-medium text-sm sm:text-body-md transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-text-primary text-white shadow-soft'
                        : 'text-text-secondary hover:text-text-primary hover:bg-neutral-100'
                    }`}
                    whileHover={{ 
                      scale: location.pathname !== item.path ? 1.05 : 1,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <MagneticButton intensity={0.4}>
              <InteractiveButton 
                variant="primary" 
                size="md"
                href="/contact"
                className="font-medium"
              >
                Let's Talk
              </InteractiveButton>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 relative">
              <motion.span
                className="absolute left-0 w-6 h-0.5 bg-text-primary origin-center"
                style={{ top: '8px' }}
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 4 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              />
              <motion.span
                className="absolute left-0 top-3 w-6 h-0.5 bg-text-primary"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  x: isMobileMenuOpen ? 10 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 w-6 h-0.5 bg-text-primary origin-center"
                style={{ top: '16px' }}
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -4 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-neutral-200 shadow-lg"
            >
              <div className="py-6 sm:py-8 space-y-4 sm:space-y-6 px-4 sm:px-6">
                {navItems.map((item, index) => (
                  <motion.div key={item.name} variants={mobileItemVariants}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-lg sm:text-xl font-medium transition-colors duration-200 py-2 ${
                        location.pathname === item.path
                          ? 'text-text-primary border-l-4 border-accent-500 pl-4'
                          : 'text-text-secondary hover:text-text-primary hover:pl-2'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={mobileItemVariants} className="pt-6 px-4 sm:px-0">
                  <InteractiveButton 
                    variant="primary" 
                    size="lg"
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full font-medium"
                  >
                    Let's Talk
                  </InteractiveButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 