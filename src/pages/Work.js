import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ScrollRevealText from '../components/ScrollRevealText';

const Work = () => {
  const projects = [
    {
      title: "Genie AI Platform",
      subtitle: "Product Design & Development",
      description: "Genie is a revolutionary AI platform that connects people through shared interests and experiences, creating meaningful digital relationships.",
      image: "https://picsum.photos/1200/800?random=1",
      year: "2024",
      category: "AI Platform",
      tech: ["React", "AI/ML", "Node.js"]
    },
    {
      title: "K2 Practice",
      subtitle: "Adventure Brand Identity",
      description: "A comprehensive branding and digital experience for outdoor adventure company specializing in high-altitude expeditions and extreme sports.",
      image: "https://picsum.photos/1200/800?random=2",
      year: "2024",
      category: "Branding",
      tech: ["Branding", "Web Design", "Photography"]
    },
    {
      title: "The Scenic",
      subtitle: "E-commerce Revolution",
      description: "E-commerce platform design focusing on artisanal products with immersive shopping experience and seamless checkout flow.",
      image: "https://picsum.photos/1200/800?random=3",
      year: "2023",
      category: "E-commerce",
      tech: ["Shopify", "React", "UX/UI"]
    },
    {
      title: "Urban Flow",
      subtitle: "Smart City Navigation",
      description: "Mobile application for smart city navigation combining real-time data with beautiful design and intuitive user experience.",
      image: "https://picsum.photos/1200/800?random=4",
      year: "2023",
      category: "Mobile App",
      tech: ["React Native", "Maps API", "Real-time Data"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pt-20">
      <Helmet>
        <title>Work - Trend Art Media</title>
        <meta name="description" content="Explore our portfolio of digital experiences, branding projects, and innovative solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-6 sm:mb-8 leading-none">
                Work
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A collection of projects that showcase our commitment to exceptional 
                design, innovative technology, and meaningful user experiences.
              </p>
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <h2 className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-12 sm:mb-16 text-center">
              RECENT HIGHLIGHTS
            </h2>
          </ScrollRevealText>

          <ScrollRevealText delay={0.3} stagger={true} staggerDelay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              {[
                { src: "https://picsum.photos/300/300?random=10", alt: "Project preview 1" },
                { src: "https://picsum.photos/300/300?random=11", alt: "Project preview 2" },
                { src: "https://picsum.photos/300/300?random=12", alt: "Project preview 3" },
                { src: "https://picsum.photos/300/300?random=13", alt: "Project preview 4" }
              ].map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-xl cursor-pointer"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-none">
                FEATURED PROJECT
              </h2>
            </div>
          </ScrollRevealText>

          <ScrollRevealText delay={0.4}>
            <div className="relative rounded-3xl overflow-hidden mb-12 sm:mb-16 group cursor-pointer">
              <img 
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-60 sm:h-80 lg:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
          </ScrollRevealText>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollRevealText delay={0.6}>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                  {projects[0].title}
                </h3>
                <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6">
                  {projects[0].subtitle}
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {projects[0].description}
                </p>
              </div>
            </ScrollRevealText>

            <ScrollRevealText delay={0.8} direction="left">
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Year</h4>
                    <p className="text-base sm:text-lg font-medium text-white">{projects[0].year}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Category</h4>
                    <p className="text-base sm:text-lg font-medium text-white">{projects[0].category}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.button 
                  className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Study
                </motion.button>
              </div>
            </ScrollRevealText>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <h2 className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-12 sm:mb-16">
              ALL PROJECTS
            </h2>
          </ScrollRevealText>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {projects.slice(1).map((project, index) => (
              <div key={project.title} className="space-y-8 lg:space-y-0">
                {/* Mobile/Tablet: Stacked layout */}
                <div className="lg:hidden space-y-8">
                  <ScrollRevealText delay={index * 0.2}>
                    <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-60 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  </ScrollRevealText>
                  
                  <ScrollRevealText delay={index * 0.2 + 0.3}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                          {project.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">
                          {project.subtitle}
                        </p>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Year</h4>
                          <p className="text-sm font-medium text-white">{project.year}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Category</h4>
                          <p className="text-sm font-medium text-white">{project.category}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <motion.button 
                        className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.button>
                    </div>
                  </ScrollRevealText>
                </div>

                {/* Desktop: Side-by-side layout */}
                <div className={`hidden lg:grid lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <ScrollRevealText delay={index * 0.2}>
                    <div className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}>
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  </ScrollRevealText>

                  <ScrollRevealText delay={index * 0.2 + 0.3} direction={index % 2 === 1 ? 'right' : 'left'}>
                    <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-lg text-gray-400 mb-6">
                          {project.subtitle}
                        </p>
                        <p className="text-base text-gray-300 leading-relaxed mb-8">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Year</h4>
                          <p className="text-base font-medium text-white">{project.year}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Category</h4>
                          <p className="text-base font-medium text-white">{project.category}</p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <motion.button 
                        className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.button>
                    </div>
                  </ScrollRevealText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <h2 className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-12 sm:mb-16 text-center">
              OUR PROCESS
            </h2>
          </ScrollRevealText>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into your brand, goals, and target audience to understand what makes you unique."
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive strategy that aligns with your business objectives and user needs."
              },
              {
                step: "03",
                title: "Design",
                description: "Our creative team brings your vision to life with stunning visuals and intuitive user experiences."
              },
              {
                step: "04",
                title: "Development",
                description: "We build your project using cutting-edge technology, ensuring performance and scalability."
              }
            ].map((process, index) => (
              <ScrollRevealText key={process.step} delay={index * 0.2}>
                <motion.div 
                  className="text-center group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-6xl font-black text-gray-800 mb-6 group-hover:text-gray-700 transition-colors">
                    {process.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {process.description}
                  </p>
                </motion.div>
              </ScrollRevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project Teaser */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-none">
                NEXT PROJECT
              </h2>
            </div>
          </ScrollRevealText>

          <ScrollRevealText delay={0.4}>
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
              <img 
                src="https://picsum.photos/1400/600?random=5" 
                alt="Coming soon project"
                className="w-full h-60 sm:h-80 lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 text-center">
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                  Something amazing is coming
                </h3>
                <p className="text-base sm:text-lg text-gray-300">
                  Stay tuned for our next groundbreaking project
                </p>
              </div>
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollRevealText>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Ready to start your 
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> next project</span>?
            </h2>
          </ScrollRevealText>
          
          <ScrollRevealText delay={0.3}>
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 leading-relaxed">
              Let's create something extraordinary together. Get in touch to discuss your vision.
            </p>
          </ScrollRevealText>

          <ScrollRevealText delay={0.5}>
            <motion.button 
              className="bg-white text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.button>
          </ScrollRevealText>
        </div>
      </section>
    </div>
  );
};

export default Work; 