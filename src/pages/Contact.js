import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollRevealText from '../components/ScrollRevealText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pt-20">
      <Helmet>
        <title>Contact - Trend Art Media</title>
        <meta name="description" content="Get in touch with Trend Art Media. Let's discuss your next project." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-6 sm:mb-8 leading-none">
                Contact
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to start something extraordinary? Let's discuss your vision and 
                explore how we can bring it to life.
              </p>
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <ScrollRevealText>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Let's start a conversation
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200 text-white placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200 text-white placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200 text-white placeholder-gray-500"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200 resize-none text-white placeholder-gray-500"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollRevealText>

            {/* Contact Information */}
            <ScrollRevealText delay={0.3} direction="left">
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Get in touch
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed mb-8">
                    We'd love to hear about your project and explore how we can 
                    help bring your vision to life.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Email
                    </h4>
                    <a href="mailto:hello@trendartmedia.com" className="text-lg text-white hover:text-gray-300 transition-colors">
                      hello@trendartmedia.com
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Phone
                    </h4>
                    <a href="tel:+1555123456" className="text-lg text-white hover:text-gray-300 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Location
                    </h4>
                    <p className="text-lg text-white">
                      Amsterdam, Netherlands<br />
                      <span className="text-gray-400">with global reach</span>
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-800">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Response time
                  </h4>
                  <p className="text-gray-400">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </ScrollRevealText>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollRevealText>
            <h2 className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-16 text-center">
              GLOBAL PRESENCE
            </h2>
          </ScrollRevealText>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { city: 'Amsterdam', country: 'Netherlands', role: 'Headquarters' },
              { city: 'London', country: 'United Kingdom', role: 'European Hub' },
              { city: 'New York', country: 'United States', role: 'Americas Hub' },
              { city: 'Paris', country: 'France', role: 'Creative Studio' },
              { city: 'Johannesburg', country: 'South Africa', role: 'Africa Hub' },
              { city: 'Remote', country: 'Worldwide', role: 'Digital First' }
            ].map((location, index) => (
              <ScrollRevealText key={location.city} delay={index * 0.1}>
                <div className="text-center p-6 border border-gray-800 rounded-xl hover:border-gray-600 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {location.city}
                  </h3>
                  <p className="text-gray-400 mb-2">{location.country}</p>
                  <p className="text-sm text-gray-500">{location.role}</p>
                </div>
              </ScrollRevealText>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollRevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              Frequently Asked Questions
            </h2>
          </ScrollRevealText>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
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
            ].map((faq, index) => (
              <ScrollRevealText key={index} delay={index * 0.2}>
                <div className="border-b border-gray-800 pb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </ScrollRevealText>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 