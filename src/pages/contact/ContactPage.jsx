import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaCheckCircle, FaSpinner, FaShareAlt, FaCopy, FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp as FaWhatsappShare, FaTelegram, FaReddit, FaLink, FaGlobe, FaGithub, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { submitToGoogleSheets, getUserLocation } from '../../services/googleSheetsService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(true);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const globeRef = useRef(null);

  const projectTypes = ['Website Development', 'Website Cloning', 'Automation', 'POS Integration', 'Security Audit', 'Consultation', 'Other'];
  const budgets = ['$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000', '$5,000 - $10,000', '$10,000+', 'Not sure'];

  // Get user location on load
  useEffect(() => {
    const getLocation = async () => {
      setLocationLoading(true);
      const location = await getUserLocation();
      setUserLocation(location);
      setLocationLoading(false);
    };
    getLocation();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    try {
      const result = await submitToGoogleSheets({
        ...formData,
        userLocation: userLocation ? `${userLocation.city}, ${userLocation.country}` : 'Unknown'
      });
      
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to submit. Please try again or contact directly.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  // Social Media Links
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/phildev', label: 'GitHub', color: 'hover:text-white' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/phildev', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaTwitter, url: 'https://twitter.com/phildev', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: FaInstagram, url: 'https://instagram.com/phildev', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: FaYoutube, url: 'https://youtube.com/@phildev', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: FaTiktok, url: 'https://tiktok.com/@phildev', label: 'TikTok', color: 'hover:text-white' },
    { icon: FaWhatsapp, url: 'https://wa.me/254798436384', label: 'WhatsApp', color: 'hover:text-green-500' },
    { icon: FaTelegram, url: 'https://t.me/phildev', label: 'Telegram', color: 'hover:text-blue-400' }
  ];

  // Share options
  const shareOptions = [
    { icon: FaTwitter, url: `https://twitter.com/intent/tweet?text=Check out PhilDev - Full-Stack Developer & Automation Engineer&url=${window.location.origin}`, label: 'Twitter', color: 'bg-cyan-500' },
    { icon: FaLinkedin, url: `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.origin}&title=PhilDev&summary=Full-Stack Developer & Automation Engineer`, label: 'LinkedIn', color: 'bg-blue-600' },
    { icon: FaFacebook, url: `https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}`, label: 'Facebook', color: 'bg-blue-700' },
    { icon: FaWhatsappShare, url: `https://wa.me/?text=Check out PhilDev - ${window.location.origin}`, label: 'WhatsApp', color: 'bg-green-500' },
    { icon: FaTelegram, url: `https://t.me/share/url?url=${window.location.origin}&text=Check out PhilDev`, label: 'Telegram', color: 'bg-blue-500' },
    { icon: FaReddit, url: `https://reddit.com/submit?url=${window.location.origin}&title=PhilDev Portfolio`, label: 'Reddit', color: 'bg-orange-600' }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-20 px-6 min-h-screen bg-black">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs text-amber-400 font-mono">connect_with_phildev</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Ready to start your project? I'm just a message away. Fill out the form or reach out directly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Side - Contact Info & 3D Location */}
          <div className="space-y-6">
            
            {/* Location Card with 3D Globe Effect */}
            <div className="bg-gradient-to-br from-emerald-950/20 to-amber-950/20 border border-white/10 rounded-2xl p-6 overflow-hidden relative">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <FaGlobe className="text-amber-400" /> My Location
              </h2>
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                {/* 3D Globe Visualization */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-emerald-900/30 rounded-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 animate-pulse" />
                      <div className="absolute inset-4 rounded-full bg-black/50 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-amber-400 text-2xl animate-bounce" />
                      </div>
                    </div>
                  </div>
                  {/* Grid lines for globe effect */}
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    <circle cx="50%" cy="50%" r="60" stroke="#10B981" strokeWidth="1" fill="none" />
                    <circle cx="50%" cy="50%" r="45" stroke="#F59E0B" strokeWidth="1" fill="none" />
                    <circle cx="50%" cy="50%" r="30" stroke="#3B82F6" strokeWidth="1" fill="none" />
                    <line x1="50%" y1="calc(50% - 60px)" x2="50%" y2="calc(50% + 60px)" stroke="#10B981" strokeWidth="1" />
                    <line x1="calc(50% - 60px)" y1="50%" x2="calc(50% + 60px)" y2="50%" stroke="#10B981" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <p className="text-amber-400 font-semibold">📍 Nairobi, Kenya</p>
                <p className="text-white/40 text-sm mt-1">GMT+3 • Available Worldwide</p>
                {locationLoading ? (
                  <p className="text-white/30 text-xs mt-2 animate-pulse">Detecting your location...</p>
                ) : userLocation && (
                  <p className="text-white/30 text-xs mt-2">You're visiting from: {userLocation.city}, {userLocation.country}</p>
                )}
              </div>
            </div>
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://wa.me/254798436384" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-green-500/50 transition group">
                <FaWhatsapp className="text-green-500 text-3xl mx-auto mb-2 group-hover:scale-110 transition" />
                <p className="font-semibold">WhatsApp</p>
                <p className="text-xs text-white/40">+254 798 436 384</p>
              </a>
              
              <a href="mailto:node.netwalker@gmail.com" className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-amber-500/50 transition group">
                <FaEnvelope className="text-amber-500 text-3xl mx-auto mb-2 group-hover:scale-110 transition" />
                <p className="font-semibold">Email</p>
                <p className="text-xs text-white/40">node.netwalker@gmail.com</p>
              </a>
              
              <a href="https://calendly.com/phildev" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-cyan-500/50 transition group">
                <FaCalendarAlt className="text-cyan-500 text-3xl mx-auto mb-2 group-hover:scale-110 transition" />
                <p className="font-semibold">Schedule Call</p>
                <p className="text-xs text-white/40">Free 15-min Discovery</p>
              </a>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <FaClock className="text-amber-400 text-3xl mx-auto mb-2" />
                <p className="font-semibold">Response Time</p>
                <p className="text-xs text-white/40">Within 4 hours</p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 text-center">Find Me On</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-110 ${social.color}`}
                      title={social.label}
                    >
                      <Icon className="text-xl" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <FaCheckCircle className="text-emerald-400 text-5xl mx-auto mb-4" />
                <p className="text-white/80 text-lg">Message sent successfully!</p>
                <p className="text-white/40 text-sm mt-2">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                    {error}
                  </div>
                )}
                
                <div>
                  <label className="block text-white/60 text-sm mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm mb-1">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm mb-1">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="">Select...</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm mb-1">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="">Select...</option>
                    {budgets.map(budget => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm mb-1">Message *</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl font-semibold hover:scale-105 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? <FaSpinner className="animate-spin" /> : <FaEnvelope />}
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Share Sidebar - Floating Bubble */}
        <div className="fixed right-4 bottom-20 z-50 hidden lg:block">
          <div className="relative">
            <button
              onClick={() => setShowSharePopup(!showSharePopup)}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg hover:scale-110 transition-all flex items-center justify-center group"
            >
              <FaShareAlt className="text-white text-xl group-hover:rotate-12 transition" />
            </button>
            
            <AnimatePresence>
              {showSharePopup && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 20 }}
                  className="absolute bottom-0 right-14 mb-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
                >
                  <h3 className="text-sm font-semibold mb-3">Share PhilDev</h3>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {shareOptions.map((option, index) => {
                      const Icon = option.icon;
                      return (
                        <a
                          key={index}
                          href={option.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${option.color} p-2 rounded-lg text-white hover:scale-110 transition flex items-center justify-center`}
                          title={option.label}
                        >
                          <Icon className="text-sm" />
                        </a>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                    <input
                      type="text"
                      readOnly
                      value={window.location.origin}
                      className="flex-1 bg-white/5 rounded-lg px-2 py-1 text-xs text-white/60"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="p-1.5 bg-white/10 rounded-lg hover:bg-white/20 transition"
                    >
                      {copied ? <FaCheckCircle className="text-green-400 text-xs" /> : <FaCopy className="text-white/60 text-xs" />}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Mobile Share Button */}
        <div className="fixed bottom-20 right-6 z-50 lg:hidden">
          <button
            onClick={() => setShowSharePopup(!showSharePopup)}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg flex items-center justify-center"
          >
            <FaShareAlt className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;