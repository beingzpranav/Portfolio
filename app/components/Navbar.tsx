"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
  }, [isOpen]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        ease: "easeInOut",
        duration: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: "easeOut" } }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 w-screen max-w-full z-50 py-4 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-secondary/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex justify-between items-center px-4 mx-auto">
        <Link href="/">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-white flex items-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="w-8 h-8 mr-2 hidden md:flex items-center justify-center text-white"
              whileHover={{ scale: 1.1 }}
            >
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
            </motion.div>
            <span className="text-primary">Pranav</span>
          </motion.span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'Projects', 'Skills'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              <Link 
                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                className="nav-link text-white hover:text-primary transition-colors relative overflow-hidden group"
              >
                {item}
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <motion.button 
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }} 
          className="block md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.svg 
            className="w-6 h-6 fill-current" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </motion.svg>
        </motion.button>
        
        {/* Mobile navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-full left-0 right-0 w-full bg-secondary/95 backdrop-blur-md flex flex-col items-center md:hidden z-50"
              style={{
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              {[
                { name: 'Home', path: '/' },
                { name: 'Projects', path: '#projects' },
                { name: 'Skills', path: '#skills' }
              ].map((item, index) => (
                <motion.div 
                  key={item.name}
                  className="w-full"
                  variants={itemVariants}
                >
                  <Link 
                    href={item.path}
                    className="py-6 w-full text-center text-white hover:text-primary transition-colors text-lg block"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex justify-center items-center"
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                  {index < 2 && <motion.div className="h-px w-3/4 mx-auto bg-gray-800/50" />}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 