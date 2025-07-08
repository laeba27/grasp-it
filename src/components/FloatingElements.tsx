import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-16 h-16 border-2 border-cyan-400/30 rotate-45"
        style={{ animationDelay: '0s' }}
      />
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 w-12 h-12 bg-purple-500/20 rounded-full"
        style={{ animationDelay: '2s' }}
      />
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-40 left-20 w-8 h-8 bg-cyan-400/30 rotate-45"
        style={{ animationDelay: '4s' }}
      />
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 right-10 w-20 h-20 border border-purple-500/30 rounded-full"
        style={{ animationDelay: '1s' }}
      />

      {/* Pulsing orbs */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-xl"
      />
      
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        style={{ animationDelay: '1.5s' }}
      />
    </div>
  );
};

export default FloatingElements;