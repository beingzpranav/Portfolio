"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import '../../styles/hero.css';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: isMobile ? 0.2 : 0.3,
        staggerChildren: isMobile ? 0.15 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: isMobile ? 0.4 : 0.6, 
        ease: [0.6, 0.05, 0.01, 0.9] 
      }
    }
  };

  const codeElements = [
    { id: 1, left: '5%', top: '20%', rotation: -15, delay: 0 },
    { id: 2, right: '10%', top: '15%', rotation: 12, delay: 0.5 },
    { id: 3, left: '15%', bottom: '15%', rotation: 5, delay: 1 },
    { id: 4, right: '20%', bottom: '25%', rotation: -8, delay: 1.5 },
  ];

  useEffect(() => {
    setLoaded(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        if (!window.requestAnimationFrame) {
          setMousePosition({ x: e.clientX, y: e.clientY });
        } else {
          requestAnimationFrame(() => {
            setMousePosition({ x: e.clientX, y: e.clientY });
          });
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section id="home" className="section relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6">
      <div className="particles-container">
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {!isMobile && (
        <div 
          className="spotlight"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`
          }}
        />
      )}

      <div className="container max-w-6xl relative z-10 mx-auto">
        <div className="grid md:grid-cols-12 items-center gap-8 md:gap-4">
          <div className="order-2 md:order-1 md:col-span-7 text-center md:text-left">
            <div className={`fade-in-slide ${loaded ? 'visible' : ''}`}>
              <p className="text-accent mb-3 md:mb-4 font-mono text-sm md:text-base">
                <span className="inline-block code-text-animation">Hello, my name is</span>
              </p>
              
              <motion.h1 
                variants={itemVariants} 
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 glow-text hero-name"
              >
                {!isMobile ? (
                  <>
                    <motion.span 
                      className="inline-block"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0 }}
                    >P</motion.span>
                    <motion.span 
                      className="inline-block"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.1 }}
                    >r</motion.span>
                    <motion.span 
                      className="inline-block"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
                    >a</motion.span>
                    <motion.span 
                      className="inline-block"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
                    >n</motion.span>
                    <motion.span 
                      className="inline-block"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.4 }}
                    >a</motion.span>
                    <motion.span 
                      className="inline-block"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    >v</motion.span>
                    &nbsp;
                    <motion.span 
                      className="inline-block text-primary glow-text"
                      animate={{ 
                        y: [0, -3, 0],
                        textShadow: [
                          "0 0 8px rgba(14, 165, 233, 0.6)", 
                          "0 0 16px rgba(14, 165, 233, 0.8)", 
                          "0 0 8px rgba(14, 165, 233, 0.6)"
                        ]
                      }}
                      transition={{ 
                        y: { duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.6 },
                        textShadow: { duration: 3, repeat: Infinity }
                      }}
                    >
                     Khandelwal
                    </motion.span>
                  </>
                ) : (
                  <span>Pranav <span className="text-primary glow-text">Khandelwal</span></span>
                )}
              </motion.h1>
              
              <div className="text-xl md:text-3xl lg:text-4xl text-gray-400 mb-4 md:mb-6 min-h-[32px] md:min-h-[56px]">
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    2000,
                    'React Developer',
                    2000,
                    'UI/UX Enthusiast',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>
              
              <p className="text-gray-400 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 text-sm md:text-base">
                I specialize in building modern web applications with a focus on
                performance, accessibility, and user experience. I enjoy creating
                beautiful interfaces and solving complex problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <Link href="#projects" className="btn btn-primary relative overflow-hidden group enhanced-btn text-sm md:text-base">
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute bottom-0 left-0 w-0 h-full bg-accent/80 group-hover:w-full transition-all duration-300 -z-1"></span>
                </Link>
                <Link href="#contact" className="btn btn-outline hover-glow text-sm md:text-base">Contact Me</Link>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 md:col-span-5 flex justify-center md:justify-end mb-6 md:mb-0">
            <div className={`relative w-48 h-48 md:w-72 lg:w-80 md:h-72 lg:h-80 profile-fade-in ${loaded ? 'visible' : ''}`}>
              <div className="absolute -inset-2 rounded-full" style={{ 
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(14, 165, 233, 0.1) 70%, transparent 100%)',
                filter: 'blur(8px)',
                zIndex: -1
              }}></div>
              
              <div className="absolute inset-0 rounded-full" style={{
                border: '3px solid rgba(14, 165, 233, 0.6)',
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)',
              }}></div>
              
              <div className="absolute inset-2 overflow-hidden rounded-full border-2 border-white/20">
                <Image
                  src="/Profile.png"
                  alt="Profile Photo"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                />
                <div className="profile-shine"></div>
              </div>
              
              <div className="absolute -top-1 -left-1 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2 rounded-tl" style={{ borderColor: 'rgba(14, 165, 233, 1)' }}></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 border-t-2 border-r-2 rounded-tr" style={{ borderColor: 'rgba(14, 165, 233, 1)' }}></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 md:w-4 md:h-4 border-b-2 border-l-2 rounded-bl" style={{ borderColor: 'rgba(14, 165, 233, 1)' }}></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 rounded-br" style={{ borderColor: 'rgba(14, 165, 233, 1)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
