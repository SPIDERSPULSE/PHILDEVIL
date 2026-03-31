import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaDownload, FaMapMarkerAlt, FaCalendarAlt, FaCode, 
  FaUsers, FaChartLine, FaGlobe, FaRocket, 
  FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope
} from 'react-icons/fa';

const AboutPage = () => {
  // Current work
  const currentWork = {
    role: 'Mid-Senior Full-Stack Developer',
    company: 'Emposola LLC',
    location: 'Nairobi, Kenya',
    since: '2023',
    type: 'Remote',
    description: 'Leading development, automation, and technical strategy for digital platforms.'
  };

  // Education
  const education = {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Jomo Kenyatta University of Agriculture And Technology',
    period: '2020 - 2024',
    achievements: ['First Class Honors', 'Deans List 2023', 'Best Final Year Project']
  };

  // Future plans
  const futurePlans = [
    { title: 'Launch Automation SaaS', desc: 'Building a no-code automation platform for businesses', timeline: 'Q3 2026' },
    { title: 'Open Source Contributions', desc: 'Contributing to Puppeteer and React ecosystem', timeline: 'Ongoing' },
    { title: 'Tech Community Building', desc: 'Starting Nairobi Developer Meetup', timeline: '2026' },
    { title: 'Security Research', desc: 'Publishing web security findings and tools', timeline: '2026' }
  ];

  // Expertise
  const expertise = [
    { title: 'Full-Stack Development', level: 'Expert', items: ['React/Next.js', 'Node.js/Python', 'TypeScript', 'GraphQL'] },
    { title: 'Automation Engineering', level: 'Expert', items: ['Puppeteer', 'Web Scraping', 'Workflow Automation', 'Site Cloning'] },
    { title: 'Security and Pentesting', level: 'Advanced', items: ['OWASP Audit', 'Vulnerability Assessment', 'System Hardening'] },
    { title: 'Fintech Solutions', level: 'Advanced', items: ['POS Integration', 'Payment Gateways', 'Financial Dashboards'] }
  ];

  // Hobbies
  const hobbies = [
    { name: 'Reading', desc: 'Tech blogs, sci-fi' },
    { name: 'Music', desc: 'Jazz, lo-fi' },
    { name: 'Photography', desc: 'Street photography' },
    { name: 'Coffee', desc: 'Home brewing' },
    { name: 'Learning', desc: 'AI/ML, Web3' },
    { name: 'Open Source', desc: 'Community contributions' }
  ];

  // Traits
  const traits = ['Detail-Oriented', 'Problem Solver', 'Continuous Learner', 'Team Player', 'Mentor Mindset', 'Innovation-Driven'];

  // Stats
  const stats = [
    { value: '4+', label: 'Years Experience', icon: FaCalendarAlt },
    { value: '73+', label: 'Projects Completed', icon: FaCode },
    { value: '58+', label: 'Happy Clients', icon: FaUsers },
    { value: '96%', label: 'Success Rate', icon: FaChartLine },
    { value: '12+', label: 'Countries', icon: FaGlobe },
    { value: '35+', label: 'Tech Stack', icon: FaRocket }
  ];

  // Achievements
  const achievements = [
    { title: 'Full-Stack Development', issuer: 'FreeCodeCamp', year: '2022' },
    { title: 'Security Plus Certification', issuer: 'CompTIA', year: '2023' },
    { title: 'AWS Cloud Practitioner', issuer: 'AWS', year: '2023' },
    { title: 'Top Contributor', issuer: 'GitHub', year: '2024' }
  ];

  // Targets
  const targets = [
    { target: 'Lead Developer', status: 'In Progress', progress: 75 },
    { target: 'Security Expert', status: 'In Progress', progress: 60 },
    { target: 'SaaS Launch', status: 'Planning', progress: 30 },
    { target: 'Tech Speaker', status: 'Goal', progress: 25 }
  ];

  return (
    <div className="py-20 px-6 min-h-screen bg-black">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section 1: Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs text-amber-400 font-mono">about_me</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">Phillip Kerher</span>
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Nairobi-based technical strategist, full-stack developer, and automation engineer.
            4+ years of engineering excellence across 15+ industries.
          </p>
        </div>
        
        {/* Section 2: Profile Card */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center mb-4 border-2 border-amber-500/30 overflow-hidden">
                <img 
                  src="/me.png" 
                  alt="Phillip Kerher" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://ui-avatars.com/api/?background=10B981&color=fff&size=128&name=PK';
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-white">Phillip Kerher</h3>
              <p className="text-amber-400 text-sm mb-2">{currentWork.role}</p>
              <div className="flex items-center justify-center gap-2 text-white/40 text-sm mb-4">
                <FaMapMarkerAlt className="text-amber-400 text-xs" />
                <span>{currentWork.location}</span>
              </div>
              <div className="flex justify-center gap-3 mb-4">
                <a href="https://github.com/spiderspulse" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <FaGithub className="text-white/70 text-xl" />
                </a>
                <a href="https://linkedin.com/in/phildev" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <FaLinkedin className="text-white/70 text-xl" />
                </a>
                <a href="https://twitter.com/phildev" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <FaTwitter className="text-white/70 text-xl" />
                </a>
                <a href="https://wa.me/254798436384" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <FaWhatsapp className="text-white/70 text-xl" />
                </a>
              </div>
              <a 
                href="/resume.pdf"
                download
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl font-semibold hover:scale-105 transition-all"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                I am Phillip — the mind behind PhilDev. I design and develop complete digital ecosystems that convert, automate, and dominate markets.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Currently working remotely as a Mid-Senior Full-Stack Developer at Emposola LLC, handling development, automation, and technical strategy. Based in Nairobi, Kenya, I serve clients globally with focus on quality and efficiency.
              </p>
              <p className="text-white/70 leading-relaxed">
                My approach is simple: analyze first, then build. Whether cloning a website, integrating a POS system, or auditing security, I start by understanding what exists and what is missing.
              </p>
            </div>
          </div>
        </div>
        
        {/* Section 3: Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-500/30 transition">
                <Icon className="text-amber-400 text-2xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Section 4: Technical Expertise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((exp) => (
              <div key={exp.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition">
                <div className="text-amber-400 text-3xl mb-3">⚙️</div>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-amber-400 text-xs mb-3">{exp.level}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.items.map(item => (
                    <span key={item} className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/60">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Section 5: Current Work & Education */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Current Work</h2>
            <p className="text-amber-400 font-semibold">{currentWork.role}</p>
            <p className="text-white/80">{currentWork.company}</p>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-white/50">
              <span>📍 {currentWork.location}</span>
              <span>📅 Since {currentWork.since}</span>
              <span>💻 {currentWork.type}</span>
            </div>
            <p className="text-white/60 text-sm mt-3">{currentWork.description}</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <p className="text-amber-400 font-semibold">{education.degree}</p>
            <p className="text-white/80">{education.institution}</p>
            <p className="text-white/50 text-sm mt-1">📅 {education.period}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.achievements.map(ach => (
                <span key={ach} className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/60">{ach}</span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Section 6: Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Achievements and Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((ach) => (
              <div key={ach.title} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-amber-500/30 transition">
                <div className="text-amber-400 text-2xl mx-auto mb-2">🏆</div>
                <h3 className="font-semibold text-sm">{ach.title}</h3>
                <p className="text-white/40 text-xs">{ach.issuer} • {ach.year}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Section 7: Future Plans and Targets */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Future Plans</h2>
            {futurePlans.map(plan => (
              <div key={plan.title} className="border-l-2 border-amber-500 pl-4 mb-4">
                <h3 className="font-semibold">{plan.title}</h3>
                <p className="text-white/50 text-sm">{plan.desc}</p>
                <span className="text-amber-400 text-xs">{plan.timeline}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Professional Targets</h2>
            {targets.map(target => (
              <div key={target.target} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/80">{target.target}</span>
                  <span className="text-amber-400">{target.status}</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full" style={{ width: `${target.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Section 8: Traits and Hobbies */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Traits and Values</h2>
            <div className="flex flex-wrap gap-3">
              {traits.map(trait => (
                <div key={trait} className="px-3 py-2 bg-white/10 rounded-full text-sm text-white/80">
                  {trait}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Beyond Code</h2>
            <div className="grid grid-cols-2 gap-3">
              {hobbies.map(hobby => (
                <div key={hobby.name} className="p-2 bg-white/5 rounded-xl">
                  <p className="text-sm font-medium text-white">{hobby.name}</p>
                  <p className="text-[10px] text-white/40">{hobby.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Section 9: CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-emerald-950/30 to-amber-950/30 rounded-2xl border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Create Something Extraordinary</h2>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            Whether you have a project or just want to connect, I am always open to new opportunities.
            Currently available for consulting and full-time opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl font-semibold hover:scale-105 transition-all">
              Get in Touch
            </Link>
            <a href="https://wa.me/254798436384" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all">
              WhatsApp
            </a>
            <a href="mailto:node.netwalker@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all">
              Email
            </a>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-white/40">
            <span>📍 Nairobi, Kenya</span>
            <span>🌍 Available Worldwide</span>
            <span>⚡ Response within 4 hours</span>
          </div>
        </div>
        
        {/* Resume Note */}
        <div className="text-center mt-6">
          <p className="text-white/30 text-xs">
            Resume available for download. Detailed portfolio and case studies available upon request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
