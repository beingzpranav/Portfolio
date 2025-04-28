"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/pageWrapper.css';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const animatedElementsRef = useRef<HTMLElement[]>([]);
  
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

  // Loading animation
  useEffect(() => {
    // Simulate loading time or wait for resources to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Animate elements on scroll
  useEffect(() => {
    if (loading) return;

    const animateOnScroll = () => {
      // Find all elements with aos-animate class
      const animatedElements = document.querySelectorAll('.aos-animate');
      animatedElementsRef.current = Array.from(animatedElements) as HTMLElement[];

      const checkVisibility = () => {
        animatedElementsRef.current.forEach(element => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
          
          if (isVisible) {
            element.classList.add('active');
          }
        });
      };

      // Initial check
      checkVisibility();

      // Add scroll listener
      window.addEventListener('scroll', checkVisibility);
      
      return () => window.removeEventListener('scroll', checkVisibility);
    };

    const initAnimation = setTimeout(animateOnScroll, 200);
    return () => clearTimeout(initAnimation);
  }, [loading]);

  // Page transition variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
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
                animate={{ 
                  scale: [1, 1.2, 1],
                  borderRadius: ["20%", "50%", "20%"],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 bg-primary/30 backdrop-blur-xl rounded-lg flex items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3, 
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