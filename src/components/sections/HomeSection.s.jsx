import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaCode, FaRocket, FaShieldAlt, FaRobot, FaChartLine, FaUsers, FaGlobe, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SkillBubbles from '../ui/SkillBubbles';

// Section 1: Hero (with 3D Sphere already integrated)
export const HeroSection = ({ videoSrc }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Systems Architect',
    'Automation Engineer',
    'Security Strategist',
    'Fintech Specialist',
    'Full-Stack Developer'
  ];
  
  useEffect(() => {
    const currentText = roles[textIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % roles.length);
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src={videoSrc || "https://assets.mixkit.co/videos/preview/mixkit-digital-technology-animation-1261-large.mp4"} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Phillip Kerher
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="h-16 mb-6"
        >
          <p className="text-xl md:text-2xl text-white/80">
            <span className="text-emerald-400">&gt; </span>
            {displayText}
            <span className="animate-pulse">_</span>
          </p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8"
        >
          I don't just build websites — I engineer complete digital ecosystems that convert, automate, and dominate.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            to="/contact"
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg shadow-emerald-500/25"
          >
            Start Project →
          </Link>
          <Link
            to="/work"
            className="px-8 py-3 border border-emerald-500/50 rounded-lg text-emerald-400 hover:bg-emerald-500/10 transition-all"
          >
            View Portfolio
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-8"
        >
          <div className="text-center"><div className="text-2xl md:text-3xl font-bold text-emerald-400">4+</div><div className="text-xs text-white/40">Years Experience</div></div>
          <div className="text-center"><div className="text-2xl md:text-3xl font-bold text-emerald-400">50+</div><div className="text-xs text-white/40">Projects</div></div>
          <div className="text-center"><div className="text-2xl md:text-3xl font-bold text-emerald-400">98%</div><div className="text-xs text-white/40">Success Rate</div></div>
          <div className="text-center"><div className="text-2xl md:text-3xl font-bold text-emerald-400">12+</div><div className="text-xs text-white/40">Countries</div></div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 2: Skills Showcase with Bubbles
export const SkillsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);
  
  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Mastery</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Battle-tested technologies. Production-ready skills.
          </p>
        </motion.div>
        
        <SkillBubbles />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{ visible: { opacity: 1 } }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
            {['Full-Stack', 'Automation', 'Security', 'Fintech', 'Cloud', 'DevOps'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white/5 rounded-full text-sm text-white/60 border border-white/10 hover:border-emerald-500/50 transition">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 3: Services/Expertise Cards
export const ServicesSection = () => {
  const services = [
    { icon: FaCode, title: 'Full-Stack Dev', desc: 'React, Next.js, Node.js, Python', color: 'emerald', gradient: 'from-emerald-500 to-emerald-600' },
    { icon: FaRobot, title: 'Automation', desc: 'Web scraping, cloning, workflow automation', color: 'tech-blue', gradient: 'from-tech-blue to-cyan-500' },
    { icon: FaShieldAlt, title: 'Security', desc: 'OWASP audits, pentesting, hardening', color: 'alert-red', gradient: 'from-alert-red to-red-600' },
    { icon: FaChartLine, title: 'Fintech', desc: 'POS integration, payment gateways', color: 'gold', gradient: 'from-gold-500 to-orange-500' },
  ];
  
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);
  
  return (
    <section ref={ref} className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Core <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Specialized domains where I deliver exceptional results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <IconComponent className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/50 text-sm">{service.desc}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition">
                  <Link to={`/${service.title.toLowerCase().replace(' ', '-')}`} className="text-emerald-400 text-sm flex items-center gap-1">
                    Learn More <FaArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Section 4: Featured Projects
export const FeaturedProjectsSection = () => {
  const projects = [
    { title: 'Website Cloning System', result: '98% accuracy, 70% cost reduction', tech: ['Puppeteer', 'Node.js'], color: 'emerald' },
    { title: 'POS + Website Integration', result: '100% accuracy, 40% admin time saved', tech: ['Node.js', 'API'], color: 'emerald' },
    { title: 'High-Conversion Design', result: '220% enquiry increase', tech: ['React', 'Framer'], color: 'gold' },
  ];
  
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);
  
  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-black to-emerald-950/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Real systems that deliver measurable results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0 } }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-black/30 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-emerald-400 text-sm mb-3">{project.result}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-white/5 rounded-md text-xs text-white/50">{tech}</span>
                ))}
              </div>
              <Link to="/work" className="mt-4 inline-block text-emerald-400 text-sm hover:gap-2 transition-all flex items-center gap-1">
                View Details <FaArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{ visible: { opacity: 1 } }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <Link to="/work" className="inline-flex items-center gap-2 text-emerald-400 hover:gap-3 transition-all">
            View All 50+ Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Section 5: Stats & Achievements
export const StatsSection = () => {
  const stats = [
    { value: 5000, suffix: '+', label: 'Hours Automated', icon: FaRobot },
    { value: 100, suffix: '+', label: 'Vulnerabilities Fixed', icon: FaShieldAlt },
    { value: 50, suffix: '+', label: 'Happy Clients', icon: FaUsers },
    { value: 12, suffix: '+', label: 'Countries Served', icon: FaGlobe },
  ];
  
  const [counts, setCounts] = useState(stats.map(() => 0));
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            clearInterval(timer);
            start = end;
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[i] = Math.floor(start);
            return newCounts;
          });
        }, 16);
        return () => clearInterval(timer);
      });
    }
  }, [inView, controls]);
  
  return (
    <section ref={ref} className="py-20 px-6 border-y border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={controls}
                variants={{ visible: { opacity: 1, scale: 1 } }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <IconComponent className="text-emerald-400 text-3xl mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-emerald-400">
                  {counts[index]}{stat.suffix}
                </div>
                <p className="text-white/50 text-sm mt-1">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Section 6: Testimonials
export const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Michael Omondi', role: 'CEO, TechKenya', content: 'Phillip built a system that saved us 40 hours a month. His automation expertise is unmatched.', rating: 5 },
    { name: 'Sarah Wanjiku', role: 'Founder, Rugs Kenya', content: 'After PhilDev redesigned our site, enquiries went up 220%. He understands conversion.', rating: 5 },
    { name: 'James Mwangi', role: 'CTO, Fintech Startup', content: 'The POS integration he built is flawless. Real-time sync, zero errors.', rating: 5 },
  ];
  
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) controls.start('visible');
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [inView, controls]);
  
  return (
    <section ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Love</span>
          </h2>
          <p className="text-white/60">What people say about working with me.</p>
        </motion.div>
        
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/30 border border-white/10 rounded-2xl p-8 text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
          </div>
          <p className="text-white/80 text-lg italic mb-6">"{testimonials[current].content}"</p>
          <h4 className="font-semibold">{testimonials[current].name}</h4>
          <p className="text-white/40 text-sm">{testimonials[current].role}</p>
        </motion.div>
        
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${current === i ? 'w-6 bg-emerald-500' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 7: CTA / Exclusive Offer
export const CTASection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);
  
  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/50 via-black to-emerald-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#10B98120,_transparent)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{ visible: { opacity: 1, y: 0 } }}
        className="container mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to <span className="gradient-text">Dominate</span> Your Market?
        </h2>
        <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
          Stop settling for systems that barely work. Let's build something that scales, converts, and outperforms.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg shadow-emerald-500/25">
            Start Your Project →
          </Link>
          <Link to="/pricing" className="px-8 py-3 border border-emerald-500/50 rounded-lg text-emerald-400 hover:bg-emerald-500/10 transition-all">
            View Pricing
          </Link>
        </div>
        
        <p className="text-white/40 text-sm mt-6">
          ⚡ Limited slots available • Next available: April 2026
        </p>
      </motion.div>
    </section>
  );
};