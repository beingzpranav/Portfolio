"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5
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
      description: 'A full-stack task management application with user authentication, task categorization, and priority sorting.',
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
    <section id="projects" className="section py-16 md:py-24">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 text-white relative inline-block"
            variants={itemVariants}
          >
            My Projects
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
            variants={itemVariants}
          >
            A collection of my recent work across different domains, from web and mobile applications to AI and IoT solutions.
          </motion.p>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card bg-[#0F172A] overflow-hidden border border-[#1E293B] rounded-xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
              variants={itemVariants}
              onHoverStart={() => setHovered(project.id)}
              onHoverEnd={() => setHovered(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-700"
                  style={{ 
                    transform: hovered === project.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-60" />
                
                {/* Project links that appear on hover */}
                <motion.div 
                  className="absolute top-0 right-0 p-3 flex gap-2 md:opacity-0 md:group-hover:opacity-100"
                  style={{ opacity: 1 }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0F172A]/80 backdrop-blur-sm p-2 rounded-full text-white hover:bg-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0F172A]/80 backdrop-blur-sm p-2 rounded-full text-white hover:bg-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
              
              {/* Project info */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <motion.span
                      key={tag}
                      className="text-xs bg-[#1E293B] text-primary px-2 py-1 rounded-md"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
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
      </motion.div>
    </section>
  );
};

export default Projects; 
