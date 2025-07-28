import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import InteractiveButton from '../components/InteractiveButton';
import MarqueeCarousel from '../components/MarqueeCarousel';
import FloatingElement from '../components/FloatingElement';

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    document.title = 'Our Work - Trend Art';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our portfolio of innovative digital experiences, brand transformations, and cutting-edge creative solutions.');
    }
  }, []);

  const categories = ['All', 'Web Design', 'Branding', 'Mobile Apps', 'E-commerce'];
  
  const projects = [
    {
      id: 1,
      title: "NeoTech Solutions",
      subtitle: "Digital Transformation Platform",
      description: "Revolutionary enterprise platform transforming how businesses operate in the digital age with AI-powered analytics and seamless workflow automation.",
      image: "https://picsum.photos/800/600?random=1",
      year: "2024",
      category: "Web Design",
      tech: ["React", "TypeScript", "AI/ML"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Ethereal Brands",
      subtitle: "Luxury Brand Identity",
      description: "Complete brand transformation for a luxury lifestyle company, creating an elegant and sophisticated visual identity that resonates with high-end consumers.",
      image: "https://picsum.photos/800/600?random=2",
      year: "2024",
      category: "Branding",
      tech: ["Brand Strategy", "Visual Identity", "Print Design"],
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "FlowState Fitness",
      subtitle: "Wellness Mobile App",
      description: "Innovative fitness application combining mindfulness with physical training, featuring personalized workout plans and meditation sessions.",
      image: "https://picsum.photos/800/600?random=3",
      year: "2024",
      category: "Mobile Apps",
      tech: ["React Native", "Health APIs", "UI/UX"],
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 4,
      title: "Artisan Marketplace",
      subtitle: "Handcrafted E-commerce",
      description: "Beautiful e-commerce platform connecting artisans with conscious consumers, featuring immersive product experiences and storytelling.",
      image: "https://picsum.photos/800/600?random=4",
      year: "2023",
      category: "E-commerce",
      tech: ["Shopify Plus", "Custom Development", "3D Visualization"],
      color: "from-orange-500 to-red-400"
    },
    {
      id: 5,
      title: "Quantum Dynamics",
      subtitle: "SaaS Platform Design",
      description: "Sophisticated dashboard interface for quantum computing platform, making complex data visualization accessible and intuitive for researchers.",
      image: "https://picsum.photos/800/600?random=5",
      year: "2023",
      category: "Web Design",
      tech: ["Vue.js", "D3.js", "Data Visualization"],
      color: "from-indigo-500 to-blue-400"
    },
    {
      id: 6,
      title: "Urban Gardens",
      subtitle: "Sustainable Living Brand",
      description: "Environmental brand identity focused on urban sustainability, featuring eco-friendly materials and nature-inspired design elements.",
      image: "https://picsum.photos/800/600?random=6",
      year: "2023",
      category: "Branding",
      tech: ["Sustainable Design", "Package Design", "Environmental Graphics"],
      color: "from-teal-500 to-green-400"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const testimonials = [
    "Transformed our digital presence completely",
    "Exceptional creativity and attention to detail", 
    "Outstanding results beyond expectations",
    "Professional team with innovative solutions",
    "Delivered on time with perfect execution"
  ];

  return (
    <div className="min-h-screen bg-primary-50 text-text-primary overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FloatingElement duration={8} intensity={15} delay={1} className="absolute top-20 right-20 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl" />
          <FloatingElement duration={6} intensity={20} delay={0} direction="x" className="absolute bottom-40 left-10 w-24 h-24 bg-accent-400/10 rounded-full blur-xl" />
          
          <TextReveal className="text-center mb-16">
            <div className="space-y-8">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                Our Portfolio
              </span>
              <h1 className="text-display-xl lg:text-display-2xl font-display font-black text-text-primary leading-none">
                CREATIVE
                <span className="block bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                  EXCELLENCE
                </span>
              </h1>
              <p className="text-heading-md text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Explore our portfolio of transformative digital experiences, innovative brand identities, and cutting-edge creative solutions that drive real business results.
              </p>
            </div>
          </TextReveal>

          {/* Category Filter */}
          <TextReveal delay={0.4} direction="scale" className="flex justify-center mb-20">
            <div className="flex flex-wrap gap-4 bg-white rounded-4xl p-2 shadow-medium border border-neutral-200">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-3xl font-medium text-body-md transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-text-primary text-white shadow-soft'
                      : 'text-text-secondary hover:text-text-primary hover:bg-neutral-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden rounded-4xl mb-8 shadow-medium group-hover:shadow-hard transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${project.color} rounded-full opacity-80 blur-xl group-hover:blur-sm transition-all duration-300`} />
                    
                    {/* Hover Content */}
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-2 mb-3">
                        {project.tech.slice(0, 2).map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-body-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-heading-lg font-display font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-body-md text-neutral-300">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <h3 className="text-heading-lg font-display font-semibold text-text-primary group-hover:text-accent-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-body-sm text-text-tertiary">
                          {project.year}
                        </span>
                      </div>
                      <span className="text-body-sm font-medium px-3 py-1 bg-neutral-100 text-text-secondary rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-body-lg text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                    <InteractiveButton variant="ghost" size="sm">
                      View Case Study →
                    </InteractiveButton>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-16 lg:py-20">
        <TextReveal className="text-center mb-12">
          <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
            Client Feedback
          </span>
        </TextReveal>
        
        <MarqueeCarousel 
          items={testimonials.map((testimonial, index) => (
            <div key={index} className="px-8 py-6 bg-white rounded-3xl border border-neutral-200 shadow-soft min-w-80">
              <p className="text-heading-md font-medium text-text-primary text-center">
                "{testimonial}"
              </p>
            </div>
          ))}
          speed={0.3}
          className="h-24"
          itemClassName="h-full flex items-center"
          scrollBased={true}
        />
      </section>

      {/* Process Overview */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-center mb-20">
            <div className="space-y-4">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                How we work
              </span>
              <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary leading-tight">
                Our proven process
              </h2>
            </div>
          </TextReveal>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into your brand, goals, and market to create a strategic foundation."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop comprehensive strategies aligned with your business objectives."
              },
              {
                step: "03",
                title: "Design",
                description: "Create stunning visuals and intuitive experiences that captivate users."
              },
              {
                step: "04",
                title: "Launch",
                description: "Deploy and optimize your project for maximum impact and performance."
              }
            ].map((process, index) => (
              <TextReveal key={process.step} delay={index * 0.1}>
                <div className="group text-center">
                  <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center text-heading-md font-bold mb-6 mx-auto group-hover:bg-accent-600 transition-colors">
                    {process.step}
                  </div>
                  <h3 className="text-heading-lg font-display font-semibold text-text-primary mb-4">
                    {process.title}
                  </h3>
                  <p className="text-body-lg text-text-secondary leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary mb-8 leading-tight">
              Ready to create your
              <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent"> next success story</span>?
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.3}>
            <p className="text-heading-md text-text-secondary mb-12 leading-relaxed">
              Let's collaborate and bring your vision to life with exceptional design and development.
            </p>
          </TextReveal>

          <TextReveal delay={0.5} direction="scale">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <InteractiveButton variant="primary" size="lg" href="/contact">
                Start Your Project
              </InteractiveButton>
              <InteractiveButton variant="secondary" size="lg" href="/about">
                Learn About Us
              </InteractiveButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </div>
  );
};

export default Work; 