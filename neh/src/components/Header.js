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

  const navItemVariants = {
    initial: { y: 0 },
    hover: { 
      y: -2,
      transition: { duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-primary-50/95 backdrop-blur-xl border-b border-neutral-200 shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <MagneticButton intensity={0.2}>
              <motion.div
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-text-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">T</span>
                </div>
                <span className="font-display font-bold text-xl lg:text-2xl text-text-primary tracking-tight">
                  TREND ART
                </span>
              </motion.div>
            </MagneticButton>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name} 
                variants={navItemVariants} 
                initial="initial" 
                whileHover="hover"
                animate={{
                  y: [0, -1, 0],
                }}
                transition={{
                  duration: 2 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              >
                <Link
                  to={item.path}
                  className={`relative font-body font-medium text-body-md tracking-wide transition-all duration-300 group ${
                    location.pathname === item.path
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500 rounded-full"
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    />
                  )}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-300 rounded-full opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <MagneticButton intensity={0.4}>
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
                    '0 6px 20px 0 rgba(0, 0, 0, 0.15)',
                    '0 4px 14px 0 rgba(0, 0, 0, 0.1)'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <InteractiveButton 
                  variant="primary" 
                  size="md"
                  href="/contact"
                  className="font-medium relative overflow-hidden"
                >
                  <motion.span
                    animate={{ x: [0, 2, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Let's Talk
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </InteractiveButton>
              </motion.div>
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
              className="lg:hidden overflow-hidden bg-primary-50/98 backdrop-blur-xl border-t border-neutral-200"
            >
              <div className="py-8 space-y-6">
                {navItems.map((item, index) => (
                  <motion.div key={item.name} variants={mobileItemVariants}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-heading-lg font-medium transition-colors duration-200 ${
                        location.pathname === item.path
                          ? 'text-text-primary'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={mobileItemVariants} className="pt-4">
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