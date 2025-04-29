"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/pageWrapper.css';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const animatedElementsRef = useRef<HTMLElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  
  // Fix for mobile viewport height
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVh();
    window.addEventListener('resize', setVh);
    
    return () => window.removeEventListener('resize', setVh);
  }, []);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Loading animation - reduced time on mobile
  useEffect(() => {
    // Simulate loading time or wait for resources to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, isMobile ? 1000 : 2000);

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Animate elements on scroll - optimized
  useEffect(() => {
    if (loading) return;

    const animateOnScroll = () => {
      // Find all elements with aos-animate class
      const animatedElements = document.querySelectorAll('.aos-animate');
      animatedElementsRef.current = Array.from(animatedElements) as HTMLElement[];

      const checkVisibility = () => {
        // Use requestAnimationFrame for better performance
        requestAnimationFrame(() => {
          animatedElementsRef.current.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
            
            if (isVisible && !element.classList.contains('active')) {
              element.classList.add('active');
            }
          });
        });
      };

      // Initial check
      checkVisibility();

      // Add scroll listener with throttling for performance
      let isScrolling = false;
      const scrollListener = () => {
        if (!isScrolling) {
          isScrolling = true;
          requestAnimationFrame(() => {
            checkVisibility();
            isScrolling = false;
          });
        }
      };
      
      window.addEventListener('scroll', scrollListener, { passive: true });
      
      return () => window.removeEventListener('scroll', scrollListener);
    };

    const initAnimation = setTimeout(animateOnScroll, 200);
    return () => clearTimeout(initAnimation);
  }, [loading]);

  // Page transition variants - simplified for mobile
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: isMobile ? 0.3 : 0.5,
        when: "beforeChildren",
        staggerChildren: isMobile ? 0.05 : 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: isMobile ? 0.2 : 0.3,
        when: "afterChildren",
        staggerChildren: isMobile ? 0.02 : 0.05,
        staggerDirection: -1
      }
    }
  };

  return (
    <div className="wrapper">
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="loader-container"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={ isMobile ? 
                  { scale: [1, 1.1, 1] } : 
                  { 
                    scale: [1, 1.2, 1],
                    borderRadius: ["20%", "50%", "20%"],
                  }
                }
                transition={{ 
                  duration: isMobile ? 1.5 : 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 bg-primary/30 backdrop-blur-xl rounded-lg flex items-center justify-center"
              >
                <motion.div
                  animate={ isMobile ? 
                    { rotate: 360 } : 
                    { 
                      rotate: 360,
                      scale: [0.8, 1, 0.8]
                    }
                  }
                  transition={{ 
                    duration: isMobile ? 2 : 3, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-10 h-10 border-t-2 border-l-2 border-white rounded-full"
                />
              </motion.div>
              <motion.p 
                className="mt-4 text-white/70 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Loading...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        variants={pageVariants}
        initial="hidden"
        animate={loading ? "hidden" : "visible"}
        exit="exit"
        className="content"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageWrapper; 