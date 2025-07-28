/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fdfdfd',
          300: '#fcfcfc',
          400: '#fafafa',
          500: '#f8f8f8',
          600: '#f0f0f0',
          700: '#e8e8e8',
          800: '#d0d0d0',
          900: '#a8a8a8',
          950: '#808080',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        neutral: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        text: {
          primary: '#0a0a0a',
          secondary: '#525252',
          tertiary: '#a3a3a3',
          inverse: '#ffffff',
        }
      },
      fontFamily: {
        'display': ['"Inter"', '"SF Pro Display"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        'body': ['"Inter"', '"SF Pro Text"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        'mono': ['"SF Mono"', '"Monaco"', '"Consolas"', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '900' }],
        'display-xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-md': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'heading-lg': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'heading-md': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.005em', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
        // Intelligent section spacing
        'section': '5rem',      // Default section padding
        'section-lg': '7rem',   // Large section padding
        'content': '3rem',      // Content block spacing
        'element': '1.5rem',    // Element spacing
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.25, 0.4, 0.25, 1) forwards',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.25, 0.4, 0.25, 1) forwards',
        'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.25, 0.4, 0.25, 1) forwards',
        'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.25, 0.4, 0.25, 1) forwards',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.25, 0.4, 0.25, 1) forwards',
        'marquee': 'marquee 60s linear infinite',
        'marquee-reverse': 'marquee-reverse 60s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.25, 0.4, 0.25, 1)',
        'bounce-hard': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -3px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'hard': '0 10px 40px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
} 