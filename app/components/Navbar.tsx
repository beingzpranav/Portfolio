"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-secondary/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex justify-between items-center px-4 mx-auto">
        <Link href="/">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white flex items-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="w-8 h-8 mr-2 bg-primary rounded-sm flex items-center justify-center text-white"
            >
              PK
            </motion.div>
            <span className="text-primary">Pranav</span>
          </motion.span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="nav-link text-white hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#projects" className="nav-link text-white hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="nav-link text-white hover:text-primary transition-colors">
            Skills
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }} 
          className="block md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 fill-current" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
        
        {/* Mobile navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-md flex flex-col items-center md:hidden"
            >
              <Link 
                href="/" 
                className="py-4 w-full text-center text-white hover:text-primary transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#projects" 
                className="py-4 w-full text-center text-white hover:text-primary transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#skills" 
                className="py-4 w-full text-center text-white hover:text-primary transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 