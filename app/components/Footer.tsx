"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(true); // Default to true for initial server render
  
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  // Check if device is mobile for reducing animations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Apply reduced motion on mobile
      document.documentElement.style.setProperty('--reduce-motion', window.innerWidth < 768 ? '1' : '0');
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <motion.footer 
      className="bg-[#020817] py-8 md:py-16 w-full max-w-[100%]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
          {/* Pages Column */}
          <motion.div className="mb-4 md:mb-0" variants={childVariants}>
            <motion.h3 
              className="text-[#94A3B8] font-medium text-xs sm:text-base mb-3 md:mb-4"
              initial={{ opacity: 0.7 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              PAGES
            </motion.h3>
            <ul className="space-y-2 md:space-y-3">
              {['Home', 'Projects', 'Skills'].map((page, index) => (
                <motion.li 
                  key={page}
                  variants={childVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a 
                    href={page === 'Home' ? '/' : `#${page.toLowerCase()}`} 
                    className="text-white/90 hover:text-[#0EA5E9] transition-colors text-xs sm:text-sm block py-1 relative group"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <span className="relative">
                      {page}
                      <motion.span
                        className="absolute bottom-0 left-0 h-[1px] bg-[#0EA5E9]"
                        style={{ width: '100%', transformOrigin: 'left' }}
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: hovered === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Column */}
          <motion.div className="mb-4 md:mb-0" variants={childVariants}>
            <motion.h3 
              className="text-[#94A3B8] font-medium text-xs sm:text-base mb-3 md:mb-4"
              initial={{ opacity: 0.7 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              SOCIAL
            </motion.h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: 'GitHub', icon: 'github', href: 'https://github.com/beingzpranav' },
                { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/beingzpranav' },
                { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com/beingzpranav_' },
                { name: 'Twitter', icon: 'twitter', href: 'https://x.com/beingzpranav_' },
                { name: 'Discord', icon: 'discord', href: 'https://discordapp.com/users/833363964192751626' },
                { name: 'Email', icon: 'email', href: 'mailto:contact@pranavk.tech' }
              ].map((social, index) => (
                <motion.li 
                  key={social.name}
                  variants={childVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-[#0EA5E9] transition-colors flex items-center gap-2 text-xs sm:text-sm py-1 relative"
                    onMouseEnter={() => setHovered(index + 10)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <motion.svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-[#94A3B8]" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      animate={{ 
                        color: hovered === index + 10 ? "#0EA5E9" : "#94A3B8" 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {social.icon === 'github' && (
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      )}
                      {social.icon === 'linkedin' && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      )}
                      {social.icon === 'instagram' && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      )}
                      {social.icon === 'discord' && (
                        <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                      )}
                      {social.icon === 'twitter' && (
                        <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148A13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
                      )}
                      {social.icon === 'email' && (
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z" />
                      )}
                    </motion.svg>
                    <span className="relative">
                      {social.name}
                      <motion.span
                        className="absolute bottom-0 left-0 h-[1px] bg-[#0EA5E9]"
                        style={{ width: '100%', transformOrigin: 'left' }}
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: hovered === index + 10 ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div className="col-span-2 lg:col-span-1 mt-6 lg:mt-0" variants={childVariants}>
            <motion.h3 
              className="text-[#94A3B8] font-medium text-xs sm:text-base mb-3 md:mb-4"
              initial={{ opacity: 0.7 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              SUPPORT MY WORK
            </motion.h3>
            <div className="flex flex-col gap-3 max-w-xs mx-auto lg:mx-0">
              <motion.a 
                href="https://buymeacoffee.com/beingzpranav_" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white transition-colors w-full text-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  animate={!isMobile ? { rotate: [0, 5, -5, 0] } : undefined}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
                </motion.svg>
                Buy Me a Coffee
              </motion.a>
              <motion.a 
                href="https://paypal.me/beingzpranav" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0EA5E9]/10 hover:bg-[#0EA5E9]/20 text-[#0EA5E9] transition-colors w-full border border-[#0EA5E9]/20 text-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  animate={!isMobile ? { rotate: [0, 5, -5, 0] } : undefined}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                </motion.svg>
                PayPal
              </motion.a>
              
              <motion.p 
                className="text-sm text-gray-400 text-center mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                I appreciate your support very much!{' '}
                <motion.span
                  animate={!isMobile ? { 
                    scale: [1, 1.2, 1],
                    color: ["rgb(148, 163, 184)", "rgb(14, 165, 233)", "rgb(148, 163, 184)"]
                  } : undefined}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  💙
                </motion.span>
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Add more margin on mobile */}
        <motion.div 
          className="mt-10 md:mt-16 pt-6 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-4"
          variants={childVariants}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            MADE WITH 
            <motion.span 
              className="text-[#0EA5E9]"
              animate={!isMobile ? { 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              } : undefined}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </motion.span>
            <a 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#0EA5E9] hover:text-[#0EA5E9]/80 transition-colors"
            >
              NEXT.JS
            </a>
          </div>
          <p className="text-xs text-[#94A3B8] text-center">
            © {currentYear} <a href="https://pranavk.tech" className="text-[#0EA5E9] hover:text-[#0EA5E9]/80 transition-colors">Pranav Khandelwal</a>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 
