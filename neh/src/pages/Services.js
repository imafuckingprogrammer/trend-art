import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import InteractiveButton from '../components/InteractiveButton';
import MagneticButton from '../components/MagneticButton';
import FloatingElement from '../components/FloatingElement';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    document.title = 'Our Services - Trend Art';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive marketing and creative services that transform brands. From strategy to execution, we deliver results-driven solutions.');
    }
  }, []);

  const mainServices = [
    {
      id: 1,
      title: "Brand Strategy & Identity",
      subtitle: "Foundation for Success",
      description: "Comprehensive brand development from strategy to visual identity, creating authentic connections with your audience.",
      icon: "🎯",
      color: "from-blue-500 to-cyan-400",
      features: [
        "Brand positioning & strategy",
        "Visual identity design",
        "Brand guidelines & voice",
        "Market research & analysis"
      ],
      price: "Starting at $5,000"
    },
    {
      id: 2,
      title: "Digital Marketing",
      subtitle: "Growth Acceleration",
      description: "Data-driven marketing campaigns across all channels to maximize reach, engagement, and conversions.",
      icon: "📈",
      color: "from-green-500 to-emerald-400",
      features: [
        "Social media management",
        "Paid advertising campaigns",
        "Content marketing strategy",
        "Performance analytics"
      ],
      price: "Starting at $3,000/month"
    },
    {
      id: 3,
      title: "Web Development",
      subtitle: "Digital Excellence",
      description: "Custom websites and applications that combine stunning design with powerful functionality and seamless user experience.",
      icon: "💻",
      color: "from-purple-500 to-pink-400",
      features: [
        "Custom website development",
        "E-commerce solutions",
        "Mobile app development",
        "Performance optimization"
      ],
      price: "Starting at $8,000"
    },
    {
      id: 4,
      title: "Creative Production",
      subtitle: "Visual Storytelling",
      description: "Professional video, photography, and design services that bring your brand story to life with impact.",
      icon: "🎬",
      color: "from-orange-500 to-red-400",
      features: [
        "Video production",
        "Photography services",
        "Graphic design",
        "Motion graphics"
      ],
      price: "Project-based pricing"
    }
  ];

  const additionalServices = [
    { title: "SEO & Content Strategy", description: "Organic growth through strategic content and optimization" },
    { title: "Influencer Partnerships", description: "Authentic connections through strategic influencer collaboration" },
    { title: "Public Relations", description: "Brand reputation management and media relationships" },
    { title: "Analytics & Reporting", description: "Data-driven insights and performance optimization" },
    { title: "Consultation Services", description: "Strategic guidance and marketing audits" },
    { title: "Training & Workshops", description: "Team education and skill development programs" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, target audience, and market landscape to create a solid foundation."
    },
    {
      step: "02", 
      title: "Strategy",
      description: "Based on our research, we develop a comprehensive strategy that aligns with your business objectives and audience needs."
    },
    {
      step: "03",
      title: "Execution",
      description: "Our expert team implements the strategy with precision, creating and deploying all necessary assets and campaigns."
    },
    {
      step: "04",
      title: "Optimization",
      description: "We continuously monitor, analyze, and optimize performance to ensure maximum ROI and sustainable growth."
    }
  ];

  return (
    <div className="min-h-screen bg-primary-50 text-text-primary overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FloatingElement duration={10} intensity={20} delay={0} className="absolute top-32 right-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" />
          <FloatingElement duration={8} intensity={15} delay={2} direction="x" className="absolute bottom-40 left-10 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl" />
          
          <TextReveal className="text-center mb-20">
            <div className="space-y-8">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                What We Offer
              </span>
              <h1 className="text-display-xl lg:text-display-2xl font-display font-black text-text-primary leading-none">
                MARKETING
                <span className="block bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                  SERVICES
                </span>
              </h1>
              <p className="text-heading-md text-text-secondary max-w-3xl mx-auto leading-relaxed">
                From strategy to execution, we deliver comprehensive marketing solutions that transform brands and drive sustainable growth.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative p-8 lg:p-10 bg-white rounded-4xl shadow-medium hover:shadow-hard transition-all duration-500 border border-neutral-200 hover:border-accent-300 cursor-pointer overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Service Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="text-4xl lg:text-5xl mb-4">
                      {service.icon}
                    </div>
                    <span className="text-body-sm font-medium tracking-wide text-text-tertiary uppercase">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    <div>
                      <h3 className="text-heading-lg lg:text-display-sm font-display font-bold text-text-primary mb-4 group-hover:text-accent-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-body-lg text-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                          <span className="text-body-md text-text-secondary">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                      <span className="text-heading-md font-display font-semibold text-text-primary">
                        {service.price}
                      </span>
                      <InteractiveButton variant="primary" size="sm">
                        Learn More
                      </InteractiveButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-center mb-16">
            <div className="space-y-4">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                Additional Services
              </span>
              <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary leading-tight">
                Comprehensive solutions
              </h2>
            </div>
          </TextReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {additionalServices.map((service, index) => (
              <TextReveal key={index} delay={index * 0.1}>
                <MagneticButton intensity={0.2} className="w-full">
                  <div className="p-6 lg:p-8 bg-white rounded-3xl border border-neutral-200 hover:border-accent-300 hover:shadow-soft transition-all duration-300 h-full">
                    <h3 className="text-heading-md font-display font-semibold text-text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-body-lg text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </MagneticButton>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-center mb-20">
            <div className="space-y-4">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                How We Work
              </span>
              <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary leading-tight">
                Our proven process
              </h2>
            </div>
          </TextReveal>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <TextReveal key={step.step} delay={index * 0.15}>
                <div className="relative text-center group">
                  {/* Step Number */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-full flex items-center justify-center text-heading-lg font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-accent-300 to-transparent -z-10" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-heading-lg font-display font-semibold text-text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-body-lg text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary mb-8 leading-tight">
              Ready to accelerate your
              <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent"> growth</span>?
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.3}>
            <p className="text-heading-md text-text-secondary mb-12 leading-relaxed">
              Let's discuss your goals and create a custom strategy that delivers exceptional results.
            </p>
          </TextReveal>

          <TextReveal delay={0.5} direction="scale">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <InteractiveButton variant="primary" size="lg" href="/contact">
                Start Your Project
              </InteractiveButton>
              <InteractiveButton variant="secondary" size="lg" href="/work">
                View Our Work
              </InteractiveButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </div>
  );
};

export default Services; 