import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaRobot, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const STYLES = `
  @keyframes goldShine {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
  @keyframes borderGlow {
    0%,100% { box-shadow: 0 0 0 rgba(245,158,11,0); }
    50%      { box-shadow: 0 0 30px rgba(245,158,11,0.25); }
  }
  @keyframes iconSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .svc-card {
    position: relative;
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    padding: 32px 28px;
    transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
    overflow: hidden;
    cursor: default;
    height: 100%;
  }
  .svc-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(245,158,11,0.0), rgba(245,158,11,0.06), rgba(245,158,11,0.0));
    opacity: 0;
    transition: opacity 0.4s;
    border-radius: inherit;
  }
  .svc-card:hover::before { opacity: 1; }
  .svc-card:hover {
    border-color: rgba(245,158,11,0.4);
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(245,158,11,0.1);
  }
  .svc-card .corner {
    position: absolute;
    width: 20px; height: 20px;
    border-color: rgba(245,158,11,0.25);
    border-style: solid;
    transition: all 0.3s;
  }
  .svc-card:hover .corner { border-color: rgba(245,158,11,0.7); }
  .corner-tl { top: 10px; left: 10px; border-width: 1px 0 0 1px; }
  .corner-tr { top: 10px; right: 10px; border-width: 1px 1px 0 0; }
  .corner-bl { bottom: 10px; left: 10px; border-width: 0 0 1px 1px; }
  .corner-br { bottom: 10px; right: 10px; border-width: 0 1px 1px 0; }

  .feat-tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 10px;
    font-family: monospace;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    color: rgba(255,255,255,0.45);
    transition: all 0.25s;
  }
  .svc-card:hover .feat-tag {
    background: rgba(245,158,11,0.06);
    border-color: rgba(245,158,11,0.2);
    color: rgba(245,158,11,0.8);
  }
  .svc-icon-wrap {
    width: 60px; height: 60px;
    border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
    position: relative; margin-bottom: 24px;
    transition: all 0.4s;
  }
  .svc-card:hover .svc-icon-wrap {
    transform: scale(1.15) rotate(5deg);
  }
`;

const services = [
  {
    icon: FaCode,
    title: 'Full-Stack Development',
    tag: 'CORE',
    tagColor: '#34d399',
    description: 'React, Next.js, Node.js, Python — end-to-end applications engineered to scale to millions of users.',
    link: '/expertise',
    features: ['React / Next.js', 'Node.js / Python', 'API Architecture', 'Database Design'],
    iconBg: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.15))',
    iconColor: '#34d399',
    accentColor: '#34d399',
    stat: '30+ apps shipped',
  },
  {
    icon: FaRobot,
    title: 'Automation Engineering',
    tag: 'SPECIALIST',
    tagColor: '#60a5fa',
    description: 'Web scraping, workflow automation, site cloning — 5,000+ hours saved for clients across industries.',
    link: '/automation',
    features: ['Puppeteer / Playwright', 'Site Cloning', 'Data Pipelines', 'Workflow Bots'],
    iconBg: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.15))',
    iconColor: '#60a5fa',
    accentColor: '#60a5fa',
    stat: '5,000+ hrs automated',
  },
  {
    icon: FaShieldAlt,
    title: 'Security & Pentesting',
    tag: 'ELITE',
    tagColor: '#f87171',
    description: 'OWASP audits, penetration testing, system hardening — 100+ vulnerabilities found and fixed.',
    link: '/security',
    features: ['OWASP Top 10', 'Penetration Testing', 'System Hardening', 'Security Monitoring'],
    iconBg: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(245,158,11,0.15))',
    iconColor: '#f87171',
    accentColor: '#f87171',
    stat: '100+ vulns patched',
  },
  {
    icon: FaChartLine,
    title: 'Fintech Solutions',
    tag: 'FEATURED',
    tagColor: '#fbbf24',
    description: 'POS integration, payment gateways, financial dashboards — real-time sync with zero errors.',
    link: '/fintech',
    features: ['POS Integration', 'Payment Gateways', 'Financial Dashboards', 'API Development'],
    iconBg: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(252,211,77,0.12))',
    iconColor: '#fbbf24',
    accentColor: '#fbbf24',
    stat: '12+ fintech builds',
  },
];

const GOLD = {
  background: 'linear-gradient(90deg, #92400e, #fcd34d, #f59e0b, #fef9c3, #f59e0b, #fcd34d)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'goldShine 2.5s linear infinite',
};

const ServicesSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{STYLES}</style>

      <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* subtle grid bg */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>

          {/* ── HEADING ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 72 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
              <div style={{ height: 1, width: 60, background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.5))' }} />
              <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(245,158,11,0.7)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                &gt;_ core_services.load()
              </span>
              <div style={{ height: 1, width: 60, background: 'linear-gradient(270deg, transparent, rgba(245,158,11,0.5))' }} />
            </div>

            <h2 style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 16, color: '#fff' }}>
              Core{' '}
              <span style={GOLD}>Expertise</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>
              Specialized domains where I deliver results that pay for themselves ten times over.
            </p>
          </motion.div>

          {/* ── CARDS GRID ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, type: 'spring' }}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                >
                  <div className="svc-card">
                    {/* corner accents */}
                    <div className="corner corner-tl" />
                    <div className="corner corner-tr" />
                    <div className="corner corner-bl" />
                    <div className="corner corner-br" />

                    {/* glow behind card when hovered */}
                    {hovered === i && (
                      <div style={{
                        position: 'absolute', inset: -1, borderRadius: 20, zIndex: -1,
                        background: `radial-gradient(ellipse at 50% 0%, ${svc.accentColor}18 0%, transparent 70%)`,
                        pointerEvents: 'none',
                      }} />
                    )}

                    {/* icon + tag row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                      <div className="svc-icon-wrap" style={{ background: svc.iconBg }}>
                        <Icon size={26} style={{ color: svc.iconColor }} />
                      </div>
                      <span style={{
                        fontSize: 9, fontWeight: 800, letterSpacing: '0.15em',
                        padding: '4px 10px', borderRadius: 99,
                        background: `${svc.tagColor}18`,
                        border: `1px solid ${svc.tagColor}40`,
                        color: svc.tagColor,
                        fontFamily: 'monospace',
                      }}>
                        {svc.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.2 }}>
                      {svc.title}
                    </h3>

                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20 }}>
                      {svc.description}
                    </p>

                    {/* feature tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                      {svc.features.map(f => (
                        <span key={f} className="feat-tag">{f}</span>
                      ))}
                    </div>

                    {/* stat + CTA row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{
                        fontFamily: 'monospace', fontSize: 11,
                        color: svc.accentColor, opacity: 0.8,
                        fontWeight: 700,
                      }}>
                        ✓ {svc.stat}
                      </span>
                      <Link
                        to={svc.link}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          fontSize: 12, fontWeight: 700, color: svc.accentColor,
                          textDecoration: 'none', transition: 'gap 0.2s',
                          fontFamily: 'monospace',
                        }}
                      >
                        Explore <FaArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ textAlign: 'center', marginTop: 56 }}
          >
            <Link
              to="/expertise"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '13px 32px', borderRadius: 12,
                background: 'rgba(245,158,11,0.08)',
                border: '1px solid rgba(245,158,11,0.3)',
                color: '#fbbf24', fontWeight: 700, fontSize: 14,
                textDecoration: 'none', transition: 'all 0.3s',
              }}
            >
              <HiLightningBolt />
              View Full Expertise Stack
              <FaArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;