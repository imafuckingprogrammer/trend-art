import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import TextReveal from '../components/TextReveal';
import MarqueeCarousel from '../components/MarqueeCarousel';
import InteractiveButton from '../components/InteractiveButton';
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
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TextReveal direction="scale" className="text-center mb-20">
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

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {processItems.map((item, index) => (
              <TextReveal key={item.number} delay={index * 0.2} className="group">
                <div className="relative p-8 lg:p-10 bg-white rounded-4xl shadow-soft hover:shadow-medium transition-all duration-500 border border-neutral-200 hover:border-accent-200">
                  <FloatingElement 
                    duration={6 + index} 
                    intensity={5} 
                    delay={index * 0.5}
                    className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-full blur-xl"
                  />
                  
                  <div className="relative z-10">
                    <div className="text-display-sm font-black text-accent-500 mb-6 opacity-20">
                      {item.number}
                    </div>
                    <h3 className="text-heading-lg font-display font-semibold text-text-primary mb-4">
                      {item.title}
                    </h3>
                    <p className="text-body-lg text-text-secondary leading-relaxed">
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
      <section className="py-16 lg:py-20">
        <TextReveal className="text-center mb-12">
          <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
            Our Recent Work
          </span>
        </TextReveal>
        
        <MarqueeCarousel 
          items={galleryImages}
          speed={0.5}
          className="h-64 lg:h-80"
          itemClassName="h-full w-96 lg:w-[500px] rounded-3xl overflow-hidden shadow-medium"
        />
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-neutral-50">
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
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <TextReveal key={service.name} delay={index * 0.1}>
                <div 
                  className="group p-6 lg:p-8 bg-white rounded-3xl border border-neutral-200 hover:border-accent-300 transition-all duration-300 hover:shadow-soft cursor-pointer"
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
                  <div className="text-body-sm text-text-tertiary mb-2 font-medium">
                    0{index + 1}
                  </div>
                  <div className="text-heading-md font-display font-medium text-text-primary group-hover:text-accent-600 transition-colors">
                    {service.name}
                  </div>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="text-center mb-20">
            <h2 className="text-display-lg lg:text-display-xl font-display font-black text-text-primary leading-none">
              FEATURED
              <span className="block bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                WORK
              </span>
            </h2>
          </TextReveal>

          <TextReveal delay={0.4}>
            <div className="relative group cursor-pointer rounded-4xl overflow-hidden shadow-hard">
              <img 
                src="https://picsum.photos/1400/800?random=10" 
                alt="Featured project"
                className="w-full h-96 lg:h-[70vh] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 lg:bottom-12 left-8 lg:left-12 right-8 lg:right-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-heading-lg lg:text-display-md font-display font-bold text-white mb-4">
                      Innovation Platform
                    </h3>
                    <p className="text-body-lg text-neutral-300 mb-6 max-w-2xl">
                      Revolutionary digital platform connecting creative minds and driving industry innovation
                    </p>
                    <div className="flex gap-4 text-body-sm text-neutral-400">
                      <span>Platform Design</span>
                      <span>•</span>
                      <span>React</span>
                      <span>•</span>
                      <span>2024</span>
                    </div>
                  </div>
                  <InteractiveButton variant="primary" size="md">
                    View Case Study
                  </InteractiveButton>
                </div>
              </div>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-neutral-50">
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