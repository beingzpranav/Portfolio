"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formState.name || !formState.email || !formState.message) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const error = await response.json();
        console.error('Error submitting form:', error);
        setIsError(true);
        setTimeout(() => setIsError(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
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
            Contact Me
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
            Have a project in mind or want to discuss a collaboration? Feel free to reach out.
          </motion.p>
        </div>

        {/* Contact Form - Now full width */}
        <motion.div 
          className="max-w-2xl mx-auto"
          variants={containerVariants}
        >
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-[#0F172A] rounded-xl p-6 md:p-8 border border-[#1E293B]"
            variants={itemVariants}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6 text-green-400 flex items-center space-x-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your message has been sent successfully!</span>
                </motion.div>
              )}

              {isError && (
                <motion.div
                  className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6 text-red-400 flex items-center space-x-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{formState.name && formState.email && formState.message ? 
                    "Failed to send message. Please try again or contact directly via email." : 
                    "Please fill out all fields."}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-5">
              {/* Name field */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <motion.label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-300"
                  animate={{ 
                    color: activeField === 'name' ? '#0EA5E9' : '#9CA3AF'
                  }}
                >
                  Your Name
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className="w-full bg-[#1E293B] border border-[#1E293B] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300"
                  animate={{ 
                    borderColor: activeField === 'name' ? '#0EA5E9' : '#1E293B',
                    boxShadow: activeField === 'name' ? '0 0 0 1px rgba(14, 165, 233, 0.2)' : 'none'
                  }}
                />
              </motion.div>

              {/* Email field */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <motion.label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-300"
                  animate={{ 
                    color: activeField === 'email' ? '#0EA5E9' : '#9CA3AF'
                  }}
                >
                  Your Email
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className="w-full bg-[#1E293B] border border-[#1E293B] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300"
                  animate={{ 
                    borderColor: activeField === 'email' ? '#0EA5E9' : '#1E293B',
                    boxShadow: activeField === 'email' ? '0 0 0 1px rgba(14, 165, 233, 0.2)' : 'none'
                  }}
                />
              </motion.div>

              {/* Message field */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <motion.label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-300"
                  animate={{ 
                    color: activeField === 'message' ? '#0EA5E9' : '#9CA3AF'
                  }}
                >
                  Your Message
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  rows={6}
                  className="w-full bg-[#1E293B] border border-[#1E293B] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300"
                  animate={{ 
                    borderColor: activeField === 'message' ? '#0EA5E9' : '#1E293B',
                    boxShadow: activeField === 'message' ? '0 0 0 1px rgba(14, 165, 233, 0.2)' : 'none'
                  }}
                />
              </motion.div>

              {/* Submit button */}
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-lg px-4 py-3 font-medium transition-all duration-300 relative overflow-hidden"
                variants={itemVariants}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <motion.svg
                      className="w-5 h-5 animate-spin" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                        fill="none"
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </motion.svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <span>Send Message</span>
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </span>
                )}
              </motion.button>
              
              {/* Contact info footer */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 mt-6 border-t border-[#1E293B] text-sm text-gray-400"
                variants={itemVariants}
              >
                <motion.a 
                  href="mailto:contact@pranavk.tech" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.03 }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@pranavk.tech
                </motion.a>
                <span className="hidden sm:inline">•</span>
                <motion.div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Rajasthan, India
                </motion.div>
              </motion.div>
            </div>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact; 