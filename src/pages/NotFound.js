import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TextReveal from '../components/TextReveal';
import InteractiveButton from '../components/InteractiveButton';
import MagneticButton from '../components/MagneticButton';
import FloatingElement from '../components/FloatingElement';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | Trend Art';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page not found. Return to Trend Art homepage for digital innovation and creative solutions.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-primary-50 text-text-primary overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <FloatingElement duration={10} intensity={20} delay={0} className="absolute top-32 right-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" />
          <FloatingElement duration={8} intensity={15} delay={2} direction="x" className="absolute bottom-40 left-10 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl" />
          
          <TextReveal className="mb-8">
            <motion.div
              className="text-display-2xl lg:text-[12rem] font-display font-black text-accent-500/20 leading-none mb-8"
              animate={{ 
                rotateX: [0, 5, 0, -5, 0],
                scale: [1, 1.02, 1, 0.98, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              404
            </motion.div>
          </TextReveal>

          <TextReveal delay={0.3}>
            <h1 className="text-display-lg lg:text-display-xl font-display font-black text-text-primary leading-tight mb-6">
              PAGE NOT FOUND
            </h1>
          </TextReveal>

          <TextReveal delay={0.6}>
            <p className="text-heading-md text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
              The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </TextReveal>

          <TextReveal delay={0.9} direction="scale">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton intensity={0.3}>
                <InteractiveButton variant="primary" size="lg" href="/">
                  Back to Home
                </InteractiveButton>
              </MagneticButton>
              <InteractiveButton variant="secondary" size="lg" href="/contact">
                Contact Support
              </InteractiveButton>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-center mb-16">
            <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary mb-4">
              Looking for something?
            </h2>
            <p className="text-heading-md text-text-secondary">
              Try one of these popular pages instead
            </p>
          </TextReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Our Work', path: '/work', description: 'View our portfolio' },
              { name: 'Services', path: '/services', description: 'What we offer' },
              { name: 'About Us', path: '/about', description: 'Learn about us' },
              { name: 'Contact', path: '/contact', description: 'Get in touch' }
            ].map((item, index) => (
              <TextReveal key={item.name} delay={index * 0.1}>
                <MagneticButton intensity={0.2} className="w-full h-full">
                  <Link to={item.path}>
                    <div className="p-8 bg-white border border-neutral-200 rounded-3xl hover:border-accent-300 hover:shadow-soft transition-all duration-300 h-full text-center">
                      <h3 className="text-heading-lg font-display font-semibold text-text-primary mb-3">
                        {item.name}
                      </h3>
                      <p className="text-body-lg text-text-secondary">{item.description}</p>
                    </div>
                  </Link>
                </MagneticButton>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Error Details */}
      <section className="py-22 lg:py-30 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-display-md font-display font-bold text-text-primary mb-8">
              What happened?
            </h2>
          </TextReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Moved Page',
                description: 'The page may have been relocated to a new URL'
              },
              {
                title: 'Broken Link',
                description: 'You might have clicked on an outdated link'
              },
              {
                title: 'Typo in URL',
                description: 'Check the address bar for any spelling errors'
              }
            ].map((item, index) => (
              <TextReveal key={item.title} delay={index * 0.2}>
                <div className="p-6 bg-white rounded-2xl border border-neutral-200">
                  <h3 className="text-heading-md font-semibold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;