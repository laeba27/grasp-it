import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timeline = [
      { phase: 1, delay: 800 },   // Show logo
      { phase: 2, delay: 1500 },  // Start zoom
      { phase: 3, delay: 2500 },  // Start blur
      { phase: 4, delay: 3200 },  // Complete
    ];

    timeline.forEach(({ phase, delay }) => {
      setTimeout(() => setAnimationPhase(phase), delay);
    });

    const completeTimer = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      >
        {/* Logo with smooth Netflix-style effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: animationPhase >= 1 ? 1 : 0,
            scale: animationPhase >= 2 ? 25 : animationPhase >= 1 ? 1 : 0.8,
            filter: animationPhase >= 3 ? 'blur(30px)' : 'blur(0px)',
            y: animationPhase >= 2 ? -150 : 0,
          }}
          transition={{ 
            duration: 2,
            ease: [0.4, 0.0, 0.2, 1], // Smooth cubic-bezier
          }}
          className="relative z-20"
        >
          <img 
            src="/logo.png" 
            alt="grasp-it logo"
            className="w-24 h-24 "
          />
        </motion.div>

        {/* Background blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: animationPhase >= 3 ? 1 : 0,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-black/90 backdrop-blur-2xl z-15"
        />

        {/* Smooth fade to website */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: animationPhase >= 4 ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-10"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen; 