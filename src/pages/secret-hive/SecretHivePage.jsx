import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLock, FaUnlockAlt, FaTerminal, FaCode, FaShieldAlt, FaSkull, 
  FaBrain, FaMicrochip, FaNetworkWired, FaBug, FaCrown, 
  FaRobot, FaBitcoin, FaExclamationTriangle, FaCheckCircle,
  FaEthereum, FaDollarSign, FaChartLine, FaKey
} from 'react-icons/fa';
import { GiCrown, GiSpiderWeb, GiRadarSweep } from 'react-icons/gi';

// Valid programming languages for elite access
const VALID_LANGUAGES = [
  'javascript', 'python', 'java', 'typescript', 'rust', 'go', 'c++', 'c#', 
  'php', 'ruby', 'swift', 'kotlin', 'scala', 'solidity', 'bash', 'powershell'
];

const SecretHivePage = () => {
  const [step, setStep] = useState('languages');
  const [languages, setLanguages] = useState(['', '', '']);
  const [error, setError] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [typingEffect, setTypingEffect] = useState('');

  const fullWelcomeText = '> WELCOME_TO_HEAVEN // ELITE_ACCESS_GRANTED // LEVEL_7_CLEARANCE';

  useEffect(() => {
    if (showWelcome) {
      let i = 0;
      const typing = setInterval(() => {
        if (i < fullWelcomeText.length) {
          setTypingEffect(fullWelcomeText.slice(0, i + 1));
          i++;
        } else clearInterval(typing);
      }, 35);
      return () => clearInterval(typing);
    }
  }, [showWelcome]);

  const handleLanguageChange = (index, value) => {
    const newLanguages = [...languages];
    newLanguages[index] = value.toLowerCase().trim();
    setLanguages(newLanguages);
    setError('');
  };

  const validateLanguages = () => {
    const validCount = languages.filter(lang => VALID_LANGUAGES.includes(lang)).length;
    
    if (validCount >= 3) {
      setShowWelcome(true);
      setTimeout(() => {
        setStep('content');
        setShowWelcome(false);
      }, 3500);
    } else {
      setError('ACCESS DENIED // This realm requires mastery of at least 3 programming languages');
    }
  };

  // Language Authentication Screen
  if (step === 'languages') {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <FaLock className="text-red-500 text-7xl mx-auto mb-6" />
          </motion.div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
            SECRET HIVE
          </h1>
          
          <p className="text-white/60 mb-8 font-mono text-sm">
            // VERIFY_YOUR_IDENTITY // PROVE_YOUR_TECHNICAL_PROWESS
          </p>
          
          <div className="bg-black/50 border border-red-500/30 rounded-xl p-8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <FaTerminal className="text-emerald-400" />
              <p className="font-mono text-emerald-400 text-sm">ACCESS REQUIREMENT:</p>
            </div>
            <p className="text-white/80 mb-6 font-mono text-sm">
              List <span className="text-emerald-400 font-bold">3 programming languages</span> you have mastered.
            </p>
            
            <div className="space-y-3 mb-6">
              {[0, 1, 2].map((index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-emerald-400 font-mono text-sm">[{index + 1}]</span>
                  <input
                    type="text"
                    value={languages[index]}
                    onChange={(e) => handleLanguageChange(index, e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && validateLanguages()}
                    placeholder="programming language"
                    className="flex-1 px-4 py-3 bg-black/50 border border-white/20 rounded-lg font-mono text-emerald-400 focus:outline-none focus:border-emerald-500"
                    autoFocus={index === 0}
                  />
                </div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={validateLanguages}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg font-bold font-mono text-sm hover:shadow-lg transition"
            >
              VERIFY ACCESS
            </motion.button>
          </div>
          
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-red-500/10 border border-red-500/50 rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-red-500 text-xl" />
                  <p className="text-red-400 font-mono text-sm">{error}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }

  // Welcome Animation Screen
  if (showWelcome) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-3xl mx-auto px-4"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <FaCheckCircle className="text-emerald-500 text-8xl mx-auto mb-6" />
          </motion.div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            WELCOME TO HEAVEN
          </h1>
          
          <div className="bg-black/50 border border-emerald-500/30 rounded-xl p-6 mb-6">
            <p className="font-mono text-emerald-400 text-sm break-all">
              {typingEffect}
              <span className="animate-pulse">_</span>
            </p>
          </div>
          
          <p className="text-white/60 font-mono text-sm">
            ACCESS GRANTED // PREPARING THE VAULT...
          </p>
        </motion.div>
      </div>
    );
  }

  // Main Elite Content
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      {/* Header */}
      <div className="bg-black/90 border-b border-emerald-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="font-mono text-xs text-emerald-400">root@phildev:~$</p>
            </div>
            <div className="flex items-center gap-4">
              <FaUnlockAlt className="text-emerald-400 text-xs" />
              <span className="font-mono text-[10px] text-white/40">ELITE ACCESS // LEVEL 7</span>
            </div>
          </div>
          <p className="font-mono text-sm text-emerald-400 mt-2">
            SYSTEM READY // WELCOME BACK ELITE OPERATOR
            <span className="animate-pulse">_</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* Section 1: Identity */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <span className="text-emerald-400 text-sm font-mono">VERIFIED OPERATOR // ELITE STATUS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              PHILIP KERHER
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-mono">
            Full-Stack Architect | Security Researcher | Automation Engineer | Blockchain Specialist
          </p>
          <div className="flex gap-3 justify-center mt-6 flex-wrap">
            {['ELITE HACKER', 'RED TEAM', 'CONTRACT AUDITOR', 'DEVOPS'].map((tag, i) => (
              <span key={i} className="text-xs font-mono text-emerald-400/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Section 2: Security Arsenal */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-black/40 border border-red-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaSkull className="text-red-500 text-3xl" />
            <h2 className="text-3xl font-bold">Offensive Security Arsenal</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-emerald-400 font-mono text-sm mb-3">Reconnaissance</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• OSINT gathering & threat intelligence</li>
                <li>• Subdomain enumeration & DNS analysis</li>
                <li>• Network mapping & fingerprinting</li>
                <li>• Social engineering vectors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-400 font-mono text-sm mb-3">Exploitation</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Zero-day discovery & POC development</li>
                <li>• SQL injection & XSS techniques</li>
                <li>• Buffer overflow exploits</li>
                <li>• SSRF, CSRF, IDOR vulnerabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-400 font-mono text-sm mb-3">Persistence</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Rootkit development</li>
                <li>• Lateral movement techniques</li>
                <li>• Active Directory exploitation</li>
                <li>• Container escape methods</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Reverse Engineering */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-black/40 border border-purple-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <GiSpiderWeb className="text-purple-500 text-3xl" />
            <h2 className="text-3xl font-bold">Reverse Engineering & App Cloning</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-emerald-400 font-mono text-sm mb-3">Mobile Application Analysis</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• APK/IPA decompilation & source extraction</li>
                <li>• SSL pinning bypass & certificate injection</li>
                <li>• Dynamic instrumentation with Frida</li>
                <li>• Obfuscation removal & code reconstruction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-400 font-mono text-sm mb-3">Web Application Cloning</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Full-stack application mirroring</li>
                <li>• API endpoint mapping & interception</li>
                <li>• Database schema extraction</li>
                <li>• Authentication flow reconstruction</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Blockchain Security */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-black/40 border border-yellow-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaBitcoin className="text-yellow-500 text-3xl" />
            <h2 className="text-3xl font-bold">Blockchain & Smart Contract Security</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-emerald-400 font-mono text-sm mb-3">Smart Contract Auditing</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Reentrancy & front-running detection</li>
                <li>• Integer overflow/underflow exploits</li>
                <li>• Flash loan attack vectors</li>
                <li>• Access control vulnerabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-400 font-mono text-sm mb-3">DeFi Protocol Security</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Liquidity pool manipulation</li>
                <li>• Oracle manipulation attacks</li>
                <li>• MEV extraction strategies</li>
                <li>• Cross-chain bridge vulnerabilities</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Technical Skills */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-black/40 border border-cyan-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaCode className="text-cyan-500 text-3xl" />
            <h2 className="text-3xl font-bold">Technical Skillset</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { cat: 'Languages', items: 'JavaScript, TypeScript, Python, Rust, Go, Solidity, C++, PHP' },
              { cat: 'Frameworks', items: 'React, Next.js, Node.js, Express, Django, Flask' },
              { cat: 'DevOps', items: 'Docker, Kubernetes, AWS, GCP, Nginx, CI/CD' },
              { cat: 'Security', items: 'Metasploit, Burp Suite, Nmap, Wireshark, Ghidra' }
            ].map((skill, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-lg">
                <h3 className="text-emerald-400 font-mono text-sm mb-2">{skill.cat}</h3>
                <p className="text-white/60 text-xs">{skill.items}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 6: Automation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-black/40 border border-purple-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaRobot className="text-purple-500 text-3xl" />
            <h2 className="text-3xl font-bold">Automation & Bot Systems</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-white/70 text-sm">
              <li>• NFT mint sniping bots (multi-threaded, gas optimization)</li>
              <li>• Token sniper for DEX launches</li>
              <li>• Arbitrage bots & MEV extraction</li>
              <li>• Web scraping & data harvesting</li>
            </ul>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>• Price monitoring & flash crash detection</li>
              <li>• Automated trading strategies</li>
              <li>• API integration & webhook automation</li>
              <li>• Custom monitoring dashboards</li>
            </ul>
          </div>
        </motion.section>

        {/* Section 7: Elite Specializations */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-black/40 border border-yellow-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <GiRadarSweep className="text-yellow-500 text-3xl" />
            <h2 className="text-3xl font-bold">Elite Specializations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Dark Web Intelligence', 'Crypto Forensics', 'Penetration Testing', 'Bug Bounty',
              'Smart Contract Auditing', 'DeFi Security', 'Web3 Infrastructure', 'Cloud Security',
              'Red Teaming', 'Threat Hunting', 'Incident Response', 'Malware Analysis'
            ].map((niche, i) => (
              <div key={i} className="p-3 bg-white/5 rounded-lg text-center">
                <p className="text-emerald-400 text-xs font-mono">{niche}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 8: Collaboration */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 rounded-2xl p-12 text-center"
        >
          <GiCrown className="text-emerald-400 text-5xl mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Collaboration Request</h2>
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
            Serious collaborations only. You've proven your technical worth. Let's build something extraordinary.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="px-6 py-3 bg-emerald-500 rounded-lg font-mono text-sm">
              PGP: 0xPH1LDEV1337
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-lg font-mono text-sm border border-white/20">
              Signal: @phildev.42
            </div>
          </div>
          <p className="text-white/40 text-xs mt-6 font-mono">
            Elite status confirmed // Ready for high-stakes operations
          </p>
        </motion.section>

      </div>
    </div>
  );
};

export default SecretHivePage;