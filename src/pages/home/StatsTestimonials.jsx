import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaStar, FaQuoteLeft, FaUsers, FaCode,
  FaShieldAlt, FaGlobe, FaClock, FaRocket,
} from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const STYLES = `
  @keyframes goldShine {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes radarPing {
    0%   { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(3); opacity: 0; }
  }
  @keyframes quoteFloat {
    0%,100% { transform: translateY(0) rotate(-3deg); }
    50%      { transform: translateY(-8px) rotate(-3deg); }
  }
  .stat-number {
    animation: countUp 0.6s ease both;
    background: linear-gradient(90deg, #92400e, #fcd34d, #f59e0b, #fef9c3, #f59e0b, #fcd34d);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: goldShine 2.5s linear infinite;
    font-size: clamp(36px,5vw,60px);
    font-weight: 900;
    line-height: 1;
    display: block;
  }
  .testimonial-card {
    position: relative;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(245,158,11,0.15);
    border-radius: 24px;
    padding: 48px;
    overflow: hidden;
  }
  .testimonial-card::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 70%);
  }
  .stat-orb {
    position: relative;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: 32px 24px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    transition: all 0.35s;
    overflow: hidden;
  }
  .stat-orb::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, #f59e0b, transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s;
  }
  .stat-orb:hover::before { transform: scaleX(1); }
  .stat-orb:hover {
    border-color: rgba(245,158,11,0.3);
    background: rgba(245,158,11,0.04);
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(245,158,11,0.06);
  }
`;

const stats = [
  { value: 9000, suffix: '+', label: 'Hours Automated',      icon: FaCode,     color: '#34d399', desc: 'workflow efficiency' },
  { value: 63,  suffix: '+', label: 'Vulnerabilities Fixed', icon: FaShieldAlt,color: '#f87171', desc: 'security hardened'   },
  { value: 54,   suffix: '+', label: 'Happy Clients',         icon: FaUsers,    color: '#fbbf24', desc: 'across industries'   },
  { value: 7,   suffix: '+', label: 'Countries Served',      icon: FaGlobe,    color: '#60a5fa', desc: 'global reach'        },
  { value: 90,   suffix: '%', label: 'Success Rate',          icon: FaRocket,   color: '#a78bfa', desc: 'project delivery'    },
  { value: 4,    suffix: 'h', label: 'Avg Response Time',     icon: FaClock,    color: '#fb923c', desc: 'client support'      },
];

const testimonials = [
  {
    name:    'Michael Omondi',
    role:    'CEO, TechKenya',
    avatar:  'MO',
    color:   '#34d399',
    content: 'Phillip built a system that saved us 40+ hours a month. His automation expertise is unmatched — he delivered in half the expected timeline.',
    result:  '40hrs|+/month saved',
    rating:  5,
  },
  {
    name:    'Sarah Wanjiku',
    role:    'Founder, Rugs Kenya',
    avatar:  'SW',
    color:   '#f59e0b',
    content: 'After PhilDev redesigned and rebuilt our site, enquiries went up 220%. He understands conversion psychology at a deep level.',
    result:  '+10% to 20% enquiries',
    rating:  5,
  },
  {
    name:    'Nderitu Mwangi',
    role:    'CTO, Tech Startup',
    avatar:  'JM',
    color:   '#60a5fa',
    content: 'The POS integration he built is flawless. Real-time sync, zero errors across 5 branches. An absolute professional with elite-tier output.',
    result:  '3 branches synced',
    rating:  4,
  },
  {
    name:    'Linda Achieng',
    role:    'MD, Achieng Logistics',
    avatar:  'LA',
    color:   '#a78bfa',
    content: 'Our entire backend was rebuilt from scratch. New system processes more orders with zero downtime. Phillip is the real deal.',
    result:  '3X throughput',
    rating:  5,
  },
];

/* ── Animated counter hook ── */
const useCounter = (target, trigger) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start  = 0;
    const end   = target;
    const dur   = 1800;
    const step  = end / (dur / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target]);
  return val;
};

const StatCard = ({ stat, index, triggered }) => {
  const Icon = stat.icon;
  const val  = useCounter(stat.value, triggered);
  return (
    <motion.div
      className="stat-orb"
      initial={{ opacity: 0, y: 40 }}
      animate={triggered ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, type: 'spring' }}
    >
      {/* bg glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 50% 100%, ${stat.color}0a 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* icon ring */}
      <div style={{
        width: 48, height: 48, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${stat.color}15`,
        border: `1px solid ${stat.color}30`,
        marginBottom: 16,
        position: 'relative',
      }}>
        <Icon size={20} style={{ color: stat.color }} />
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: `1px solid ${stat.color}`,
          animation: 'radarPing 2s ease-out infinite',
        }} />
      </div>

      <span className="stat-number">{val}{stat.suffix}</span>
      <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, marginTop: 8, marginBottom: 4, textAlign: 'center' }}>
        {stat.label}
      </p>
      <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>
        {stat.desc}
      </p>
    </motion.div>
  );
};

const GOLD = {
  background: 'linear-gradient(90deg, #92400e, #fcd34d, #f59e0b, #fef9c3, #f59e0b, #fcd34d)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'goldShine 2.5s linear infinite',
};

const StatsTestimonials = () => {
  const [idx, setIdx]         = useState(0);
  const [triggered, setTriggered] = useState(false);
  const sectionRef            = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIdx(p => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx(p => (p + 1) % testimonials.length);
  const t    = testimonials[idx];

  return (
    <>
      <style>{STYLES}</style>

      <section ref={sectionRef} style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* subtle radial */}
        <div style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 800, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>

          {/* ── HEADING ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 72 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
              <div style={{ height: 1, width: 60, background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.5))' }} />
              <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(245,158,11,0.7)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                &gt;_ metrics.load()
              </span>
              <div style={{ height: 1, width: 60, background: 'linear-gradient(270deg, transparent, rgba(245,158,11,0.5))' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 16, color: '#fff' }}>
              Proven <span style={GOLD}>Results</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
              Numbers don't lie. Here's the impact delivered across real client projects.
            </p>
          </motion.div>

          {/* ── STATS GRID ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 16,
            marginBottom: 80,
          }}>
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} triggered={triggered} />
            ))}
          </div>

          {/* ── TESTIMONIALS ── */}
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h3 style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 8 }}>
                Client <span style={GOLD}>Voices</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, fontFamily: 'monospace' }}>
                Real people. Real results. Unfiltered.
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                {/* quote icon */}
                <FaQuoteLeft
                  style={{
                    position: 'absolute', top: 28, right: 32,
                    fontSize: 48, color: 'rgba(245,158,11,0.06)',
                    animation: 'quoteFloat 4s ease-in-out infinite',
                  }}
                />

                {/* top accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, transparent, ${t.color}, transparent)`,
                }} />

                {/* stars */}
                <div style={{ display: 'flex', gap: 4, marginBottom: 24 }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} style={{ color: '#f59e0b', fontSize: 14 }} />
                  ))}
                </div>

                {/* quote text */}
                <p style={{
                  fontSize: 19, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7,
                  marginBottom: 32, fontStyle: 'italic', position: 'relative', zIndex: 1,
                }}>
                  "{t.content}"
                </p>

                {/* result badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '6px 16px', borderRadius: 999,
                  background: `${t.color}18`,
                  border: `1px solid ${t.color}35`,
                  marginBottom: 24,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.color, display: 'inline-block' }} />
                  <span style={{ fontSize: 11, fontFamily: 'monospace', color: t.color, fontWeight: 700, letterSpacing: '0.08em' }}>
                    RESULT: {t.result}
                  </span>
                </div>

                {/* author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${t.color}40, ${t.color}20)`,
                    border: `2px solid ${t.color}50`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 14, color: t.color,
                    fontFamily: 'monospace',
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p style={{ fontWeight: 800, color: '#fff', fontSize: 15, margin: 0 }}>{t.name}</p>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, margin: 0, fontFamily: 'monospace' }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* nav controls */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, marginTop: 32 }}>
              <button
                onClick={prev}
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)'; e.currentTarget.style.color = '#fbbf24'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                <HiChevronLeft size={18} />
              </button>

              <div style={{ display: 'flex', gap: 8 }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    style={{
                      width: i === idx ? 24 : 8,
                      height: 8, borderRadius: 999,
                      background: i === idx ? '#f59e0b' : 'rgba(255,255,255,0.15)',
                      border: 'none', cursor: 'pointer',
                      transition: 'all 0.3s',
                      boxShadow: i === idx ? '0 0 12px rgba(245,158,11,0.6)' : 'none',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)'; e.currentTarget.style.color = '#fbbf24'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                <HiChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsTestimonials;