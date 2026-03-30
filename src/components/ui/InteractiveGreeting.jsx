import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaSmile, FaArrowRight, FaTimes, FaHandPaper, FaGlobeAfrica } from 'react-icons/fa';

const InteractiveGreeting = () => {
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(true);
  const [reaction, setReaction] = useState(null);
  const [angryProgress, setAngryProgress] = useState(0);
  const [isAngry, setIsAngry] = useState(false);
  const [angryText, setAngryText] = useState('');
  const [showCloseButton, setShowCloseButton] = useState(false);

  const angryPhrases = [
    'HOW DARE YOU IGNORE ME! 😡',
    'UNACCEPTABLE! 🔥',
    'YOU WILL REGRET THIS! 💢',
    'PREPARE FOR CONSEQUENCES! ⚡',
    'TOO PROUD TO GREET? 👊',
    'NOW YOU FEEL MY WRATH! 🌋',
    'COLD HEART! ❄️',
    'RESPECT YOUR VISITORS! 🗣️'
  ];

  // Get precise user location
  useEffect(() => {
    const getPreciseLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              // First try ipapi.co for accurate location
              const ipResponse = await fetch('https://ipapi.co/json/');
              const ipData = await ipResponse.json();
              
              if (ipData.city && ipData.country_name) {
                setLocation({
                  city: ipData.city,
                  country: ipData.country_name,
                  region: ipData.region,
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                  flag: ipData.country_code ? getFlagEmoji(ipData.country_code) : '🌍'
                });
                setLocationLoading(false);
                return;
              }
            } catch (error) {
              console.log('ipapi failed, trying fallback');
            }
            
            // Fallback: Use reverse geocoding with coordinates
            try {
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
              );
              const data = await response.json();
              setLocation({
                city: data.city || data.locality || data.principalSubdivision || 'Unknown',
                country: data.countryName || 'Unknown',
                region: data.principalSubdivision || '',
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                flag: data.countryCode ? getFlagEmoji(data.countryCode) : '🌍'
              });
            } catch (error) {
              setLocation({
                city: 'Nairobi',
                country: 'Kenya',
                region: 'Nairobi County',
                flag: '🇰🇪'
              });
            }
            setLocationLoading(false);
          },
          (error) => {
            console.log('Geolocation error:', error);
            // Fallback to IP-based location
            fetch('https://ipapi.co/json/')
              .then(res => res.json())
              .then(data => {
                setLocation({
                  city: data.city || 'Nairobi',
                  country: data.country_name || 'Kenya',
                  region: data.region || '',
                  flag: data.country_code ? getFlagEmoji(data.country_code) : '🇰🇪'
                });
              })
              .catch(() => {
                setLocation({
                  city: 'Nairobi',
                  country: 'Kenya',
                  region: 'Nairobi County',
                  flag: '🇰🇪'
                });
              })
              .finally(() => setLocationLoading(false));
          }
        );
      } else {
        // Fallback to IP-based location
        fetch('https://ipapi.co/json/')
          .then(res => res.json())
          .then(data => {
            setLocation({
              city: data.city || 'Nairobi',
              country: data.country_name || 'Kenya',
              region: data.region || '',
              flag: data.country_code ? getFlagEmoji(data.country_code) : '🇰🇪'
            });
          })
          .catch(() => {
            setLocation({
              city: 'Nairobi',
              country: 'Kenya',
              region: 'Nairobi County',
              flag: '🇰🇪'
            });
          })
          .finally(() => setLocationLoading(false));
      }
    };

    getPreciseLocation();
  }, []);

  // Helper function to get flag emoji from country code
  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  // Show greeting after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('greeting-shown')) {
        setVisible(true);
        localStorage.setItem('greeting-shown', 'true');
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-ignore after 10 seconds
  useEffect(() => {
    let ignoreTimer;
    let angryInterval;
    let phraseInterval;
    
    if (visible && !reaction && !isAngry) {
      ignoreTimer = setTimeout(() => {
        setIsAngry(true);
        setShowCloseButton(true);
        
        let phraseIndex = 0;
        setAngryText(angryPhrases[0]);
        phraseInterval = setInterval(() => {
          phraseIndex = (phraseIndex + 1) % angryPhrases.length;
          setAngryText(angryPhrases[phraseIndex]);
        }, 500);
        
        let progress = 0;
        angryInterval = setInterval(() => {
          progress += 2;
          setAngryProgress(progress);
          if (progress >= 100) {
            clearInterval(angryInterval);
            clearInterval(phraseInterval);
          }
        }, 30);
      }, 10000);
    }

    return () => {
      clearTimeout(ignoreTimer);
      if (angryInterval) clearInterval(angryInterval);
      if (phraseInterval) clearInterval(phraseInterval);
    };
  }, [visible, reaction, isAngry]);

  const handleCloseAngry = () => {
    setIsAngry(false);
    setVisible(false);
    setShowCloseButton(false);
    setAngryProgress(0);
  };

  const handleHi = () => {
    setReaction('hi');
    setTimeout(() => setVisible(false), 800);
  };

  const handleGetStarted = () => {
    setReaction('getStarted');
    setTimeout(() => {
      window.location.href = '/contact';
    }, 600);
  };

  const handleSnob = () => {
    setReaction('snob');
    setTimeout(() => setVisible(false), 800);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getLocationMessage = () => {
    if (!location) return "Welcome! Let's create magic together.";
    
    const city = location.city;
    const country = location.country;
    const flag = location.flag;
    
    if (city === 'Nairobi' || country === 'Kenya') {
      return `${flag} A fellow Kenyan from ${city}! Ready to build something amazing together?`;
    }
    
    return `${flag} Greetings from ${city}, ${country}! Let's create something extraordinary.`;
  };

  if (!visible && !isAngry) return null;

  return (
    <>
      {/* Angry Liquid Fill Effect with Close Button */}
      <AnimatePresence>
        {isAngry && (
          <>
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: `${angryProgress}%` }}
              transition={{ duration: 0.03 }}
              className="fixed inset-0 z-[250] bg-gradient-to-b from-red-800 via-red-600 to-orange-500 pointer-events-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[300] text-center"
            >
              {showCloseButton && (
                <button
                  onClick={handleCloseAngry}
                  className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                >
                  <FaTimes className="text-white text-xl" />
                </button>
              )}
              
              <div className="text-6xl mb-3 animate-bounce">💢</div>
              <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg mb-4 max-w-md px-4">
                {angryText}
              </p>
              
              {showCloseButton && (
                <button
                  onClick={handleCloseAngry}
                  className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white font-medium transition-all backdrop-blur-sm"
                >
                  Dismiss
                </button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Greeting Popup */}
      <AnimatePresence>
        {visible && !isAngry && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ type: 'spring', damping: 15 }}
            className="fixed top-8 left-1/2 transform -translate-x-1/2 z-[300] w-[90%] max-w-md"
          >
            <div className="bg-gradient-to-br from-black/95 to-black/80 backdrop-blur-2xl border border-amber-500/30 rounded-2xl p-6 shadow-2xl">
              
              {/* Location Badge with Precise Location */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
                <FaMapMarkerAlt className="text-amber-400 text-sm animate-pulse" />
                <span className="text-xs text-white/50 font-mono">
                  {locationLoading ? 'Detecting your location...' : (
                    <>
                      {location?.flag} {location?.city}, {location?.country}
                    </>
                  )}
                </span>
              </div>
              
              {/* Greeting Text */}
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  {getGreeting()}!
                </span>
              </h3>
              
              <p className="text-white/80 text-lg mb-1">
                I'm <span className="text-amber-400 font-semibold">Phillip</span>
              </p>
              
              {/* Precise Location Message */}
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                {!locationLoading && getLocationMessage()}
              </p>
              
              {/* Additional location detail if available */}
              {!locationLoading && location?.region && location.region !== location.city && (
                <p className="text-white/40 text-xs mb-4 italic">
                  📍 {location.region}, {location.country}
                </p>
              )}
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={handleHi}
                  className="group relative px-5 py-2.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/40 rounded-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <FaSmile className="text-amber-400 group-hover:rotate-12 transition" />
                  <span className="text-amber-400 font-medium">Say Hi</span>
                </button>
                
                <button
                  onClick={handleGetStarted}
                  className="group relative px-5 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/25"
                >
                  <span className="text-white font-medium">Get Started</span>
                  <FaArrowRight className="text-white group-hover:translate-x-1 transition" />
                </button>
                
                <button
                  onClick={handleSnob}
                  className="group relative px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <FaTimes className="text-white/50 group-hover:rotate-90 transition" />
                  <span className="text-white/50">Snob</span>
                </button>
              </div>
              
              {/* Auto-dismiss hint */}
              <p className="text-[10px] text-white/30 text-center mt-4">
                This message will disappear in 10 seconds...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hi Reaction - Smile Emoji Rain */}
      <AnimatePresence>
        {reaction === 'hi' && (
          <div className="fixed inset-0 pointer-events-none z-[400]">
            {[...Array(35)].map((_, i) => {
              const smileEmojis = ['😊', '😄', '😁', '🥰', '🤗', '😇', '😍', '😘', '😎', '🤩', '🥳', '🎉', '✨', '💖', '🌟', '⭐', '💫', '🌈', '🦋', '🌸', '💕', '💗', '💓', '💖', '💝', '🎊'];
              const emoji = smileEmojis[Math.floor(Math.random() * smileEmojis.length)];
              return (
                <motion.div
                  key={i}
                  initial={{ x: Math.random() * window.innerWidth, y: -50, scale: 0 }}
                  animate={{ y: window.innerHeight + 100, scale: [0, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 2, delay: i * 0.03 }}
                  className="absolute text-2xl"
                  style={{ left: Math.random() * window.innerWidth }}
                >
                  {emoji}
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Snob Reaction - Angry Emoji Rain */}
      <AnimatePresence>
        {reaction === 'snob' && (
          <div className="fixed inset-0 pointer-events-none z-[400]">
            {[...Array(30)].map((_, i) => {
              const angryEmojis = ['😠', '😡', '👿', '💢', '🔥', '💥', '🌋', '⚡', '💀', '👊', '🤜', '🤛', '😤', '😒', '🙄', '🤨'];
              const emoji = angryEmojis[Math.floor(Math.random() * angryEmojis.length)];
              return (
                <motion.div
                  key={i}
                  initial={{ x: Math.random() * window.innerWidth, y: -30, scale: 0 }}
                  animate={{ y: window.innerHeight + 80, scale: [0, 1.2, 0.8], rotate: [0, (Math.random() - 0.5) * 360] }}
                  transition={{ duration: 1.5, delay: i * 0.02 }}
                  className="absolute text-2xl"
                  style={{ left: Math.random() * window.innerWidth }}
                >
                  {emoji}
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Get Started Reaction - Google Color Burst */}
      <AnimatePresence>
        {reaction === 'getStarted' && (
          <div className="fixed inset-0 pointer-events-none z-[400]">
            {[...Array(40)].map((_, i) => {
              const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#FF6B6B', '#4A90E2', '#F39C12', '#2ECC71'];
              const color = googleColors[Math.floor(Math.random() * googleColors.length)];
              return (
                <motion.div
                  key={i}
                  initial={{ x: window.innerWidth / 2, y: window.innerHeight / 2, scale: 0 }}
                  animate={{ 
                    x: window.innerWidth / 2 + (Math.random() - 0.5) * 400,
                    y: window.innerHeight / 2 + (Math.random() - 0.5) * 400 - 100,
                    scale: [0, 1, 0]
                  }}
                  transition={{ duration: 0.8, delay: i * 0.02 }}
                  className="absolute w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveGreeting;