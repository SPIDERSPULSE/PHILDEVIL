import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCheck, FaStar, FaCrown, FaRocket, FaArrowRight, 
  FaDollarSign, FaClock, FaUsers, FaCode, FaRobot,
  FaShieldAlt, FaChartLine, FaWhatsapp, FaEnvelope,
  FaCalendarAlt, FaCog, FaBriefcase, FaDatabase,
  FaCloud, FaMobile, FaDesktop, FaServer
} from 'react-icons/fa';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('project');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  // Project-Based Pricing
  const projectPricing = [
    {
      name: 'Landing Page',
      price: '300',
      range: '$300 - $1,500',
      description: 'High-converting single page for campaigns or startups.',
      features: [
        'Custom design & branding',
        'Mobile responsive',
        'SEO optimized',
        'Contact forms integration',
        'Analytics setup',
        'Fast loading speed',
        '1 round of revisions'
      ],
      popular: false,
      icon: FaMobile,
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      timeline: '3-5 days'
    },
    {
      name: 'Full Website',
      price: '9,000',
      range: '$9,000 - $5,000',
      description: 'Complete React-based website with custom functionality.',
      features: [
        'React/Next.js development',
        'Custom components',
        'API integration',
        'CMS setup',
        'Performance optimization',
        'Security hardening',
        '3 rounds of revisions',
        '30 days support'
      ],
      popular: true,
      icon: FaDesktop,
      color: 'gold',
      gradient: 'from-amber-500 to-amber-600',
      timeline: '2-4 weeks'
    },
    {
      name: 'Website Cloning',
      price: '800',
      range: '$800 - $3,000',
      description: 'Full replication of any existing website.',
      features: [
        '98% accuracy guarantee',
        'Layout preservation',
        'Content extraction',
        'Functional flows',
        'Reusable framework',
        'Documentation included',
        '2 rounds of revisions'
      ],
      popular: false,
      icon: FaCode,
      color: 'tech-blue',
      gradient: 'from-tech-blue to-cyan-500',
      timeline: '5-10 days'
    },
    {
      name: 'POS Integration',
      price: '1,500',
      range: '$1,500 - $4,000',
      description: 'Connect your POS system to your website in real-time.',
      features: [
        'Real-time sync',
        'Inventory management',
        'Order tracking',
        'API development',
        'Middleware setup',
        'Testing & validation',
        'Documentation'
      ],
      popular: false,
      icon: FaDatabase,
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      timeline: '2-3 weeks'
    },
    {
      name: 'Automation System',
      price: '500',
      range: '$500 - $2,500',
      description: 'Custom web scraping and workflow automation.',
      features: [
        'Puppeteer/Playwright',
        'Data extraction',
        'Scheduled tasks',
        'API-ready outputs',
        'Error handling',
        'Documentation',
        '1 month support'
      ],
      popular: false,
      icon: FaRobot,
      color: 'tech-blue',
      gradient: 'from-tech-blue to-cyan-500',
      timeline: '1-2 weeks'
    },
    {
      name: 'Security Audit',
      price: '800',
      range: '$800 - $2,000',
      description: 'Comprehensive vulnerability assessment and hardening.',
      features: [
        'OWASP audit',
        'Penetration testing',
        'Vulnerability report',
        'Remediation plan',
        'Security recommendations',
        'Post-audit support',
        'Confidential report'
      ],
      popular: false,
      icon: FaShieldAlt,
      color: 'alert-red',
      gradient: 'from-alert-red to-red-600',
      timeline: '3-7 days'
    }
  ];

  // Hourly Pricing
  const hourlyPricing = [
    { 
      service: 'Full-Stack Development', 
      rate: '$20 - $80', 
      description: 'React, Next.js, Node.js, Python development',
      icon: FaCode,
      color: 'emerald'
    },
    { 
      service: 'Automation Engineering', 
      rate: '$30 - $90', 
      description: 'Scraping, cloning, custom bots, workflow automation',
      icon: FaRobot,
      color: 'tech-blue'
    },
    { 
      service: 'Security & Pentesting', 
      rate: '$45 - $100', 
      description: 'Audits, pentesting, hardening, security consulting',
      icon: FaShieldAlt,
      color: 'alert-red'
    },
    { 
      service: 'Technical Consultation', 
      rate: '$20', 
      description: 'Strategy calls, code review, technical advisory',
      icon: FaChartLine,
      color: 'gold'
    }
  ];

  // Retainer Plans
  const retainers = [
    {
      name: 'Starter',
      price: '800',
      hours: '10',
      description: 'Perfect for ongoing maintenance and small tasks.',
      features: [
        '10 hours/month',
        'Priority support',
        '48-hour response',
        'Monthly reports',
        'Basic monitoring',
        'Email support'
      ],
      icon: FaStar,
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      popular: false,
      savings: '10%'
    },
    {
      name: 'Growth',
      price: '1,500',
      hours: '20',
      description: 'For active development and scaling businesses.',
      features: [
        '20 hours/month',
        'Priority support',
        '24-hour response',
        'Strategy calls',
        'Advanced monitoring',
        'Quarterly reviews',
        'WhatsApp support'
      ],
      icon: FaCrown,
      color: 'gold',
      gradient: 'from-amber-500 to-amber-600',
      popular: true,
      savings: '15%'
    },
    {
      name: 'Enterprise',
      price: '3,000',
      hours: '40',
      description: 'For enterprise needs and long-term partnerships.',
      features: [
        '40 hours/month',
        'Dedicated support',
        'Direct access',
        'Strategic planning',
        'Full infrastructure management',
        'Monthly workshops',
        '24/7 emergency support'
      ],
      icon: FaRocket,
      color: 'tech-blue',
      gradient: 'from-tech-blue to-cyan-500',
      popular: false,
      savings: '20%'
    },
    {
      name: 'Custom',
      price: 'Tailored',
      hours: 'Flexible',
      description: 'Custom solutions for unique requirements.',
      features: [
        'Custom hours',
        'White-label support',
        'Team training',
        'Architecture review',
        'Custom SLAs',
        'On-site available',
        'Priority queue'
      ],
      icon: FaCog,
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      popular: false,
      savings: 'Contact'
    }
  ];

  // FAQ Data
  const faqs = [
    { q: 'How does billing work?', a: '35% upfront to begin, 50% upon completion. For projects over $5,000, milestone-based payments available.' },
    { q: 'What is included in support?', a: '30 days of free support post-launch for bug fixes and minor adjustments. Extended support available via retainer.' },
    { q: 'Can I upgrade my plan?', a: 'Yes, you can upgrade anytime. We\'ll prorate the difference for the remaining period.' },
    { q: 'Do you offer refunds?', a: 'Refunds are handled on a case-by-case basis. If work hasn\'t started, full refund available.' },
    { q: 'What payment methods do you accept?', a: 'Bank transfer, PayPal, Wise, Stripe, and M-Pesa for local clients.' },
    { q: 'How fast do you respond?', a: 'Typically within 4 hours on WhatsApp, 12 hours on email.' }
  ];

  const stats = [
    { value: '4+', label: 'Years Experience', icon: FaClock },
    { value: '73+', label: 'Projects Delivered', icon: FaBriefcase },
    { value: '58+', label: 'Happy Clients', icon: FaUsers },
    { value: '90%', label: 'Success Rate', icon: FaChartLine }
  ];

  return (
    <div className="py-20 px-6 min-h-screen bg-black">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs text-amber-400 font-mono">pricing_models</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">Transparent</span> Pricing
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest pricing for exceptional work.
            Choose the model that works best for your project.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                <Icon className="text-amber-400 text-2xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 rounded-full p-1 inline-flex gap-1">
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-6 py-2 rounded-full transition-all text-sm font-medium ${
                billingCycle === 'project' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Project-Based
            </button>
            <button
              onClick={() => setBillingCycle('hourly')}
              className={`px-6 py-2 rounded-full transition-all text-sm font-medium ${
                billingCycle === 'hourly' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Hourly
            </button>
            <button
              onClick={() => setBillingCycle('retainer')}
              className={`px-6 py-2 rounded-full transition-all text-sm font-medium ${
                billingCycle === 'retainer' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Retainers
            </button>
          </div>
        </div>

        {/* Project-Based Pricing Grid */}
        <AnimatePresence mode="wait">
          {billingCycle === 'project' && (
            <motion.div
              key="project"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projectPricing.map((plan, index) => {
                const Icon = plan.icon;
                const isPopular = plan.popular;
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    onMouseEnter={() => setHoveredPlan(plan.name)}
                    onMouseLeave={() => setHoveredPlan(null)}
                    className={`relative bg-white/5 border rounded-2xl p-6 transition-all duration-300 ${
                      isPopular 
                        ? 'border-amber-500/50 shadow-lg shadow-amber-500/10' 
                        : 'border-white/10 hover:border-amber-500/30'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <Icon className={`text-3xl mb-3 ${isPopular ? 'text-amber-400' : 'text-emerald-400'}`} />
                    
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-amber-400">${plan.price}</span>
                      <span className="text-white/40 text-sm">+</span>
                    </div>
                    <p className="text-white/40 text-xs mb-3">{plan.range} • {plan.timeline}</p>
                    <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <FaCheck className="text-emerald-400 text-xs" />
                          <span className="text-white/60 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to="/contact"
                      className={`block text-center py-2 rounded-xl font-semibold transition-all ${
                        isPopular
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:scale-105'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Hourly Pricing */}
          {billingCycle === 'hourly' && (
            <motion.div
              key="hourly"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              {hourlyPricing.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.service} className={`p-6 flex flex-wrap justify-between items-center gap-4 ${index !== hourlyPricing.length - 1 ? 'border-b border-white/10' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/20 flex items-center justify-center`}>
                        <Icon className={`text-${item.color}-400 text-xl`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{item.service}</h3>
                        <p className="text-white/40 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-400">{item.rate}</div>
                      <p className="text-white/40 text-xs">per hour</p>
                    </div>
                  </div>
                );
              })}
              <div className="p-6 bg-white/5 border-t border-white/10 text-center">
                <p className="text-white/40 text-sm">Minimum 2 hours per session • Bulk hours available at discount</p>
              </div>
            </motion.div>
          )}

          {/* Retainer Plans */}
          {billingCycle === 'retainer' && (
            <motion.div
              key="retainer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {retainers.map((plan, index) => {
                const Icon = plan.icon;
                const isPopular = plan.popular;
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className={`relative bg-white/5 border rounded-2xl p-6 transition-all ${
                      isPopular 
                        ? 'border-amber-500/50 shadow-lg shadow-amber-500/10' 
                        : 'border-white/10 hover:border-amber-500/30'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs px-3 py-1 rounded-full">Best Value</span>
                      </div>
                    )}
                    
                    <Icon className={`text-3xl mb-3 ${isPopular ? 'text-amber-400' : 'text-emerald-400'}`} />
                    
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-amber-400">${plan.price}</span>
                      <span className="text-white/40 text-sm">/month</span>
                    </div>
                    <p className="text-white/40 text-xs mb-2">{plan.hours} hours/month</p>
                    {plan.savings !== 'Contact' && (
                      <p className="text-emerald-400 text-xs mb-3">Save {plan.savings} vs hourly</p>
                    )}
                    <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {plan.features.slice(0, 5).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <FaCheck className="text-emerald-400 text-xs" />
                          <span className="text-white/60 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to="/contact"
                      className={`block text-center py-2 rounded-xl font-semibold transition-all ${
                        isPopular
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:scale-105'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {plan.price === 'Tailored' ? 'Contact for Quote' : 'Start Retainer'}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-amber-500/30 transition"
              >
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-white/50 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom Quote CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-emerald-950/30 to-amber-950/30 rounded-2xl border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            Have a unique project requirement? Let's discuss and create a tailored package that fits your needs and budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl font-semibold hover:scale-105 transition-all"
            >
              Request Custom Quote <FaArrowRight />
            </Link>
            <a
              href="https://wa.me/254798436384"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
          <p className="text-white/30 text-xs mt-4">
            All prices in USD • 30 days free support included • NDA available
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;