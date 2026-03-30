import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, FaRocket, FaUsers, FaMoneyBillWave, FaClock, 
  FaCheckCircle, FaCrown, FaArrowRight, FaQuoteLeft, FaStar,
  FaTrophy, FaMedal, FaAward, FaFire, FaGlobe, FaBuilding,
  FaShoppingCart, FaBitcoin, FaRobot, FaShieldAlt, FaCode,
  FaDatabase, FaCloud, FaMobile, FaWallet, FaHeart,
  FaHospital, FaUniversity, FaCar, FaPlane, FaFilm,
  FaGamepad, FaMusic, FaBook, FaCamera, FaCoffee
} from 'react-icons/fa';

const CaseStudiesPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filter, setFilter] = useState('all');

  const caseStudies = [
    // E-Commerce & Retail (8 cases)
    {
      id: 1,
      title: "Global Fashion Retailer Scales to 500K+ Orders/Day",
      category: "E-Commerce",
      client: "FashionForward",
      industry: "Retail & E-Commerce",
      duration: "4 months",
      technologies: ["React", "Node.js", "Python", "Docker", "AWS", "Redis"],
      challenge: "Manual order processing causing $2M annual losses, 48-hour delays, and 30% cart abandonment.",
      solution: "AI-powered automation with predictive inventory, real-time tracking, and intelligent chatbots.",
      results: [
        "98% reduction in manual processing time",
        "40% operational efficiency increase",
        "$3.2M annual cost savings",
        "99.99% uptime achieved",
        "45% customer satisfaction boost"
      ],
      metrics: { efficiency: "+40%", savings: "$3.2M", uptime: "99.99%", satisfaction: "+45%" },
      image: "🛍️",
      testimonial: "The automation transformed our business. We scaled from 50K to 500K orders without adding headcount."
    },
    {
      id: 2,
      title: "Multi-Brand Marketplace Integrates 500+ Sellers",
      category: "E-Commerce",
      client: "MarketHub",
      industry: "Marketplace Platform",
      duration: "3 months",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Kafka", "Docker"],
      challenge: "Fragmented seller onboarding, inconsistent inventory data, and payment reconciliation issues.",
      solution: "Unified seller dashboard with automated onboarding, inventory sync, and payment processing.",
      results: [
        "500+ sellers onboarded in 3 months",
        "95% faster seller activation",
        "$5.2M GMV increase",
        "Zero payment reconciliation errors"
      ],
      metrics: { sellers: "+500", speed: "95%", gmv: "$5.2M", accuracy: "100%" },
      image: "🏪"
    },
    {
      id: 3,
      title: "Luxury Brand Launches NFT Collection, Generates $12M",
      category: "Blockchain",
      client: "LuxeLabs",
      industry: "Luxury Retail",
      duration: "2 months",
      technologies: ["Solidity", "Web3.js", "IPFS", "React", "Node.js"],
      challenge: "Brand needed to enter Web3 space with exclusive digital collectibles and community engagement.",
      solution: "Custom NFT marketplace with exclusive drops, rarity system, and community rewards.",
      results: [
        "$12M in primary sales",
        "10,000+ NFT holders",
        "80% secondary market royalties",
        "200K+ community members"
      ],
      metrics: { sales: "$12M", holders: "10K+", royalties: "80%", community: "200K+" },
      image: "💎"
    },
    {
      id: 4,
      title: "D2C Startup Achieves 300% Growth with Automation",
      category: "E-Commerce",
      client: "DirectLife",
      industry: "Direct-to-Consumer",
      duration: "2 months",
      technologies: ["Shopify", "Python", "Zapier", "Google Analytics", "Mailchimp"],
      challenge: "Inability to scale marketing, inventory, and customer service during rapid growth.",
      solution: "Full marketing automation, inventory sync, and AI-powered customer support.",
      results: [
        "300% revenue growth in 6 months",
        "65% reduction in CAC",
        "45% increase in retention",
        "24/7 automated support"
      ],
      metrics: { growth: "300%", cac: "-65%", retention: "+45%", support: "24/7" },
      image: "📈"
    },
    {
      id: 5,
      title: "Grocery Delivery App Handles 100K+ Daily Orders",
      category: "Food Tech",
      client: "QuickCart",
      industry: "Food Delivery",
      duration: "3 months",
      technologies: ["React Native", "Node.js", "MongoDB", "Redis", "Google Maps"],
      challenge: "Slow delivery times, driver management issues, and order accuracy problems.",
      solution: "Route optimization AI, driver tracking, and real-time inventory management.",
      results: [
        "100K+ daily orders processed",
        "30% faster delivery times",
        "98% order accuracy",
        "45% driver efficiency increase"
      ],
      metrics: { orders: "100K+", speed: "+30%", accuracy: "98%", efficiency: "+45%" },
      image: "🛒"
    },
    {
      id: 6,
      title: "Subscription Box Service Reduces Churn by 60%",
      category: "SaaS",
      client: "BoxMaster",
      industry: "Subscription",
      duration: "2 months",
      technologies: ["React", "Stripe", "SendGrid", "Segment", "Mixpanel"],
      challenge: "High churn rate, poor personalization, and manual customer segmentation.",
      solution: "AI-powered personalization, automated retention campaigns, and predictive churn modeling.",
      results: [
        "60% churn reduction",
        "35% LTV increase",
        "80% automated renewals",
        "45% engagement boost"
      ],
      metrics: { churn: "-60%", ltv: "+35%", renewals: "80%", engagement: "+45%" },
      image: "📦"
    },
    {
      id: 7,
      title: "Furniture Retailer Launches AR Shopping Experience",
      category: "AR/VR",
      client: "HomeStyle",
      industry: "Retail",
      duration: "3 months",
      technologies: ["Three.js", "React", "WebXR", "TensorFlow", "Firebase"],
      challenge: "High return rates (35%) due to customers unable to visualize products in their space.",
      solution: "AR-powered virtual try-on with accurate sizing and room visualization.",
      results: [
        "65% reduction in returns",
        "85% increase in conversion",
        "40% higher AOV",
        "200K+ AR sessions monthly"
      ],
      metrics: { returns: "-65%", conversion: "+85%", aov: "+40%", sessions: "200K+" },
      image: "🪑"
    },
    {
      id: 8,
      title: "Second-Hand Marketplace Achieves 500K Active Users",
      category: "Marketplace",
      client: "ReTrade",
      industry: "Resale",
      duration: "4 months",
      technologies: ["Next.js", "PostgreSQL", "ElasticSearch", "AWS", "Stripe"],
      challenge: "Poor search, user trust issues, and complex payment escrow requirements.",
      solution: "AI-powered search, escrow payment system, and user verification system.",
      results: [
        "500K active users",
        "45% monthly growth",
        "$8M transaction volume",
        "99.9% fraud prevention"
      ],
      metrics: { users: "500K", growth: "45%", volume: "$8M", fraud: "99.9%" },
      image: "🔄"
    },

    // Fintech & Blockchain (8 cases)
    {
      id: 9,
      title: "Crypto Exchange Handles $1B Monthly Volume",
      category: "Fintech",
      client: "CoinTrade",
      industry: "Cryptocurrency",
      duration: "6 months",
      technologies: ["Solidity", "Web3.js", "Node.js", "Redis", "AWS"],
      challenge: "Slow transaction speeds, security vulnerabilities, and poor user experience.",
      solution: "High-performance matching engine, multi-sig wallets, and real-time market data.",
      results: [
        "$1B+ monthly volume",
        "100K+ active traders",
        "99.99% uptime",
        "Zero security breaches"
      ],
      metrics: { volume: "$1B+", traders: "100K+", uptime: "99.99%", security: "0 breaches" },
      image: "💰"
    },
    {
      id: 10,
      title: "DeFi Protocol Raises $50M in TVL",
      category: "DeFi",
      client: "YieldFarm",
      industry: "Decentralized Finance",
      duration: "3 months",
      technologies: ["Solidity", "Hardhat", "OpenZeppelin", "The Graph", "IPFS"],
      challenge: "Complex yield farming mechanisms, security concerns, and user onboarding friction.",
      solution: "Audited smart contracts, simplified UI, and educational onboarding flow.",
      results: [
        "$50M TVL in 3 months",
        "15,000+ unique wallets",
        "35% APY average",
        "Passed 3 security audits"
      ],
      metrics: { tvl: "$50M", wallets: "15K+", apy: "35%", audits: "3" },
      image: "🌾"
    },
    {
      id: 11,
      title: "Payment Gateway Processes $200M Transactions",
      category: "Payments",
      client: "PayFast",
      industry: "Payment Processing",
      duration: "4 months",
      technologies: ["Node.js", "PostgreSQL", "Kafka", "Redis", "Docker"],
      challenge: "High transaction latency, reconciliation errors, and compliance issues.",
      solution: "Real-time payment processing with automated reconciliation and fraud detection.",
      results: [
        "$200M processed annually",
        "99.95% success rate",
        "50ms average latency",
        "PCI-DSS compliant"
      ],
      metrics: { volume: "$200M", success: "99.95%", latency: "50ms", compliance: "PCI-DSS" },
      image: "💳"
    },
    {
      id: 12,
      title: "Digital Bank Acquires 1M+ Users in 6 Months",
      category: "Neobank",
      client: "NeoBank",
      industry: "Digital Banking",
      duration: "5 months",
      technologies: ["React Native", "Node.js", "MongoDB", "Kubernetes", "AWS"],
      challenge: "Traditional banking inefficiencies, slow onboarding, and limited features.",
      solution: "Full-stack digital banking platform with instant onboarding and AI insights.",
      results: [
        "1M+ users acquired",
        "95% user satisfaction",
        "$50M deposits",
        "5-minute onboarding"
      ],
      metrics: { users: "1M+", satisfaction: "95%", deposits: "$50M", onboarding: "5min" },
      image: "🏦"
    },
    {
      id: 13,
      title: "Insurance Platform Automates Claims Processing",
      category: "Insurtech",
      client: "InsureAI",
      industry: "Insurance",
      duration: "4 months",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      challenge: "Manual claims processing taking 2-3 weeks, high fraud rates.",
      solution: "AI-powered claims processing with computer vision and fraud detection.",
      results: [
        "90% faster claims processing",
        "75% fraud detection increase",
        "$10M saved annually",
        "98% customer satisfaction"
      ],
      metrics: { speed: "+90%", fraud: "+75%", savings: "$10M", satisfaction: "98%" },
      image: "📋"
    },
    {
      id: 14,
      title: "Stock Trading Platform Achieves 10M Downloads",
      category: "Trading",
      client: "TradeSmart",
      industry: "Stock Trading",
      duration: "5 months",
      technologies: ["React Native", "Node.js", "WebSockets", "Redis", "AWS"],
      challenge: "Complex interface, slow data feeds, and user retention issues.",
      solution: "Simplified trading interface, real-time data streaming, and gamification.",
      results: [
        "10M+ downloads",
        "500K+ daily active users",
        "$5B trading volume",
        "4.8/5 app store rating"
      ],
      metrics: { downloads: "10M+", dau: "500K+", volume: "$5B", rating: "4.8" },
      image: "📊"
    },
    {
      id: 15,
      title: "Crypto Wallet Secures $100M in Assets",
      category: "Crypto",
      client: "SafeWallet",
      industry: "Cryptocurrency",
      duration: "3 months",
      technologies: ["React Native", "Web3.js", "Biometrics", "HSM", "AWS"],
      challenge: "Security vulnerabilities, complex key management, and user trust issues.",
      solution: "Multi-layer security with biometric authentication and hardware wallet integration.",
      results: [
        "$100M+ assets secured",
        "200K+ active wallets",
        "Zero security incidents",
        "99.9% user trust rating"
      ],
      metrics: { assets: "$100M+", wallets: "200K+", incidents: "0", trust: "99.9%" },
      image: "🔐"
    },
    {
      id: 16,
      title: "Remittance Platform Reduces Transfer Costs by 70%",
      category: "Remittance",
      client: "SendFast",
      industry: "Money Transfer",
      duration: "3 months",
      technologies: ["Blockchain", "Smart Contracts", "React", "Node.js", "AWS"],
      challenge: "High transfer fees (15%), slow processing (3-5 days), and limited coverage.",
      solution: "Blockchain-based remittance with instant settlements and 1% fees.",
      results: [
        "70% cost reduction",
        "Instant transfers",
        "50+ countries covered",
        "$50M monthly volume"
      ],
      metrics: { cost: "-70%", speed: "instant", countries: "50+", volume: "$50M" },
      image: "🌍"
    },

    // Security & Cybersecurity (8 cases)
    {
      id: 17,
      title: "Fortune 500 Company Secures Critical Infrastructure",
      category: "Security",
      client: "GlobalCorp",
      industry: "Enterprise",
      duration: "6 months",
      technologies: ["SIEM", "IDS/IPS", "Firewalls", "EDR", "Threat Intelligence"],
      challenge: "Advanced persistent threats targeting critical infrastructure, 3 breach attempts monthly.",
      solution: "Zero-trust architecture with 24/7 monitoring and AI threat detection.",
      results: [
        "Zero successful breaches",
        "98% threat detection rate",
        "50% faster incident response",
        "ISO 27001 certified"
      ],
      metrics: { breaches: "0", detection: "98%", response: "+50%", certified: "ISO 27001" },
      image: "🛡️"
    },
    {
      id: 18,
      title: "E-Commerce Platform Blocks 1M+ Fraud Attempts",
      category: "Fraud Detection",
      client: "ShopSecure",
      industry: "E-Commerce",
      duration: "3 months",
      technologies: ["Python", "Machine Learning", "Redis", "Kafka", "AWS"],
      challenge: "$5M annual fraud losses, chargeback fees, and customer disputes.",
      solution: "AI fraud detection with real-time scoring and automated blocking.",
      results: [
        "1M+ fraud attempts blocked",
        "95% reduction in fraud losses",
        "99.9% false positive rate",
        "$4.5M saved annually"
      ],
      metrics: { blocked: "1M+", reduction: "95%", falsePos: "0.1%", savings: "$4.5M" },
      image: "🚫"
    },
    {
      id: 19,
      title: "Healthcare Provider Achieves HIPAA Compliance",
      category: "Compliance",
      client: "HealthTech",
      industry: "Healthcare",
      duration: "4 months",
      technologies: ["Encryption", "Access Control", "Audit Logs", "Vault", "AWS"],
      challenge: "Non-compliance risks, data breach potential, and audit failures.",
      solution: "End-to-end encryption, role-based access, and comprehensive audit trails.",
      results: [
        "100% HIPAA compliance",
        "Zero security incidents",
        "Automated audit reporting",
        "90% faster compliance checks"
      ],
      metrics: { compliance: "100%", incidents: "0", reports: "automated", speed: "+90%" },
      image: "🏥"
    },
    {
      id: 20,
      title: "SaaS Platform Achieves SOC2 Type II Certification",
      category: "Compliance",
      client: "SaaS Secure",
      industry: "Software",
      duration: "5 months",
      technologies: ["Terraform", "Kubernetes", "Vault", "Prometheus", "Grafana"],
      challenge: "Enterprise clients requiring SOC2, manual evidence collection, and gaps in controls.",
      solution: "Automated compliance monitoring, evidence collection, and control implementation.",
      results: [
        "SOC2 Type II certified",
        "Automated compliance",
        "50+ enterprise clients",
        "$10M new ARR"
      ],
      metrics: { certified: "SOC2", automation: "100%", clients: "50+", arr: "$10M" },
      image: "📜"
    },
    {
      id: 21,
      title: "Cloud Provider Mitigates DDoS Attack of 1.5Tbps",
      category: "DDoS Protection",
      client: "CloudServe",
      industry: "Cloud Hosting",
      duration: "2 months",
      technologies: ["Anycast", "WAF", "Rate Limiting", "Scrubbers", "AWS Shield"],
      challenge: "Targeted DDoS attacks causing downtime and customer churn.",
      solution: "Multi-layer DDoS protection with automated mitigation and traffic scrubbing.",
      results: [
        "1.5Tbps attack mitigated",
        "100% uptime maintained",
        "Zero customer impact",
        "99.99% availability"
      ],
      metrics: { attack: "1.5Tbps", uptime: "100%", impact: "0", availability: "99.99%" },
      image: "🌊"
    },
    {
      id: 22,
      title: "Fintech Startup Passes Rigorous Security Audit",
      category: "Security Audit",
      client: "FinSecure",
      industry: "Fintech",
      duration: "2 months",
      technologies: ["OWASP", "Penetration Testing", "Code Review", "SAST", "DAST"],
      challenge: "Investor requirements, regulatory compliance, and security certification needed.",
      solution: "Comprehensive security audit, vulnerability remediation, and continuous monitoring.",
      results: [
        "100% audit pass rate",
        "$15M investment secured",
        "Zero critical findings",
        "Bank-grade security"
      ],
      metrics: { audit: "100%", investment: "$15M", findings: "0", security: "bank-grade" },
      image: "🔍"
    },
    {
      id: 23,
      title: "Government Agency Secures 1M+ Citizen Records",
      category: "Government",
      client: "GovSecure",
      industry: "Public Sector",
      duration: "8 months",
      technologies: ["Zero-Trust", "MFA", "SIEM", "DLP", "Encryption"],
      challenge: "Legacy systems, data breaches, and strict compliance requirements.",
      solution: "Modern security architecture with zero-trust and continuous monitoring.",
      results: [
        "1M+ records protected",
        "Zero data breaches",
        "100% compliance",
        "Federal certification"
      ],
      metrics: { records: "1M+", breaches: "0", compliance: "100%", certified: "Federal" },
      image: "🏛️"
    },
    {
      id: 24,
      title: "Mobile App Developer Secures 5M+ Downloads",
      category: "Mobile Security",
      client: "AppSecure",
      industry: "Mobile Apps",
      duration: "2 months",
      technologies: ["SSL Pinning", "Code Obfuscation", "Root Detection", "Biometrics"],
      challenge: "Reverse engineering risks, API abuse, and credential theft.",
      solution: "Multi-layer mobile security with runtime protection and secure storage.",
      results: [
        "5M+ secure downloads",
        "Zero security incidents",
        "99.9% user trust",
        "Top 10 security rating"
      ],
      metrics: { downloads: "5M+", incidents: "0", trust: "99.9%", rating: "Top 10" },
      image: "📱"
    },

    // Automation & AI (8 cases)
    {
      id: 25,
      title: "Manufacturing Plant Achieves 99% Automation",
      category: "Industrial",
      client: "AutoFactory",
      industry: "Manufacturing",
      duration: "6 months",
      technologies: ["IoT", "Python", "PLC", "MQTT", "TensorFlow"],
      challenge: "Manual processes causing 25% downtime, quality issues, and high labor costs.",
      solution: "AI-powered predictive maintenance and robotic process automation.",
      results: [
        "99% automation rate",
        "40% cost reduction",
        "35% productivity increase",
        "Zero quality defects"
      ],
      metrics: { automation: "99%", cost: "-40%", productivity: "+35%", defects: "0" },
      image: "🏭"
    },
    {
      id: 26,
      title: "Logistics Company Optimizes Routes, Saves $5M",
      category: "Logistics",
      client: "LogiSmart",
      industry: "Transportation",
      duration: "3 months",
      technologies: ["AI", "Google Maps", "Python", "Redis", "Docker"],
      challenge: "Inefficient routes, high fuel costs, and delivery delays.",
      solution: "AI route optimization with real-time traffic and weather integration.",
      results: [
        "$5M annual fuel savings",
        "25% faster deliveries",
        "30% fleet efficiency",
        "20% carbon reduction"
      ],
      metrics: { savings: "$5M", speed: "+25%", efficiency: "+30%", carbon: "-20%" },
      image: "🚚"
    },
    {
      id: 27,
      title: "Customer Support Center Automates 80% of Tickets",
      category: "Customer Service",
      client: "SupportAI",
      industry: "SaaS",
      duration: "2 months",
      technologies: ["NLP", "Python", "Chatbot", "Dialogflow", "Zendesk"],
      challenge: "500+ daily tickets, long response times, and agent burnout.",
      solution: "AI-powered chatbot with intelligent routing and knowledge base.",
      results: [
        "80% ticket automation",
        "90% faster response",
        "45% cost reduction",
        "95% customer satisfaction"
      ],
      metrics: { automation: "80%", response: "+90%", cost: "-45%", satisfaction: "95%" },
      image: "💬"
    },
    {
      id: 28,
      title: "HR Department Automates Recruitment, Saves 1000+ Hours",
      category: "HR Tech",
      client: "HireSmart",
      industry: "Recruitment",
      duration: "2 months",
      technologies: ["Python", "NLP", "React", "PostgreSQL", "AWS"],
      challenge: "Manual resume screening, scheduling conflicts, and slow hiring.",
      solution: "AI resume screening, automated scheduling, and candidate matching.",
      results: [
        "1000+ hours saved annually",
        "70% faster hiring",
        "95% candidate satisfaction",
        "40% better quality hires"
      ],
      metrics: { hours: "1000+", speed: "+70%", satisfaction: "95%", quality: "+40%" },
      image: "👥"
    },
    {
      id: 29,
      title: "Marketing Agency Automates Social Media for 100+ Clients",
      category: "Marketing",
      client: "SocialAI",
      industry: "Marketing",
      duration: "3 months",
      technologies: ["Python", "APIs", "React", "PostgreSQL", "Redis"],
      challenge: "Manual posting, engagement tracking, and content creation at scale.",
      solution: "AI content generation, automated scheduling, and engagement analytics.",
      results: [
        "100+ clients managed",
        "85% time reduction",
        "3x engagement increase",
        "200K+ automated posts"
      ],
      metrics: { clients: "100+", time: "-85%", engagement: "3x", posts: "200K+" },
      image: "📱"
    },
    {
      id: 30,
      title: "Real Estate Platform Automates Property Matching",
      category: "Real Estate",
      client: "PropMatch",
      industry: "Real Estate",
      duration: "2 months",
      technologies: ["Python", "ML", "React", "PostGIS", "ElasticSearch"],
      challenge: "Poor property recommendations, manual lead follow-up, and slow response.",
      solution: "AI property matching with predictive analytics and automated communication.",
      results: [
        "45% faster sales",
        "60% lead conversion",
        "$50M in transactions",
        "200K+ properties matched"
      ],
      metrics: { sales: "+45%", conversion: "+60%", volume: "$50M", matches: "200K+" },
      image: "🏠"
    },
    {
      id: 31,
      title: "Healthcare Provider Automates Patient Scheduling",
      category: "Healthcare",
      client: "HealthAuto",
      industry: "Healthcare",
      duration: "2 months",
      technologies: ["Python", "React", "Twilio", "PostgreSQL", "Docker"],
      challenge: "No-show rates (30%), scheduling conflicts, and manual reminders.",
      solution: "Automated scheduling with AI predictions and smart reminders.",
      results: [
        "60% no-show reduction",
        "40% schedule optimization",
        "95% patient satisfaction",
        "$2M annual savings"
      ],
      metrics: { noshow: "-60%", optimization: "+40%", satisfaction: "95%", savings: "$2M" },
      image: "🏥"
    },
    {
      id: 32,
      title: "Legal Firm Automates Document Review, Saves 5000+ Hours",
      category: "Legal Tech",
      client: "LegalAI",
      industry: "Legal Services",
      duration: "3 months",
      technologies: ["NLP", "Python", "ElasticSearch", "React", "AWS"],
      challenge: "Manual document review (200+ hours per case), errors, and high costs.",
      solution: "AI-powered document analysis with keyword extraction and summarization.",
      results: [
        "5000+ hours saved annually",
        "90% faster document review",
        "99% accuracy rate",
        "$3M cost savings"
      ],
      metrics: { hours: "5000+", speed: "+90%", accuracy: "99%", savings: "$3M" },
      image: "⚖️"
    },

    // Development & DevOps (4 cases)
    {
      id: 33,
      title: "Startup Migrates to Microservices, Achieves 99.99% Uptime",
      category: "DevOps",
      client: "MicroStart",
      industry: "SaaS",
      duration: "5 months",
      technologies: ["Kubernetes", "Docker", "Istio", "Prometheus", "Grafana"],
      challenge: "Monolith causing scaling issues, frequent outages, and slow deployments.",
      solution: "Complete microservices migration with service mesh and observability.",
      results: [
        "99.99% uptime achieved",
        "50% faster deployments",
        "10x scalability",
        "Zero downtime deployments"
      ],
      metrics: { uptime: "99.99%", deployments: "+50%", scale: "10x", downtime: "0" },
      image: "⚙️"
    },
    {
      id: 34,
      title: "Mobile App Achieves 4.9 Star Rating with 1M+ Downloads",
      category: "Mobile Dev",
      client: "AppMaster",
      industry: "Mobile Apps",
      duration: "4 months",
      technologies: ["React Native", "Redux", "Firebase", "Sentry", "App Center"],
      challenge: "Poor performance, frequent crashes, and negative reviews.",
      solution: "Complete rebuild with optimized architecture and performance monitoring.",
      results: [
        "4.9 star rating",
        "1M+ downloads",
        "99.9% crash-free",
        "45% faster load times"
      ],
      metrics: { rating: "4.9", downloads: "1M+", crashFree: "99.9%", speed: "+45%" },
      image: "📱"
    },
    {
      id: 35,
      title: "E-Learning Platform Scales to 2M+ Users",
      category: "Scalability",
      client: "LearnFast",
      industry: "EdTech",
      duration: "4 months",
      technologies: ["Node.js", "PostgreSQL", "Redis", "AWS", "CDN"],
      challenge: "Performance degradation at 500K users, slow video streaming, and high costs.",
      solution: "Horizontal scaling, CDN integration, and database optimization.",
      results: [
        "2M+ concurrent users",
        "50% infrastructure cost",
        "99.99% availability",
        "200ms average latency"
      ],
      metrics: { users: "2M+", cost: "-50%", availability: "99.99%", latency: "200ms" },
      image: "🎓"
    },
    {
      id: 36,
      title: "Open Source Project Gains 50K+ GitHub Stars",
      category: "Open Source",
      client: "OSProject",
      industry: "Developer Tools",
      duration: "Ongoing",
      technologies: ["TypeScript", "React", "Node.js", "Vite", "Vitest"],
      challenge: "Low adoption, poor documentation, and community engagement.",
      solution: "Improved documentation, developer experience, and community building.",
      results: [
        "50K+ GitHub stars",
        "1000+ contributors",
        "500K+ npm downloads",
        "Top 10 trending"
      ],
      metrics: { stars: "50K+", contributors: "1000+", downloads: "500K+", trending: "Top 10" },
      image: "⭐"
    }
  ];

  const categories = ['all', ...new Set(caseStudies.map(c => c.category))];
  const filteredCases = filter === 'all' ? caseStudies : caseStudies.filter(c => c.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20"></div>
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
              <FaTrophy className="text-emerald-400 text-7xl" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
              36+ successful projects delivered across industries • $200M+ value created
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <div className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <span className="text-emerald-400">🎯 98% Client Satisfaction</span>
              </div>
              <div className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <span className="text-emerald-400">🚀 3x Average Growth</span>
              </div>
              <div className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <span className="text-emerald-400">💰 $200M+ Value Created</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: FaChartLine, value: "36+", label: "Projects Delivered" },
            { icon: FaUsers, value: "100+", label: "Happy Clients" },
            { icon: FaMoneyBillWave, value: "$200M+", label: "Value Created" },
            { icon: FaRocket, value: "99%", label: "Success Rate" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center"
            >
              <stat.icon className="text-emerald-400 text-3xl mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((caseStudy, i) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 9) * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCase(caseStudy)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                    {caseStudy.category}
                  </span>
                  <span className="text-4xl">{caseStudy.image}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                <p className="text-white/60 text-sm mb-4">{caseStudy.client}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-xs bg-white/5 px-2 py-1 rounded-full">{tech}</span>
                  ))}
                  {caseStudy.technologies.length > 3 && (
                    <span className="text-xs bg-white/5 px-2 py-1 rounded-full">+{caseStudy.technologies.length - 3}</span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  {Object.entries(caseStudy.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-emerald-400 font-bold text-sm">{value}</p>
                      <p className="text-white/40 text-[10px] capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Case Study Details */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4" onClick={() => setSelectedCase(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-4xl w-full max-h-[85vh] overflow-y-auto bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-emerald-500/30 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                  {selectedCase.category}
                </span>
                <h2 className="text-3xl font-bold mt-3">{selectedCase.title}</h2>
                <p className="text-white/60 mt-1">{selectedCase.client} • {selectedCase.duration}</p>
              </div>
              <button onClick={() => setSelectedCase(null)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/40 rounded-xl p-5">
                <h3 className="text-emerald-400 font-bold mb-3">The Challenge</h3>
                <p className="text-white/70 text-sm">{selectedCase.challenge}</p>
              </div>
              <div className="bg-black/40 rounded-xl p-5">
                <h3 className="text-emerald-400 font-bold mb-3">The Solution</h3>
                <p className="text-white/70 text-sm">{selectedCase.solution}</p>
              </div>
            </div>

            <div className="bg-black/40 rounded-xl p-5 mb-6">
              <h3 className="text-emerald-400 font-bold mb-4">Key Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(selectedCase.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-white/5 rounded-lg">
                    <p className="text-emerald-400 font-bold text-lg">{value}</p>
                    <p className="text-white/40 text-xs capitalize">{key}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/40 rounded-xl p-5 mb-6">
              <h3 className="text-emerald-400 font-bold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCase.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>

            {selectedCase.testimonial && (
              <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl p-5">
                <FaQuoteLeft className="text-emerald-400 text-2xl mb-3" />
                <p className="text-white/80 italic">"{selectedCase.testimonial}"</p>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 rounded-2xl p-12 text-center"
        >
          <FaCrown className="text-emerald-400 text-5xl mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join 100+ satisfied clients who achieved extraordinary results with my solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-bold text-lg"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>

    </div>
  );
};

export default CaseStudiesPage;