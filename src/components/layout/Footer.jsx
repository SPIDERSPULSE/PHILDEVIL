import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaTwitter, FaWhatsapp,
  FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaDribbble, FaEye,
} from 'react-icons/fa';
import {
  HiSparkles, HiCube, HiChip, HiCurrencyDollar,
  HiUserGroup, HiMail, HiShieldCheck, HiTerminal,
  HiStatusOnline, HiCode,
} from 'react-icons/hi';
import Logo from '../ui/Logo';
import { PHILDEV } from '../../data/constants';
import SubmissionsDashboard from '../admin/SubmissionsDashboard';

/* ═══════════════════════════════════════════════════
   KEYFRAMES & GLOBAL STYLES
═══════════════════════════════════════════════════ */
const FOOTER_STYLES = `
  @keyframes goldShine {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
  @keyframes matrixFall {
    0%   { transform: translateY(-100%); opacity: 1; }
    80%  { opacity: 0.6; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
  @keyframes scanLine {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(200%); }
  }
  @keyframes circuitPulse {
    0%, 100% { opacity: 0.15; stroke-dashoffset: 0; }
    50%       { opacity: 0.5;  stroke-dashoffset: -40; }
  }
  @keyframes nodeFlash {
    0%, 90%, 100% { opacity: 0.2; transform: scale(1); }
    95%           { opacity: 1;   transform: scale(1.8); }
  }
  @keyframes termBlink {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0; }
  }
  @keyframes waveIn1 { from { transform: translateX(0); }   to { transform: translateX(-50%); } }
  @keyframes waveIn2 { from { transform: translateX(-50%); } to { transform: translateX(0); } }
  @keyframes waveIn3 { from { transform: translateX(0); }   to { transform: translateX(-50%); } }
  @keyframes footerAurora {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes statCount {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 6px rgba(245,158,11,0.3); }
    50%       { box-shadow: 0 0 20px rgba(245,158,11,0.7), 0 0 40px rgba(245,158,11,0.3); }
  }
  @keyframes borderFlow {
    0%   { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  .footer-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,0.45);
    font-size: 13px;
    transition: color 0.25s, transform 0.25s;
    text-decoration: none;
  }
  .footer-link::after {
    content: '';
    position: absolute;
    left: 0; bottom: -2px;
    width: 0; height: 1px;
    background: linear-gradient(90deg, #f59e0b, #fcd34d);
    transition: width 0.3s ease;
  }
  .footer-link:hover {
    color: #fcd34d;
    transform: translateX(4px);
  }
  .footer-link:hover::after { width: 100%; }

  .social-btn {
    position: relative;
    width: 40px; height: 40px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    transition: all 0.3s ease;
    overflow: hidden;
    cursor: pointer;
  }
  .social-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(245,158,11,0.2), rgba(252,211,77,0.1));
    opacity: 0;
    transition: opacity 0.3s;
  }
  .social-btn:hover::before { opacity: 1; }
  .social-btn:hover {
    border-color: rgba(245,158,11,0.5);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(245,158,11,0.2);
  }

  .stat-card {
    position: relative;
    text-align: center;
    padding: 12px 20px;
    border-radius: 12px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    overflow: hidden;
    transition: all 0.3s;
  }
  .stat-card:hover {
    border-color: rgba(245,158,11,0.4);
    background: rgba(245,158,11,0.05);
    box-shadow: 0 0 20px rgba(245,158,11,0.1);
    transform: translateY(-2px);
  }
  .stat-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, #92400e, #fcd34d, #f59e0b);
    backgroundSize: '200% auto';
    animation: goldShine 2s linear infinite;
  }

  .section-title {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    margin-bottom: 16px;
    background: linear-gradient(90deg, #f59e0b, #fcd34d, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .badge-elite    { background: rgba(239,68,68,0.15);  color: #f87171; border: 1px solid rgba(239,68,68,0.25); }
  .badge-featured { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.25); }
  .badge-core     { background: rgba(59,130,246,0.15); color: #60a5fa; border: 1px solid rgba(59,130,246,0.25); }
  .badge-premium  { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3); }
  .badge-members  { background: rgba(139,92,246,0.15); color: #a78bfa; border: 1px solid rgba(139,92,246,0.3); }
  .badge-prop     { background: rgba(245,158,11,0.1);  color: #f59e0b; border: 1px solid rgba(245,158,11,0.25); animation: glowPulse 2s ease infinite; }

  .term-line { color: rgba(255,255,255,0.55); font-size: 11px; line-height: 1.8; font-family: 'Courier New', monospace; }
  .term-line .cmd  { color: #fbbf24; }
  .term-line .ok   { color: #34d399; }
  .term-line .val  { color: #60a5fa; }
  .term-line .dim  { color: rgba(255,255,255,0.25); }
`;

/* ═══════════════════════════════════════════════════
   MATRIX RAIN CANVAS
═══════════════════════════════════════════════════ */
const MatrixRain = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const cols   = Math.floor(canvas.width / 18);
    const drops  = Array(cols).fill(0).map(() => Math.random() * -50);
    const chars  = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ$#@&%<>';
    let frame;
    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drops.forEach((y, i) => {
        const ch  = chars[Math.floor(Math.random() * chars.length)];
        const bright = Math.random() > 0.92;
        ctx.fillStyle = bright ? '#fef3c7' : `rgba(245,158,11,${0.1 + Math.random() * 0.3})`;
        ctx.font      = `${bright ? 'bold ' : ''}12px monospace`;
        ctx.fillText(ch, i * 18 + 2, y * 18);
        drops[i] = (y * 18 > canvas.height && Math.random() > 0.975) ? 0 : y + 1;
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: 0.18, pointerEvents: 'none', zIndex: 0,
      }}
    />
  );
};

/* ═══════════════════════════════════════════════════
   CIRCUIT BOARD SVG BACKGROUND
═══════════════════════════════════════════════════ */
const CircuitBoard = () => (
  <svg
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, opacity: 0.12 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <style>{`
        .cline { stroke: #f59e0b; stroke-width: 1; fill: none; stroke-dasharray: 6 3; animation: circuitPulse 3s ease-in-out infinite; }
        .cnode { fill: #fcd34d; animation: nodeFlash 4s ease-in-out infinite; }
        .cline:nth-child(2) { animation-delay: 0.8s; }
        .cline:nth-child(3) { animation-delay: 1.6s; }
        .cline:nth-child(4) { animation-delay: 2.4s; }
        .cnode:nth-child(5) { animation-delay: 1.2s; }
        .cnode:nth-child(6) { animation-delay: 2.8s; }
        .cnode:nth-child(7) { animation-delay: 0.5s; }
      `}</style>
    </defs>
    {/* Horizontal traces */}
    <path className="cline" d="M0,60 L120,60 L120,30 L280,30" />
    <path className="cline" d="M340,30 L500,30 L500,80 L700,80" />
    <path className="cline" d="M750,80 L900,80 L900,40 L1200,40" />
    <path className="cline" d="M0,140 L80,140 L80,100 L200,100" />
    <path className="cline" d="M260,100 L420,100 L420,140 L600,140" />
    <path className="cline" d="M0,200 L160,200 L160,170 L350,170" />
    <path className="cline" d="M420,170 L620,170 L620,200 L820,200" />
    <path className="cline" d="M880,200 L1100,200 L1100,170 L1400,170" />
    {/* Nodes */}
    <circle className="cnode" cx="120" cy="60"  r="3" />
    <circle className="cnode" cx="500" cy="80"  r="3" />
    <circle className="cnode" cx="900" cy="80"  r="3" />
    <circle className="cnode" cx="80"  cy="140" r="3" />
    <circle className="cnode" cx="420" cy="140" r="3" />
    <circle className="cnode" cx="160" cy="200" r="3" />
    <circle className="cnode" cx="620" cy="200" r="3" />
    <circle className="cnode" cx="1100" cy="200" r="3" />
  </svg>
);

/* ═══════════════════════════════════════════════════
   WAVE TOP (inverted — waves go down from top edge)
═══════════════════════════════════════════════════ */
const WaveTop = () => (
  <div style={{ position: 'absolute', top: '-39px', left: 0, right: 0, height: '40px', overflow: 'hidden', pointerEvents: 'none', zIndex: 5 }}>
    <div style={{ position: 'absolute', inset: 0, animation: 'waveIn1 7s linear infinite', width: '200%' }}>
      <svg viewBox="0 0 1000 40" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path d="M0,0 C150,40 350,0 500,20 C650,40 850,0 1000,15 L1000,40 L0,40 Z" fill="rgba(180,83,9,0.4)" />
      </svg>
      <svg viewBox="0 0 1000 40" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path d="M0,0 C150,40 350,0 500,20 C650,40 850,0 1000,15 L1000,40 L0,40 Z" fill="rgba(180,83,9,0.4)" />
      </svg>
    </div>
    <div style={{ position: 'absolute', inset: 0, animation: 'waveIn2 10s linear infinite', width: '200%' }}>
      <svg viewBox="0 0 1000 40" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path d="M0,10 C200,0 350,35 500,15 C650,0 800,35 1000,10 L1000,40 L0,40 Z" fill="rgba(245,158,11,0.25)" />
      </svg>
      <svg viewBox="0 0 1000 40" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path d="M0,10 C200,0 350,35 500,15 C650,0 800,35 1000,10 L1000,40 L0,40 Z" fill="rgba(245,158,11,0.25)" />
      </svg>
    </div>
    <div style={{ position: 'absolute', inset: 0, animation: 'waveIn3 14s linear infinite', width: '200%' }}>
      <svg viewBox="0 0 1000 40" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path d="M0,20 C250,5 400,30 500,20 C600,10 750,30 1000,20 L1000,40 L0,40 Z" fill="rgba(252,211,77,0.15)" />
      </svg>
      <svg viewBox="0 0 1000 40" preserveAspectRatio="none" style={{ width: '50%', height: '100%', display: 'inline-block' }}>
        <path d="M0,20 C250,5 400,30 500,20 C600,10 750,30 1000,20 L1000,40 L0,40 Z" fill="rgba(252,211,77,0.15)" />
      </svg>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   LIVE TERMINAL WIDGET
═══════════════════════════════════════════════════ */
const LiveTerminal = () => {
  const [lines, setLines] = useState([
    { text: '> system.init()', type: 'cmd' },
    { text: '✓ runtime: node v20.x', type: 'ok' },
  ]);
  const [typing, setTyping] = useState('');
  const terminalLines = [
    { text: '> uptime: 99.9%', type: 'cmd' },
    { text: '✓ all systems operational', type: 'ok' },
    { text: '> load_portfolio()', type: 'cmd' },
    { text: '✓ 50+ projects loaded', type: 'ok' },
    { text: '> ping client --latency', type: 'cmd' },
    { text: 'latency: <4h response', type: 'val' },
    { text: '> status: AVAILABLE', type: 'cmd' },
    { text: '✓ ready to build', type: 'ok' },
  ];
  const lineIdx = useRef(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const next = terminalLines[lineIdx.current % terminalLines.length];
      lineIdx.current++;
      let i = 0;
      setTyping('');
      const typeInterval = setInterval(() => {
        setTyping(next.text.slice(0, i + 1));
        i++;
        if (i >= next.text.length) {
          clearInterval(typeInterval);
          setTyping('');
          setLines(prev => {
            const updated = [...prev, next];
            return updated.slice(-6);
          });
        }
      }, 40);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: 'rgba(0,0,0,0.6)',
        border: '1px solid rgba(245,158,11,0.2)',
        borderRadius: '12px',
        padding: '14px 16px',
        fontFamily: "'Courier New', monospace",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* scan line */}
      <div
        style={{
          position: 'absolute', left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.3), transparent)',
          animation: 'scanLine 3s linear infinite',
          pointerEvents: 'none',
        }}
      />
      {/* terminal title bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, marginLeft: 6 }}>phildev@terminal:~</span>
        <HiStatusOnline style={{ color: '#22c55e', marginLeft: 'auto', fontSize: 12 }} />
      </div>
      {lines.map((l, i) => (
        <div key={i} className={`term-line`}>
          <span className={l.type}>{l.text}</span>
        </div>
      ))}
      {typing && (
        <div className="term-line">
          <span className="cmd">{typing}</span>
          <span style={{ animation: 'termBlink 0.7s step-end infinite', color: '#fbbf24' }}>█</span>
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   MAIN FOOTER
═══════════════════════════════════════════════════ */
const Footer = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const currentYear  = new Date().getFullYear();
  const footerRef    = useRef(null);
  const isInView     = useInView(footerRef, { once: true, margin: '-60px' });

  const quickLinks = [
    { name: 'Home',      path: '/',          icon: HiSparkles       },
    { name: 'Work',      path: '/work',      icon: HiCube           },
    { name: 'Expertise', path: '/expertise', icon: HiChip           },
    { name: 'Pricing',   path: '/pricing',   icon: HiCurrencyDollar },
    { name: 'About',     path: '/about',     icon: HiUserGroup      },
    { name: 'Contact',   path: '/contact',   icon: HiMail           },
  ];

  const services = [
    { name: 'Security',     path: '/security',     badge: 'Elite',    cls: 'badge-elite'    },
    { name: 'Fintech',      path: '/fintech',      badge: 'Featured', cls: 'badge-featured' },
    { name: 'Automation',   path: '/automation',   badge: 'Core',     cls: 'badge-core'     },
    { name: 'Case Studies', path: '/case-studies', badge: 'Premium',  cls: 'badge-premium'  },
  ];

  const exclusive = [
    { name: 'Secret Hive',  path: '/secret-hive',  badge: 'Members Only', cls: 'badge-members' },
    { name: 'Dark Kitchen', path: '/dark-kitchen',  badge: 'Proprietary',  cls: 'badge-prop'    },
  ];

  const socials = [
    { icon: FaGithub,    href: 'https://github.com/SPIDERSPULSE',                   label: 'GitHub',    color: '#ffffff' },
    { icon: FaLinkedin,  href: 'https://linkedin.com/in/phildev',                  label: 'LinkedIn',  color: '#0A66C2' },
    { icon: FaTwitter,   href: 'https://x.com/Phildev_Tech',    label: 'Twitter',   color: '#1DA1F2' },
    { icon: FaInstagram, href: 'https://www.instagram.com/phildev_inc/',  label: 'Instagram', color: '#E1306C' },
    { icon: FaWhatsapp,  href: `https://wa.me/${254798436384}`, label: 'WhatsApp', color: '#25D366' },
    { icon: FaDribbble,  href: 'https://dribbble.com/phildev',   label: 'Dribbble',  color: '#EA4C89' },
  ];





  const stats = [
    { val: '4+',  label: 'Years',    icon: '⚡' },
    { val: '54+', label: 'Projects', icon: '🚀' },
    { val: '90%', label: 'Success',  icon: '🎯' },
    { val: '<4h', label: 'Response', icon: '💬' },
  ];

  const GOLD = { background: 'linear-gradient(90deg,#f59e0b,#fcd34d,#f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };

  return (
    <>
      <style>{FOOTER_STYLES}</style>

      <footer
        ref={footerRef}
        style={{
          position: 'relative',
          marginTop: '60px',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(5,5,5,0.98) 0%, rgba(10,6,0,0.99) 60%, #000 100%)',
        }}
      >
        {/* ── WAVE TOP ── */}
        <WaveTop />

        {/* ── AURORA BG ── */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(120deg, rgba(120,53,15,0.2) 0%, rgba(5,5,5,0) 40%, rgba(6,78,59,0.12) 70%, rgba(120,53,15,0.18) 100%)',
            backgroundSize: '300% 300%',
            animation: 'footerAurora 10s ease infinite',
            zIndex: 0, pointerEvents: 'none',
          }}
        />

        {/* ── MATRIX RAIN ── */}
        <MatrixRain />

        {/* ── CIRCUIT BOARD ── */}
        <CircuitBoard />

        {/* ── TOP GOLD BORDER ── */}
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, #92400e, #fcd34d, #fef9c3, #fcd34d, #92400e, transparent)',
            backgroundSize: '200% auto',
            animation: 'goldShine 3s linear infinite',
            zIndex: 10,
          }}
        />

        {/* ══════════ MAIN CONTENT ══════════ */}
        <div
          className="container mx-auto px-6"
          style={{ paddingTop: '64px', paddingBottom: '32px', position: 'relative', zIndex: 5 }}
        >

          {/* ── TOP GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

            {/* ── BRAND COLUMN ── */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Logo size="large" showTagline={true} />

              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.7, margin: '16px 0' }}>
                Building systems that <span style={GOLD}>convert, automate,</span> and dominate.<br />
                Engineered for scale. Designed to win.
              </p>

              {/* socials */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="social-btn"
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = color + '66';
                      e.currentTarget.style.boxShadow   = `0 8px 20px ${color}33`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow   = 'none';
                    }}
                  >
                    <Icon size={15} style={{ color, position: 'relative', zIndex: 1 }} />
                  </a>
                ))}
              </div>

              {/* Live terminal */}
              <LiveTerminal />
            </motion.div>

            {/* ── NAVIGATION ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="section-title"><HiSparkles size={12} /> Navigation</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {quickLinks.map(({ name, path, icon: Icon }) => (
                  <li key={name}>
                    <Link to={path} className="footer-link">
                      <Icon size={11} style={{ color: '#f59e0b', flexShrink: 0 }} />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── SERVICES + EXCLUSIVE ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="section-title"><HiCode size={12} /> Services</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {services.map(({ name, path, badge, cls }) => (
                  <li key={name}>
                    <Link to={path} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}>
                      <span className="footer-link" style={{ pointerEvents: 'none' }}>{name}</span>
                      <span className={cls} style={{ fontSize: 9, padding: '2px 7px', borderRadius: 99, fontWeight: 700, letterSpacing: '0.05em' }}>{badge}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="section-title"><HiShieldCheck size={12} /> Exclusive</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {exclusive.map(({ name, path, badge, cls }) => (
                  <li key={name}>
                    <Link to={path} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}>
                      <span className="footer-link" style={{ pointerEvents: 'none' }}>{name}</span>
                      <span className={cls} style={{ fontSize: 9, padding: '2px 7px', borderRadius: 99, fontWeight: 700, letterSpacing: '0.05em' }}>{badge}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── CONNECT ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="section-title"><HiTerminal size={12} /> Connect</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
                  <FaMapMarkerAlt style={{ color: '#f59e0b', marginTop: 2, flexShrink: 0 }} />
                  <span>{PHILDEV.location}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
                  <FaClock style={{ color: '#f59e0b', marginTop: 2, flexShrink: 0 }} />
                  <span>{PHILDEV.timezone} · Remote Worldwide</span>
                </li>
                <li>
                  <a href="mailto:node.netwalker@gmail.com" className="footer-link">
                    <FaEnvelope style={{ color: '#f59e0b', flexShrink: 0 }} />
                    node.netwalker@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/254798436384" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <FaWhatsapp style={{ color: '#25D366', flexShrink: 0 }} />
                    +254 798 436 384
                  </a>
                </li>
              </ul>

              {/* availability card */}
              <div
                style={{
                  marginTop: 24, padding: '14px 16px', borderRadius: 12,
                  background: 'linear-gradient(135deg,rgba(245,158,11,0.1),rgba(252,211,77,0.05))',
                  border: '1px solid rgba(245,158,11,0.25)',
                  boxShadow: '0 0 20px rgba(245,158,11,0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ position: 'relative', display: 'inline-flex' }}>
                    <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#f59e0b', opacity: 0.75, animation: 'termBlink 1s ease-in-out infinite' }} />
                    <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                  </span>
                  <span style={{ ...GOLD, fontSize: 12, fontWeight: 700 }}>Open for Collaboration</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, margin: 0, fontFamily: 'monospace' }}>
                  &gt;_ response_time: &lt;4h<br />
                  &gt;_ timezone: EAT (UTC+3)<br />
                  &gt;_ mode: remote_worldwide
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── STATS BAR ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: 32, marginBottom: 32,
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: 12,
                marginBottom: 28,
              }}
            >
              {stats.map(({ val, label, icon }, i) => (
                <motion.div
                  key={label}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                >
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
                  <p style={{ ...GOLD, fontSize: 26, fontWeight: 900, margin: 0, lineHeight: 1 }}>{val}</p>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── BOTTOM BAR ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              borderTop: '1px solid rgba(255,255,255,0.05)',
              paddingTop: 20,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            {/* copyright */}
            <div>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, margin: 0 }}>
                © {currentYear} <span style={GOLD}>PhilDev</span>. All rights reserved.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: 10, marginTop: 4, fontFamily: 'monospace' }}>
                &gt;_ system_ready | status: <span style={{ color: '#34d399' }}>operational</span> | uptime: <span style={{ color: '#fbbf24' }}>99.9%</span>
              </p>
            </div>

            {/* ADMIN EYE ICON */}
            <motion.button
              onClick={() => setShowAdmin(true)}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 0px rgba(245,158,11,0)',
                  '0 0 10px rgba(245,158,11,0.5)',
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
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '30px',
                background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(252,211,77,0.05))',
                border: '1px solid rgba(245,158,11,0.4)',
                cursor: 'pointer',
                backdropFilter: 'blur(4px)',
              }}
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ display: 'flex' }}
              >
                <FaEye style={{ color: '#f59e0b', fontSize: '16px' }} />
              </motion.span>
              <span
                style={{
                  background: 'linear-gradient(90deg, #f59e0b, #fcd34d)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                ADMIN
              </span>
            </motion.button>

            {/* built with */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {['React', 'Tailwind', 'Framer'].map((tech, i) => (
                <span
                  key={tech}
                  style={{
                    fontSize: 9, padding: '3px 8px', borderRadius: 99,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.08em',
                    fontFamily: 'monospace',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* live status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ position: 'relative', display: 'inline-flex', width: 8, height: 8 }}>
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#f59e0b', animation: 'termBlink 1.5s ease-in-out infinite', opacity: 0.6 }} />
                <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
              </span>
              <span style={{ ...GOLD, fontSize: 11, fontWeight: 700 }}>Available for Work</span>
            </div>
          </motion.div>

        </div>{/* /container */}
      </footer>

      {/* Admin Dashboard Modal */}
      {showAdmin && (
        <SubmissionsDashboard onClose={() => setShowAdmin(false)} />
      )}
    </>
  );
};

export default Footer;