import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#F39C12',
    '#E74C3C', '#3498DB', '#2ECC71', '#F1C40F', '#E67E22', '#1ABC9C', '#9B59B6',
    '#34495E', '#16A085', '#27AE60', '#2980B9', '#8E44AD', '#2C3E50', '#FD79A8',
    '#00CE9F', '#FDCB6E', '#E17055', '#00B894', '#6C5CE7', '#A29BFE', '#FF7675'
  ];

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [colors.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentColor = colors[colorIndex];
  const nextColor = colors[(colorIndex + 1) % colors.length];

  // Position based on device
  let bottomPosition = '24px';
  if (isMobile) bottomPosition = '160px';
  if (isTablet) bottomPosition = '140px';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', damping: 15, delay: 0.5 }}
      className="fixed z-50"
      style={{
        bottom: bottomPosition,
        left: isMobile ? '16px' : '24px',
      }}
    >
      <div className="relative">
        {/* Smoke/Particle Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `radial-gradient(circle, ${colors[(colorIndex + i) % colors.length]}, transparent)`,
                left: `${Math.random() * 60 + 20}%`,
                bottom: `${Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -80, -120],
                x: [0, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 60],
                opacity: [0.8, 0.5, 0],
                scale: [0.5, 1.2, 0.8],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        {/* Colorful Aura Ring */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -inset-4 rounded-full blur-xl"
          style={{
            background: `radial-gradient(circle, ${currentColor}80, transparent)`,
          }}
        />

        {/* Main Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              `0 0 10px ${currentColor}`,
              `0 0 20px ${nextColor}`,
              `0 0 10px ${currentColor}`,
            ],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/80 backdrop-blur-sm border-2 flex items-center justify-center"
          style={{
            borderColor: currentColor,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${currentColor}40, transparent)`,
            }}
          />
          <FaArrowUp 
            className="text-base md:text-xl relative z-10 transition-colors duration-300" 
            style={{ color: currentColor }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BackToTop;