import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TextReveal from '../components/TextReveal';
import InteractiveButton from '../components/InteractiveButton';
import MagneticButton from '../components/MagneticButton';
import FloatingElement from '../components/FloatingElement';
import CustomCursor from '../components/CustomCursor';

const Home = () => {
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorImage, setCursorImage] = useState('');
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    // Set document title and meta description
    document.title = 'Trend Art - Digital Innovation Redefined';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading marketing agency specializing in digital innovation, brand strategy, and cutting-edge web development. Transform your brand with Trend Art.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'marketing agency, digital strategy, brand development, web design, creative agency, innovation, UI/UX design');
    }

  }, []);

  // Sample gallery images for marquee carousels
  const galleryImages = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5',
    'https://picsum.photos/400/300?random=6',
    'https://picsum.photos/400/300?random=7',
    'https://picsum.photos/400/300?random=8',
  ];

  const processItems = [
    {
      number: "01",
      title: "Strategy & Discovery",
      description: "We dive deep into your brand's DNA, market positioning, and user needs to craft a foundation for success.",
    },
    {
      number: "02", 
      title: "Creative Development",
      description: "Our creative team pushes boundaries, creating visually stunning and functionally superior digital experiences.",
    },
    {
      number: "03",
      title: "Implementation & Launch",
      description: "We bring designs to life with cutting-edge technology, ensuring scalability, performance, and seamless user experience.",
    }
  ];

  const services = [
    {
      name: "Brand Strategy",
      image: "https://picsum.photos/200/200?random=101",
      path: "/services/brand-strategy"
    },
    {
      name: "Web Development",
      image: "https://picsum.photos/200/200?random=102", 
      path: "/services/web-development"
    },
    {
      name: "Digital Marketing",
      image: "https://picsum.photos/200/200?random=103",
      path: "/services/digital-marketing"
    },
    {
      name: "Creative Direction",
      image: "https://picsum.photos/200/200?random=104",
      path: "/services/creative-direction"
    },
    {
      name: "UI/UX Design",
      image: "https://picsum.photos/200/200?random=105",
      path: "/services/ui-ux-design"
    },
    {
      name: "E-commerce",
      image: "https://picsum.photos/200/200?random=106",
      path: "/services/e-commerce"
    },
    {
      name: "Mobile Apps",
      image: "https://picsum.photos/200/200?random=107",
      path: "/services/mobile-apps"
    },
    {
      name: "Consulting",
      image: "https://picsum.photos/200/200?random=108",
      path: "/services/consulting"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-50 text-text-primary overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TextReveal direction="scale" className="text-center mb-16">
            <div className="space-y-4">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                Our Process
              </span>
              <h2 className="text-display-md lg:text-display-lg font-display text-text-primary leading-tight">
                How we transform
                <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent"> ideas into reality</span>
              </h2>
            </div>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {processItems.map((item, index) => (
              <TextReveal key={item.number} delay={index * 0.2} className="group">
                <div className="relative p-6 sm:p-8 lg:p-10 bg-white rounded-3xl sm:rounded-4xl shadow-soft hover:shadow-medium transition-all duration-500 border border-neutral-200 hover:border-accent-200 h-full">
                  <FloatingElement 
                    duration={6 + index} 
                    intensity={5} 
                    delay={index * 0.5}
                    className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-full blur-xl"
                  />
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-display-sm font-black text-accent-500 mb-4 sm:mb-6 opacity-20">
                      {item.number}
                    </div>
                    <h3 className="text-lg sm:text-heading-lg font-display font-semibold text-text-primary mb-3 sm:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-body-lg text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Marquee */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-28">
        <TextReveal className="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
            Our Recent Work
          </span>
        </TextReveal>
        
        <div className="overflow-hidden relative">
          <div
            className="flex gap-8 will-change-transform"
            style={{ 
              width: "300%",
              animation: "marqueeLeft 20s linear infinite"
            }}
          >
            {[...galleryImages, ...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={`marquee-${index}`}
                className="h-48 sm:h-64 lg:h-80 w-72 sm:w-96 lg:w-[500px] rounded-3xl overflow-hidden shadow-medium flex-shrink-0"
              >
                <img 
                  src={image} 
                  alt={`Project ${(index % galleryImages.length) + 1}`}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <TextReveal direction="scale" className="text-center mb-20">
            <div className="space-y-4">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                What we do
              </span>
              <h2 className="text-display-md lg:text-display-lg font-display text-text-primary leading-tight">
                Full-service marketing solutions
              </h2>
            </div>
          </TextReveal>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <TextReveal key={service.name} delay={index * 0.1}>
                <MagneticButton intensity={0.2} className="w-full h-full">
                  <div 
                    className="group p-3 sm:p-4 md:p-6 lg:p-8 bg-white rounded-2xl sm:rounded-3xl border border-neutral-200 hover:border-accent-300 transition-all duration-300 hover:shadow-soft cursor-pointer w-full h-full flex flex-col justify-center text-center min-h-[120px] sm:min-h-[140px]"
                    onMouseEnter={() => {
                      setCursorVisible(true);
                      setCursorImage(service.image);
                      setCursorText(service.name);
                    }}
                    onMouseLeave={() => {
                      setCursorVisible(false);
                      setCursorImage('');
                      setCursorText('');
                    }}
                    onClick={() => {
                      // Navigate to service page
                      window.location.href = service.path;
                    }}
                  >
                    <div className="text-xs sm:text-body-sm text-text-tertiary mb-1 sm:mb-2 font-medium">
                      0{index + 1}
                    </div>
                    <div className="text-sm sm:text-base md:text-heading-md font-display font-medium text-text-primary group-hover:text-accent-600 transition-colors leading-tight">
                      {service.name}
                    </div>
                  </div>
                </MagneticButton>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-text-primary leading-none">
              FEATURED
              <span className="block bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                WORK
              </span>
            </h2>
          </TextReveal>

          <TextReveal delay={0.4}>
            <div className="relative group cursor-pointer rounded-3xl sm:rounded-4xl overflow-hidden shadow-hard">
              <img 
                src="https://picsum.photos/1400/800?random=10" 
                alt="Featured project"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[60vh] xl:h-[70vh] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-4 sm:left-6 md:left-8 lg:left-12 right-4 sm:right-6 md:right-8 lg:right-12">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
                      Innovation Platform
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 mb-3 sm:mb-4 md:mb-6 max-w-2xl leading-relaxed">
                      Revolutionary digital platform connecting creative minds and driving industry innovation
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base text-neutral-400">
                      <span>Platform Design</span>
                      <span className="hidden sm:inline">•</span>
                      <span>React</span>
                      <span className="hidden sm:inline">•</span>
                      <span>2024</span>
                    </div>
                  </div>
                  <div className="pt-2 sm:pt-0">
                    <InteractiveButton variant="primary" size="sm" className="text-xs sm:text-sm md:text-base">
                      View Case Study
                    </InteractiveButton>
                  </div>
                </div>
              </div>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-display-md lg:text-display-lg font-display font-bold text-text-primary mb-8 leading-tight">
              Ready to transform your
              <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent"> brand</span>?
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.3}>
            <p className="text-heading-md text-text-secondary mb-12 leading-relaxed">
              Let's discuss your vision and create something extraordinary together.
            </p>
          </TextReveal>

          <TextReveal delay={0.5} direction="scale">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <InteractiveButton variant="primary" size="lg" href="/contact">
                Start Your Project
              </InteractiveButton>
              <InteractiveButton variant="secondary" size="lg" href="/work">
                View Our Portfolio
              </InteractiveButton>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Custom Cursor */}
      <CustomCursor 
        isVisible={cursorVisible}
        imageUrl={cursorImage}
        cursorText={cursorText}
      />
    </div>
  );
};

export default Home; 