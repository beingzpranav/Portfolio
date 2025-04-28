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
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  const codeElements = [
    { id: 1, left: '5%', top: '20%', rotation: -15, delay: 0 },
    { id: 2, right: '10%', top: '15%', rotation: 12, delay: 0.5 },
    { id: 3, left: '15%', bottom: '15%', rotation: 5, delay: 1 },
    { id: 4, right: '20%', bottom: '25%', rotation: -8, delay: 1.5 },
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    setLoaded(true);
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Add mouse move tracking for spotlight effect (desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
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
      {/* Animated particles background */}
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
      
      {/* Interactive spotlight effect that follows mouse (desktop only) */}
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
          {/* Content */}
          <div className="order-2 md:order-1 md:col-span-7 text-center md:text-left">
            <div className={`fade-in-slide ${loaded ? 'visible' : ''}`}>
              {/* Greeting */}
              <p className="text-accent mb-3 md:mb-4 font-mono text-sm md:text-base">
                <span className="inline-block code-text-animation">Hello, my name is</span>
              </p>
              
              {/* Name */}
              <motion.h1 
                variants={itemVariants} 
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 glow-text hero-name"
              >
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
              </motion.h1>
              
              {/* Role */}
              <div className="text-xl md:text-3xl lg:text-4xl text-gray-400 mb-4 md:mb-6 min-h-[32px] md:min-h-[56px]">
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    2000,
                    // 'Frontend Developer',
                    // 2000,
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
              
              {/* Description */}
              <p className="text-gray-400 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 text-sm md:text-base">
                I specialize in building modern web applications with a focus on
                performance, accessibility, and user experience. I enjoy creating
                beautiful interfaces and solving complex problems.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <Link href="#projects" className="btn btn-primary relative overflow-hidden group enhanced-btn text-sm md:text-base">
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute bottom-0 left-0 w-0 h-full bg-accent group-hover:w-full transition-all duration-300 -z-1"></span>
                </Link>
                <Link href="#contact" className="btn btn-outline hover-glow text-sm md:text-base">Contact Me</Link>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="order-1 md:order-2 md:col-span-5 flex justify-center md:justify-end mb-6 md:mb-0">
            <div className={`relative w-48 h-48 md:w-72 lg:w-80 md:h-72 lg:h-80 profile-fade-in ${loaded ? 'visible' : ''}`}>
              {/* Simple glow effect */}
              <div className="absolute -inset-2 rounded-full" style={{ 
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(14, 165, 233, 0.1) 70%, transparent 100%)',
                filter: 'blur(8px)',
                zIndex: -1
              }}></div>
              
              {/* Clean frame border */}
              <div className="absolute inset-0 rounded-full" style={{
                border: '3px solid rgba(14, 165, 233, 0.6)',
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)',
              }}></div>
              
              {/* Image container */}
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
              
              {/* Camera frame corners */}
              <div className="absolute -top-1 -left-1 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2 rounded-tl" style={{ borderColor: 'rgba(14, 165, 233, 1)' }}></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 border-t-2 border-r-2 rounded-tr" style={{ borderColor: 'rgba(14, 165, 233, 1)' }}></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 md:w-4 md:h-4 border-b-2 border-l-2 rounded-bl" style={{ borderColor: 'rgba(14, 165, 233, 1)' }}></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 rounded-br" style={{ borderColor: 'rgba(14, 165, 233, 1)' }}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2">
          <div className={`scroll-indicator ${loaded ? 'visible' : ''}`}>
            <div className="arrow-container">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(14, 165, 233, 0.3);
          border-radius: 50%;
          animation: float-particle 15s linear infinite;
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        .spotlight {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at var(--x, 50%) var(--y, 50%),
            rgba(14, 165, 233, 0.15) 0%,
            rgba(14, 165, 233, 0.05) 25%,
            transparent 50%
          );
          pointer-events: none;
          opacity: 0.8;
        }
        
        .fade-in-slide {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in-slide.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .profile-fade-in {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .profile-fade-in.visible {
          opacity: 1;
          transform: scale(1);
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 0.4s;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .glow-text {
          text-shadow: 0 0 15px rgba(14, 165, 233, 0.3);
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            text-shadow: 0 0 15px rgba(14, 165, 233, 0.3);
          }
          50% {
            text-shadow: 0 0 25px rgba(14, 165, 233, 0.6);
          }
        }
        
        .glow-border {
          border: 2px solid rgba(14, 165, 233, 0.5);
          box-shadow: 0 0 20px rgba(14, 165, 233, 0.3), inset 0 0 20px rgba(14, 165, 233, 0.3);
          border-radius: 50%;
        }
        
        .grid-background {
          background-image: linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .rotate-animation {
          animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #ffffff, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .code-text-animation {
          position: relative;
          padding-left: 30px;
        }
        
        .code-text-animation:before {
          content: ">";
          position: absolute;
          left: 0;
          top: 0;
          color: #0ea5e9;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        .tech-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease;
        }
        
        .tech-icon:hover {
          transform: translateY(-8px);
        }
        
        .tech-icon span {
          margin-top: 8px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .skills-container {
          overflow-x: auto;
          padding-bottom: 10px;
          mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }
        
        .arrow-container {
          height: 10px;
          text-align: center;
        }
        
        .arrow {
          width: 10px;
          height: 10px;
          display: inline-block;
          border-right: 2px solid rgba(255, 255, 255, 0.3);
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
          transform: rotate(45deg);
          animation: arrow-pulse 2s infinite;
        }
        
        @keyframes arrow-pulse {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        
        .scroll-indicator {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease, transform 1s ease;
          transition-delay: 1s;
        }
        
        .scroll-indicator.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .profile-container {
          position: relative;
          overflow: hidden;
        }
        
        .profile-shine {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          animation: shine 6s infinite;
        }
        
        @keyframes shine {
          0% {
            top: -100%;
            left: -100%;
          }
          20%, 100% {
            top: 100%;
            left: 100%;
          }
        }
        
        .enhanced-btn {
          position: relative;
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.3);
          transition: box-shadow 0.3s ease;
        }
        
        .enhanced-btn:hover {
          box-shadow: 0 0 20px rgba(14, 165, 233, 0.5);
        }
        
        .hover-glow {
          transition: all 0.3s ease;
        }
        
        .hover-glow:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.3);
        }
        
        .-z-1 {
          z-index: -1;
        }
      `}</style>
    </section>
  );
};

export default Hero; 