import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

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

  const handleClick = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsBouncing(false);
    }, 400);
  };

  const handleSend = () => {
    if (message.trim()) {
      window.open(`https://wa.me/254798436384?text=${encodeURIComponent(message)}`, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  // Positions based on device
  let buttonBottom = '24px';
  let windowBottom = '90px';
  
  if (isMobile) {
    buttonBottom = '160px';
    windowBottom = '230px';
  }
  if (isTablet) {
    buttonBottom = '140px';
    windowBottom = '210px';
  }

  return (
    <>
      {/* Live Chat Button with Pulsing Effect */}
      <div className="fixed z-50" style={{ bottom: buttonBottom, right: '16px' }}>
        {/* Pulsing Rings */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" style={{ animationDuration: '1.5s' }} />
          <div className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse opacity-50" style={{ animationDuration: '1.2s', animationDelay: '0.5s' }} />
          <div className="absolute -inset-2 rounded-full bg-emerald-500/30 animate-pulse" style={{ animationDuration: '1.8s' }} />
        </div>
        
        {/* Live Status Badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full animate-pulse z-10">
          LIVE
        </div>
        
        {/* Main Button with Bounce Animation */}
        <motion.button
          onClick={handleClick}
          animate={isBouncing ? {
            y: [0, -15, 0, -8, 0],
            scale: [1, 1.1, 1, 1.05, 1],
          } : {
            scale: [1, 1.05, 1],
          }}
          transition={isBouncing ? { duration: 0.4 } : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/50 flex items-center justify-center"
        >
          <FaWhatsapp className="text-white text-2xl" />
        </motion.button>
        
        {/* Tooltip */}
        <div className="absolute -top-8 right-0 whitespace-nowrap bg-black/80 text-white text-xs px-2 py-1 rounded-lg animate-pulse">
          Chat with me! 💬
        </div>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed z-50 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              bottom: windowBottom,
              right: '16px',
            }}
          >
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-white">Live Chat</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <p className="text-xs text-white/80">Online • Active Now</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition">
                <FaTimes />
              </button>
            </div>
            <div className="p-4">
              <div className="bg-emerald-500/10 rounded-lg p-3 mb-4">
                <p className="text-xs text-white/80">👋 Hi! I'm Phillip. How can I help you today?</p>
                <p className="text-[10px] text-white/40 mt-1">Typically replies in &lt; 4 hours</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-emerald-500"
                />
                <button onClick={handleSend} className="p-2 bg-emerald-500 rounded-lg hover:bg-emerald-600 transition">
                  <FaPaperPlane className="text-white text-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;