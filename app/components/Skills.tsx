"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";


// Define types for skills data
type Skill = {
  name: string;
  icon: string;
  level: number;
};

type SkillsData = {
  [category: string]: Skill[];
};

// Component for tech icons with inline SVGs
const TechCard = ({ name, color, icon }: { name: string; color: string; icon: React.ReactNode }) => {
  return (
    <div className="text-center group">
      <div 
        className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 bg-dark/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-700 transition-all duration-300 hover:border-primary"
        style={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
          e.currentTarget.style.boxShadow = `0 0 15px rgba(${color.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ') || '255, 255, 255'}, 0.3)`;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10">
          {icon}
        </div>
      </div>
      <p className="text-sm md:text-base">{name}</p>
    </div>
  );
};

// Code elements for animation
const codeElements = [
  { icon: '<>', position: { top: '15%', left: '8%' }, color: '#0ea5e9', delay: 0 },
  { icon: '{}', position: { top: '65%', right: '12%' }, color: '#22d3ee', delay: 1.5 },
  { icon: '()', position: { bottom: '10%', left: '20%' }, color: '#0ea5e9', delay: 0.7 },
  { icon: '//', position: { top: '25%', right: '15%' }, color: '#22d3ee', delay: 2.2 },
  { icon: '[]', position: { top: '45%', left: '15%' }, color: '#0ea5e9', delay: 3 },
  { icon: ';', position: { bottom: '30%', right: '25%' }, color: '#0ea5e9', delay: 1 },
  { icon: '/*', position: { top: '75%', left: '30%' }, color: '#22d3ee', delay: 2.5 }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skills: SkillsData = {
    frontend: [
      { name: 'React', icon: '/svg-icons/react.svg', level: 90 },
      { name: 'Next.js', icon: '/svg-icons/nextjs.svg', level: 85 },
      { name: 'TypeScript', icon: '/svg-icons/typescript.svg', level: 80 },
      { name: 'TailwindCSS', icon: '/svg-icons/tailwind.svg', level: 95 },
      { name: 'JavaScript', icon: '/svg-icons/javascript.svg', level: 90 },
      { name: 'HTML', icon: '/svg-icons/html.svg', level: 100 },
      { name: 'CSS', icon: '/svg-icons/css.svg', level: 100 },
    ],
    backend: [
      { name: 'Node.js', icon: '/svg-icons/nodejs.svg', level: 80 },
      { name: 'Express', icon: '/svg-icons/express.svg', level: 50 },
      { name: 'MongoDB', icon: '/svg-icons/mongodb.svg', level: 70 },
      { name: 'Firebase', icon: '/svg-icons/firebase.svg', level: 85 },
      { name: 'PostgreSQL', icon: '/svg-icons/postgresql.svg', level: 65 },
    ],
    design: [
      { name: 'Figma', icon: '/svg-icons/figma.svg', level: 85 },
      { name: 'Canva', icon: '/svg-icons/canva.svg', level: 70 },
      { name: 'Photoshop', icon: '/svg-icons/photoshop.svg', level: 65 },
     
    ],
    tools: [
      { name: 'Git', icon: '/svg-icons/git.svg', level: 65 },
      { name: 'VSCode', icon: '/svg-icons/vscode.svg', level: 95 },
      { name: 'Docker', icon: '/svg-icons/docker.svg', level: 50 },
      { name: 'GitHub', icon: '/svg-icons/github.svg', level: 90 },
      { name: 'npm', icon: '/svg-icons/npm.svg', level: 85 },
    ],
  };

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'tools', label: 'Tools' },
  ];

  return (
    <section id="skills" className="section py-16 md:py-24 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5 backdrop-blur-3xl"
          style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              x: [
                Math.random() * 50 - 25,
                Math.random() * 50 - 25,
                Math.random() * 50 - 25
              ],
              y: [
                Math.random() * 50 - 25,
                Math.random() * 50 - 25,
                Math.random() * 50 - 25
              ],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
        </div>

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
            <div className="flex items-center justify-center mb-4">
             
            My Skills
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
            My technical skills and competencies across various development areas.
          </motion.p>
        </div>
        
        {/* Category tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 relative ${
                activeCategory === category.id 
                  ? 'text-white font-medium' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              {activeCategory === category.id && (
                <motion.span 
                  className="absolute inset-0 rounded-full bg-primary -z-10"
                  layoutId="activeSkillTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Skills grid */}
        <motion.div 
          className="grid grid-cols-1 gap-6 justify-items-center"
          variants={containerVariants}
          key={activeCategory}
          initial="hidden"
          animate="visible"
        >
          <div 
            className="col-span-full w-full"
            style={{ 
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '2rem 3rem'
            }}
          >
            {skills[activeCategory].map((skill: { name: string; icon: string; level: number }, index: number) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center"
                style={{ width: '120px' }}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-16 h-16 md:w-20 md:h-20 bg-[#1E293B] rounded-lg flex items-center justify-center mb-3 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)"
                  }}
                >
                  {/* Skill icon */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  >
                    {/* Replace generic SVG with specific icons based on skill name */}
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-10 h-10 md:w-12 md:h-12"
                      style={{ 
                        filter: skill.name === 'GitHub' ? 'invert(1)' : 'none',
                        color: getColorForSkill(skill.name)
                      }}
                    />
                  </motion.div>
                  
                  {/* Progress indicator */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  />
                </motion.div>
                
                <motion.p 
                  className="text-white text-sm font-medium text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  {skill.name}
                </motion.p>
                
                <motion.span 
                  className="text-xs text-primary mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  {skill.level}%
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Additional info */}
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.p 
            className="text-gray-400 text-sm mb-4"
            variants={itemVariants}
          >
            I'm constantly learning and expanding my skill set. Currently exploring:
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {['Three.js',  'Blockchain',  'Python'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1 text-xs bg-[#1E293B] text-primary rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(14, 165, 233, 0.2)",
                  transition: { duration: 0.2 }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Helper function to get color for each skill
const getColorForSkill = (name: string) => {
  const colorMap: {[key: string]: string} = {
    'React': '#61DAFB',
    'Next.js': '#FFFFFF',
    'TypeScript': '#3178C6',
    'TailwindCSS': '#06B6D4',
    'JavaScript': '#F7DF1E',
    'Framer Motion': '#0055FF',
    'Node.js': '#339933',
    'Express': '#FFFFFF',
    'MongoDB': '#47A248',
    'Firebase': '#FFCA28',
    'PostgreSQL': '#336791',
    'Docker': '#2496ED',
    'GitHub': '#FFFFFF',
    'Git': '#F05032',
    'VSCode': '#007ACC',
    'npm': '#CB3837',
  };
  
  return colorMap[name] || '#FFFFFF';
};

export default Skills; 
