import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const STYLES = `
  @keyframes goldShine {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
  @keyframes floatGlow {
    0%,100% { transform: translateY(0) scale(1); opacity: 0.5; }
    50% { transform: translateY(-8px) scale(1.05); opacity: 0.8; }
  }
  .irregular-card {
    background: rgba(0,0,0,0.45);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(245,158,11,0.2);
    transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
  }
  .irregular-card:hover {
    border-color: rgba(245,158,11,0.5);
    box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(245,158,11,0.1);
  }
  .gold-gradient-text {
    background: linear-gradient(90deg, #92400e, #fcd34d, #f59e0b, #fef9c3, #f59e0b);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: goldShine 2.5s linear infinite;
  }
  .glow-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .glow-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent);
    transition: left 0.5s ease;
  }
  .glow-button:hover::before {
    left: 100%;
  }
`;

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Systems Architect',
    'Automation Engineer', 
    'Security Strategist',
    'Fintech Specialist',
    'Full-Stack Developer'
  ];
  
  useEffect(() => {
    const currentText = roles[textIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % roles.length);
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <>
      <style>{STYLES}</style>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" style={{ filter: 'brightness(0.35) contrast(1.05)' }}>
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />
        </div>
        
        {/* Irregular Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -5 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-16"
        >
          <div 
            className="irregular-card p-8 md:p-12"
            style={{
              clipPath: 'polygon(2% 0%, 98% 2%, 100% 8%, 100% 92%, 96% 98%, 4% 100%, 0% 94%, 0% 6%)',
              borderRadius: '2rem'
            }}
          >
            {/* Premium Badge - Gold */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full border border-amber-500/40 mb-8"
              style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs text-amber-400 font-mono">Available for Work</span>
              <span className="text-[10px] text-white/40">• 4+ Years</span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="gold-gradient-text">
                Phillip Kerher
              </span>
            </motion.h1>
            
            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <p className="text-xl md:text-2xl text-white/80">
                <span className="text-amber-400 font-mono">&gt; </span>
                {displayText}
                <span className="animate-pulse text-amber-400">_</span>
              </p>
            </motion.div>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base md:text-lg text-white/70 max-w-2xl mb-8 leading-relaxed"
            >
              I engineer complete digital ecosystems that convert, automate, and dominate markets. 
              4+ years of turning complex problems into elegant solutions.
            </motion.p>
            
            {/* Stats Row - Gold Accents */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-6 md:gap-12 mb-10"
            >
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '90%', label: 'Success Rate' },
                { value: '7+', label: 'Global Clients' }
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold gold-gradient-text group-hover:scale-110 transition">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                to="/contact"
                className="glow-button relative px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-amber-500/25 overflow-hidden"
                style={{ clipPath: 'polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)' }}
              >
                <span className="relative z-10 flex items-center gap-2 text-white">
                  Start Project <FaArrowRight className="group-hover:translate-x-1 transition" />
                </span>
              </Link>
              <Link
                to="/work"
                className="px-8 py-3 border border-amber-500/50 rounded-xl text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 transition-all"
                style={{ clipPath: 'polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)' }}
              >
                View Portfolio
              </Link>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex gap-4"
            >
              {[
                { icon: FaGithub, url: 'https://github.com/phildev', color: 'hover:text-white' },
                { icon: FaLinkedin, url: 'https://linkedin.com/in/phildev', color: 'hover:text-blue-400' },
                { icon: FaTwitter, url: 'https://twitter.com/phildev', color: 'hover:text-cyan-400' },
                { icon: FaInstagram, url: 'https://instagram.com/phildev', color: 'hover:text-pink-500' }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all ${social.color}`}
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;