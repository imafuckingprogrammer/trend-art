import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from '../components/ScrollRevealText';

const Services = () => {
  useEffect(() => {
    document.title = 'Services - Trend Art Media';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive digital marketing and creative services from strategy to execution. Transform your brand with our expert team.');
    }
  }, []);

  const services = [
    {
      number: "1",
      title: "Strategy & Branding",
      description: "Building strong foundations for your brand's success through research-driven strategies and compelling brand identities.",
      services: [
        "Market research & competitor analysis",
        "Brand positioning & identity development",
        "Buyer persona creation",
        "Go-to-market (GTM) strategy",
        "Messaging frameworks"
      ]
    },
    {
      number: "2",
      title: "Digital Marketing & Advertising",
      description: "Data-driven advertising campaigns across all major platforms to maximize your reach and ROI.",
      services: [
        "Google Ads (Search, Display, YouTube)",
        "Meta Ads (Facebook & Instagram)",
        "TikTok Ads, Snapchat Ads, LinkedIn Ads",
        "Retargeting & performance optimization",
        "Landing page A/B testing & CRO (conversion rate optimization)"
      ]
    },
    {
      number: "3",
      title: "Social Media Management",
      description: "Comprehensive social media strategies that build communities and drive engagement across all platforms.",
      services: [
        "Content calendars & creative planning",
        "Copywriting, visuals, and video creation",
        "Reels, Stories, TikToks – native-style content",
        "Community management (replies, DMs, comments)",
        "Paid social strategy & reporting"
      ]
    },
    {
      number: "4",
      title: "SEO & Content Marketing",
      description: "Boost your online visibility and drive organic traffic through strategic SEO and compelling content.",
      services: [
        "On-page & technical SEO",
        "Blog strategy, copywriting, localization (Arabic/English)",
        "Link-building & domain authority growth",
        "Video SEO & YouTube optimization"
      ]
    },
    {
      number: "5",
      title: "Website & App Development",
      description: "Custom digital solutions tailored to your business needs, from websites to mobile applications.",
      services: [
        "UX/UI design tailored to business goals",
        "Custom websites (WordPress, Shopify, Webflow, etc.)",
        "eCommerce & booking platforms",
        "Mobile apps (iOS/Android)",
        "Website hosting, speed optimization & security"
      ]
    },
    {
      number: "6",
      title: "Influencer Marketing",
      description: "Connect with your audience through authentic influencer partnerships and user-generated content.",
      services: [
        "Influencer research & vetting (local & international)",
        "Campaign design & ROI tracking",
        "Contracts & compliance (including UAE law)",
        "Cross-posting and UGC licensing"
      ]
    },
    {
      number: "7",
      title: "PR & Media Buying",
      description: "Amplify your brand's voice through strategic media relationships and traditional advertising channels.",
      services: [
        "Press releases in major UAE outlets",
        "Media relationships with Khaleej Times, Gulf News, Lovin Dubai, etc.",
        "Print, radio, and billboard ad placement",
        "Crisis communication strategies"
      ]
    },
    {
      number: "8",
      title: "Video Production & Creative Studio",
      description: "Professional video content that tells your brand's story and captures your audience's attention.",
      services: [
        "Brand films & ads",
        "Event videography",
        "Motion graphics & 3D animation",
        "Storyboarding and scriptwriting",
        "Drone footage (licensed per UAE laws)"
      ]
    },
    {
      number: "9",
      title: "Analytics & Reporting",
      description: "Data-driven insights and comprehensive reporting to measure success and optimize performance.",
      services: [
        "Monthly dashboards (GA4, Meta, TikTok, HubSpot)",
        "Custom KPI tracking tied to business goals",
        "ROI reporting with campaign optimization plans",
        "Attribution modeling (first-touch, last-touch, etc.)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-6 sm:mb-8 leading-none">
                Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From strategy to execution, we offer comprehensive digital solutions 
                that drive results and transform your brand's presence.
              </p>
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Complete Digital 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Solutions</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our integrated approach ensures every aspect of your digital presence 
                works together seamlessly to achieve your business goals.
              </p>
            </div>
          </ScrollRevealText>

          <ScrollRevealText delay={0.3} stagger={true} staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.slice(0, 6).map((service) => (
                <motion.div
                  key={service.number}
                  className="relative p-6 sm:p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-blue-500 mr-4">
                      {service.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollRevealText>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollRevealText>
            <h2 className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase mb-16 sm:mb-20 text-center">
              DETAILED SERVICES
            </h2>
          </ScrollRevealText>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {services.map((service, index) => (
              <div key={service.number} className="space-y-8 lg:space-y-0">
                {/* Mobile/Tablet: Stacked layout */}
                <div className="lg:hidden space-y-8">
                  <ScrollRevealText delay={index * 0.1}>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-6">
                        <span className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                          {service.number}
                        </span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </ScrollRevealText>
                  
                  <ScrollRevealText delay={index * 0.1 + 0.3}>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-4 text-center">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.services.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start space-x-3 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-sm sm:text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </ScrollRevealText>
                </div>

                {/* Desktop: Side-by-side layout */}
                <div className={`hidden lg:grid lg:grid-cols-2 gap-16 xl:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <ScrollRevealText delay={index * 0.1}>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        <span className="text-8xl xl:text-9xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mr-6">
                          {service.number}
                        </span>
                      </div>
                      <h3 className="text-4xl xl:text-5xl font-bold text-white mb-6">
                        {service.title}
                      </h3>
                      <p className="text-lg xl:text-xl text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </ScrollRevealText>

                  <ScrollRevealText delay={index * 0.1 + 0.3} direction={index % 2 === 1 ? 'right' : 'left'}>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <h4 className="text-xl font-semibold text-white mb-6">What's Included:</h4>
                      <ul className="space-y-4">
                        {service.services.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start space-x-4 text-gray-300"
                            initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-blue-500 mt-1 text-lg">•</span>
                            <span className="text-base xl:text-lg">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </ScrollRevealText>
                </div>

                {/* Separator line */}
                {index < services.length - 1 && (
                  <div className="hidden lg:block pt-16 xl:pt-20">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollRevealText direction="scale">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Ready to 
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> transform</span> 
              <br />your business?
            </h2>
          </ScrollRevealText>
          
          <ScrollRevealText delay={0.3}>
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 leading-relaxed">
              Let's discuss your goals and create a custom strategy that drives real results.
            </p>
          </ScrollRevealText>

          <ScrollRevealText delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.button 
                className="bg-white text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button 
                className="border border-gray-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:border-gray-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </ScrollRevealText>
        </div>
      </section>
    </div>
  );
};

export default Services; 