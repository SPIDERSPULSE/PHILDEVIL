import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaTimes, FaCalendarAlt } from 'react-icons/fa';

const HireMePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem('hire-popup-seen');
      if (!hasSeen) {
        setVisible(true);
        localStorage.setItem('hire-popup-seen', 'true');
      }
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setVisible(false)}
        >
          <motion.div
            className="bg-gradient-to-br from-black to-emerald-950/50 border border-white/20 rounded-2xl p-8 max-w-md mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVisible(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition"
            >
              <FaTimes className="text-white/60" />
            </button>
            
            <h2 className="text-2xl font-bold mb-2 gradient-text">Ready to Build?</h2>
            <p className="text-white/60 text-sm mb-6">Let's create something extraordinary together.</p>
            
            <div className="space-y-3 mb-6">
              <a
                href="https://wa.me/254798436384"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-emerald-500/10 rounded-xl hover:bg-emerald-500/20 transition group"
              >
                <FaWhatsapp className="text-emerald-400 text-xl" />
                <div>
                  <p className="text-xs text-white/50">WhatsApp</p>
                  <p className="text-sm font-semibold">+254 798 436 384</p>
                </div>
              </a>
              
              <a
                href="mailto:node.netwalker@gmail.com"
                className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition group"
              >
                <FaEnvelope className="text-gold-500 text-xl" />
                <div>
                  <p className="text-xs text-white/50">Email</p>
                  <p className="text-sm font-semibold">philmondkihara.m@gmail.com</p>
                </div>
              </a>
              
              <a
                href="https://calendly.com/phildev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition group"
              >
                <FaCalendarAlt className="text-tech-blue text-xl" />
                <div>
                  <p className="text-xs text-white/50">Schedule</p>
                  <p className="text-sm font-semibold">Free 15-min Call</p>
                </div>
              </a>
            </div>
            
            <button
              onClick={() => setVisible(false)}
              className="w-full py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:scale-105 transition"
            >
              Maybe Later
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HireMePopup;
