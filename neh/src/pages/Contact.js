import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import InteractiveButton from '../components/InteractiveButton';
import MagneticButton from '../components/MagneticButton';
import FloatingElement from '../components/FloatingElement';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    document.title = 'Contact Us - Trend Art';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Trend Art. Let\'s discuss your next project and bring your vision to life.');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'hello@trendart.com',
      href: 'mailto:hello@trendart.com'
    },
    {
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+1555123456'
    },
    {
      label: 'Location',
      value: 'Amsterdam, Netherlands',
      subtext: 'with global reach'
    }
  ];

  const locations = [
    { city: 'Amsterdam', country: 'Netherlands', role: 'Headquarters' },
    { city: 'London', country: 'United Kingdom', role: 'European Hub' },
    { city: 'New York', country: 'United States', role: 'Americas Hub' },
    { city: 'Paris', country: 'France', role: 'Creative Studio' },
    { city: 'Johannesburg', country: 'South Africa', role: 'Africa Hub' },
    { city: 'Remote', country: 'Worldwide', role: 'Digital First' }
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive digital solutions including web design and development, branding, mobile applications, e-commerce platforms, and digital strategy consulting."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks, while larger applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! We love working with startups and growing businesses. We offer flexible engagement models and can work within various budget ranges."
    },
    {
      question: "What's your design process like?",
      answer: "Our process is collaborative and iterative. We start with discovery and strategy, move through design concepts and prototyping, then development and testing, finishing with launch and ongoing support."
    }
  ];

  return (
    <div className="min-h-screen bg-primary-50 text-text-primary overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FloatingElement duration={10} intensity={20} delay={0} className="absolute top-32 right-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" />
          <FloatingElement duration={8} intensity={15} delay={2} direction="x" className="absolute bottom-40 left-10 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl" />
          
          <TextReveal className="text-center">
            <div className="space-y-8">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                Get in Touch
              </span>
              <h1 className="text-display-xl lg:text-display-2xl font-display font-black text-text-primary leading-none">
                CONTACT
                <span className="block bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                  TREND ART
                </span>
              </h1>
              <p className="text-heading-md text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Ready to start something extraordinary? Let's discuss your vision and 
                explore how we can bring it to life.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Form */}
            <TextReveal>
              <div>
                <h2 className="text-display-sm lg:text-display-md font-display font-bold text-text-primary mb-8">
                  Let's start a conversation
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-body-md font-medium text-text-primary mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white border-2 border-neutral-200 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 text-text-primary placeholder-text-tertiary text-body-lg"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-body-md font-medium text-text-primary mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white border-2 border-neutral-200 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 text-text-primary placeholder-text-tertiary text-body-lg"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-body-md font-medium text-text-primary mb-3">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border-2 border-neutral-200 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 text-text-primary placeholder-text-tertiary text-body-lg"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-body-md font-medium text-text-primary mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-white border-2 border-neutral-200 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 resize-none text-text-primary placeholder-text-tertiary text-body-lg"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <MagneticButton intensity={0.3} className="w-full">
                    <InteractiveButton 
                      variant="primary" 
                      size="lg" 
                      className="w-full font-semibold text-body-lg"
                      type="submit"
                    >
                      Send Message
                    </InteractiveButton>
                  </MagneticButton>
                </form>
              </div>
            </TextReveal>

            {/* Contact Information */}
            <TextReveal delay={0.3}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-display-sm font-display font-bold text-text-primary mb-6">
                    Get in touch
                  </h3>
                  <p className="text-body-lg text-text-secondary leading-relaxed mb-8">
                    We'd love to hear about your project and explore how we can 
                    help bring your vision to life.
                  </p>
                </div>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <h4 className="text-body-sm font-semibold text-text-tertiary uppercase tracking-wide mb-3">
                        {info.label}
                      </h4>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-heading-md font-medium text-text-primary hover:text-accent-600 transition-colors duration-300 group-hover:translate-x-1 transform"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div>
                          <p className="text-heading-md font-medium text-text-primary">
                            {info.value}
                          </p>
                          {info.subtext && (
                            <p className="text-body-md text-text-secondary mt-1">
                              {info.subtext}
                            </p>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8 border-t border-neutral-200">
                  <h4 className="text-heading-md font-display font-semibold text-text-primary mb-4">
                    Response time
                  </h4>
                  <p className="text-body-lg text-text-secondary">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-center mb-16">
            <div className="space-y-4">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                Global Presence
              </span>
              <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary">
                Worldwide reach, local expertise
              </h2>
            </div>
          </TextReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <TextReveal key={location.city} delay={index * 0.1}>
                <MagneticButton intensity={0.1} className="w-full h-full">
                  <div className="text-center p-8 bg-white border border-neutral-200 rounded-3xl hover:border-accent-300 hover:shadow-soft transition-all duration-300 h-full">
                    <h3 className="text-heading-lg font-display font-semibold text-text-primary mb-3">
                      {location.city}
                    </h3>
                    <p className="text-body-lg text-text-secondary mb-2">{location.country}</p>
                    <p className="text-body-sm text-text-tertiary font-medium">{location.role}</p>
                  </div>
                </MagneticButton>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-center mb-20">
            <div className="space-y-4">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                FAQ
              </span>
              <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary">
                Frequently Asked Questions
              </h2>
            </div>
          </TextReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <TextReveal key={index} delay={index * 0.1}>
                <MagneticButton intensity={0.05} className="w-full">
                  <div className="p-8 bg-white rounded-3xl border border-neutral-200 hover:border-accent-300 hover:shadow-soft transition-all duration-300">
                    <h3 className="text-heading-lg font-display font-semibold text-text-primary mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-body-lg text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </MagneticButton>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary mb-8 leading-tight">
              Ready to get
              <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent"> started</span>?
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.3}>
            <p className="text-heading-md text-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto">
              Fill out the form above or reach out directly. We're excited to learn about your project.
            </p>
          </TextReveal>

          <TextReveal delay={0.5} direction="scale">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <InteractiveButton variant="primary" size="lg" href="/work">
                View Our Portfolio
              </InteractiveButton>
              <InteractiveButton variant="secondary" size="lg" href="/services">
                Our Services
              </InteractiveButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;