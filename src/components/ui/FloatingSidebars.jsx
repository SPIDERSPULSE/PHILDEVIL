import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaEnvelope, FaMoon, FaSun, FaGlobe } from 'react-icons/fa';

const FloatingSidebars = ({ darkMode, setDarkMode }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [progress, setProgress] = useState(0);
  const [rotation, setRotation] = useState(0);

  // Update time
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Update scroll progress for gear
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

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/SPIDERSPULSE', color: 'hover:text-white' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/phildev', color: 'hover:text-blue-400' },
    { icon: FaTwitter, url: 'https://twitter.com/phildev', color: 'hover:text-cyan-400' },
    { icon: FaInstagram, url: 'https://instagram.com/phildev_inc', color: 'hover:text-pink-500' },
    { icon: FaFacebook, url: 'https://facebook.com/phildev', color: 'hover:text-blue-600' },
    { icon: FaYoutube, url: 'https://youtube.com/@phildev', color: 'hover:text-red-500' },
    { icon: FaWhatsapp, url: 'https://wa.me/254798436384', color: 'hover:text-emerald-400' },
  ];


  return (
    <>
      {/* LEFT SIDEBAR - Social Links with Gold Accent */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="bg-black/50 backdrop-blur-md border border-amber-500/20 rounded-2xl p-3 flex flex-col gap-3 shadow-lg">
          {/* Top gold accent */}
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-1" />
          
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-lg transition-all hover:scale-110 group relative"
              >
                <IconComponent className={`text-white/60 ${social.color} text-xl group-hover:text-amber-400 transition-colors`} />
                {/* Tooltip on hover */}
                <span className="absolute left-full ml-2 px-2 py-1 bg-black/80 text-amber-400 text-[10px] rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                  {social.url.split('/').pop() || 'link'}
                </span>
              </a>
            );
          })}
          
          {/* Bottom gold accent */}
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-1" />
        </div>
      </motion.div>

      {/* RIGHT SIDEBAR - Time, Controls & GEAR Integrated */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="bg-black/50 backdrop-blur-md border border-amber-500/20 rounded-2xl p-4 flex flex-col gap-4 min-w-[140px] shadow-lg">
          
          {/* GEAR PROGRESS SECTION - Integrated */}
          <div className="relative flex justify-center">
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
                    transition: 'opacity 0.2s ease'
                  }}
                />
              ))}
              
              {/* Inner Percentage */}
              <div className="text-center">
                <div className="text-xs font-bold text-amber-400">{Math.round(progress)}<span className="text-[8px]">%</span></div>
                <div className="text-[7px] text-white/40">SCROLL</div>
              </div>
            </motion.div>
            
            {/* Gear glow */}
            <div className="absolute inset-0 rounded-full blur-md bg-amber-500/20 animate-pulse" />
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          
          {/* Time Section */}
          <div className="text-center">
            <p className="text-[10px] text-white/40 uppercase tracking-wider">Local Time</p>
            <p className="text-xl font-mono font-bold text-amber-400">{currentTime}</p>
            <p className="text-[9px] text-white/40 mt-0.5">GMT+3 • Nairobi</p>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition flex items-center justify-center gap-2 group"
          >
            {darkMode ? (
              <FaSun className="text-amber-400 text-sm group-hover:rotate-45 transition" />
            ) : (
              <FaMoon className="text-amber-400 text-sm group-hover:-rotate-12 transition" />
            )}
            <span className="text-xs text-white/70">{darkMode ? 'Light' : 'Dark'}</span>
          </button>
          
          {/* System Status */}
          <div className="text-center pt-1">
            <div className="flex items-center justify-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
              <span className="text-[8px] text-white/40 font-mono">SYSTEM ONLINE</span>
            </div>
            <p className="text-[7px] text-white/30 mt-1">v2.0 • ready</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingSidebars;