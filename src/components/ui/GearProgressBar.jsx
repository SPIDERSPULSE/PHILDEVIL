import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GearProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setProgress(scrollPercent);
      setRotation(scrollPercent * 3.6);
    };
    
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative">
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="w-14 h-14 rounded-full border-2 border-amber-500/40 flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, rgba(0,0,0,0.6) 100%)',
            boxShadow: '0 0 15px rgba(245,158,11,0.2)'
          }}
        >
          {/* Gear Teeth */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-amber-400/60 rounded-full"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-24px)`,
                opacity: progress > (i * 8.33) ? 0.9 : 0.3,
              }}
            />
          ))}
          
          <div className="text-center">
            <div className="text-xs font-bold text-amber-400">{Math.round(progress)}<span className="text-[8px]">%</span></div>
            <div className="text-[7px] text-white/40">SCROLL</div>
          </div>
        </motion.div>
        <div className="absolute inset-0 rounded-full blur-md bg-amber-500/20 animate-pulse" />
      </div>
    </div>
  );
};

export default GearProgressBar;