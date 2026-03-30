import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMoneyBillWave, FaChartLine, FaWallet, FaShieldAlt, FaBitcoin,
  FaEthereum, FaExchangeAlt, FaRobot, FaDatabase, FaCloud,
  FaLock, FaMobile, FaChartBar, FaCrown, FaRocket, FaCheckCircle,
  FaClock, FaAward, FaMedal, FaBrain, FaMicrochip, FaNetworkWired,
  FaUsers, FaUserFriends, FaGlobe
} from 'react-icons/fa';

const FintechPage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [counters, setCounters] = useState({
    volume: 0,
    users: 0,
    uptime: 0,
    speed: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        volume: prev.volume < 500 ? prev.volume + 25 : 500,
        users: prev.users < 100 ? prev.users + 5 : 100,
        uptime: prev.uptime < 999 ? prev.uptime + 50 : 999,
        speed: prev.speed < 100 ? prev.speed + 5 : 100
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const fintechServices = [
    {
      icon: FaBitcoin,
      title: "Cryptocurrency Exchange Platform",
      description: "Build secure, high-performance crypto trading platforms with real-time order matching.",
      skills: ["Web3.js", "Solidity", "Exchange APIs", "Order Books"],
      timeline: "8-12 weeks",
      output: "Full exchange platform with wallet integration"
    },
    {
      icon: FaEthereum,
      title: "DeFi Protocol Development",
      description: "Create decentralized finance applications including lending, borrowing, and yield farming.",
      skills: ["Solidity", "Hardhat", "OpenZeppelin", "Uniswap V3"],
      timeline: "6-10 weeks",
      output: "Smart contracts, frontend, and audit reports"
    },
    {
      icon: FaWallet,
      title: "Multi-Currency Wallet System",
      description: "Secure wallet infrastructure supporting multiple cryptocurrencies and fiat currencies.",
      skills: ["Blockchain APIs", "Encryption", "HD Wallets", "BIP39"],
      timeline: "6-8 weeks",
      output: "Web and mobile wallet with transaction history"
    },
    {
      icon: FaRobot,
      title: "Algorithmic Trading Bots",
      description: "Automated trading systems with advanced strategies and risk management.",
      skills: ["Python", "Node.js", "Trading Strategies", "Backtesting"],
      timeline: "4-6 weeks",
      output: "Custom trading bot with dashboard and analytics"
    },
    {
      icon: FaExchangeAlt,
      title: "Payment Gateway Integration",
      description: "Seamless payment processing with multiple providers and fraud detection.",
      skills: ["Stripe", "PayPal", "Crypto Payments", "Webhooks"],
      timeline: "3-5 weeks",
      output: "Integrated payment system with reconciliation"
    },
    {
      icon: FaChartLine,
      title: "Real-Time Analytics Dashboard",
      description: "Comprehensive analytics for financial data with interactive visualizations.",
      skills: ["React", "D3.js", "WebSockets", "Time Series DB"],
      timeline: "4-6 weeks",
      output: "Interactive dashboard with live data feeds"
    }
  ];

  const blockchainSkills = [
    { name: "Smart Contract Development", level: 94 },
    { name: "DeFi Protocol Design", level: 92 },
    { name: "Web3 Integration", level: 96 },
    { name: "Tokenomics", level: 88 },
    { name: "Security Auditing", level: 95 },
    { name: "Layer 2 Solutions", level: 85 }
  ];

  const developmentProcess = [
    { step: "Requirements & Discovery", icon: FaBrain, time: "1-2 weeks", details: "Deep dive into business goals, user flows, technical requirements" },
    { step: "Architecture Design", icon: FaMicrochip, time: "1-2 weeks", details: "System architecture, database design, API specifications" },
    { step: "Smart Contract Development", icon: FaEthereum, time: "2-4 weeks", details: "Solidity development, testing, deployment scripts" },
    { step: "Frontend & Backend Integration", icon: FaNetworkWired, time: "3-5 weeks", details: "React frontend, Node.js backend, Web3 integration" },
    { step: "Security Auditing", icon: FaShieldAlt, time: "1-2 weeks", details: "Smart contract audit, penetration testing, vulnerability assessment" },
    { step: "Deployment & Launch", icon: FaRocket, time: "1 week", details: "Mainnet deployment, monitoring setup, launch support" }
  ];

  const deliveryOutputs = [
    { title: "Smart Contracts", items: ["ERC20/ERC721 tokens", "DeFi protocols", "DAO frameworks", "Audit reports"] },
    { title: "Frontend Applications", items: ["React/Next.js dashboards", "Web3 integration", "Wallet connect", "Real-time charts"] },
    { title: "Backend Infrastructure", items: ["Node.js APIs", "Database schemas", "Caching layers", "Microservices"] },
    { title: "DevOps & Security", items: ["Docker containers", "CI/CD pipelines", "Monitoring tools", "Security hardening"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-emerald-900/20"></div>
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
              <FaMoneyBillWave className="text-emerald-400 text-7xl" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Fintech & Blockchain Engineering
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
              Building the future of finance with cutting-edge blockchain technology, 
              DeFi protocols, and secure payment infrastructure.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-bold"
              >
                Launch Your Fintech Project
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
            { icon: FaMoneyBillWave, value: counters.volume, label: "Transaction Volume", suffix: "M+", color: "text-emerald-400" },
            { icon: FaUsers, value: counters.users, label: "Active Users", suffix: "K+", color: "text-emerald-400" },
            { icon: FaChartBar, value: counters.uptime, label: "System Uptime", suffix: ".9%", color: "text-emerald-400" },
            { icon: FaRocket, value: counters.speed, label: "Processing Speed", suffix: "ms", color: "text-emerald-400" }
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
          <span className="text-emerald-400 font-mono text-sm">FINTECH SERVICES</span>
          <h2 className="text-4xl font-bold mt-2">Enterprise-Grade Financial Solutions</h2>
          <p className="text-white/60 mt-4">Secure, scalable, and compliant fintech infrastructure</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fintechServices.map((service, i) => (
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

      {/* Blockchain Expertise */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm">BLOCKCHAIN EXPERTISE</span>
          <h2 className="text-4xl font-bold mt-2">Core Competencies</h2>
          <p className="text-white/60 mt-4">Deep technical mastery of blockchain technologies</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {blockchainSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-xl p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-sm">{skill.name}</p>
                <span className="text-emerald-400 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Development Process */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm">METHODOLOGY</span>
          <h2 className="text-4xl font-bold mt-2">My Development Framework</h2>
          <p className="text-white/60 mt-4">End-to-end fintech development lifecycle</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {developmentProcess.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-xl p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <step.icon className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-bold text-sm">{step.step}</p>
                  <p className="text-emerald-400 text-xs">{step.time}</p>
                </div>
              </div>
              <p className="text-white/40 text-xs">{step.details}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Delivery Outputs */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {deliveryOutputs.map((output, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-xl p-4"
            >
              <h3 className="text-emerald-400 font-bold mb-3">{output.title}</h3>
              <ul className="space-y-2">
                {output.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/60 text-xs">
                    <FaCheckCircle className="text-emerald-400 text-xs mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Security & Compliance */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <FaLock className="text-emerald-400 text-4xl" />
            <h3 className="text-2xl font-bold">Security & Compliance First</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Smart Contract Audits", desc: "Comprehensive security reviews by leading firms" },
              { title: "PCI-DSS Compliance", desc: "Payment card industry security standards" },
              { title: "GDPR Ready", desc: "Data protection and privacy compliance" }
            ].map((item, i) => (
              <div key={i} className="bg-black/40 rounded-xl p-4">
                <FaShieldAlt className="text-emerald-400 mb-2" />
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-white/40 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
            <FaAward className="text-emerald-400 text-3xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMedal className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Certified Blockchain Developer</p>
                  <p className="text-white/40 text-xs">Blockchain Council • 2024</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMedal className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Smart Contract Security Expert</p>
                  <p className="text-white/40 text-xs">ConsenSys Academy • 2023</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMedal className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">DeFi Architecture Specialist</p>
                  <p className="text-white/40 text-xs">Aave Grants • 2024</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
            <FaClock className="text-emerald-400 text-3xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Project Timeline</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Discovery & Design</span>
                  <span className="text-emerald-400 text-sm">2 weeks</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Development</span>
                  <span className="text-emerald-400 text-sm">4-8 weeks</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Testing & Audit</span>
                  <span className="text-emerald-400 text-sm">2-3 weeks</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Deployment & Launch</span>
                  <span className="text-emerald-400 text-sm">1 week</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '95%' }}></div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Disrupt Fintech?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's build the next generation of financial technology together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-bold text-lg"
          >
            Start Your Fintech Project
          </motion.button>
        </motion.div>
      </div>

    </div>
  );
};

export default FintechPage;