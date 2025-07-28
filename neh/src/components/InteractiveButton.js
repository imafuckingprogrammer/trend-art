import React from 'react';
import { motion } from 'framer-motion';

const InteractiveButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  href,
  target,
  disabled = false,
  ...props 
}) => {
  const variants = {
    primary: {
      base: 'bg-text-primary text-white border-text-primary',
      hover: 'bg-neutral-800 border-neutral-800',
    },
    secondary: {
      base: 'bg-transparent text-text-primary border-text-primary',
      hover: 'bg-text-primary text-white',
    },
    accent: {
      base: 'bg-accent-500 text-white border-accent-500',
      hover: 'bg-accent-600 border-accent-600',
    },
    ghost: {
      base: 'bg-transparent text-text-primary border-transparent',
      hover: 'bg-neutral-100 border-neutral-100',
    }
  };

  const sizes = {
    sm: 'px-4 py-2 text-body-sm',
    md: 'px-6 py-3 text-body-md',
    lg: 'px-8 py-4 text-body-lg',
    xl: 'px-10 py-5 text-heading-md',
  };

  const baseClasses = `
    inline-flex items-center justify-center 
    border rounded-full font-medium
    transition-all duration-300 ease-out
    transform-gpu will-change-transform
    focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant].base}
    ${sizes[size]}
    ${className}
  `;

  const Component = href ? motion.a : motion.button;

  const commonProps = {
    className: baseClasses,
    whileHover: disabled ? {} : { 
      scale: 1.02,
      y: -1,
      transition: { duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }
    },
    whileTap: disabled ? {} : { 
      scale: 0.98,
      y: 0,
      transition: { duration: 0.1, ease: [0.25, 0.4, 0.25, 1] }
    },
    initial: { scale: 1, y: 0 },
    disabled,
    ...props
  };

  if (href) {
    return (
      <Component
        href={href}
        target={target}
        {...commonProps}
      >
        <motion.span
          className="relative z-10"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </Component>
    );
  }

  return (
    <Component
      onClick={onClick}
      {...commonProps}
    >
      <motion.span
        className="relative z-10"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </Component>
  );
};

export default InteractiveButton;