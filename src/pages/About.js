import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from '../components/ScrollRevealText';

const About = () => {
  useEffect(() => {
    document.title = 'About - Trend Art Media';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Trend Art Media - We are agile, innovative, and culturally connected.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pt-20">

      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-6 sm:mb-8 leading-none">
                About
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We are a collective of designers, developers, and strategists who believe 
                in the power of exceptional digital experiences.
              </p>
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollRevealText>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Creating digital experiences that 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> matter</span>
              </h2>
            </ScrollRevealText>

            <ScrollRevealText delay={0.3} direction="left">
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  At Trend Art Media, we don't just build websites and applications. 
                  We craft digital narratives that resonate with your audience and 
                  drive meaningful engagement.
                </p>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  Our approach combines strategic thinking with creative excellence, 
                  ensuring every project not only looks beautiful but performs exceptionally.
                </p>
              </div>
            </ScrollRevealText>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced responsive design */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {[
            {
              title: "Agile",
              description: "We move fast, iterate quickly, and deliver results that exceed expectations. Our global team spans multiple continents, and we curate the right team for each project.",
              stats: "15+ Countries • 50+ Projects • 24/7 Support"
            },
            {
              title: "Innovative", 
              description: "We leverage cutting-edge technology and creative processes to ensure your digital presence stays ahead of the curve and drives real business impact.",
              stats: "Award-Winning • Future-Ready • Performance-Driven"
            },
            {
              title: "Cultural",
              description: "We understand that great design transcends trends. Our diverse team brings cultural insight and human-centered thinking to every project.",
              stats: "Global Perspective • Human-Centered • Trend-Setting"
            }
          ].map((value, index) => (
            <div key={value.title} className="space-y-8 lg:space-y-0">
              {/* Mobile/Tablet: Stacked layout with better responsive sizing */}
              <div className="lg:hidden space-y-6 sm:space-y-8">
                <ScrollRevealText>
                  <h3 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none text-center">
                    {value.title}
                  </h3>
                </ScrollRevealText>
                <ScrollRevealText delay={0.3}>
                  <div className="space-y-4 sm:space-y-6 text-center">
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-2">
                      {value.description}
                    </p>
                    <div className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
                      {value.stats}
                    </div>
                    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                  </div>
                </ScrollRevealText>
              </div>

              {/* Desktop: Side-by-side layout with controlled font sizes */}
              <div className={`hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 2xl:gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <ScrollRevealText>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <h3 className="text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[10rem] font-black text-white leading-none">
                      {value.title}
                    </h3>
                  </div>
                </ScrollRevealText>
                <ScrollRevealText delay={0.3} direction={index % 2 === 1 ? 'right' : 'left'}>
                  <div className={`space-y-6 xl:space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <p className="text-lg xl:text-xl text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                    <div className="text-sm text-gray-500 font-medium tracking-wide">
                      {value.stats}
                    </div>
                    <div className="w-24 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  </div>
                </ScrollRevealText>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Meet Our 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Team</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Creative minds, strategic thinkers, and technical innovators working together 
                to bring your vision to life.
              </p>
            </div>
          </ScrollRevealText>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {[
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
            ].map((member, index) => (
              <ScrollRevealText key={member.name} delay={index * 0.1}>
                <motion.div 
                  className="group text-center"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-400 mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              </ScrollRevealText>
            ))}
          </div>

          {/* Team Stats */}
          <ScrollRevealText delay={0.6}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-gray-800 pt-12 sm:pt-16">
              {[
                { label: 'Team Members', value: '50+' },
                { label: 'Countries', value: '15+' },
                { label: 'Projects Delivered', value: '200+' },
                { label: 'Years Experience', value: '10+' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <h2 className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-12 sm:mb-16 text-center">
              WHAT WE DO BEST
            </h2>
          </ScrollRevealText>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {[
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
            ].map((capability, index) => (
              <ScrollRevealText key={capability.title} delay={index * 0.1}>
                <motion.div 
                  className="group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-6">{capability.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {capability.description}
                  </p>
                </motion.div>
              </ScrollRevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollRevealText>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Let's work 
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> together</span>
            </h2>
          </ScrollRevealText>
          
          <ScrollRevealText delay={0.3}>
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
              Ready to start your next project? We'd love to hear about your vision 
              and explore how we can bring it to life.
            </p>
          </ScrollRevealText>

          <ScrollRevealText delay={0.5}>
            <motion.button 
              className="bg-white text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </ScrollRevealText>
        </div>
      </section>
    </div>
  );
};

export default About; 