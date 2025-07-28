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

    let ctx = gsap.context(() => {
      if (scrollBased) {
        // Scroll-based marquee animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const xMovement = direction === 'left' 
                ? -progress * 300 * speed 
                : progress * 300 * speed;
              gsap.set(marquee, { x: xMovement });
            }
          }
        });

        // Base continuous animation
        gsap.to(marquee, {
          x: direction === 'left' ? -marquee.scrollWidth / 2 : marquee.scrollWidth / 2,
          duration: 20 / speed,
          ease: "none",
          repeat: -1
        });
      } else {
        // Standard continuous marquee
        gsap.to(marquee, {
          x: direction === 'left' ? -marquee.scrollWidth / 2 : marquee.scrollWidth / 2,
          duration: 20 / speed,
          ease: "none",
          repeat: -1
        });
      }

      // Hover pause functionality
      if (pauseOnHover) {
        container.addEventListener('mouseenter', () => {
          gsap.globalTimeline.pause();
        });
        
        container.addEventListener('mouseleave', () => {
          gsap.globalTimeline.resume();
        });
      }
    }, container);

    return () => {
      ctx.revert();
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
                className="h-full w-auto object-cover"
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