import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Brand Identity',
    'Web Development',
    'Digital Strategy',
    'UI/UX Design'
  ];

  const socialLinks = [
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Dribbble', url: '#' }
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-3xl font-black text-white">
                TREND ART MEDIA
              </h2>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              We craft extraordinary digital experiences through cutting-edge design, 
              seamless development, and strategic innovation.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wide uppercase">
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wide uppercase">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 tracking-wide uppercase">
                Email
              </h4>
              <a
                href="mailto:info@trendartmedia.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                info@trendartmedia.com
              </a>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 tracking-wide uppercase">
                Phone
              </h4>
              <div className="space-y-1">
                <a
                  href="tel:+971223484816"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  00971 2 234 84 16
                </a>
                <a
                  href="tel:+971543482101"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  00971 54 348 21 01
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 tracking-wide uppercase">
                Availability
              </h4>
              <p className="text-gray-400">
                Global reach<br />
                24/7 support
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {currentYear} Trend Art Media. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm">
            <button 
              type="button"
              className="text-gray-500 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </button>
            <button 
              type="button"
              className="text-gray-500 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 