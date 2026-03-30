import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useAnimationControls } from 'framer-motion';
import {
  HiMenu, HiX, HiSparkles, HiChip, HiCurrencyDollar,
  HiUserGroup, HiMail,
} from 'react-icons/hi';
import {
  FaGithub, FaLinkedinIn, FaTwitter, FaInstagram,
  FaDribbble, FaYoutube, FaBehance, FaEye,
} from 'react-icons/fa';
import GlitchText from '../ui/GlitchText';
import SubmissionsDashboard from '../admin/SubmissionsDashboard';

/* ══════════════════════════════════════════
   GLOBAL STYLES — keyframes + media query
══════════════════════════════════════════ */
const GLOBAL_STYLE = `
  @keyframes goldShine {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  /* Sweeping aurora wave behind the header */
  @keyframes auroraShift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Pulsing glow under the brand name */
  @keyframes logoPulse {
    0%, 100% { opacity: 0.5; transform: scaleX(0.8); }
    50%       { opacity: 1;   transform: scaleX(1.1); }
  }

  /* Particle sparkle */
  @keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
    50%       { opacity: 1; transform: scale(1) rotate(180deg); }
  }

  /* Letter shimmer on hover */
  @keyframes letterShimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @media (min-width: 1024px) {
    .header-inner { height: 120px !important; }
  }

  .nav-link-hover {
    position: relative;
    overflow: hidden;
  }
  .nav-link-hover::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(245,158,11,0.0), rgba(252,211,77,0.12), rgba(245,158,11,0.0));
    transform: translateX(-100%);
    transition: transform 0.4s ease;
    border-radius: 8px;
  }
  .nav-link-hover:hover::before {
    transform: translateX(100%);
  }
  .nav-link-hover:hover span {
    background: linear-gradient(90deg, #f59e0b, #fef3c7, #f59e0b);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: letterShimmer 1.2s linear infinite;
  }

  /* Wave SVG animation */
  @keyframes wave1 {
    0%   { d: path("M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 L1000,80 L0,80 Z"); }
    50%  { d: path("M0,20 C200,70 300,10 500,30 C700,50 800,10 1000,20 L1000,80 L0,80 Z"); }
    100% { d: path("M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 L1000,80 L0,80 Z"); }
  }
  @keyframes wave2 {
    0%   { d: path("M0,50 C200,20 350,70 500,50 C650,30 800,70 1000,50 L1000,80 L0,80 Z"); }
    50%  { d: path("M0,30 C150,60 400,20 500,45 C600,70 850,25 1000,30 L1000,80 L0,80 Z"); }
    100% { d: path("M0,50 C200,20 350,70 500,50 C650,30 800,70 1000,50 L1000,80 L0,80 Z"); }
  }
  @keyframes wave3 {
    0%   { d: path("M0,60 C250,30 400,65 500,55 C600,45 750,65 1000,60 L1000,80 L0,80 Z"); }
    50%  { d: path("M0,45 C180,70 380,35 500,60 C620,85 820,40 1000,45 L1000,80 L0,80 Z"); }
    100% { d: path("M0,60 C250,30 400,65 500,55 C600,45 750,65 1000,60 L1000,80 L0,80 Z"); }
  }

  /* Horizontal wave translate */
  @keyframes waveMove1 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes waveMove2 { from { transform: translateX(-50%); } to { transform: translateX(0); } }
  @keyframes waveMove3 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
`;

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const socialLinks = [
  { icon: FaGithub,     href: 'https://github.com/SPIDERSPULSE',    label: 'GitHub',    color: '#ffffff' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/phildev',  label: 'LinkedIn',  color: '#0A66C2' },
  { icon: FaTwitter,    href: 'https://x.com/Phildev_Tech',   label: 'Twitter',   color: '#1DA1F2' },
  { icon: FaInstagram,  href: 'https://www.instagram.com/phildev_inc/', label: 'Instagram', color: '#E1306C' },
  { icon: FaDribbble,   href: 'https://dribbble.com/phildev',  label: 'Dribbble',  color: '#EA4C89' },
  { icon: FaYoutube,    href: 'https://youtube.com/phildev',   label: 'YouTube',   color: '#FF0000' },
  { icon: FaBehance,    href: 'https://behance.net/phildev',   label: 'Behance',   color: '#1769FF' },
];

  

const navLinks = [
  { name: 'Home',      path: '/',          icon: HiSparkles       },
  { name: 'Work',      path: '/work',      icon: HiSparkles       },
  { name: 'Expertise', path: '/expertise', icon: HiChip           },
  { name: 'Pricing',   path: '/pricing',   icon: HiCurrencyDollar },
  { name: 'About',     path: '/about',     icon: HiUserGroup      },
  { name: 'Contact',   path: '/contact',   icon: HiMail           },
];

/* ══════════════════════════════════════════
   STYLE CONSTANTS
══════════════════════════════════════════ */
const GOLD_TEXT_STYLE = {
  background: 'linear-gradient(90deg, #92400e, #fcd34d, #f59e0b, #fef9c3, #f59e0b, #fcd34d, #92400e)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'goldShine 2.5s linear infinite',
};

const GOLD_SUB_STYLE = {
  background: 'linear-gradient(90deg, #f59e0b, #fcd34d, #fef3c7, #f59e0b)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

/* ══════════════════════════════════════════
   WAVE SVG COMPONENT (bottom of header)
══════════════════════════════════════════ */
const WaveBottom = () => (
  <div
    style={{
      position: 'absolute',
      bottom: '-38px',
      left: 0,
      right: 0,
      height: '40px',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 49,
    }}
  >
    {/* Wave layer 1 — deep gold */}
    <div style={{ position: 'absolute', inset: 0, animation: 'waveMove1 6s linear infinite', width: '200%' }}>
      <svg viewBox="0 0 1000 80" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path
          d="M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 L1000,80 L0,80 Z"
          fill="rgba(180,83,9,0.35)"
        />
      </svg>
      <svg viewBox="0 0 1000 80" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path
          d="M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 L1000,80 L0,80 Z"
          fill="rgba(180,83,9,0.35)"
        />
      </svg>
    </div>

    {/* Wave layer 2 — bright amber */}
    <div style={{ position: 'absolute', inset: 0, animation: 'waveMove2 9s linear infinite', width: '200%' }}>
      <svg viewBox="0 0 1000 80" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path
          d="M0,50 C200,20 350,70 500,50 C650,30 800,70 1000,50 L1000,80 L0,80 Z"
          fill="rgba(245,158,11,0.25)"
        />
      </svg>
      <svg viewBox="0 0 1000 80" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path
          d="M0,50 C200,20 350,70 500,50 C650,30 800,70 1000,50 L1000,80 L0,80 Z"
          fill="rgba(245,158,11,0.25)"
        />
      </svg>
    </div>

    {/* Wave layer 3 — pale gold shimmer */}
    <div style={{ position: 'absolute', inset: 0, animation: 'waveMove3 12s linear infinite', width: '200%' }}>
      <svg viewBox="0 0 1000 80" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path
          d="M0,60 C250,30 400,65 500,55 C600,45 750,65 1000,60 L1000,80 L0,80 Z"
          fill="rgba(252,211,77,0.18)"
        />
      </svg>
      <svg viewBox="0 0 1000 80" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path
          d="M0,60 C250,30 400,65 500,55 C600,45 750,65 1000,60 L1000,80 L0,80 Z"
          fill="rgba(252,211,77,0.18)"
        />
      </svg>
    </div>
  </div>
);

/* ══════════════════════════════════════════
   AURORA BACKGROUND (sweeping gradient)
══════════════════════════════════════════ */
const AuroraBackground = () => (
  <>
    {/* Slow aurora sweep */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(120deg, rgba(120,53,15,0.45) 0%, rgba(180,83,9,0.3) 20%, rgba(245,158,11,0.2) 40%, rgba(6,78,59,0.2) 60%, rgba(17,94,89,0.25) 80%, rgba(120,53,15,0.4) 100%)',
        backgroundSize: '300% 300%',
        animation: 'auroraShift 8s ease infinite',
        zIndex: 0,
      }}
    />
    {/* Radial gold burst behind logo area */}
    <div
      style={{
        position: 'absolute',
        top: '-20px',
        left: '-40px',
        width: '320px',
        height: '180px',
        background: 'radial-gradient(ellipse at 30% 50%, rgba(245,158,11,0.18) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  </>
);

/* ══════════════════════════════════════════
   SPARKLE DOTS around the logo
══════════════════════════════════════════ */
const Sparkles = () => {
  const dots = [
    { top: '8px',  left: '110px', delay: '0s',    size: 4 },
    { top: '30px', left: '140px', delay: '0.6s',  size: 3 },
    { top: '55px', left: '125px', delay: '1.2s',  size: 5 },
    { top: '15px', left: '0px',   delay: '0.9s',  size: 3 },
    { top: '48px', left: '-10px', delay: '0.3s',  size: 4 },
  ];
  return (
    <>
      {dots.map((d, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #fef3c7, #f59e0b)',
            animation: `sparkle 2s ease-in-out ${d.delay} infinite`,
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      ))}
    </>
  );
};

/* ══════════════════════════════════════════
   MAIN HEADER
══════════════════════════════════════════ */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const [hoveredNav, setHoveredNav]         = useState(null);
  const [showAdmin, setShowAdmin]           = useState(false);
  const location                            = useLocation();
  const logoControls                        = useAnimationControls();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const run = async () => {
      while (true) {
        await logoControls.start({
          y: [-3, 3, -3],
          transition: { duration: 4, ease: 'easeInOut' },
        });
      }
    };
    run();
  }, [logoControls]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{GLOBAL_STYLE}</style>

      {/* ══════════════ HEADER ══════════════ */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 50,
          overflow: 'visible',
        }}
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-black/92 backdrop-blur-2xl shadow-2xl'
            : 'bg-black/70 backdrop-blur-xl'
        }`}
      >
        {/* ── AURORA WAVE BACKGROUND ── */}
        <AuroraBackground />

        {/* top gold shimmer line */}
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, #92400e 15%, #fcd34d 35%, #fef9c3 50%, #fcd34d 65%, #92400e 85%, transparent 100%)',
            backgroundSize: '200% auto',
            animation: 'goldShine 3s linear infinite',
            zIndex: 2,
          }}
        />

        {/* ── CONTENT ROW ── */}
        <div className="px-6 max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 2 }}>
          <div
            className="header-inner flex items-center justify-between w-full"
            style={{ height: '80px' }}
          >

            {/* ════ LOGO ════ */}
            <Link to="/" className="group relative flex-shrink-0">
              {/* big hover glow */}
              <motion.div
                className="absolute -inset-6 rounded-2xl"
                style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.25), transparent 70%)', zIndex: -1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div animate={logoControls} className="relative flex flex-col items-start">
                {/* sparkle particles */}
                <Sparkles />

                {/* micro label */}
                <span
                  className="text-[9px] tracking-[0.35em] uppercase mb-0.5 font-bold"
                  style={GOLD_SUB_STYLE}
                >
                  Full-Stack · AI · Systems
                </span>

                {/* ─ BRAND NAME with extra effects ─ */}
                <div style={{ position: 'relative' }}>
                  {/* shadow clone for depth */}
                  <span
                    aria-hidden
                    className="text-3xl md:text-4xl font-black leading-none select-none"
                    style={{
                      position: 'absolute',
                      top: 3, left: 2,
                      background: 'linear-gradient(90deg, #92400e, #78350f)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'blur(2px)',
                      opacity: 0.6,
                      zIndex: 0,
                    }}
                  >
                    PHILDEV
                  </span>

                  <GlitchText
                    text="PHILDEV"
                    className="text-3xl md:text-4xl font-black leading-none"
                    style={{
                      ...GOLD_TEXT_STYLE,
                      position: 'relative',
                      zIndex: 1,
                      letterSpacing: '0.04em',
                      textShadow: '0 0 30px rgba(245,158,11,0.5), 0 0 60px rgba(245,158,11,0.2)',
                      filter: 'drop-shadow(0 0 8px rgba(252,211,77,0.6))',
                    }}
                  />
                </div>

                {/* pulsing underline glow */}
                <div
                  style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #f59e0b, #fcd34d, #f59e0b, transparent)',
                    borderRadius: '4px',
                    marginTop: '2px',
                    animation: 'logoPulse 2s ease-in-out infinite',
                    transformOrigin: 'center',
                  }}
                />

                {/* tagline */}
                <div className="flex items-center gap-2 mt-1.5">
                  <span
                    className="hidden sm:block w-8 h-px"
                    style={{ background: 'linear-gradient(90deg,#f59e0b,transparent)' }}
                  />
                  <p
                    className="text-[10px] tracking-widest uppercase font-semibold"
                    style={{ ...GOLD_SUB_STYLE, opacity: 0.9 }}
                  >
                    Phillip Kerher · Crafting Digital Excellence
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* ════ DESKTOP NAV ════ */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon   = link.icon;
                const active = isActive(link.path);
                const hovered = hoveredNav === link.name;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="nav-link-hover relative px-4 py-2 rounded-lg transition-all duration-300"
                    style={
                      active
                        ? {
                            background: 'linear-gradient(135deg,rgba(245,158,11,0.18),rgba(252,211,77,0.08))',
                            border: '1px solid rgba(245,158,11,0.45)',
                            boxShadow: '0 0 16px rgba(245,158,11,0.15), inset 0 0 12px rgba(245,158,11,0.05)',
                          }
                        : {}
                    }
                    onMouseEnter={() => setHoveredNav(link.name)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    {/* hover border flash */}
                    {!active && hovered && (
                      <motion.div
                        layoutId="navHover"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          border: '1px solid rgba(245,158,11,0.3)',
                          background: 'linear-gradient(135deg,rgba(245,158,11,0.08),rgba(252,211,77,0.04))',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      />
                    )}

                    <div className="flex items-center gap-2 relative z-10">
                      <motion.div
                        animate={hovered || active ? { rotate: [0, -15, 15, 0], scale: 1.2 } : { rotate: 0, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Icon
                          className="text-sm"
                          style={{
                            color: active ? '#fbbf24' : hovered ? '#fcd34d' : 'rgba(255,255,255,0.6)',
                            filter: (active || hovered) ? 'drop-shadow(0 0 6px rgba(245,158,11,0.8))' : 'none',
                            transition: 'all 0.3s',
                          }}
                        />
                      </motion.div>
                      <span
                        className="text-sm font-semibold tracking-wide"
                        style={{
                          color: active
                            ? '#fbbf24'
                            : hovered
                            ? '#ffffff'
                            : '#e5e7eb',
                          transition: 'color 0.3s',
                        }}
                      >
                        {link.name}
                      </span>
                    </div>

                    {active && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
                        style={{
                          width: '30px',
                          height: '2px',
                          background: 'linear-gradient(90deg,#b45309,#fcd34d,#f59e0b)',
                          boxShadow: '0 0 8px rgba(245,158,11,0.8)',
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ════ RIGHT: badge + hamburger ════ */}
            <div className="flex items-center gap-4">
              <motion.div
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border cursor-default"
                style={{
                  background: 'linear-gradient(135deg,rgba(245,158,11,0.1),rgba(252,211,77,0.06))',
                  borderColor: 'rgba(245,158,11,0.4)',
                  boxShadow: '0 0 12px rgba(245,158,11,0.1)',
                }}
                whileHover={{
                  boxShadow: '0 0 20px rgba(245,158,11,0.3)',
                  borderColor: 'rgba(245,158,11,0.7)',
                  scale: 1.03,
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span className="text-xs font-semibold" style={{ color: '#fbbf24' }}>
                  Available for Work
                </span>
                <span className="text-[10px] text-white/30">· 4+ Yrs</span>
              </motion.div>

              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg border text-white"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255,0.12)',
                }}
                whileHover={{
                  background: 'rgba(245,158,11,0.15)',
                  borderColor: 'rgba(245,158,11,0.4)',
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {mobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
              </motion.button>
            </div>

          </div>
        </div>

        {/* ── WAVE BOTTOM ── */}
        <WaveBottom />

        {/* bottom gold border line (above the waves) */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.6), rgba(252,211,77,0.9), rgba(245,158,11,0.6), transparent)',
            zIndex: 3,
          }}
        />
      </motion.header>

      {/* ══════════════ MOBILE DRAWER ══════════════ */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 22, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-80 z-50 border-l shadow-2xl lg:hidden overflow-y-auto"
        style={{
          background: 'linear-gradient(160deg, rgba(10,10,10,0.98) 0%, rgba(20,10,0,0.98) 50%, rgba(10,10,10,0.98) 100%)',
          backdropFilter: 'blur(24px)',
          borderColor: 'rgba(245,158,11,0.2)',
        }}
      >
        {/* drawer aurora */}
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 80% 20%, rgba(245,158,11,0.08) 0%, transparent 60%)',
          }}
        />

        <div className="p-6 flex flex-col h-full relative z-10">

          {/* top bar */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-black" style={GOLD_TEXT_STYLE}>MENU</span>
            <motion.button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-white"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              whileHover={{ background: 'rgba(245,158,11,0.15)', borderColor: 'rgba(245,158,11,0.4)', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiX size={22} />
            </motion.button>
          </div>

          {/* nav links */}
          <div className="space-y-1 mb-8">
            {navLinks.map((link, i) => {
              const Icon   = link.icon;
              const active = isActive(link.path);
              return (
                <motion.div
                  key={link.name}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: mobileMenuOpen ? 0 : 40, opacity: mobileMenuOpen ? 1 : 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group"
                    style={
                      active
                        ? {
                            background: 'linear-gradient(135deg,rgba(245,158,11,0.18),rgba(252,211,77,0.08))',
                            border: '1px solid rgba(245,158,11,0.4)',
                            boxShadow: '0 0 12px rgba(245,158,11,0.1)',
                          }
                        : { border: '1px solid transparent' }
                    }
                  >
                    <Icon style={{ color: active ? '#fbbf24' : 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} />
                    <span className="font-semibold" style={{ color: active ? '#fbbf24' : '#ffffff' }}>
                      {link.name}
                    </span>
                    {active && (
                      <span
                        className="ml-auto text-[9px] tracking-widest uppercase font-bold"
                        style={{ color: '#f59e0b', opacity: 0.7 }}
                      >
                        ●
                      </span>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* divider */}
          <div
            className="h-px mb-6"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(245,158,11,0.5),transparent)' }}
          />

          {/* social icons */}
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-4 font-bold" style={GOLD_SUB_STYLE}>
              Find Me Online
            </p>
            <div className="grid grid-cols-4 gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 10 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{
                    background: `${color}22`,
                    borderColor: `${color}55`,
                    y: -3,
                    boxShadow: `0 6px 20px ${color}33`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} style={{ color }} />
                  <span className="text-[9px] text-white/40">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* status card with ADMIN EYE */}
          <div
            className="mt-auto p-4 rounded-xl border"
            style={{
              background: 'linear-gradient(135deg,rgba(245,158,11,0.1),rgba(252,211,77,0.05))',
              borderColor: 'rgba(245,158,11,0.25)',
              boxShadow: '0 0 20px rgba(245,158,11,0.08)',
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span className="text-xs font-semibold" style={{ color: '#fbbf24' }}>Ready to Build</span>
              </div>
              
              {/* ADMIN EYE ICON */}
              <motion.button
                onClick={() => setShowAdmin(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(245,158,11,0)',
                    '0 0 8px rgba(245,158,11,0.5)',
                    '0 0 0px rgba(245,158,11,0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  background: 'rgba(245,158,11,0.15)',
                  border: '1px solid rgba(245,158,11,0.4)',
                  cursor: 'pointer',
                }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <FaEye style={{ color: '#f59e0b', fontSize: '12px' }} />
                </motion.span>
                <span
                  style={{
                    background: 'linear-gradient(90deg, #f59e0b, #fcd34d)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '10px',
                    fontWeight: 600,
                  }}
                >
                  ADMIN
                </span>
              </motion.button>
            </div>
            <p className="text-[10px] text-white/40">Response time: &lt; 4 hours</p>
          </div>

        </div>
      </motion.div>

      {/* Admin Dashboard Modal */}
      {showAdmin && (
        <SubmissionsDashboard onClose={() => setShowAdmin(false)} />
      )}
    </>
  );
};

export default Header;