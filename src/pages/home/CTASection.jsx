import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCrown, FaRocket, FaShieldAlt, FaCode } from 'react-icons/fa';
import { HiLightningBolt, HiClock, HiCheckCircle } from 'react-icons/hi';

const STYLES = `
  @keyframes goldShine {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
  @keyframes borderPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); }
    50%      { box-shadow: 0 0 0 8px rgba(245,158,11,0.08); }
  }
  @keyframes radarPing {
    0%   { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(3); opacity: 0; }
  }
  @keyframes orbFloat {
    0%,100% { transform: translate(0,0) scale(1); }
    33%  { transform: translate(30px,-20px) scale(1.05); }
    66%  { transform: translate(-20px,15px) scale(0.97); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes countdownFlash {
    0%,100% { color: #fbbf24; }
    50%      { color: #fef9c3; text-shadow: 0 0 20px rgba(245,158,11,0.8); }
  }

  .cta-btn-primary {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 18px 44px;
    border-radius: 14px;
    font-weight: 900;
    font-size: 16px;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: #000;
    background: linear-gradient(135deg, #f59e0b, #fcd34d, #f59e0b);
    background-size: 200% auto;
    animation: shimmer 2s linear infinite;
    box-shadow: 0 0 40px rgba(245,158,11,0.45), 0 12px 40px rgba(0,0,0,0.5);
    transition: all 0.3s;
    overflow: hidden;
  }
  .cta-btn-primary:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 0 60px rgba(245,158,11,0.6), 0 20px 50px rgba(0,0,0,0.6);
  }
  .cta-btn-primary::after {
    content: '';
    position: absolute;
    top: -50%; left: -50%;
    width: 200%; height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 50%);
    transform: scale(0);
    transition: transform 0.5s;
  }
  .cta-btn-primary:hover::after { transform: scale(1); }

  .guarantee-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 11px;
    font-family: monospace;
    font-weight: 700;
    transition: all 0.25s;
  }
  .slot-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border-radius: 10px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    font-size: 13px;
    color: rgba(255,255,255,0.65);
    transition: all 0.25s;
  }
  .slot-item:hover {
    border-color: rgba(245,158,11,0.2);
    color: rgba(255,255,255,0.85);
  }
`;

/* Countdown to end of quarter */
const getQuarterEnd = () => {
  const now = new Date();
  const month = now.getMonth();
  const quarterEndMonth = Math.floor(month / 3) * 3 + 2;
  return new Date(now.getFullYear(), quarterEndMonth + 1, 0, 23, 59, 59);
};

const useCountdown = () => {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const update = () => {
      const diff = getQuarterEnd() - new Date();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);
  return time;
};

const TimeUnit = ({ val, label }) => (
  <div style={{ textAlign: 'center', minWidth: 56 }}>
    <span style={{
      display: 'block',
      fontSize: 36, fontWeight: 900, lineHeight: 1,
      background: 'linear-gradient(90deg, #92400e, #fcd34d, #f59e0b, #fef9c3, #f59e0b, #fcd34d)',
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      animation: 'goldShine 2s linear infinite',
      fontFamily: 'monospace',
    }}>
      {String(val).padStart(2, '0')}
    </span>
    <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
      {label}
    </span>
  </div>
);

const GOLD = {
  background: 'linear-gradient(90deg, #92400e, #fcd34d, #f59e0b, #fef9c3, #f59e0b, #fcd34d)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'goldShine 2.5s linear infinite',
};

const guarantees = [
  { icon: HiCheckCircle, text: 'No BS. Direct communication only.',  color: '#34d399' },
  { icon: HiCheckCircle, text: 'Clean code. Full documentation.',      color: '#34d399' },
  { icon: HiCheckCircle, text: '30-day post-launch support included.', color: '#34d399' },
  { icon: HiCheckCircle, text: 'On-time delivery or refund.',          color: '#34d399' },
];

const CTASection = () => {
  const time = useCountdown();

  return (
    <>
      <style>{STYLES}</style>

      <section style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden', background: '#000' }}>
        {/* aurora orbs */}
        <div style={{
          position: 'absolute', top: '-20%', left: '-10%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
          animation: 'orbFloat 14s ease-in-out infinite',
          pointerEvents: 'none', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', right: '-10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,78,59,0.1) 0%, transparent 70%)',
          animation: 'orbFloat 18s ease-in-out 5s infinite',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(245,158,11,0.03) 1px,transparent 1px), linear-gradient(90deg,rgba(245,158,11,0.03) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>

          {/* crown badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.6 }}
            style={{ marginBottom: 28 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 20px', borderRadius: 999,
              background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(252,211,77,0.08))',
              border: '1px solid rgba(245,158,11,0.35)',
              fontSize: 12, fontWeight: 800, color: '#fbbf24',
              fontFamily: 'monospace', letterSpacing: '0.1em',
            }}>
              <FaCrown size={12} style={{ color: '#f59e0b' }} />
              LIMITED AVAILABILITY · Q2 2026
            </span>
          </motion.div>

          {/* headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(40px, 7vw, 84px)', fontWeight: 900, lineHeight: 1.0, marginBottom: 24, color: '#fff' }}
          >
            Ready to{' '}
            <span style={GOLD}>Dominate</span>
            <br />Your Market?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 48px' }}
          >
            Stop settling for systems that barely function. Let's build something that{' '}
            <span style={{ color: '#fbbf24', fontWeight: 700 }}>scales, converts, and outperforms</span>{' '}
            every competitor in your space.
          </motion.p>

          {/* ── COUNTDOWN ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
              padding: '28px 40px', borderRadius: 20,
              background: 'rgba(245,158,11,0.04)',
              border: '1px solid rgba(245,158,11,0.2)',
              marginBottom: 48, animation: 'borderPulse 3s ease-in-out infinite',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <HiClock style={{ color: '#f59e0b', fontSize: 14 }} />
              <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(245,158,11,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Q2 spots close in
              </span>
            </div>
            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              <TimeUnit val={time.d} label="Days"    />
              <span style={{ color: '#f59e0b', fontSize: 24, fontWeight: 900, fontFamily: 'monospace', marginBottom: 14 }}>:</span>
              <TimeUnit val={time.h} label="Hours"   />
              <span style={{ color: '#f59e0b', fontSize: 24, fontWeight: 900, fontFamily: 'monospace', marginBottom: 14 }}>:</span>
              <TimeUnit val={time.m} label="Minutes" />
              <span style={{ color: '#f59e0b', fontSize: 24, fontWeight: 900, fontFamily: 'monospace', marginBottom: 14 }}>:</span>
              <TimeUnit val={time.s} label="Seconds" />
            </div>
          </motion.div>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 48 }}
          >
            <Link to="/contact" className="cta-btn-primary">
              <FaRocket />
              Start My Project
              <FaArrowRight size={13} />
            </Link>

            <Link to="/pricing" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '18px 44px', borderRadius: 14,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.75)', fontWeight: 700, fontSize: 15,
              textDecoration: 'none', transition: 'all 0.3s',
            }}>
              View Pricing
            </Link>
          </motion.div>

          {/* ── SLOT INDICATORS ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 48 }}
          >
            {[
              { label: 'Slot 1',  taken: true  },
              { label: 'Slot 2',  taken: true  },
              { label: 'Slot 3',  taken: true  },
              { label: 'Slot 4',  taken: false },
              { label: 'Slot 5',  taken: false },
            ].map(({ label, taken }) => (
              <div
                key={label}
                className="slot-item"
                style={taken
                  ? { borderColor: 'rgba(239,68,68,0.25)', color: 'rgba(239,68,68,0.5)' }
                  : { borderColor: 'rgba(34,197,94,0.3)', color: '#4ade80' }
                }
              >
                <span style={{
                  width: 8, height: 8, borderRadius: '50%', display: 'inline-block',
                  background: taken ? '#ef4444' : '#22c55e',
                  boxShadow: taken ? 'none' : '0 0 8px rgba(34,197,94,0.6)',
                }} />
                {label} · {taken ? 'TAKEN' : 'OPEN'}
              </div>
            ))}
          </motion.div>

          {/* ── GUARANTEES ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 12, maxWidth: 700, margin: '0 auto',
            }}
          >
            {guarantees.map(({ icon: Icon, text, color }) => (
              <div
                key={text}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 14px', borderRadius: 10,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(34,197,94,0.12)',
                  fontSize: 12, color: 'rgba(255,255,255,0.55)', textAlign: 'left',
                }}
              >
                <Icon style={{ color, flexShrink: 0 }} />
                {text}
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default CTASection;