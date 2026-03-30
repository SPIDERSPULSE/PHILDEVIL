import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiNextdotjs, SiPuppeteer,
  SiPostgresql, SiMongodb,
} from 'react-icons/si';

const STYLES = `
  @keyframes goldShine {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
  @keyframes barShimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes skillFloat {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-6px); }
  }
  .skill-card {
    position: relative;
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 22px 18px;
    text-align: center;
    transition: all 0.35s cubic-bezier(0.23,1,0.32,1);
    cursor: default;
    overflow: hidden;
  }
  .skill-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, #92400e, #fcd34d, #f59e0b);
    background-size: 200% auto;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
    animation: none;
  }
  .skill-card:hover::after {
    transform: scaleX(1);
    animation: barShimmer 1.5s linear infinite;
  }
  .skill-card:hover {
    border-color: rgba(245,158,11,0.35);
    background: rgba(245,158,11,0.04);
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(245,158,11,0.08);
  }
  .skill-icon {
    transition: all 0.35s;
    display: block; margin: 0 auto 12px;
  }
  .skill-card:hover .skill-icon {
    transform: scale(1.2) rotate(-5deg);
    filter: drop-shadow(0 0 10px currentColor);
  }
  .progress-track {
    height: 3px;
    background: rgba(255,255,255,0.06);
    border-radius: 999px;
    overflow: hidden;
    margin-top: 10px;
  }
  .progress-fill {
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #92400e, #f59e0b, #fcd34d, #f59e0b);
    background-size: 200% auto;
    animation: barShimmer 2s linear infinite;
    transform-origin: left;
  }
`;

const skills = [
  { name: 'React',      icon: FaReact,      level: 95, color: '#61DAFB', link: '/expertise', cat: 'Frontend'  },
  { name: 'Next.js',    icon: SiNextdotjs,  level: 88, color: '#ffffff', link: '/expertise', cat: 'Frontend'  },
  { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6', link: '/expertise', cat: 'Language'  },
  { name: 'Node.js',    icon: FaNodeJs,     level: 90, color: '#68A063', link: '/expertise', cat: 'Backend'   },
  { name: 'Python',     icon: FaPython,     level: 85, color: '#3776AB', link: '/expertise', cat: 'Language'  },
  { name: 'Puppeteer',  icon: SiPuppeteer,  level: 92, color: '#40B5A4', link: '/automation', cat: 'Automation'},
  { name: 'Tailwind',   icon: SiTailwindcss,level: 93, color: '#06B6D4', link: '/expertise', cat: 'Styling'   },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 82, color: '#336791', link: '/expertise', cat: 'Database'  },
  { name: 'MongoDB',    icon: SiMongodb,    level: 80, color: '#47A248', link: '/expertise', cat: 'Database'  },
  { name: 'Docker',     icon: FaDocker,     level: 78, color: '#2496ED', link: '/expertise', cat: 'DevOps'    },
  { name: 'AWS',        icon: FaAws,        level: 75, color: '#FF9900', link: '/expertise', cat: 'Cloud'     },
  { name: 'Security',   icon: FaAws,        level: 88, color: '#EF4444', link: '/security',  cat: 'Security'  },
];

const CAT_COLORS = {
  Frontend: '#34d399', Language: '#a78bfa', Backend: '#68A063',
  Automation: '#40B5A4', Styling: '#06B6D4', Database: '#f59e0b',
  DevOps: '#2496ED', Cloud: '#FF9900', Security: '#EF4444',
};

const GOLD = {
  background: 'linear-gradient(90deg, #92400e, #fcd34d, #f59e0b, #fef9c3, #f59e0b, #fcd34d)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'goldShine 2.5s linear infinite',
};

const SkillsSection = () => (
  <>
    <style>{STYLES}</style>

    <section style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden', background: 'rgba(0,0,0,0.3)' }}>
      {/* hex bg pattern */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(245,158,11,0.04) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
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
              &gt;_ tech_stack.scan()
            </span>
            <div style={{ height: 1, width: 60, background: 'linear-gradient(270deg, transparent, rgba(245,158,11,0.5))' }} />
          </div>

          <h2 style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 16, color: '#fff' }}>
            Technical{' '}<span style={GOLD}>Mastery</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
            Battle-tested technologies powering enterprise-grade solutions across industries.
          </p>
        </motion.div>

        {/* ── SKILL CARDS ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: 16,
          marginBottom: 60,
        }}>
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const catColor = CAT_COLORS[skill.cat] || '#f59e0b';
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5, type: 'spring' }}
              >
                <Link to={skill.link} style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="skill-card">
                    {/* category badge */}
                    <span style={{
                      position: 'absolute', top: 10, right: 10,
                      fontSize: 8, fontFamily: 'monospace', fontWeight: 700,
                      padding: '2px 6px', borderRadius: 99,
                      background: `${catColor}18`, color: catColor,
                      border: `1px solid ${catColor}30`,
                      letterSpacing: '0.1em',
                    }}>
                      {skill.cat}
                    </span>

                    <Icon
                      className="skill-icon"
                      size={42}
                      style={{ color: skill.color }}
                    />

                    <h3 style={{ fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 4 }}>
                      {skill.name}
                    </h3>

                    <div className="progress-track">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.04, duration: 1, ease: 'easeOut' }}
                      />
                    </div>

                    <p style={{ fontSize: 11, fontFamily: 'monospace', color: catColor, marginTop: 6, fontWeight: 700 }}>
                      {skill.level}%
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── BOTTOM STRIP: expertise highlight ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
            gap: 24, padding: '32px 40px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(245,158,11,0.12)',
            borderRadius: 20,
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* top accent */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 2,
            background: 'linear-gradient(90deg, transparent, #f59e0b, #fcd34d, #f59e0b, transparent)',
          }} />

          {[
            { label: 'Tech Stack',   val: '25+' },
            { label: 'Frameworks',   val: '12+' },
            { label: 'APIs Built',   val: '40+' },
            { label: 'DB Systems',   val: '5+'  },
            { label: 'Cloud Platf.', val: '3+'  },
          ].map(({ label, val }) => (
            <div key={label} style={{ textAlign: 'center', padding: '0 20px' }}>
              <p style={{ ...GOLD, fontSize: 28, fontWeight: 900, margin: 0, lineHeight: 1 }}>{val}</p>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
                {label}
              </p>
            </div>
          ))}

          <Link
            to="/expertise"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: 12,
              background: 'rgba(245,158,11,0.1)',
              border: '1px solid rgba(245,158,11,0.3)',
              color: '#fbbf24', fontWeight: 700, fontSize: 13,
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            Full Tech Stack <FaArrowRight size={11} />
          </Link>
        </motion.div>
      </div>
    </section>
  </>
);

export default SkillsSection;