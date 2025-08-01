import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Brand Strategy',
    'Web Development',
    'Digital Marketing',
    'UI/UX Design'
  ];

  const socialLinks = [
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Dribbble', url: '#' }
  ];

  return (
    <footer className="bg-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-heading-lg font-display font-bold text-white">
                TREND ART
              </h2>
            </Link>
            <p className="text-base sm:text-body-lg text-neutral-400 leading-relaxed mb-6 sm:mb-8 max-w-md">
              Leading marketing agency specializing in digital innovation, 
              brand strategy, and cutting-edge creative solutions.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="text-neutral-500 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  aria-label={social.name}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xs sm:text-body-sm font-medium text-white mb-4 sm:mb-6 tracking-wide uppercase">
              Navigation
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm sm:text-body-md"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xs sm:text-body-sm font-medium text-white mb-4 sm:mb-6 tracking-wide uppercase">
              Services
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-neutral-400 text-sm sm:text-body-md">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-neutral-700 pt-8 sm:pt-12 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="text-xs sm:text-body-sm font-medium text-white mb-2 sm:mb-3 tracking-wide uppercase">
                Email
              </h4>
              <a
                href="mailto:hello@trendart.agency"
                className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm sm:text-body-md break-all"
              >
                hello@trendart.agency
              </a>
            </div>
            <div>
              <h4 className="text-xs sm:text-body-sm font-medium text-white mb-2 sm:mb-3 tracking-wide uppercase">
                Phone
              </h4>
              <a
                href="tel:+1234567890"
                className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm sm:text-body-md block"
              >
                +1 (234) 567-8900
              </a>
            </div>
            <div>
              <h4 className="text-xs sm:text-body-sm font-medium text-white mb-2 sm:mb-3 tracking-wide uppercase">
                Availability
              </h4>
              <p className="text-neutral-400 text-sm sm:text-body-md">
                Global reach<br />
                24/7 support
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-neutral-500 text-xs sm:text-body-sm text-center sm:text-left">
            © {currentYear} Trend Art. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs sm:text-body-sm">
            <button 
              type="button"
              className="text-neutral-500 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <Link 
              to="/terms"
              className="text-neutral-500 hover:text-white transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 