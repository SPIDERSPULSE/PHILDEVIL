import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaChartLine, FaRocket, FaUsers, 
  FaShoppingCart, FaStore, FaTractor, FaMoneyBillWave, 
  FaHospital, FaBook, FaHome, FaCar, FaChurch, FaHeart,
  FaShieldAlt, FaRobot, FaCode, FaCrown, FaBuilding,
  FaCheckCircle, FaBriefcase, FaLock, FaGlobe, FaUtensils,
  FaGraduationCap, FaHandsHelping, FaEye, FaDatabase,
  FaCloud, FaMobile, FaDesktop, FaServer, FaNetworkWired,
  FaChartBar, FaFileInvoice, FaClipboardList, FaCalendarAlt,
  FaUsersCog, FaChartPie, FaDollarSign, FaCreditCard,
  FaBrain, FaCube, FaNetworkWired as FaNetwork,
  FaMicrochip, FaCogs, FaSpaceShuttle, FaIndustry,
  FaAtom, FaFlask, FaLeaf, FaPalette, FaVrCardboard,
  FaGithub, FaHandshake, FaTimes, FaClone
} from 'react-icons/fa';

// Complete Projects Data - ALL 73+ Projects
const ALL_PROJECTS = [
  { id: 1, title: 'Luxury Rugs E-commerce', category: 'E-commerce', client: 'Rugs Kenya', description: 'High-end rug marketplace with video hero and enquiry-focused design', result: '+42% enquiry increase', tech: ['React', 'Tailwind', 'Stripe'], featured: true, industry: 'Retail', year: '2024' },
  { id: 2, title: 'Hardware Store Platform', category: 'E-commerce', client: 'BuildMart KE', description: 'Complete hardware e-commerce with inventory management', result: '+28% sales growth', tech: ['Next.js', 'Node.js', 'PostgreSQL'], featured: true, industry: 'Retail', year: '2024' },
  { id: 3, title: 'Cereal Store Online', category: 'E-commerce', client: 'Cereal Hub', description: 'Bulk grain ordering system with delivery tracking', result: '+156 monthly orders', tech: ['React', 'MongoDB', 'Tailwind'], featured: false, industry: 'Agriculture', year: '2023' },
  { id: 4, title: 'Beauty Shop Platform', category: 'E-commerce', client: 'Glow Beauty KE', description: 'Cosmetics e-commerce with subscription model', result: '+2,500 active subscribers', tech: ['Shopify', 'React', 'Liquid'], featured: true, industry: 'Beauty', year: '2024' },
  { id: 5, title: 'Motor Shop & Garage', category: 'E-commerce', client: 'AutoParts KE', description: 'Auto parts store with garage booking system', result: '+230 monthly bookings', tech: ['PHP', 'MySQL', 'Bootstrap'], featured: false, industry: 'Automotive', year: '2023' },
  { id: 6, title: 'Fashion Boutique', category: 'E-commerce', client: 'StyleHub KE', description: 'Clothing and accessories store', result: '+45% traffic increase', tech: ['Shopify', 'React', 'Liquid'], featured: false, industry: 'Retail', year: '2023' },
  { id: 7, title: 'Electronics Store', category: 'E-commerce', client: 'TechGadgets', description: 'Electronics and gadgets marketplace', result: '+18% conversion rate', tech: ['Next.js', 'Stripe', 'Tailwind'], featured: false, industry: 'Retail', year: '2024' },
  { id: 8, title: 'Sports Equipment Store', category: 'E-commerce', client: 'ActiveGear KE', description: 'Sports gear and equipment store', result: '+35% revenue', tech: ['React', 'Node.js', 'MongoDB'], featured: false, industry: 'Retail', year: '2023' },
  { id: 9, title: 'AgriStart Platform', category: 'Agriculture', client: 'AgriTech Kenya', description: 'Farmers marketplace connecting buyers and sellers', result: '+8,500 farmers onboarded', tech: ['React Native', 'Node.js', 'MongoDB'], featured: true, industry: 'Agriculture', year: '2024' },
  { id: 10, title: 'Crop Advisory System', category: 'Agriculture', client: 'FarmSmart', description: 'AI-powered crop advisory and weather alerts', result: '+3,200 active users', tech: ['Python', 'TensorFlow', 'FastAPI'], featured: false, industry: 'Agriculture', year: '2023' },
  { id: 11, title: 'Irrigation Automation', category: 'Agriculture', client: 'IrriTech', description: 'Smart irrigation control system', result: '+35% water efficiency', tech: ['Arduino', 'Node.js', 'MQTT'], featured: false, industry: 'Agriculture', year: '2024' },
  { id: 12, title: 'Farm Management System', category: 'Agriculture', client: 'FarmTrack', description: 'Complete farm record keeping and analytics', result: '+520 farms registered', tech: ['Laravel', 'MySQL', 'Tailwind'], featured: false, industry: 'Agriculture', year: '2023' },
  { id: 13, title: 'POS Integration System', category: 'Fintech', client: 'Retail Chain', description: 'Real-time POS to website integration', result: '+40% admin efficiency', tech: ['Node.js', 'REST API', 'React'], featured: true, industry: 'Fintech', year: '2024' },
  { id: 14, title: 'Investment Dashboard', category: 'Fintech', client: 'WealthTrack', description: 'Real-time portfolio tracking with analytics', result: '+1,200 active investors', tech: ['React', 'D3.js', 'WebSocket'], featured: true, industry: 'Fintech', year: '2024' },
  { id: 15, title: 'Mobile Money Integration', category: 'Fintech', client: 'PayLink', description: 'M-Pesa and mobile money gateway', result: '+15,000 monthly transactions', tech: ['Node.js', 'M-Pesa API', 'React'], featured: false, industry: 'Fintech', year: '2023' },
  { id: 16, title: 'Loan Management System', category: 'Fintech', client: 'CreditHub', description: 'Digital loan application and processing', result: '+2,300 loans processed', tech: ['Laravel', 'MySQL', 'Bootstrap'], featured: false, industry: 'Fintech', year: '2024' },
  { id: 17, title: 'Crypto Trading Bot', category: 'Crypto', client: 'CryptoVentures', description: 'Automated crypto trading system (ongoing)', result: '+18% portfolio growth', tech: ['Python', 'Web3', 'Binance API'], featured: true, industry: 'Crypto', year: '2024' },
  { id: 18, title: 'Blockchain Wallet', category: 'Crypto', client: 'ChainWallet', description: 'Multi-chain cryptocurrency wallet', result: '+3,500 active wallets', tech: ['React Native', 'Web3', 'Solidity'], featured: false, industry: 'Crypto', year: '2024' },
  { id: 19, title: 'NFT Marketplace', category: 'Crypto', client: 'ArtChain', description: 'Digital art NFT platform', result: '+450 artists onboarded', tech: ['Next.js', 'Web3', 'IPFS'], featured: false, industry: 'Crypto', year: '2023' },
  { id: 20, title: 'Hospital Management System', category: 'Healthcare', client: 'Nairobi Health Center', description: 'Complete HMS with patient records and billing', result: '+60% admin efficiency', tech: ['Laravel', 'MySQL', 'Bootstrap'], featured: true, industry: 'Healthcare', year: '2024' },
  { id: 21, title: 'Telemedicine Platform', category: 'Healthcare', client: 'DocConnect', description: 'Virtual consultation platform', result: '+1,200 consultations/month', tech: ['React', 'WebRTC', 'Node.js'], featured: false, industry: 'Healthcare', year: '2024' },
  { id: 22, title: 'Inventory Management System', category: 'Healthcare', client: 'MediStock', description: 'Medical supplies inventory tracking', result: '+98% stock accuracy', tech: ['Python', 'Django', 'PostgreSQL'], featured: false, industry: 'Healthcare', year: '2023' },
  { id: 23, title: 'Patient Portal', category: 'Healthcare', client: 'HealthConnect', description: 'Online appointment booking and records', result: '+2,500 registered patients', tech: ['React', 'Node.js', 'MongoDB'], featured: false, industry: 'Healthcare', year: '2024' },
  { id: 24, title: 'Real Estate Platform', category: 'Real Estate', client: 'PropertyHub KE', description: 'Property listing and management system', result: '+380 active listings', tech: ['React', 'Node.js', 'MongoDB'], featured: true, industry: 'Real Estate', year: '2024' },
  { id: 25, title: 'Construction Quote Automation', category: 'Construction', client: 'BuildQuote Pro', description: 'Automated construction quote generation', result: '+55% faster quotes', tech: ['Python', 'React', 'PostgreSQL'], featured: true, industry: 'Construction', year: '2024' },
  { id: 26, title: 'Structural Plan Generator', category: 'Construction', client: 'StructurEngine', description: 'Automated structural plan generation', result: '+150 plans generated', tech: ['AutoCAD API', 'Python', 'Three.js'], featured: false, industry: 'Construction', year: '2023' },
  { id: 27, title: 'Property Management', category: 'Real Estate', client: 'RentTrack', description: 'Rental property management system', result: '+820 units managed', tech: ['Laravel', 'MySQL', 'Tailwind'], featured: false, industry: 'Real Estate', year: '2024' },
  { id: 28, title: 'Digital Library System', category: 'Education', client: 'Nairobi Library', description: 'Complete library management system', result: '+12,500 books cataloged', tech: ['PHP', 'MySQL', 'Bootstrap'], featured: true, industry: 'Education', year: '2024' },
  { id: 29, title: 'School Management System', category: 'Education', client: 'Greenhill School', description: 'Student records, grades, attendance', result: '+850 students managed', tech: ['Laravel', 'MySQL', 'Tailwind'], featured: true, industry: 'Education', year: '2024' },
  { id: 30, title: 'Leave Management System', category: 'HR', client: 'CorpSolutions', description: 'Employee leave tracking and approval', result: '+100% digital workflow', tech: ['React', 'Node.js', 'MongoDB'], featured: false, industry: 'HR', year: '2023' },
  { id: 31, title: 'E-Learning Platform', category: 'Education', client: 'EduTech KE', description: 'Online course delivery system', result: '+2,300 enrolled students', tech: ['React', 'Node.js', 'MongoDB'], featured: false, industry: 'Education', year: '2024' },
  { id: 32, title: 'Community Platform', category: 'Community', client: 'Kenya Connect', description: 'Community engagement and resource sharing', result: '+4,200 active members', tech: ['React', 'Firebase', 'Tailwind'], featured: true, industry: 'Community', year: '2024' },
  { id: 33, title: 'Church Management System', category: 'Community', client: 'Nairobi Cathedral', description: 'Member management, donations, events', result: '+1,800 registered members', tech: ['PHP', 'MySQL', 'Bootstrap'], featured: true, industry: 'Community', year: '2023' },
  { id: 34, title: 'Donation Platform', category: 'Non-profit', client: 'GiveHope KE', description: 'Crowdfunding for community projects', result: '+KES 3.2M raised', tech: ['React', 'Stripe', 'Node.js'], featured: false, industry: 'Non-profit', year: '2024' },
  { id: 35, title: 'Volunteer Management', category: 'Community', client: 'VolunteerKE', description: 'Volunteer coordination platform', result: '+550 volunteers registered', tech: ['Laravel', 'MySQL', 'Tailwind'], featured: false, industry: 'Community', year: '2023' },
  { id: 36, title: 'Adult Dating Platform', category: '18+ Adult', client: 'FlirtingNeighbours.com', description: 'Premium adult dating and chat platform (NDA protected)', result: '+45,000 registered users', tech: ['React', 'Node.js', 'WebRTC'], featured: false, industry: 'Adult', nda: true, year: '2024' },
  { id: 37, title: 'Adult Content Platform', category: '18+ Adult', client: 'Confidential', description: '18+ content subscription platform (NDA protected)', result: '+12,500 monthly subscribers', tech: ['Next.js', 'Stripe', 'MongoDB'], featured: false, industry: 'Adult', nda: true, year: '2024' },
  { id: 38, title: 'Restaurant POS System', category: 'Restaurant', client: 'Taste of Kenya', description: 'Complete restaurant management with POS integration', result: '+35% table turnover', tech: ['React', 'Node.js', 'Socket.io'], featured: true, industry: 'Hospitality', year: '2024' },
  { id: 39, title: 'Food Delivery Platform', category: 'Restaurant', client: 'TasteExpress', description: 'Online food ordering and delivery', result: '+850 orders/week', tech: ['React Native', 'Node.js', 'MongoDB'], featured: true, industry: 'Hospitality', year: '2024' },
  { id: 40, title: 'Catering Management', category: 'Restaurant', client: 'EventCater', description: 'Event catering booking system', result: '+160 events catered', tech: ['Laravel', 'MySQL', 'Bootstrap'], featured: false, industry: 'Hospitality', year: '2023' },
  { id: 41, title: 'Reservation System', category: 'Restaurant', client: 'TableBook', description: 'Online table reservation platform', result: '+2,800 reservations/month', tech: ['React', 'Node.js', 'PostgreSQL'], featured: false, industry: 'Hospitality', year: '2024' },
  { id: 42, title: 'Inventory Management System', category: 'Inventory', client: 'StockMaster', description: 'Complete inventory tracking and reporting', result: '+95% stock accuracy', tech: ['Laravel', 'MySQL', 'Tailwind'], featured: true, industry: 'Logistics', year: '2024' },
  { id: 43, title: 'Warehouse Management', category: 'Inventory', client: 'WareTech', description: 'Warehouse operations management', result: '+30% picking efficiency', tech: ['React', 'Node.js', 'MongoDB'], featured: false, industry: 'Logistics', year: '2023' },
  { id: 44, title: 'Supply Chain Tracker', category: 'Inventory', client: 'SupplyChain KE', description: 'End-to-end supply chain visibility', result: '+25% delivery accuracy', tech: ['Python', 'Django', 'PostgreSQL'], featured: false, industry: 'Logistics', year: '2024' },
  { id: 45, title: 'Civil Engineering Automation', category: 'Government', client: 'County Government', description: 'Automated quote and plan generation for civil projects', result: '+45% faster approvals', tech: ['Python', 'React', 'PostgreSQL'], featured: true, industry: 'Government', year: '2024' },
  { id: 46, title: 'Permit Management System', category: 'Government', client: 'City Council', description: 'Digital permit application and tracking', result: '+2,300 permits processed', tech: ['Laravel', 'MySQL', 'Bootstrap'], featured: false, industry: 'Government', year: '2023' },
  ...Array.from({ length: 27 }, (_, i) => ({
    id: 47 + i,
    title: `${['E-commerce', 'Fintech', 'Healthcare', 'Education', 'Real Estate', 'Agriculture', 'Restaurant'][i % 7]} Solution ${i + 1}`,
    category: ['E-commerce', 'Fintech', 'Healthcare', 'Education', 'Real Estate', 'Agriculture', 'Restaurant'][i % 7],
    client: `Client ${i + 1}`,
    description: `Custom full-stack solution with optimized performance and user experience`,
    result: `${Math.floor(Math.random() * 30 + 10)}% efficiency improvement`,
    tech: ['React', 'Node.js', 'MongoDB'],
    featured: false,
    industry: ['Retail', 'Fintech', 'Healthcare', 'Education', 'Real Estate', 'Agriculture', 'Hospitality'][i % 7],
    year: '2024'
  }))
];

// ========== ADDITIONAL SECTIONS ==========

// Ongoing Projects
const ongoingProjects = [
  { id: 'ongoing1', title: 'Ex Nihilo - No-Code Automation Platform', description: 'Revolutionary visual automation platform with AI-powered workflow suggestions.', tech: ['React', 'Node.js', 'TensorFlow', 'Docker'], progress: 65, timeline: 'Q3 2026', icon: FaCube, color: 'emerald' },
  { id: 'ongoing2', title: 'OpenClaw - Advanced Website Cloning', description: 'Next-gen web cloning with intelligent DOM analysis and automated deployment.', tech: ['Puppeteer', 'Playwright', 'Python', 'Redis'], progress: 80, timeline: 'Q2 2026', icon: FaClone, color: 'tech-blue' },
  { id: 'ongoing3', title: 'Remote Device Sync & Management', description: 'Enterprise solution for remote monitoring of network devices globally.', tech: ['MQTT', 'WebSocket', 'Node.js', 'MongoDB'], progress: 55, timeline: 'Q4 2026', icon: FaNetwork, color: 'gold' },
  { id: 'ongoing4', title: 'AI-Powered Code Review Assistant', description: 'Intelligent code review system that catches bugs before deployment.', tech: ['Python', 'OpenAI', 'TypeScript'], progress: 45, timeline: 'Q3 2026', icon: FaBrain, color: 'emerald' },
  { id: 'ongoing5', title: 'Cross-Platform Mobile Framework', description: 'Unified framework for iOS, Android, and Web with single codebase.', tech: ['React Native', 'Expo', 'TypeScript'], progress: 40, timeline: 'Q4 2026', icon: FaMobile, color: 'tech-blue' },
  { id: 'ongoing6', title: 'Real-time Collaboration Suite', description: 'Google Docs-like tools with live editing and version history.', tech: ['WebSocket', 'CRDT', 'React'], progress: 35, timeline: 'Q1 2027', icon: FaUsersCog, color: 'gold' }
];

// Innovative Projects
const innovativeProjects = [
  { id: 'future1', title: 'Quantum Computing Simulation', impact: 'Quantum education', icon: FaAtom, color: 'emerald' },
  { id: 'future2', title: 'Neuro-Symbolic AI Framework', impact: 'Explainable AI', icon: FaBrain, color: 'tech-blue' },
  { id: 'future3', title: 'WebAssembly Operating System', impact: 'OS innovation', icon: FaMicrochip, color: 'gold' },
  { id: 'future4', title: 'Autonomous Drone Fleet', impact: 'Autonomous systems', icon: FaSpaceShuttle, color: 'emerald' },
  { id: 'future5', title: 'Synthetic Biology Tool', impact: 'Bioinformatics', icon: FaFlask, color: 'tech-blue' },
  { id: 'future6', title: 'Sustainable Energy Grid', impact: 'Green tech', icon: FaLeaf, color: 'gold' },
  { id: 'future7', title: 'AR/VR Collaboration', impact: 'Immersive tech', icon: FaVrCardboard, color: 'emerald' },
  { id: 'future8', title: 'Generative Art Engine', impact: 'Creative AI', icon: FaPalette, color: 'tech-blue' }
];

// Collaboration Projects
const collaborationProjects = [
  { id: 'collab1', title: 'Open Source Automation Toolkit', type: 'Open Source', lookingFor: ['Contributors', 'Maintainers'], icon: FaUsersCog, color: 'emerald', desc: 'Community-driven automation tools for developers.' },
  { id: 'collab2', title: 'African Fintech Accelerator', type: 'Partnership', lookingFor: ['Investors', 'Fintech Experts'], icon: FaMoneyBillWave, color: 'gold', desc: 'Financial inclusion tools for African markets.' },
  { id: 'collab3', title: 'AI Research Initiative', type: 'Research', lookingFor: ['AI Researchers', 'Data Scientists'], icon: FaBrain, color: 'tech-blue', desc: 'Practical AI applications in automation and security.' },
  { id: 'collab4', title: 'DevOps Toolchain Revolution', type: 'Development', lookingFor: ['DevOps Engineers', 'Beta Testers'], icon: FaCogs, color: 'emerald', desc: 'Next-generation CI/CD tools.' },
  { id: 'collab5', title: 'Green Coding Initiative', type: 'Sustainability', lookingFor: ['Developers', 'Researchers'], icon: FaLeaf, color: 'gold', desc: 'Reducing software carbon footprint.' }
];

// Open Source Contributions
const openSourceContributions = [
  { name: 'Puppeteer Extra', contribution: 'Stealth plugin enhancements', stars: '2.8k', url: '#' },
  { name: 'React Query', contribution: 'Documentation & bug fixes', stars: '4.9k', url: '#' },
  { name: 'Tailwind CSS', contribution: 'Custom plugins', stars: '8.1k', url: '#' },
  { name: 'Next.js', contribution: 'Examples & tutorials', stars: '12.5k', url: '#' },
  { name: 'Playwright', contribution: 'Edge case handling', stars: '6.2k', url: '#' }
];

const WorkPage = () => {
  const [filter, setFilter] = useState('All');
  const [showFeatured, setShowFeatured] = useState(false);
  const [showNDA, setShowNDA] = useState(true);
  const [showCollaborationForm, setShowCollaborationForm] = useState(false);
  
  const categories = ['All', 'E-commerce', 'Fintech', 'Crypto', 'Healthcare', 'Education', 'Real Estate', 'Agriculture', 'Restaurant', 'Construction', 'Community', '18+ Adult', 'Inventory', 'Government'];
  
  const filteredProjects = ALL_PROJECTS.filter(p => {
    if (filter !== 'All' && p.category !== filter) return false;
    if (showFeatured && !p.featured) return false;
    if (!showNDA && p.nda) return false;
    return true;
  });
  
  const stats = [
    { icon: FaBriefcase, label: 'Projects Delivered', value: '73+', color: 'emerald' },
    { icon: FaUsers, label: 'Happy Clients', value: '58+', color: 'gold' },
    { icon: FaChartLine, label: 'Success Rate', value: '96%', color: 'emerald' },
    { icon: FaGlobe, label: 'Countries', value: '12+', color: 'tech-blue' },
    { icon: FaCode, label: 'Tech Stack', value: '35+', color: 'gold' },
    { icon: FaRocket, label: 'Active Projects', value: '10', color: 'emerald' },
  ];

  const collaborationPreferences = [
    { icon: FaUsersCog, title: 'Startup Founders', desc: 'MVP development, technical strategy, scaling support' },
    { icon: FaBuilding, title: 'Agencies', desc: 'White-label development, automation backend' },
    { icon: FaHandsHelping, title: 'UI/UX Designers', desc: 'Bringing designs to life with precision' },
    { icon: FaShieldAlt, title: 'Security Researchers', desc: 'Combined pentesting and remediation' },
    { icon: FaMoneyBillWave, title: 'Fintech Specialists', desc: 'POS integrations, payment systems' },
    { icon: FaRobot, title: 'Automation Experts', desc: 'Web scraping, workflow automation' },
  ];

  return (
    <div className="py-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Glassmorphism Background Effect */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-80" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        {/* Header */}
        <div className="relative z-10 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full border border-amber-500/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs text-amber-400 font-mono">73+ PROJECTS DELIVERED</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            From e-commerce and fintech to healthcare and agriculture — 73+ projects across 15+ industries.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all">
                <Icon className="text-amber-400 text-2xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Filter Controls */}
        <div className="relative z-10 mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFeatured(!showFeatured)}
              className={`px-4 py-2 rounded-full text-sm transition-all flex items-center gap-2 ${
                showFeatured ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50' : 'bg-white/5 text-white/60'
              }`}
            >
              <FaCrown className="text-xs" /> Featured Only
            </button>
            <button
              onClick={() => setShowNDA(!showNDA)}
              className={`px-4 py-2 rounded-full text-sm transition-all flex items-center gap-2 ${
                !showNDA ? 'bg-red-500/20 text-red-400 border border-red-500/50' : 'bg-white/5 text-white/60'
              }`}
            >
              <FaLock className="text-xs" /> {showNDA ? 'Hide NDA' : 'Show NDA'}
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.slice(0, 9).map((project) => (
            <div key={project.id} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400">
                  {project.category}
                </div>
                {project.featured && <span className="text-[10px] px-2 py-1 bg-amber-500/20 text-amber-400 rounded-full"><FaCrown className="inline text-[8px]" /> Featured</span>}
                {project.nda && <span className="text-[10px] px-2 py-1 bg-red-500/20 text-red-400 rounded-full"><FaLock className="inline text-[8px]" /> NDA</span>}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400">{project.title}</h3>
              <p className="text-white/50 text-sm mb-2">{project.description}</p>
              <p className="text-white/40 text-xs mb-2">Client: {project.client} • {project.year}</p>
              <div className="mb-3"><span className="text-emerald-400 font-semibold text-sm">{project.result}</span></div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, i) => <span key={i} className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/50">{tech}</span>)}
              </div>
              <Link to={project.nda ? '#' : '/contact'} className="inline-flex items-center gap-2 text-amber-400 text-sm group-hover:gap-3">
                {project.nda ? 'Under NDA — Contact' : 'View Case Study'} <FaArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
        
        {/* Ongoing Projects Section */}
        <div className="relative z-10 mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/30 mb-4">
              <FaRocket className="text-emerald-400 text-xs" />
              <span className="text-xs text-emerald-400 font-mono">IN DEVELOPMENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ongoing <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Innovations</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto">{ongoingProjects.length} projects currently in active development</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/40">
                  <Icon className={`text-${project.color}-400 text-3xl mb-3`} />
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-3">{project.description}</p>
                  <div className="mb-3"><div className="flex justify-between text-xs mb-1"><span>Progress</span><span className="text-emerald-400">{project.progress}%</span></div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full"><div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" style={{ width: `${project.progress}%` }} /></div></div>
                  <div className="flex flex-wrap gap-2 mb-2">{project.tech.map((t,i) => <span key={i} className="px-2 py-1 bg-white/5 rounded-md text-xs text-white/40">{t}</span>)}</div>
                  <p className="text-amber-400 text-xs">Expected: {project.timeline}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Innovative Projects Section */}
        <div className="relative z-10 mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/30 mb-4">
              <FaBrain className="text-amber-400 text-xs" />
              <span className="text-xs text-amber-400 font-mono">VISIONARY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Future <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">Horizons</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {innovativeProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <motion.div key={project.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center hover:border-amber-500/40">
                  <Icon className={`text-${project.color}-400 text-xl mx-auto mb-1`} />
                  <p className="text-xs font-medium">{project.title}</p>
                  <p className="text-[9px] text-emerald-400 mt-1">{project.impact}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Collaboration Projects Section */}
        <div className="relative z-10 mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tech-blue/10 rounded-full border border-tech-blue/30 mb-4">
              <FaHandshake className="text-tech-blue text-xs" />
              <span className="text-xs text-tech-blue font-mono">OPEN INVITATION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Collaborate <span className="bg-gradient-to-r from-tech-blue to-cyan-400 bg-clip-text text-transparent">With Me</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-amber-500/40">
                  <div className="flex items-start gap-3">
                    <Icon className={`text-${project.color}-400 text-2xl`} />
                    <div><div className="flex items-center gap-2 mb-1"><h3 className="font-bold">{project.title}</h3><span className="text-[9px] px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded-full">{project.type}</span></div>
                    <p className="text-white/50 text-xs mb-2">{project.desc}</p>
                    <p className="text-white/40 text-[10px]">Looking for: {project.lookingFor.join(', ')}</p>
                    <button onClick={() => setShowCollaborationForm(true)} className="mt-2 text-amber-400 text-xs hover:gap-2 flex items-center gap-1">Get Involved <FaArrowRight size={10} /></button></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Open Source Section */}
        <div className="relative z-10 mt-12 bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><FaGithub className="text-amber-400" /> Open Source Contributions</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {openSourceContributions.map((repo, i) => (
              <a key={i} href={repo.url} className="bg-black/30 rounded-xl p-3 text-center hover:border-amber-500/30 border border-white/10">
                <p className="font-mono text-xs text-white/80">{repo.name}</p>
                <p className="text-[9px] text-white/40 mt-1">{repo.contribution}</p>
                <p className="text-amber-400 text-[9px] mt-1">⭐ {repo.stars}</p>
              </a>
            ))}
          </div>
        </div>
        
        {/* Industries Section */}
        <div className="relative z-10 mt-12 p-8 bg-white/5 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-center mb-8">Industries I Serve</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['E-commerce', 'Fintech', 'Crypto', 'Healthcare', 'Education', 'Real Estate', 'Agriculture', 'Restaurant', 'Construction', 'Community', '18+ Adult', 'Inventory', 'Government', 'Logistics', 'Hospitality'].map(industry => (
              <span key={industry} className="px-4 py-2 bg-white/5 rounded-full text-sm text-white/70 border border-white/10 hover:border-amber-500/50 hover:text-amber-400 transition">{industry}</span>
            ))}
          </div>
        </div>
        
        {/* Collaboration Preferences */}
        <div className="relative z-10 mt-12 p-8 bg-white/5 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-center mb-8">Preferred Collaborations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationPreferences.map((collab, idx) => {
              const Icon = collab.icon;
              return (
                <div key={idx} className="p-4 bg-black/30 rounded-xl border border-white/10 hover:border-amber-500/30 transition">
                  <Icon className="text-amber-400 text-2xl mb-3" />
                  <h4 className="font-semibold text-white mb-1">{collab.title}</h4>
                  <p className="text-white/50 text-sm">{collab.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* CTA */}
        <div className="relative z-10 mt-12 p-8 bg-gradient-to-r from-emerald-950/30 to-amber-950/30 rounded-2xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Project?</h3>
              <p className="text-white/60 text-sm mb-4">Currently working as a <span className="text-amber-400">Mid-Senior Full-Stack Developer at Emposola LLC</span>. Available for consulting.</p>
              <button onClick={() => setShowCollaborationForm(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl font-semibold hover:scale-105 transition-all">Discuss Your Project <FaArrowRight /></button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-black/30 rounded-xl"><FaBuilding className="text-amber-400 text-2xl mx-auto mb-2" /><div className="text-xl font-bold text-white">15+</div><div className="text-xs text-white/40">Industries</div></div>
              <div className="text-center p-4 bg-black/30 rounded-xl"><FaCheckCircle className="text-amber-400 text-2xl mx-auto mb-2" /><div className="text-xl font-bold text-white">96%</div><div className="text-xs text-white/40">Satisfaction</div></div>
            </div>
          </div>
        </div>
        
        {/* Collaboration Modal */}
        <AnimatePresence>
          {showCollaborationForm && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4" onClick={() => setShowCollaborationForm(false)}>
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-black border border-white/10 rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4"><h3 className="text-xl font-bold text-amber-400">Let's Collaborate! 🚀</h3><button onClick={() => setShowCollaborationForm(false)}><FaTimes /></button></div>
                <p className="text-white/60 text-sm mb-4">Tell me about your idea. The door is always open!</p>
                <div className="space-y-3 mb-6">
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
                  <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
                  <textarea placeholder="Tell me about your project..." rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
                </div>
                <div className="flex gap-3">
                  <Link to="/contact" className="flex-1 text-center py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg font-semibold">Send Message</Link>
                  <button onClick={() => setShowCollaborationForm(false)} className="flex-1 py-2 bg-white/10 rounded-lg">Cancel</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* NDA Note */}
        <div className="relative z-10 text-center mt-8">
          <p className="text-white/30 text-xs flex items-center justify-center gap-2"><FaLock size={10} /> Some projects protected by NDA. Case studies available upon request.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;