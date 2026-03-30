import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaShieldAlt, FaRobot, FaChartLine, 
  FaDatabase, FaCloud, FaMobile, FaServer, FaCode, FaBrain, FaRocket, 
  FaArrowRight, FaCheckCircle, FaAward, FaTrophy, FaStar, FaCrown
} from 'react-icons/fa';
import { 
  SiPuppeteer, SiTailwindcss, SiTypescript, SiNextdotjs, SiPostgresql, 
  SiMongodb, SiGraphql, SiRedis, SiFirebase, SiKubernetes, SiTerraform
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    level: 95,
    years: 4,
    color: 'emerald',
    description: 'Building responsive, interactive UIs with modern frameworks'
  },
  {
    title: 'Backend Development',
    icon: FaNodeJs,
    skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'],
    level: 88,
    years: 3,
    color: 'tech-blue',
    description: 'Scalable APIs, microservices, and server-side logic'
  },
  {
    title: 'Automation & Cloning',
    icon: SiPuppeteer,
    skills: ['Puppeteer', 'Playwright', 'Web Scraping', 'Site Cloning', 'Workflow Automation'],
    level: 92,
    years: 3,
    color: 'emerald',
    description: 'Custom automation frameworks saving 5000+ hours'
  },
  {
    title: 'Security & Pentesting',
    icon: FaShieldAlt,
    skills: ['OWASP', 'Burp Suite', 'Vulnerability Assessment', 'System Hardening'],
    level: 85,
    years: 2,
    color: 'alert-red',
    description: 'Security-first development, 100+ vulnerabilities fixed'
  },
  {
    title: 'Fintech Integration',
    icon: FaChartLine,
    skills: ['POS Systems', 'Payment Gateways', 'API Integration', 'Financial Dashboards'],
    level: 87,
    years: 3,
    color: 'gold',
    description: 'Real-time financial systems, POS integration specialist'
  },
  {
    title: 'Database Architecture',
    icon: FaDatabase,
    skills: ['PostgreSQL', 'MongoDB', 'Prisma', 'Sequelize', 'Redis'],
    level: 82,
    years: 3,
    color: 'tech-blue',
    description: 'Optimized queries, data modeling, and scalability'
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    level: 78,
    years: 2,
    color: 'emerald',
    description: 'Cloud infrastructure, containerization, and deployment'
  }
];

const certifications = [
  { name: 'Full-Stack Development', issuer: 'FreeCodeCamp', year: '2022', icon: FaAward },
  { name: 'Security+ Certification', issuer: 'CompTIA', year: '2023', icon: FaShieldAlt },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2023', icon: FaCloud },
  { name: 'React Mastery', issuer: 'Meta', year: '2024', icon: FaReact },
  { name: 'Python Advanced', issuer: 'University of Michigan', year: '2023', icon: FaPython },
  { name: 'Node.js Expert', issuer: 'OpenJS Foundation', year: '2024', icon: FaNodeJs }
];

const expertiseMetrics = [
  { value: '4+', label: 'Years Experience', icon: FaCode, color: 'emerald' },
  { value: '35+', label: 'Technologies', icon: FaBrain, color: 'tech-blue' },
  { value: '73+', label: 'Projects', icon: FaRocket, color: 'gold' },
  { value: '100%', label: 'Client Satisfaction', icon: FaStar, color: 'alert-red' }
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Puppeteer', 
  'Tailwind', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GraphQL',
  'Redis', 'FastAPI', 'Playwright', 'Prisma', 'Express', 'TensorFlow'
];

const futureLearning = [
  { name: 'Machine Learning', progress: 45, icon: FaBrain },
  { name: 'Rust Programming', progress: 30, icon: FaCode },
  { name: 'Web3 & Blockchain', progress: 55, icon: FaChartLine }
];

const ExpertisePage = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section 1: Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-full border border-emerald-500/50 mb-4">
            <span className="text-emerald-400 text-sm font-mono animate-pulse">{`>_ technical_mastery`}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Engineering <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">Excellence</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            4+ years mastering the tools that power modern digital systems. Every skill battle-tested in production across 73+ projects.
          </p>
        </motion.div>

        {/* Section 2: Expertise Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {expertiseMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="text-center p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-500/30 transition">
                <Icon className={`text-${metric.color}-400 text-3xl mx-auto mb-3`} />
                <div className={`text-3xl md:text-4xl font-bold text-${metric.color}-400`}>{metric.value}</div>
                <div className="text-xs text-white/40 mt-1">{metric.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Section 3: Skill Categories Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Core <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Competencies</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colorClasses = {
                emerald: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30',
                'tech-blue': 'text-tech-blue bg-tech-blue/20 border-tech-blue/30',
                'alert-red': 'text-alert-red bg-alert-red/20 border-alert-red/30',
                gold: 'text-gold-500 bg-gold-500/20 border-gold-500/30',
              };
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-black/30 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-xl ${colorClasses[category.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                    <IconComponent className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/40 text-sm mb-2">{category.years} years experience</p>
                  <p className="text-white/50 text-xs mb-3">{category.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Proficiency</span>
                      <span className="text-emerald-400">{category.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" 
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, 4).map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 rounded-md text-xs text-white/60 hover:text-emerald-400 transition">
                        {skill}
                      </span>
                    ))}
                    {category.skills.length > 4 && (
                      <span className="px-2 py-1 bg-white/5 rounded-md text-xs text-white/40">
                        +{category.skills.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Section 4: Full Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-gradient-to-r from-emerald-950/20 to-amber-950/20 rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Complete Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.02 }}
                className="px-4 py-2 bg-white/5 rounded-full text-sm text-white/70 border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-4">
            35+ technologies mastered • Constantly evolving with new tools
          </p>
        </motion.div>

        {/* Section 5: Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-amber-500/30 transition"
                >
                  <Icon className="text-amber-400 text-3xl mx-auto mb-3" />
                  <h3 className="font-semibold text-white">{cert.name}</h3>
                  <p className="text-white/40 text-xs mt-1">{cert.issuer} • {cert.year}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Section 6: The PhilDev Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-gradient-to-r from-emerald-500/10 to-gold-500/10 rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-center mb-6">The PhilDev Framework</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: 1, title: 'Analyze', desc: 'Deep dive into existing systems' },
              { step: 2, title: 'Reverse Engineer', desc: 'Deconstruct without assumptions' },
              { step: 3, title: 'Build & Secure', desc: 'Security-first development' },
              { step: 4, title: 'Optimize & Scale', desc: 'Prepare for massive growth' }
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition shadow-lg shadow-emerald-500/25">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-white/40 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-xs mt-6 font-mono">
            "Test everything. Accuracy over assumptions. Efficiency over shortcuts. Function first — always conversion-focused."
          </p>
        </motion.div>

        {/* Section 7: Future Learning & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 bg-gradient-to-r from-emerald-950/30 to-amber-950/30 rounded-2xl border border-white/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Always Evolving</h2>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            Technology never stands still — neither do I. Currently expanding expertise in:
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {futureLearning.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="text-center min-w-[120px]">
                  <Icon className="text-amber-400 text-2xl mx-auto mb-2" />
                  <p className="text-white/80 text-sm font-medium">{item.name}</p>
                  <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full"
                    />
                  </div>
                  <p className="text-white/40 text-xs mt-1">{item.progress}%</p>
                </div>
              );
            })}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-amber-500/25"
          >
            Let's Build Together <FaArrowRight />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default ExpertisePage;