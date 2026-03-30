import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUser, FaEnvelope, FaCog, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const BottomNav = () => {
  let location;
  try {
    location = useLocation();
  } catch (error) {
    return null;
  }
  
  const navItems = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'Work', path: '/work', icon: FaBriefcase },
    { name: 'Expertise', path: '/expertise', icon: FaCog },
    { name: 'About', path: '/about', icon: FaUser },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
  ];
  
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/SPIDERSPULSE', color: 'hover:text-white' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/phildev', color: 'hover:text-blue-400' },
    { icon: FaTwitter, url: 'https://x.com/Phildev_Tech', color: 'hover:text-cyan-400' },
    { icon: FaInstagram, url: 'https://www.instagram.com/phildev_inc/', color: 'hover:text-pink-500' },
  ];

  const isActive = (path) => location?.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-black/95 backdrop-blur-xl border-t border-amber-500/20 px-4 py-2">
        {/* Main Navigation */}
        <div className="flex justify-around items-center mb-2 pb-2 border-b border-white/10">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex flex-col items-center py-1 px-2 rounded-lg transition-all ${
                  active ? 'text-amber-400' : 'text-white/50 hover:text-white'
                }`}
              >
                <IconComponent className="text-lg" />
                <span className="text-[8px] mt-0.5">{item.name}</span>
                {active && (
                  <div className="w-1 h-1 rounded-full bg-amber-400 mt-0.5" />
                )}
              </Link>
            );
          })}
        </div>
        
        {/* Social Media Row */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:scale-110 transition-all p-1 text-white/60`}
              >
                <Icon className="text-sm" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;