import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';
import InteractiveButton from '../components/InteractiveButton';
import MagneticButton from '../components/MagneticButton';
import FloatingElement from '../components/FloatingElement';

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Trend Art';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms and conditions for Trend Art digital agency services. Read our legal terms and conditions.');
    }
  }, []);

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using Trend Art\'s services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use our services.'
    },
    {
      title: 'Services Description',
      content: 'Trend Art provides digital marketing, web development, branding, and creative services. We reserve the right to modify, suspend, or discontinue any service at any time without notice.'
    },
    {
      title: 'Client Responsibilities',
      content: 'Clients are responsible for providing accurate information, timely feedback, and necessary materials. Delays caused by client inaction may result in project timeline extensions and additional costs.'
    },
    {
      title: 'Payment Terms',
      content: 'Payment terms are specified in individual project agreements. Late payments may incur additional fees. All prices are in USD unless otherwise specified. Refunds are subject to our refund policy.'
    },
    {
      title: 'Intellectual Property',
      content: 'Upon full payment, clients receive rights to deliverables as specified in the project agreement. Trend Art retains rights to methodologies, processes, and pre-existing intellectual property.'
    },
    {
      title: 'Confidentiality',
      content: 'We maintain strict confidentiality of client information and projects. Both parties agree not to disclose confidential information to third parties without written consent.'
    },
    {
      title: 'Limitation of Liability',
      content: 'Trend Art\'s liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages arising from our services.'
    },
    {
      title: 'Termination',
      content: 'Either party may terminate agreements with written notice. Upon termination, clients are responsible for payment of work completed. Materials and access may be revoked upon termination.'
    }
  ];

  return (
    <div className="min-h-screen bg-primary-50 text-text-primary overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FloatingElement duration={10} intensity={20} delay={0} className="absolute top-32 right-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" />
          <FloatingElement duration={8} intensity={15} delay={2} direction="x" className="absolute bottom-40 left-10 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl" />
          
          <TextReveal className="text-center">
            <div className="space-y-8">
              <span className="text-body-sm font-medium tracking-[0.3em] text-text-tertiary uppercase">
                Legal
              </span>
              <motion.h1 
                className="text-display-xl lg:text-display-2xl font-display font-black text-text-primary leading-none"
                animate={{ 
                  rotateX: [0, 3, 0, -3, 0],
                  y: [0, -2, 0, 2, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                TERMS &
                <span className="block bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                  CONDITIONS
                </span>
              </motion.h1>
              <p className="text-heading-md text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Please read these terms and conditions carefully before using our services. 
                These terms govern your use of Trend Art's services.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <TextReveal>
            <div className="flex justify-between items-center text-body-sm text-text-tertiary">
              <span>Last updated: January 2024</span>
              <span>Version 2.1</span>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-22 lg:py-30 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <TextReveal key={section.title} delay={index * 0.1}>
                <div className="space-y-6">
                  <h2 className="text-display-sm font-display font-bold text-text-primary">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="text-body-lg text-text-secondary leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 lg:py-28 px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <TextReveal>
              <div className="text-center p-8 bg-white rounded-3xl border border-neutral-200">
                <h3 className="text-heading-lg font-display font-semibold text-text-primary mb-4">
                  Privacy Policy
                </h3>
                <p className="text-body-md text-text-secondary mb-6">
                  Learn how we protect and handle your personal information.
                </p>
                <InteractiveButton variant="secondary" size="md" href="/privacy">
                  Read Privacy Policy
                </InteractiveButton>
              </div>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="text-center p-8 bg-white rounded-3xl border border-neutral-200">
                <h3 className="text-heading-lg font-display font-semibold text-text-primary mb-4">
                  Contact Legal
                </h3>
                <p className="text-body-md text-text-secondary mb-6">
                  Have questions about our terms? Get in touch with our legal team.
                </p>
                <InteractiveButton variant="secondary" size="md" href="mailto:legal@trendart.com">
                  Email Legal Team
                </InteractiveButton>
              </div>
            </TextReveal>

            <TextReveal delay={0.4}>
              <div className="text-center p-8 bg-white rounded-3xl border border-neutral-200">
                <h3 className="text-heading-lg font-display font-semibold text-text-primary mb-4">
                  Service Agreement
                </h3>
                <p className="text-body-md text-text-secondary mb-6">
                  Ready to work with us? Review our standard service agreement.
                </p>
                <InteractiveButton variant="secondary" size="md" href="/contact">
                  Start Project
                </InteractiveButton>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Back to Site */}
      <section className="py-22 lg:py-30 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-display-md font-display font-bold text-text-primary mb-8">
              Ready to work together?
            </h2>
          </TextReveal>
          
          <TextReveal delay={0.3}>
            <p className="text-heading-md text-text-secondary mb-12 leading-relaxed">
              Now that you've read our terms, let's create something amazing together.
            </p>
          </TextReveal>

          <TextReveal delay={0.5} direction="scale">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton intensity={0.3}>
                <InteractiveButton variant="primary" size="lg" href="/contact">
                  Start Your Project
                </InteractiveButton>
              </MagneticButton>
              <InteractiveButton variant="secondary" size="lg" href="/">
                Back to Home
              </InteractiveButton>
            </div>
          </TextReveal>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;