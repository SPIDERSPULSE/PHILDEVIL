import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 95, color: '#61DAFB' },
  { name: 'Node.js', level: 88, color: '#68A063' },
  { name: 'Python', level: 85, color: '#3776AB' },
  { name: 'TypeScript', level: 82, color: '#3178C6' },
  { name: 'Puppeteer', level: 92, color: '#40B5A4' },
  { name: 'Tailwind', level: 90, color: '#06B6D4' },
  { name: 'Next.js', level: 85, color: '#000000' },
  { name: 'AWS', level: 78, color: '#FF9900' },
  { name: 'Docker', level: 75, color: '#2496ED' },
  { name: 'PostgreSQL', level: 80, color: '#336791' },
  { name: 'MongoDB', level: 82, color: '#47A248' },
  { name: 'GraphQL', level: 78, color: '#E10098' },
];

const SkillBubbles = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.05, type: 'spring' }}
          whileHover={{ scale: 1.1 }}
          className="relative cursor-pointer group"
        >
          <div
            className="w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center shadow-lg transition-all"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${skill.color}20, ${skill.color}05)`,
              border: `1px solid ${skill.color}40`,
            }}
          >
            <span className="text-sm font-semibold text-white text-center px-2">{skill.name}</span>
            <span className="text-xs text-emerald-400 mt-1">{skill.level}%</span>
          </div>
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
               style={{ boxShadow: `0 0 20px ${skill.color}` }} />
        </motion.div>
      ))}
    </div>
  );
};

export default SkillBubbles;