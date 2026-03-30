import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setTimeout(() => setVisible(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'true', { expires: 365 });
    setVisible(false);
  };

  const declineCookies = () => {
    Cookies.set('cookie-consent', 'false', { expires: 365 });
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[150]"
        >
          <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">🍪</span>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Cookie Consent</h3>
                <p className="text-white/50 text-xs mt-1">
                  We use cookies to enhance your experience. By continuing, you agree to our privacy policy.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={acceptCookies}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg text-sm font-semibold hover:scale-105 transition"
              >
                Accept
              </button>
              <button
                onClick={declineCookies}
                className="px-4 py-2 bg-white/5 rounded-lg text-sm hover:bg-white/10 transition"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;