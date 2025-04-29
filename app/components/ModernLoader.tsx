"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/pyramidLoader.css';

const ModernLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, isMobile ? 3000 : 4000);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-dark"
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <div className="loader-container">
            <div className="outer-circle"></div>
            <div className="inner-circle"></div>
            <div className="center-dot"></div>
            <div className="text">
              <span className="letter" style={{ '--index': 0 } as React.CSSProperties}>L</span>
              <span className="letter" style={{ '--index': 1 } as React.CSSProperties}>o</span>
              <span className="letter" style={{ '--index': 2 } as React.CSSProperties}>a</span>
              <span className="letter" style={{ '--index': 3 } as React.CSSProperties}>d</span>
              <span className="letter" style={{ '--index': 4 } as React.CSSProperties}>i</span>
              <span className="letter" style={{ '--index': 5 } as React.CSSProperties}>n</span>
              <span className="letter" style={{ '--index': 6 } as React.CSSProperties}>g</span>
              <span className="letter dot-1" style={{ '--index': 7 } as React.CSSProperties}>.</span>
              <span className="letter dot-2" style={{ '--index': 8 } as React.CSSProperties}>.</span>
              <span className="letter dot-3" style={{ '--index': 9 } as React.CSSProperties}>.</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModernLoader; 