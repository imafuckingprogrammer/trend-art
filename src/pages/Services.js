import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import InteractiveButton from '../components/InteractiveButton';
import MagneticButton from '../components/MagneticButton';
import FloatingElement from '../components/FloatingElement';

const Services = () => {

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
      <section className="relative py-20 sm:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 min-h-[75vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <FloatingElement duration={10} intensity={20} delay={0} className="absolute top-32 right-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" />
          <FloatingElement duration={8} intensity={15} delay={2} direction="x" className="absolute bottom-40 left-10 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl" />
          
          <TextReveal className="text-center mb-16">
            <div className="space-y-8">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                What We Offer
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-text-primary leading-none">
                MARKETING
                <span className="block bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                  SERVICES
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
                From strategy to execution, we deliver comprehensive marketing solutions that transform brands and drive sustainable growth.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <MagneticButton intensity={0.1} className="w-full h-full">
                  <div className="text-center p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-200 hover:border-accent-300 h-full flex flex-col">
                    {/* Service Header */}
                    <div className="mb-4 sm:mb-6 flex-1">
                      <span className="text-xs sm:text-body-sm font-medium tracking-wide text-text-tertiary uppercase block mb-2 sm:mb-3">
                        {service.subtitle}
                      </span>
                      <h3 className="text-base sm:text-lg md:text-heading-lg lg:text-display-sm font-display font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-accent-600 transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-body-lg text-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center justify-center gap-2 sm:gap-3">
                          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent-500 rounded-full flex-shrink-0" />
                          <span className="text-xs sm:text-sm md:text-body-md text-text-secondary text-center">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing & CTA */}
                    <div className="pt-4 sm:pt-6 border-t border-neutral-200 space-y-3 sm:space-y-4">
                      <span className="text-sm sm:text-base md:text-heading-md font-display font-semibold text-text-primary block">
                        {service.price}
                      </span>
                      <InteractiveButton variant="primary" size="sm">
                        Learn More
                      </InteractiveButton>
                    </div>
                  </div>
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {additionalServices.map((service, index) => (
              <TextReveal key={index} delay={index * 0.1}>
                <MagneticButton intensity={0.2} className="w-full">
                  <div className="p-4 sm:p-6 lg:p-8 bg-white rounded-3xl border border-neutral-200 hover:border-accent-300 hover:shadow-soft transition-all duration-300 h-full">
                    <h3 className="text-base sm:text-lg md:text-heading-md font-display font-semibold text-text-primary mb-2 sm:mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-body-lg text-text-secondary leading-relaxed">
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
      <section className="py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-center mb-16">
            <div className="space-y-4">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                How We Work
              </span>
              <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary leading-tight">
                Our proven process
              </h2>
            </div>
          </TextReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
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
      <section className="py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50">
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