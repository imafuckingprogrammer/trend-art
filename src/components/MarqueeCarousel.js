import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MarqueeCarousel = ({ 
  items = [], 
  speed = 1, 
  direction = 'left',
  className = '',
  itemClassName = '',
  pauseOnHover = true,
  scrollBased = true
}) => {
  const marqueeRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const marquee = marqueeRef.current;
    const container = containerRef.current;
    
    if (!marquee || !container) return;

    // Ensure we have items to display
    if (!items || items.length === 0) return;

    let animation;
    let scrollTriggerInstance;

    const setupAnimation = () => {
      // Always create basic continuous animation first
      const baseAnimation = gsap.to(marquee, {
        x: direction === 'left' ? -marquee.scrollWidth / 3 : marquee.scrollWidth / 3,
        duration: 15 / speed, // Faster base speed
        ease: "none",
        repeat: -1
      });
      
      animation = baseAnimation;

      if (scrollBased) {
        // Add scroll-based direction and speed modulation
        scrollTriggerInstance = ScrollTrigger.create({
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const velocity = self.getVelocity();
            
            // Change direction based on scroll direction
            if (velocity > 0) {
              // Scrolling down - move right
              animation.timeScale(-Math.abs(animation.timeScale()));
            } else {
              // Scrolling up - move left  
              animation.timeScale(Math.abs(animation.timeScale()));
            }
            
            // Speed based on scroll velocity
            const baseSpeed = 1.5;
            const velocityMultiplier = Math.abs(velocity) / 300;
            const finalSpeed = Math.max(0.5, Math.min(3, baseSpeed + velocityMultiplier));
            
            const currentScale = animation.timeScale();
            const newScale = currentScale < 0 ? -finalSpeed : finalSpeed;
            animation.timeScale(newScale);
          }
        });
      }

      // Hover pause functionality
      if (pauseOnHover) {
        const handleMouseEnter = () => animation?.pause();
        const handleMouseLeave = () => animation?.resume();
        
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
          container.removeEventListener('mouseenter', handleMouseEnter);
          container.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    };

    // Wait for images to load before setting up animation
    const images = marquee.querySelectorAll('img');
    if (images.length > 0) {
      Promise.all(Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })).then(setupAnimation);
    } else {
      setupAnimation();
    }

    return () => {
      if (animation) animation.kill();
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
    };
  }, [items, speed, direction, pauseOnHover, scrollBased]);

  // Ensure we have items to display
  if (!items || items.length === 0) {
    return null;
  }

  const duplicatedItems = [...items, ...items, ...items]; // Triple for smooth infinite scroll

  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      <div
        ref={marqueeRef}
        className="flex gap-8 will-change-transform"
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`marquee-item-${index}`}
            className={`flex-shrink-0 ${itemClassName}`}
          >
            {typeof item === 'string' ? (
              <img 
                src={item} 
                alt={`Gallery image ${(index % items.length) + 1}`}
                className="h-full w-full object-cover"
                draggable={false}
                loading="lazy"
              />
            ) : (
              item
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeCarousel;