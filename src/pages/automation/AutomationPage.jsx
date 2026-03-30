import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaRobot, FaBrain, FaChartLine, FaClock, FaRocket, FaCheckCircle,
  FaCrown, FaAward, FaMedal, FaMicrochip, FaNetworkWired, FaDatabase,
  FaCloud, FaShieldAlt, FaCogs, FaArrowRight, FaCode,
  FaInfinity, FaBolt, FaTasks, FaChartBar, FaUsers, FaGlobe,
  FaServer, FaBox, FaAws, FaTools, FaCog
} from 'react-icons/fa';

const AutomationPage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [counters, setCounters] = useState({
    processes: 0,
    efficiency: 0,
    saved: 0,
    accuracy: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        processes: prev.processes < 500 ? prev.processes + 25 : 500,
        efficiency: prev.efficiency < 85 ? prev.efficiency + 4.25 : 85,
        saved: prev.saved < 1000 ? prev.saved + 50 : 1000,
        accuracy: prev.accuracy < 99 ? prev.accuracy + 4.95 : 99
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const automationServices = [
    {
      icon: FaRobot,
      title: "AI-Powered Process Automation",
      description: "Intelligent automation solutions that learn and adapt to your business processes.",
      skills: ["Python", "TensorFlow", "OCR", "NLP", "Computer Vision"],
      timeline: "4-8 weeks",
      output: "End-to-end automation pipeline with AI decision-making"
    },
    {
      icon: FaBrain,
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipelines for predictive analytics and intelligent decision-making.",
      skills: ["Scikit-learn", "PyTorch", "MLflow", "Feature Store"],
      timeline: "6-10 weeks",
      output: "Production-ready ML pipelines with monitoring"
    },
    {
      icon: FaCogs,
      title: "RPA Solutions",
      description: "Robotic Process Automation for repetitive tasks, data entry, and workflow automation.",
      skills: ["UiPath", "Automation Anywhere", "Python", "Selenium"],
      timeline: "3-6 weeks",
      output: "Fully automated RPA workflows with error handling"
    },
    {
      icon: FaNetworkWired,
      title: "API Integration Hub",
      description: "Unified API gateway for seamless integration between disparate systems.",
      skills: ["REST APIs", "GraphQL", "Webhooks", "Message Queues"],
      timeline: "4-6 weeks",
      output: "Centralized integration platform with monitoring"
    },
    {
      icon: FaDatabase,
      title: "Data Pipeline Automation",
      description: "Automated ETL/ELT pipelines for real-time data processing and analytics.",
      skills: ["Apache Airflow", "Spark", "Kafka", "dbt"],
      timeline: "5-8 weeks",
      output: "Scalable data pipeline with real-time processing"
    },
    {
      icon: FaCloud,
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and configuration management.",
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
      timeline: "3-5 weeks",
      output: "Automated infrastructure with CI/CD integration"
    }
  ];

  const automationStack = [
    { name: "Python Automation", level: 96, description: "Scripting, bots, data processing" },
    { name: "Node.js Microservices", level: 92, description: "API automation, real-time" },
    { name: "TensorFlow AI", level: 88, description: "ML models, predictions" },
    { name: "Docker/K8s", level: 90, description: "Container orchestration" },
    { name: "AWS Lambda", level: 89, description: "Serverless automation" },
    { name: "MongoDB/Redis", level: 91, description: "Data storage & caching" }
  ];

  const automationProcess = [
    { step: "Discovery & Analysis", icon: FaTasks, time: "1-2 weeks", details: "Process mapping, pain points identification, ROI calculation" },
    { step: "Design & Architecture", icon: FaCog, time: "1-2 weeks", details: "Solution design, tech stack selection, architecture planning" },
    { step: "Development & Integration", icon: FaCode, time: "2-5 weeks", details: "Custom automation development, API integrations, testing" },
    { step: "Testing & Validation", icon: FaCheckCircle, time: "1-2 weeks", details: "Unit testing, integration testing, UAT, performance validation" },
    { step: "Deployment & Monitoring", icon: FaRocket, time: "1 week", details: "Production deployment, monitoring setup, alert configuration" },
    { step: "Optimization & Scaling", icon: FaInfinity, time: "Ongoing", details: "Continuous improvement, scaling, new feature addition" }
  ];

  const useCases = [
    {
      title: "E-commerce Automation",
      metrics: ["95% faster order processing", "99.9% inventory accuracy", "40% cost reduction"],
      icon: FaGlobe
    },
    {
      title: "Finance & Accounting",
      metrics: ["Automated reconciliation", "Real-time fraud detection", "80% manual work reduction"],
      icon: FaChartBar
    },
    {
      title: "Customer Support",
      metrics: ["24/7 AI chatbots", "60% faster response", "85% ticket resolution"],
      icon: FaUsers
    },
    {
      title: "Data Processing",
      metrics: ["10x faster processing", "Real-time analytics", "99% data accuracy"],
      icon: FaDatabase
    }
  ];

  const deliverables = [
    { title: "Automation Scripts", items: ["Python scripts", "Shell automation", "PowerShell modules", "Custom tools"] },
    { title: "API Integrations", items: ["REST APIs", "Webhook endpoints", "Data sync pipelines", "Real-time feeds"] },
    { title: "Monitoring Dashboards", items: ["Grafana dashboards", "Alert systems", "Performance metrics", "Log aggregation"] },
    { title: "Documentation", items: ["Technical docs", "User guides", "API documentation", "Runbooks"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <FaRobot className="text-emerald-400 text-7xl" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Intelligent Automation Engineering
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
              Transform your business with AI-powered automation, reducing costs by up to 70% 
              and increasing efficiency by 10x with intelligent systems that never sleep.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-bold"
              >
                Automate Your Business
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 border border-emerald-500/50 rounded-full font-bold hover:bg-emerald-500/10"
              >
                View Automation Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: FaTasks, value: counters.processes, label: "Processes Automated", suffix: "+" },
            { icon: FaChartLine, value: counters.efficiency, label: "Efficiency Increase", suffix: "%" },
            { icon: FaClock, value: counters.saved, label: "Hours Saved", suffix: "K+" },
            { icon: FaCheckCircle, value: counters.accuracy, label: "Accuracy Rate", suffix: ".9%" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center"
            >
              <stat.icon className="text-emerald-400 text-3xl mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">
                {stat.value.toFixed(stat.suffix === "%" && stat.value < 100 ? 1 : 0)}{stat.suffix}
              </p>
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
          <span className="text-emerald-400 font-mono text-sm">AUTOMATION SERVICES</span>
          <h2 className="text-4xl font-bold mt-2">End-to-End Automation Solutions</h2>
          <p className="text-white/60 mt-4">From simple scripts to complex AI-powered workflows</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationServices.map((service, i) => (
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

      {/* Automation Stack */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm">TECHNOLOGY STACK</span>
          <h2 className="text-4xl font-bold mt-2">Enterprise Automation Toolkit</h2>
          <p className="text-white/60 mt-4">Battle-tested tools and frameworks</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {automationStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-xl p-4 text-center"
            >
              <FaTools className="text-emerald-400 text-3xl mx-auto mb-2" />
              <p className="font-semibold text-sm">{tech.name}</p>
              <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-1 rounded-full"
                />
              </div>
              <p className="text-white/40 text-[10px] mt-1">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Automation Process */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm">METHODOLOGY</span>
          <h2 className="text-4xl font-bold mt-2">My Automation Framework</h2>
          <p className="text-white/60 mt-4">Systematic approach to intelligent automation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {automationProcess.map((step, i) => (
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

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <span className="text-emerald-400 font-mono text-sm">INDUSTRY APPLICATIONS</span>
          <h2 className="text-4xl font-bold mt-2">Real-World Automation Impact</h2>
          <p className="text-white/60 mt-4">Proven results across multiple industries</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-xl p-5"
            >
              <useCase.icon className="text-emerald-400 text-3xl mb-3" />
              <h3 className="text-lg font-bold mb-3">{useCase.title}</h3>
              <ul className="space-y-2">
                {useCase.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/60 text-xs">
                    <FaCheckCircle className="text-emerald-400 text-xs mt-0.5 flex-shrink-0" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {deliverables.map((deliverable, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-xl p-5"
            >
              <FaCog className="text-emerald-400 text-2xl mb-3" />
              <h3 className="text-emerald-400 font-bold mb-3">{deliverable.title}</h3>
              <ul className="space-y-2">
                {deliverable.items.map((item, idx) => (
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

      {/* ROI Calculator Preview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <FaBolt className="text-emerald-400 text-4xl" />
            <h3 className="text-2xl font-bold">ROI Impact</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-emerald-400">70%</p>
              <p className="text-white/60 text-xs">Average Cost Reduction</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-emerald-400">10x</p>
              <p className="text-white/60 text-xs">Faster Processing</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-emerald-400">3-6</p>
              <p className="text-white/60 text-xs">Months Payback Period</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certifications & Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 border border-white/10 rounded-2xl p-6"
          >
            <FaAward className="text-emerald-400 text-3xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMedal className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">AWS Certified DevOps Engineer</p>
                  <p className="text-white/40 text-xs">Amazon Web Services • 2024</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMedal className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Certified Automation Professional</p>
                  <p className="text-white/40 text-xs">UiPath • 2023</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMedal className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">TensorFlow Developer Certificate</p>
                  <p className="text-white/40 text-xs">Google • 2024</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 border border-white/10 rounded-2xl p-6"
          >
            <FaClock className="text-emerald-400 text-3xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Project Timeline</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Discovery & Analysis</span>
                  <span className="text-emerald-400 text-sm">1-2 weeks</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Design & Architecture</span>
                  <span className="text-emerald-400 text-sm">1-2 weeks</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Development & Integration</span>
                  <span className="text-emerald-400 text-sm">2-5 weeks</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Testing & Deployment</span>
                  <span className="text-emerald-400 text-sm">1-2 weeks</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 py-16 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 rounded-2xl p-12 text-center"
        >
          <FaCrown className="text-emerald-400 text-5xl mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Automate Your Operations?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's transform your business with intelligent automation that delivers measurable results.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-bold text-lg"
          >
            Start Your Automation Journey
          </motion.button>
        </motion.div>
      </div>

    </div>
  );
};

export default AutomationPage;