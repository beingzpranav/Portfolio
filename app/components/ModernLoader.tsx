"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ModernLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time of 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
    >
      <div className="relative">
        {/* Outer circle */}
        <motion.div
          className="absolute inset-0 border-2 border-primary rounded-full w-16 h-16"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Inner circle */}
        <motion.div
          className="border-2 border-white rounded-full w-12 h-12"
          animate={{
            rotate: 360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute inset-0 m-auto w-2 h-2 bg-primary rounded-full"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Loading text */}
      <motion.p
        className="absolute bottom-1/4 text-lg font-light tracking-wider text-primary"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        LOADING
      </motion.p>
    </motion.div>
  );
};

export default ModernLoader; 