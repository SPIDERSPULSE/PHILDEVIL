import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing Systems');

  const loadingPhrases = [
    'Initializing Systems',
    'Loading Neural Networks',
    'Calibrating Full-Stack Engine',
    'Activating Automation Protocols',
    'Securing Digital Perimeter',
    'Ready for Deployment'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % loadingPhrases.length;
      setLoadingText(loadingPhrases[currentIndex]);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Ripple Effect Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-emerald-500/30"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: [0, 5, 10], opacity: [0.8, 0.4, 0] }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '50px',
              height: '50px',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            PHILDEV
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-2">Phillip Kerher</p>
          <div className="h-12 mb-6">
            <motion.p
              key={loadingText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-cyan-400 font-mono text-sm"
            >
              {loadingText}
            </motion.p>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto mb-6">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-white/40 text-xs mt-2 font-mono">{progress}% Complete</p>
        </div>

        {/* Tech Stack Display */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {['React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker', 'Puppeteer'].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/50 border border-white/10"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-white/30 text-xs font-mono"
        >
          &gt;_ Full-Stack Architecture • Automation Engineering • Security-First Mindset
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;