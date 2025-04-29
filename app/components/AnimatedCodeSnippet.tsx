"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedCodeSnippetProps {
  autoDisappear?: boolean;
  disappearDelay?: number;
}

const AnimatedCodeSnippet: React.FC<AnimatedCodeSnippetProps> = ({
  autoDisappear = true,
  disappearDelay = 5000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const codeText = [
    "<Portfolio>",
    "  const developer = {",
    "    name: \"Pranav Khandelwal\",",
    "    skills: [\"React\", \"Next.js\", \"UI/UX\"],",
    "    passion: \"Building beautiful interfaces\"",
    "  }",
    "</Portfolio>"
  ];

  const typingSpeed = 50;
  const totalCharacters = codeText.join('').length;
  const totalTypingTime = totalCharacters * typingSpeed;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentTextIndex < codeText.length) {
        setCurrentTextIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        setTypingComplete(true);
        
        if (autoDisappear) {
          const timerId = setTimeout(() => {
            setIsVisible(false);
          }, disappearDelay);
          
          return () => clearTimeout(timerId);
        }
      }
    }, typingSpeed * 5);
    
    return () => clearInterval(intervalId);
  }, [currentTextIndex, autoDisappear, disappearDelay]);

  useEffect(() => {
    const handleKeyDown = () => {
      if (typingComplete) {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [typingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-dark/90 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={() => typingComplete && setIsVisible(false)}
        >
          <motion.div 
            className="bg-[#020817] rounded-lg shadow-2xl overflow-hidden border border-primary/30 w-11/12 md:w-2/3 lg:w-1/2 max-w-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center px-4 py-2 bg-[#0c1425] border-b border-primary/20">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-400 ml-4 font-mono">developer.js</div>
            </div>
            
            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
              <div className="text-gray-300 relative">
                {codeText.slice(0, currentTextIndex).map((line, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="whitespace-pre flex"
                  >
                    <span className="text-gray-500 mr-4 select-none">{index + 1}</span>
                    <div>
                      <span className="text-primary">{line.includes("<Portfolio>") ? "<" : ""}</span>
                      <span className="text-accent">{line.includes("<Portfolio>") ? "Portfolio" : ""}</span>
                      <span className="text-primary">{line.includes("<Portfolio>") ? ">" : ""}</span>
                      <span className="text-primary">{line.includes("</Portfolio>") ? "</" : ""}</span>
                      <span className="text-accent">{line.includes("</Portfolio>") ? "Portfolio" : ""}</span>
                      <span className="text-primary">{line.includes("</Portfolio>") ? ">" : ""}</span>
                      {!line.includes("<Portfolio>") && !line.includes("</Portfolio>") && (
                        <>
                          {line.includes("const") && (
                            <>
                              <span className="text-[#cc99cd]">const</span>
                              <span className="text-gray-300"> developer = </span>
                              <span className="text-primary">{"{"}</span>
                            </>
                          )}
                          {line.includes("name:") && (
                            <>
                              <span className="text-gray-300">    </span>
                              <span className="text-[#7ee787]">name</span>
                              <span className="text-gray-300">: </span>
                              <span className="text-[#ff7b72]">"Pranav Khandelwal"</span>
                              <span className="text-gray-300">,</span>
                            </>
                          )}
                          {line.includes("skills:") && (
                            <>
                              <span className="text-gray-300">    </span>
                              <span className="text-[#7ee787]">skills</span>
                              <span className="text-gray-300">: </span>
                              <span className="text-primary">[</span>
                              <span className="text-[#ff7b72]">"React"</span>
                              <span className="text-gray-300">, </span>
                              <span className="text-[#ff7b72]">"Next.js"</span>
                              <span className="text-gray-300">, </span>
                              <span className="text-[#ff7b72]">"UI/UX"</span>
                              <span className="text-primary">]</span>
                              <span className="text-gray-300">,</span>
                            </>
                          )}
                          {line.includes("passion:") && (
                            <>
                              <span className="text-gray-300">    </span>
                              <span className="text-[#7ee787]">passion</span>
                              <span className="text-gray-300">: </span>
                              <span className="text-[#ff7b72]">"Building beautiful interfaces"</span>
                            </>
                          )}
                          {line.includes("  }") && (
                            <span className="text-primary">  {"}"}</span>
                          )}
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {!typingComplete && (
                  <motion.div 
                    className="absolute h-5 w-2 bg-primary inline-block ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{ 
                      top: `${(currentTextIndex) * 1.5}rem`,
                      left: currentTextIndex > 0 ? "1.5rem" : "0.5rem" 
                    }}
                  />
                )}
              </div>
            </div>

            {typingComplete && (
              <motion.div 
                className="flex justify-center pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-300 focus:outline-none"
                >
                  Press any key to continue...
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedCodeSnippet; 