"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Animation variants - simplified for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: isMobile ? 0.05 : 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: isMobile ? "tween" : "spring",
        stiffness: 100,
        damping: 12,
        duration: isMobile ? 0.3 : 0.5
      }
    }
  };
  
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Next.js and Tailwind CSS featuring smooth animations and responsive design.',
      image: '/projects/Portfolio.png',
      tags: ['Next.js', 'TailwindCSS', 'Framer Motion'],
      link: 'https://pranavk.tech',
      github: 'https://github.com/beingzpranav/portfolio'
    },
    {
      id: 2,
      title: 'Silver-Jubilee',
      description: '"A beautiful celebration website for a 25th wedding anniversary, featuring event details and photo gallery.',
      image: '/projects/silver-jubilee.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://beingzpranav.github.io/Silver-Jubilee/',
      github: 'https://github.com/beingzpranav/Silver-Jubilee'
    },
    // {
    //   id: 3,
    //   title: 'Weather Dashboard',
    //   description: 'Real-time weather forecasting application with location search, interactive maps, and detailed weather metrics.',
    //   image: '/projects/weather.png',
    //   tags: ['JavaScript', 'Weather API', 'Chart.js'],
    //   link: 'https://weather.pranavk.tech',
    //   github: 'https://github.com/beingzpranav/weather-app'
    // },
    // {
    //   id: 4,
    //   title: 'E-Commerce Platform',
    //   description: 'A comprehensive e-commerce solution with product catalog, shopping cart, payment integration, and order management.',
    //   image: '/projects/ecommerce.png',
    //   tags: ['Next.js', 'Stripe', 'Firebase'],
    //   link: 'https://shop.pranavk.tech',
    //   github: 'https://github.com/beingzpranav/ecommerce'
    // },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.3 : 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-white">My</span> <span className="text-primary">Projects</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-secondary/30 rounded-xl overflow-hidden backdrop-blur-sm border border-white/5 shadow-xl hover:shadow-primary/20 group transition-all duration-300"
              variants={itemVariants}
              whileHover={isMobile ? {} : { y: -5 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-dark/90 to-dark/20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === project.id && !isMobile ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs rounded-md bg-primary/20 text-primary backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors"
                    >
                      <span>Source Code</span>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.5C19.9988 8.30564 19.5325 7.15578 18.7 6.3C19.0905 5.26128 19.0545 4.11808 18.6 3.1C18.6 3.1 17.5 2.8 15.6 4C13.9039 3.55224 12.0961 3.55224 10.4 4C8.5 2.8 7.4 3.1 7.4 3.1C6.94548 4.11808 6.90947 5.26128 7.3 6.3C6.46745 7.15578 6.00122 8.30564 6 9.5C6 14.1 8.7 15.2 11.5 15.5C10.9 16.1 10.8 16.7 10.8 17.5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Mobile-only tags */}
                <div className="flex flex-wrap gap-2 md:hidden">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs rounded-md bg-primary/20 text-primary backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Mobile-only links */}
                <div className="flex gap-3 mt-4 md:hidden">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-primary text-white rounded-lg text-sm flex items-center gap-1"
                  >
                    <span>Live Demo</span>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-secondary/70 text-white rounded-lg text-sm flex items-center gap-1"
                  >
                    <span>Source Code</span>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.5C19.9988 8.30564 19.5325 7.15578 18.7 6.3C19.0905 5.26128 19.0545 4.11808 18.6 3.1C18.6 3.1 17.5 2.8 15.6 4C13.9039 3.55224 12.0961 3.55224 10.4 4C8.5 2.8 7.4 3.1 7.4 3.1C6.94548 4.11808 6.90947 5.26128 7.3 6.3C6.46745 7.15578 6.00122 8.30564 6 9.5C6 14.1 8.7 15.2 11.5 15.5C10.9 16.1 10.8 16.7 10.8 17.5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View more projects link */}
        <motion.div 
          className="flex justify-center mt-10"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/beingzpranav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Projects on GitHub
            <motion.svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
