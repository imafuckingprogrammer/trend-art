import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import InteractiveButton from '../components/InteractiveButton';
import MagneticButton from '../components/MagneticButton';
import FloatingElement from '../components/FloatingElement';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Trend Art';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Trend Art - a collective of designers, developers, and strategists creating exceptional digital experiences.');
    }
  }, []);

  const values = [
    {
      title: "Agile",
      description: "We move fast, iterate quickly, and deliver results that exceed expectations. Our global team spans multiple continents, curating the right expertise for each project.",
      stats: "15+ Countries • 50+ Projects • 24/7 Support",
      color: "from-accent-500 to-accent-600"
    },
    {
      title: "Innovative", 
      description: "We leverage cutting-edge technology and creative processes to ensure your digital presence stays ahead of the curve and drives real business impact.",
      stats: "Award-Winning • Future-Ready • Performance-Driven",
      color: "from-accent-600 to-accent-500"
    },
    {
      title: "Cultural",
      description: "We understand that great design transcends trends. Our diverse team brings cultural insight and human-centered thinking to every project.",
      stats: "Global Perspective • Human-Centered • Trend-Setting",
      color: "from-accent-500 to-accent-400"
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Creative Director",
      image: "https://picsum.photos/400/400?random=20",
      description: "Leading creative vision with 8+ years in brand identity and digital design."
    },
    {
      name: "Maya Rodriguez",
      role: "Lead Developer",
      image: "https://picsum.photos/400/400?random=21",
      description: "Full-stack expert specializing in React, Node.js, and scalable architectures."
    },
    {
      name: "James Wilson",
      role: "Strategy Director",
      image: "https://picsum.photos/400/400?random=22",
      description: "Data-driven strategist with expertise in digital transformation and growth."
    },
    {
      name: "Zara Ahmed",
      role: "UX Designer",
      image: "https://picsum.photos/400/400?random=23",
      description: "User experience specialist focused on human-centered design and accessibility."
    }
  ];

  const capabilities = [
    {
      title: "Strategic Thinking",
      description: "We start every project with deep research and strategic planning to ensure measurable results.",
      icon: "🎯"
    },
    {
      title: "Creative Excellence",
      description: "Our award-winning creative team pushes boundaries to deliver visually stunning experiences.",
      icon: "✨"
    },
    {
      title: "Technical Innovation",
      description: "We leverage cutting-edge technology to build scalable, performant digital solutions.",
      icon: "⚡"
    },
    {
      title: "User-Centered Design",
      description: "Every decision we make is guided by user research and human-centered design principles.",
      icon: "👥"
    },
    {
      title: "Global Perspective",
      description: "Our international team brings diverse cultural insights to every project we undertake.",
      icon: "🌍"
    },
    {
      title: "Agile Delivery",
      description: "We work in iterative cycles, ensuring rapid delivery and continuous improvement.",
      icon: "🚀"
    }
  ];

  const stats = [
    { label: 'Team Members', value: '50+' },
    { label: 'Countries', value: '15+' },
    { label: 'Projects Delivered', value: '200+' },
    { label: 'Years Experience', value: '10+' }
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
                Who We Are
              </span>
              <h1 className="text-display-xl lg:text-display-2xl font-display font-black text-text-primary leading-none">
                ABOUT
                <span className="block bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                  TREND ART
                </span>
              </h1>
              <p className="text-heading-md text-text-secondary max-w-4xl mx-auto leading-relaxed">
                We are a collective of designers, developers, and strategists who believe 
                in the power of exceptional digital experiences.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <TextReveal>
              <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary leading-tight">
                Creating digital experiences that 
                <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent"> matter</span>
              </h2>
            </TextReveal>

            <TextReveal delay={0.3}>
              <div className="space-y-6">
                <p className="text-body-lg text-text-secondary leading-relaxed">
                  At Trend Art, we don't just build websites and applications. 
                  We craft digital narratives that resonate with your audience and 
                  drive meaningful engagement.
                </p>
                <p className="text-body-lg text-text-secondary leading-relaxed">
                  Our approach combines strategic thinking with creative excellence, 
                  ensuring every project not only looks beautiful but performs exceptionally.
                </p>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24 lg:space-y-32">
          {values.map((value, index) => (
            <div key={value.title} className="space-y-8 lg:space-y-0">
              {/* Mobile: Stacked layout */}
              <div className="lg:hidden space-y-8">
                <TextReveal>
                  <h3 className="text-display-lg lg:text-display-xl font-display font-black text-text-primary text-center">
                    {value.title}
                  </h3>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <div className="space-y-6 text-center">
                    <p className="text-body-lg text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                    <div className="text-body-sm text-text-tertiary font-medium tracking-wide">
                      {value.stats}
                    </div>
                    <div className={`w-24 h-1 bg-gradient-to-r ${value.color} mx-auto rounded-full`}></div>
                  </div>
                </TextReveal>
              </div>

              {/* Desktop: Side-by-side layout */}
              <div className={`hidden lg:grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <TextReveal>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <h3 className="text-display-xl lg:text-display-2xl font-display font-black text-text-primary leading-none">
                      {value.title}
                    </h3>
                  </div>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <p className="text-body-lg text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                    <div className="text-body-sm text-text-tertiary font-medium tracking-wide">
                      {value.stats}
                    </div>
                    <div className={`w-24 h-1 bg-gradient-to-r ${value.color} rounded-full`}></div>
                  </div>
                </TextReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-center mb-20">
            <div className="space-y-4">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                Our Team
              </span>
              <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary leading-tight">
                Meet the creative minds behind
                <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent"> Trend Art</span>
              </h2>
            </div>
          </TextReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {team.map((member, index) => (
              <TextReveal key={member.name} delay={index * 0.1}>
                <MagneticButton intensity={0.2} className="w-full">
                  <div className="group text-center bg-white rounded-4xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-200 hover:border-accent-300">
                    <div className="relative mb-6 overflow-hidden rounded-3xl">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-heading-md font-display font-semibold text-text-primary mb-2 group-hover:text-accent-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-body-md text-accent-500 mb-3 font-medium">
                      {member.role}
                    </p>
                    <p className="text-body-sm text-text-secondary leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </MagneticButton>
              </TextReveal>
            ))}
          </div>

          {/* Team Stats */}
          <TextReveal delay={0.6}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-200 pt-16">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                  viewport={{ once: true }}
                >
                  <div className="text-display-sm font-display font-bold bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-body-md text-text-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-center mb-20">
            <div className="space-y-4">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                What We Do Best
              </span>
              <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary leading-tight">
                Our core capabilities
              </h2>
            </div>
          </TextReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <TextReveal key={capability.title} delay={index * 0.1}>
                <MagneticButton intensity={0.1} className="w-full h-full">
                  <div className="group p-8 bg-white rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-200 hover:border-accent-300 h-full">
                    <div className="text-4xl mb-6">{capability.icon}</div>
                    <h3 className="text-heading-lg font-display font-semibold text-text-primary mb-4 group-hover:text-accent-600 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-body-lg text-text-secondary leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </MagneticButton>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary mb-8 leading-tight">
              Let's work 
              <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent"> together</span>
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.3}>
            <p className="text-heading-md text-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto">
              Ready to start your next project? We'd love to hear about your vision 
              and explore how we can bring it to life.
            </p>
          </TextReveal>

          <TextReveal delay={0.5} direction="scale">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <InteractiveButton variant="primary" size="lg" href="/contact">
                Get in Touch
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

export default About;