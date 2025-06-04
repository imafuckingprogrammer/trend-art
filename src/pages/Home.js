import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from '../components/ScrollRevealText';
import logo from '../layer1.png';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const logoContainerRef = useRef(null);

  useEffect(() => {
    // Set document title and meta description
    document.title = 'Trend Art Media - Digital Innovation Redefined';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'We craft extraordinary digital experiences through cutting-edge design, seamless development, and strategic innovation.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'digital agency, web design, branding, innovation, UI/UX, development');
    }
  }, []);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();

    const handleMouseMove = (e) => {
      if (!isTouch) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleTouchStart = () => {
      setIsTouch(true);
    };

    const handleTouchMove = (e) => {
      if (e.touches[0]) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    const handleTouchEnd = () => {
      // Keep touch mode active for a bit to prevent mouse events
      setTimeout(() => setIsTouch(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isTouch]);

  const calculateEyePosition = (eyeXPercent, eyeYPercent) => {
    if (!logoContainerRef.current) return { x: 0, y: 0 };
    
    const rect = logoContainerRef.current.getBoundingClientRect();
    const eyeX = rect.left + (rect.width * eyeXPercent);
    const eyeY = rect.top + (rect.height * eyeYPercent);
    
    const angle = Math.atan2(mousePosition.y - eyeY, mousePosition.x - eyeX);
    const distance = Math.min(6, Math.sqrt((mousePosition.x - eyeX) ** 2 + (mousePosition.y - eyeY) ** 2) / 25);
    
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance
    };
  };

  // Get transition settings based on device type
  const getEyeTransition = () => {
    if (isMobile || isTouch) {
      return { 
        type: "spring", 
        stiffness: 150, 
        damping: 25,
        mass: 1
      };
    }
    return { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    };
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="space-y-8 sm:space-y-12 md:space-y-16"
          >
            {/* Logo with Googly Eyes - Unified Container */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div 
                ref={logoContainerRef}
                className="relative inline-block"
              >
                <motion.img 
                  src={logo}
                  alt="Trend Art Media"
                  className="h-14 sm:h-22 md:h-32 lg:h-40 xl:h-44 w-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                
                {/* Googly Eyes - Positioned relative to logo */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  {/* Left Eye */}
                  <div 
                    className="absolute" 
                    style={{ 
                      left: '98%', 
                      top: '54%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="relative bg-white rounded-full border border-gray-800" style={{
                      width: 'clamp(16px, 2.5vw, 40px)',
                      height: 'clamp(16px, 2.5vw, 40px)'
                    }}>
                      <motion.div
                        className="absolute bg-black rounded-full"
                        style={{
                          width: 'clamp(8px, 1.2vw, 20px)',
                          height: 'clamp(8px, 1.2vw, 20px)',
                          left: '50%',
                          top: '50%',
                          transform: `translate(-50%, -50%) translate(${calculateEyePosition(0.98, 0.54).x}px, ${calculateEyePosition(0.98, 0.54).y}px)`
                        }}
                        transition={getEyeTransition()}
                      />
                    </div>
                  </div>

                  {/* Right Eye */}
                  <div 
                    className="absolute" 
                    style={{ 
                      left: '88%', 
                      top: '54%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="relative bg-white rounded-full border border-gray-800" style={{
                      width: 'clamp(16px, 2.5vw, 40px)',
                      height: 'clamp(16px, 2.5vw, 40px)'
                    }}>
                      <motion.div
                        className="absolute bg-black rounded-full"
                        style={{
                          width: 'clamp(8px, 1.2vw, 20px)',
                          height: 'clamp(8px, 1.2vw, 20px)',
                          left: '50%',
                          top: '50%',
                          transform: `translate(-50%, -50%) translate(${calculateEyePosition(0.88, 0.54).x}px, ${calculateEyePosition(0.88, 0.54).y}px)`
                        }}
                        transition={getEyeTransition()}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-4"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                We craft extraordinary digital experiences through cutting-edge design,
                seamless development, and strategic innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-400">
                <span>• Digital Strategy</span>
                <span>• Brand Identity</span>
                <span>• Web Development</span>
                <span>• Creative Direction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText direction="scale">
            <div className="text-center mb-16 sm:mb-24">
              <h2 className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-6 sm:mb-8">
                Our Approach
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight max-w-5xl mx-auto">
                Where creativity meets 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> precision</span>
              </h3>
            </div>
          </ScrollRevealText>

          <ScrollRevealText delay={0.4} stagger={true} staggerDelay={0.2}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-24">
              {[
                {
                  number: "01",
                  title: "Strategy & Discovery",
                  description: "We dive deep into your brand's DNA, market positioning, and user needs to craft a foundation for success.",
                  image: "https://picsum.photos/600/400?random=1"
                },
                {
                  number: "02", 
                  title: "Design & Innovation",
                  description: "Our creative team pushes boundaries, creating visually stunning and functionally superior digital experiences.",
                  image: "https://picsum.photos/600/400?random=2"
                },
                {
                  number: "03",
                  title: "Development & Launch",
                  description: "We bring designs to life with cutting-edge technology, ensuring scalability, performance, and seamless user experience.",
                  image: "https://picsum.photos/600/400?random=3"
                }
              ].map((item) => (
                <div key={item.number} className="group">
                  <div className="relative overflow-hidden rounded-2xl mb-6 sm:mb-8">
                    <motion.img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <motion.div 
                      className="absolute top-4 sm:top-6 left-4 sm:left-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-4xl sm:text-6xl font-black text-white/20">{item.number}</span>
                    </motion.div>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Values Section - Enhanced responsive design */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {[
            {
              title: "Agile",
              description: "We move fast, iterate quickly, and deliver results that exceed expectations. Our global team spans Amsterdam, London, New York, Paris, and beyond.",
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

      {/* Featured Work Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[12rem] font-black text-white leading-none">
                FEATURED
              </h2>
              <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[12rem] font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-none -mt-4 sm:-mt-8">
                WORK
              </h2>
            </div>
          </ScrollRevealText>

          <ScrollRevealText delay={0.4}>
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
              <img 
                src="https://picsum.photos/1400/800?random=4" 
                alt="Featured project"
                className="w-full h-60 sm:h-80 lg:h-[70vh] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12">
                <div className="flex flex-col space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4">Genie AI Platform</h3>
                    {/* Hide description on mobile to prevent overlap */}
                    <p className="hidden sm:block text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 max-w-2xl">
                      Revolutionary AI platform that connects people through shared interests and experiences
                    </p>
                    <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                      <span>AI/ML</span>
                      <span>•</span>
                      <span>React</span>
                      <span>•</span>
                      <span>2024</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base self-start"
                  >
                    View Case Study
                  </motion.button>
                </div>
              </div>
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <h2 className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-12 sm:mb-20 text-center">
              Selected Projects
            </h2>
          </ScrollRevealText>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            {[
              {
                title: "K2 Practice",
                subtitle: "Adventure Brand Identity",
                category: "Branding • Web Design",
                image: "https://picsum.photos/700/500?random=5"
              },
              {
                title: "The Scenic",
                subtitle: "E-commerce Platform",
                category: "Development • UX/UI",
                image: "https://picsum.photos/700/500?random=6"
              }
            ].map((project, index) => (
              <ScrollRevealText key={project.title} delay={index * 0.2}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-60 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-400">{project.subtitle}</p>
                    <p className="text-sm text-gray-500">{project.category}</p>
                  </div>
                </div>
              </ScrollRevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollRevealText direction="scale">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 sm:mb-12">
              What we do
            </h2>
          </ScrollRevealText>
          
          <ScrollRevealText delay={0.3} stagger={true} staggerDelay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16">
              {[
                "Brand Identity",
                "Web Development", 
                "Digital Strategy",
                "Creative Direction",
                "UI/UX Design",
                "E-commerce",
                "Mobile Apps",
                "Consulting"
              ].map((service, index) => (
                <motion.div 
                  key={service} 
                  className="p-4 sm:p-6 border border-gray-800 rounded-xl hover:border-gray-600 transition-colors"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgb(107, 114, 128)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">0{index + 1}</div>
                  <div className="text-sm sm:text-lg font-semibold text-white">{service}</div>
                </motion.div>
              ))}
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollRevealText>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Ready to create something
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> extraordinary</span>?
            </h2>
          </ScrollRevealText>
          
          <ScrollRevealText delay={0.3}>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed">
              Let's discuss your vision and build something remarkable together.
            </p>
          </ScrollRevealText>

          <ScrollRevealText delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:border-gray-400 transition-colors"
              >
                View Our Work
              </motion.button>
            </div>
          </ScrollRevealText>
        </div>
      </section>
    </div>
  );
};

export default Home; 