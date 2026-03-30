import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { HiCode, HiChip, HiLightningBolt } from 'react-icons/hi';
import { PROJECTS } from '../../data/projects';

const STYLES = `
  @keyframes goldShine {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
  .proj-card {
    position: relative;
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
    height: 100%;
    display: flex; flex-direction: column;
  }
  .proj-card:hover {
    border-color: rgba(245,158,11,0.35);
    transform: translateY(-10px);
    box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(245,158,11,0.08);
  }
  .proj-card .corner-accent {
    position: absolute; top: 0; left: 0;
    width: 60px; height: 60px;
    background: linear-gradient(135deg, rgba(245,158,11,0.15), transparent);
    clip-path: polygon(0 0, 100% 0, 0 100%);
    transition: all 0.3s;
  }
  .proj-card:hover .corner-accent {
    background: linear-gradient(135deg, rgba(245,158,11,0.35), transparent);
  }
  .tech-pill {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 10px;
    font-family: monospace;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.45);
    transition: all 0.25s;
  }
  .proj-card:hover .tech-pill {
    background: rgba(245,158,11,0.06);
    border-color: rgba(245,158,11,0.2);
    color: rgba(245,158,11,0.8);
  }
`;

const GOLD = {
  background: 'linear-gradient(90deg, #92400e, #fcd34d, #f59e0b, #fef9c3, #f59e0b, #fcd34d)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'goldShine 2.5s linear infinite',
};

/* Category colors */
const CAT_META = {
  Automation: { color: '#60a5fa', icon: HiLightningBolt },
  Security:   { color: '#f87171', icon: HiChip          },
  Fintech:    { color: '#fbbf24', icon: HiCode          },
  Web:        { color: '#34d399', icon: HiCode          },
  default:    { color: '#a78bfa', icon: HiCode          },
};

const ProjectsSection = () => {
  const featured = PROJECTS.slice(0, 3);

  return (
    <>
      <style>{STYLES}</style>

      <section style={{
        padding: '100px 24px', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, transparent, rgba(245,158,11,0.02), transparent)',
      }}>
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
                &gt;_ portfolio.featured()
              </span>
              <div style={{ height: 1, width: 60, background: 'linear-gradient(270deg, transparent, rgba(245,158,11,0.5))' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 16, color: '#fff' }}>
              Featured{' '}<span style={GOLD}>Projects</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
              Real systems. Real clients. Measurable impact that speaks for itself.
            </p>
          </motion.div>

          {/* ── PROJECT CARDS ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 56 }}>
            {featured.map((project, i) => {
              const catMeta = CAT_META[project.category] || CAT_META.default;
              const CatIcon = catMeta.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, type: 'spring' }}
                >
                  <div className="proj-card">
                    <div className="corner-accent" />

                    {/* top accent line */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                      background: `linear-gradient(90deg, transparent, ${catMeta.color}80, transparent)`,
                    }} />

                    <div style={{ padding: '28px 28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* category badge */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          padding: '4px 12px', borderRadius: 999,
                          background: `${catMeta.color}18`,
                          border: `1px solid ${catMeta.color}35`,
                          fontSize: 10, fontFamily: 'monospace', fontWeight: 800,
                          color: catMeta.color, letterSpacing: '0.1em',
                        }}>
                          <CatIcon size={10} />
                          {project.category?.toUpperCase() || 'PROJECT'}
                        </span>
                        <FaExternalLinkAlt size={12} style={{ color: 'rgba(255,255,255,0.2)' }} />
                      </div>

                      <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>
                        {project.title}
                      </h3>

                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
                        {project.description}
                      </p>

                      {/* result */}
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '8px 14px', borderRadius: 10,
                        background: `${catMeta.color}0f`,
                        border: `1px solid ${catMeta.color}25`,
                        marginBottom: 20,
                      }}>
                        <HiLightningBolt style={{ color: catMeta.color, fontSize: 12 }} />
                        <span style={{ fontFamily: 'monospace', fontSize: 12, color: catMeta.color, fontWeight: 700 }}>
                          {project.result}
                        </span>
                      </div>

                      {/* tech tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                        {project.tech?.slice(0, 4).map(tech => (
                          <span key={tech} className="tech-pill">{tech}</span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        to="/work"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          fontSize: 13, fontWeight: 700, fontFamily: 'monospace',
                          color: catMeta.color, textDecoration: 'none',
                          transition: 'gap 0.2s',
                        }}
                      >
                        View Case Study <FaArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── VIEW ALL ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <Link
              to="/work"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 36px', borderRadius: 12,
                background: 'rgba(245,158,11,0.08)',
                border: '1px solid rgba(245,158,11,0.3)',
                color: '#fbbf24', fontWeight: 700, fontSize: 14,
                textDecoration: 'none', transition: 'all 0.3s',
              }}
            >
              <HiCode />
              View All 50+ Projects
              <FaArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;