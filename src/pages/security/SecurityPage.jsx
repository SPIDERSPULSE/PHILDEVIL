import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaLock, FaEye, FaBug, FaSkull, FaServer, 
  FaNetworkWired, FaDatabase, FaCloud, FaChartLine, FaClock,
  FaRocket, FaCheckCircle, FaShieldVirus, FaUserSecret,
  FaFingerprint, FaKey, FaMicrochip, FaBrain, FaRobot,
  FaFileAlt, FaMoneyBillWave, FaCrown, FaMedal, FaAward
} from 'react-icons/fa';

const SecurityPage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [counters, setCounters] = useState({
    secured: 0,
    threats: 0,
    uptime: 0,
    response: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        secured: prev.secured < 500 ? prev.secured + 25 : 500,
        threats: prev.threats < 1250 ? prev.threats + 63 : 1250,
        uptime: prev.uptime < 999 ? prev.uptime + 50 : 999,
        response: prev.response < 4 ? prev.response + 0.2 : 4
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const securityServices = [
    {
      icon: FaSkull,
      title: "Advanced Penetration Testing",
      description: "Simulate real-world attacks to identify vulnerabilities before malicious actors do.",
      skills: ["Metasploit", "Burp Suite", "Nmap", "Custom Exploits"],
      timeline: "2-4 weeks",
      output: "Comprehensive report with 100+ tested vectors"
    },
    {
      icon: FaShieldVirus,
      title: "Zero-Day Research & Exploit Development",
      description: "Proprietary research to discover unknown vulnerabilities and develop proof-of-concepts.",
      skills: ["IDA Pro", "Ghidra", "Python", "Assembly"],
      timeline: "4-8 weeks",
      output: "0-day discovery report and POC exploit code"
    },
    {
      icon: FaNetworkWired,
      title: "Network Security Architecture",
      description: "Design and implement zero-trust network security with advanced segmentation.",
      skills: ["AWS Security", "Azure", "Firewall Rules", "SIEM"],
      timeline: "3-6 weeks",
      output: "Complete network architecture and security policies"
    },
    {
      icon: FaBrain,
      title: "AI-Powered Threat Detection",
      description: "Machine learning models that identify and neutralize threats in real-time.",
      skills: ["Python", "TensorFlow", "Anomaly Detection"],
      timeline: "4-6 weeks",
      output: "AI detection engine and real-time dashboard"
    },
    {
      icon: FaDatabase,
      title: "Secure Database Architecture",
      description: "Encryption, access controls, and audit logging for sensitive data protection.",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Encryption"],
      timeline: "2-3 weeks",
      output: "Hardened database with audit logs"
    },
    {
      icon: FaCloud,
      title: "Cloud Security Posture Management",
      description: "Continuous compliance monitoring and threat prevention across cloud infrastructure.",
      skills: ["AWS", "GCP", "Azure", "Terraform"],
      timeline: "3-5 weeks",
      output: "CSPM implementation and compliance reports"
    }
  ];

  const securityProcess = [
    { step: "Discovery & Reconnaissance", icon: FaEye, time: "1-2 days", details: "Asset mapping, OSINT gathering, attack surface analysis" },
    { step: "Vulnerability Assessment", icon: FaBug, time: "3-5 days", details: "Automated scanning, manual testing, configuration review" },
    { step: "Exploitation & Validation", icon: FaSkull, time: "5-10 days", details: "Controlled exploitation, privilege escalation" },
    { step: "Reporting & Remediation", icon: FaFileAlt, time: "2-3 days", details: "Detailed findings, risk ratings, actionable steps" },
    { step: "Retesting & Validation", icon: FaCheckCircle, time: "1-2 days", details: "Verification of fixes, final security clearance" }
  ];

  const technologies = [
    { name: "Penetration Testing", level: 95 },
    { name: "Threat Hunting", level: 92 },
    { name: "Incident Response", level: 88 },
    { name: "Cloud Security", level: 94 },
    { name: "Python Security", level: 96 },
    { name: "Container Security", level: 89 },
    { name: "K8s Security", level: 85 },
    { name: "AWS Security", level: 91 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <FaShieldAlt className="text-emerald-400 text-7xl" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Elite Security Engineering
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
              Protecting your digital assets with military-grade security protocols, 
              zero-day research, and AI-powered threat detection.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-bold"
              >
                Request Security Audit
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 border border-emerald-500/50 rounded-full font-bold hover:bg-emerald-500/10"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: FaShieldAlt, value: counters.secured, label: "Systems Secured", suffix: "+" },
            { icon: FaBug, value: counters.threats, label: "Threats Neutralized", suffix: "+" },
            { icon: FaChartLine, value: counters.uptime, label: "Uptime Achieved", suffix: ".9%" },
            { icon: FaClock, value: counters.response, label: "Response Time", suffix: " min" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center"
            >
              <stat.icon className="text-emerald-400 text-3xl mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">{Math.floor(stat.value)}{stat.suffix}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm">SECURITY SERVICES</span>
          <h2 className="text-4xl font-bold mt-2">Comprehensive Protection Suite</h2>
          <p className="text-white/60 mt-4">Tailored security solutions for your specific needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredService(i)}
              onMouseLeave={() => setHoveredService(null)}
              className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300"
            >
              <service.icon className="text-emerald-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 text-sm mb-4">{service.description}</p>
              
              <div className="mb-4">
                <p className="text-emerald-400 text-xs font-mono mb-2">TECH STACK:</p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-white/5 px-2 py-1 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <div>
                  <p className="text-white/40 text-xs">TIMELINE</p>
                  <p className="text-white text-sm font-semibold">{service.timeline}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-xs">DELIVERABLE</p>
                  <p className="text-emerald-400 text-xs">{service.output}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Security Process */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm">METHODOLOGY</span>
          <h2 className="text-4xl font-bold mt-2">My Security Framework</h2>
          <p className="text-white/60 mt-4">A proven process for comprehensive security</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4">
          {securityProcess.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto mb-3">
                  <step.icon className="text-white text-xl" />
                </div>
                <p className="font-bold text-sm">{step.step}</p>
                <p className="text-emerald-400 text-xs mt-1">{step.time}</p>
                <p className="text-white/40 text-[10px] mt-2">{step.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm">EXPERTISE</span>
          <h2 className="text-4xl font-bold mt-2">Security Expertise Areas</h2>
          <p className="text-white/60 mt-4">Battle-tested skills and capabilities</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                <FaShieldAlt className="text-emerald-400 text-2xl" />
              </div>
              <p className="font-semibold mb-2">{tech.name}</p>
              <div className="w-full bg-white/10 rounded-full h-1">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-1 rounded-full"
                />
              </div>
              <p className="text-white/60 text-xs mt-1">{tech.level}% Mastery</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications & Achievements */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <FaAward className="text-emerald-400 text-4xl" />
            <h3 className="text-2xl font-bold">Certifications & Achievements</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { cert: "OSCP (Offensive Security)", year: "2024", issuer: "Offensive Security" },
              { cert: "CISSP", year: "2023", issuer: "ISC²" },
              { cert: "CEH Master", year: "2023", issuer: "EC-Council" }
            ].map((cert, i) => (
              <div key={i} className="bg-black/40 rounded-xl p-4">
                <FaMedal className="text-emerald-400 mb-2" />
                <p className="font-bold">{cert.cert}</p>
                <p className="text-white/40 text-xs">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Delivery & Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
            <FaRocket className="text-emerald-400 text-3xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Delivery Expectations</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />
                <span>Comprehensive security audit report with executive summary</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />
                <span>Prioritized vulnerability list with severity ratings</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />
                <span>Proof-of-concept exploits for critical findings</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />
                <span>Remediation guidance with step-by-step instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />
                <span>Post-remediation validation and retesting</span>
              </li>
            </ul>
          </div>
          <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
            <FaClock className="text-emerald-400 text-3xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Project Timeline</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Discovery Phase</span>
                  <span className="text-emerald-400">Week 1</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Assessment & Testing</span>
                  <span className="text-emerald-400">Week 2-4</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Reporting & Presentation</span>
                  <span className="text-emerald-400">Week 5</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Remediation Support</span>
                  <span className="text-emerald-400">Week 6+</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 py-16 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 rounded-2xl p-12 text-center"
        >
          <FaCrown className="text-emerald-400 text-5xl mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Secure Your Infrastructure?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your security needs and build a comprehensive protection strategy.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-bold text-lg"
          >
            Schedule Security Consultation
          </motion.button>
        </motion.div>
      </div>

    </div>
  );
};

export default SecurityPage;