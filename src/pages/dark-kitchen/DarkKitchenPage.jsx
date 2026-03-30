import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUtensils, FaThumbsUp, FaThumbsDown, FaComment, FaShare, 
  FaEye, FaClock, FaFire, FaTimes, FaBookmark, FaRegBookmark, 
  FaExclamationTriangle, FaTwitter, FaDiscord, FaGithub, FaReddit
} from 'react-icons/fa';

const DarkKitchenPage = () => {
  // Define postsData FIRST before using it
  const postsData = [
    {
      id: 1,
      title: "AI-Powered Cloud Kitchen Predicts Customer Orders with 94% Accuracy",
      category: "AI Innovation",
      date: "2 hours ago",
      readTime: "5 min read",
      content: "Revolutionary AI system developed by DarkKitchen Labs has achieved 94% accuracy in predicting customer orders before they're placed. The system analyzes historical data, weather patterns, local events, and social media trends to anticipate demand with unprecedented precision. Early adopters report 40% reduction in food waste and 25% increase in revenue. This breakthrough technology uses deep learning models trained on millions of data points to forecast ordering patterns with remarkable accuracy.",
      image: "🤖",
      author: "Dr. Sarah Chen",
      role: "AI Research Lead",
      comments: 234,
      shares: 567,
      trending: true
    },
    {
      id: 2,
      title: "Exclusive: Major Food Delivery App Secretly Testing Drone Fleet in 12 Cities",
      category: "Breaking News",
      date: "5 hours ago",
      readTime: "8 min read",
      content: "Leaked documents reveal that a leading food delivery platform has been quietly testing autonomous drone deliveries across 12 major cities. The program, codenamed 'Project SkyKitchen,' aims to reduce delivery times to under 10 minutes. Sources indicate successful trials with 98% delivery success rate. The company plans to roll out nationwide by Q4 2026, potentially revolutionizing the entire food delivery industry and putting 50,000 delivery drivers at risk of automation.",
      image: "🚁",
      author: "Marcus Thompson",
      role: "Tech Investigative Journalist",
      comments: 892,
      shares: 2341,
      trending: true,
      shocking: true
    },
    {
      id: 3,
      title: "Clawdbot 3.0 Released: The Most Advanced Kitchen Automation System Yet",
      category: "Tech Release",
      date: "12 hours ago",
      readTime: "6 min read",
      content: "The highly anticipated Clawdbot 3.0 has been released, featuring revolutionary AI-powered kitchen management, real-time inventory tracking, and predictive maintenance. New features include voice-activated controls, automated recipe scaling, and integration with 50+ delivery platforms. Early adopters report 60% reduction in operational costs and 35% increase in order accuracy. The system now supports multiple languages and can handle up to 500 concurrent orders with zero downtime.",
      image: "🦞",
      author: "Alex Rivera",
      role: "Product Manager",
      comments: 445,
      shares: 892,
      trending: true
    },
    {
      id: 4,
      title: "The Rise of Ghost Kitchens: How AI is Revolutionizing Food Delivery",
      category: "Industry Analysis",
      date: "1 day ago",
      readTime: "10 min read",
      content: "Ghost kitchens, also known as cloud kitchens, are transforming the restaurant industry. With AI-powered analytics, these delivery-only operations are achieving profit margins that traditional restaurants can only dream of. This comprehensive analysis explores how machine learning algorithms optimize everything from menu pricing to delivery routes. The report predicts that by 2027, 40% of all food delivery will come from ghost kitchens, generating $1.2 trillion in annual revenue globally.",
      image: "🏭",
      author: "Jennifer Wong",
      role: "Industry Analyst",
      comments: 567,
      shares: 1234,
      featured: true
    },
    {
      id: 5,
      title: "BREAKING: AI Chef Creates Viral Recipe Taking Social Media by Storm",
      category: "Viral News",
      date: "1 day ago",
      readTime: "4 min read",
      content: "An AI-developed fusion dish combining Ethiopian, Japanese, and Mexican cuisines has gone viral on TikTok, with over 50 million views. The recipe, created by Google's DeepMind culinary AI, is being called 'the most innovative dish of the decade.' Restaurants reporting the dish have seen 300% increase in orders. The AI has since generated 50 more unique recipes, with plans for a cookbook release that has already sold 100,000 pre-orders.",
      image: "🍜",
      author: "Lisa Martinez",
      role: "Food Tech Journalist",
      comments: 1234,
      shares: 5678,
      trending: true
    },
    {
      id: 6,
      title: "DarkKitchen Security Alert: New AI-Powered Fraud Detection System",
      category: "Security Update",
      date: "2 days ago",
      readTime: "7 min read",
      content: "A sophisticated AI system that detects and prevents fraud in real-time has been deployed across DarkKitchen's network. The system analyzes order patterns, payment methods, and delivery addresses to identify fraudulent activity with 99.7% accuracy. In the first week alone, it prevented over $2 million in potential losses. The technology uses advanced anomaly detection algorithms and is now being licensed to other delivery platforms worldwide.",
      image: "🔒",
      author: "David Kim",
      role: "Security Architect",
      comments: 178,
      shares: 345,
      important: true
    },
    {
      id: 7,
      title: "Clawdbot vs. Competitors: Why This AI System is Winning",
      category: "Analysis",
      date: "2 days ago",
      readTime: "8 min read",
      content: "A detailed comparison of leading kitchen automation systems shows Clawdbot outperforming competitors in every metric: order accuracy (99.2%), delivery time (15% faster), cost reduction (40%), and customer satisfaction (4.8/5 stars). The system's secret? A proprietary AI that learns from every order, continuously improving its predictions and recommendations. Competitors are scrambling to catch up, with several announcing major feature updates in response.",
      image: "🏆",
      author: "Ryan Patel",
      role: "Tech Analyst",
      comments: 678,
      shares: 901,
      featured: true
    },
    {
      id: 8,
      title: "Exclusive Interview: The Visionary Behind DarkKitchen's AI Revolution",
      category: "Interview",
      date: "3 days ago",
      readTime: "12 min read",
      content: "In this exclusive interview, DarkKitchen's CTO reveals the company's ambitious roadmap for AI-powered food delivery. From autonomous kitchens to predictive ordering, learn how they're building the future of food. 'We're not just building software,' they said. 'We're reimagining how food moves through cities.' The interview covers technical challenges, ethical considerations, and the company's vision for the next decade of food technology.",
      image: "👩‍💻",
      author: "Emma Watson",
      role: "Tech Editor",
      comments: 892,
      shares: 1567
    },
    {
      id: 9,
      title: "AI Predicts Food Trends: 10 Cuisines That Will Dominate 2026",
      category: "Trends",
      date: "3 days ago",
      readTime: "6 min read",
      content: "Using machine learning analysis of social media, search trends, and restaurant data, AI has predicted the top 10 cuisines that will dominate in 2026. The list includes unexpected fusion cuisines like Korean-Mexican, Japanese-Italian, and African-Asian. Restaurant owners are already adapting menus, with early movers reporting 50% increase in orders. The AI model considers over 100 variables to make its predictions with 85% accuracy.",
      image: "🍲",
      author: "Nina Gupta",
      role: "Food Futurist",
      comments: 456,
      shares: 789
    },
    {
      id: 10,
      title: "The Ethics of AI in Food: Who's Responsible When Algorithms Fail?",
      category: "Ethics",
      date: "4 days ago",
      readTime: "9 min read",
      content: "As AI takes over more decision-making in the food industry, questions about accountability arise. This in-depth piece explores case studies where algorithmic failures led to significant losses, and what the industry is doing to ensure responsible AI deployment. Experts call for regulatory frameworks that balance innovation with consumer protection. The debate intensifies as AI systems become more autonomous and decisions have real-world consequences.",
      image: "⚖️",
      author: "Dr. Michael Brown",
      role: "AI Ethics Researcher",
      comments: 345,
      shares: 567
    }
  ];

  // Generate random initial like counts AFTER postsData is defined
  const generateInitialLikes = () => {
    const likes = {};
    postsData.forEach(post => {
      likes[post.id] = Math.floor(Math.random() * 500) + 300;
    });
    return likes;
  };

  const [likedPosts, setLikedPosts] = useState({});
  const [dislikedPosts, setDislikedPosts] = useState({});
  const [selectedPost, setSelectedPost] = useState(null);
  const [email, setEmail] = useState('');
  const [bookmarks, setBookmarks] = useState({});
  const [postLikes, setPostLikes] = useState(generateInitialLikes());

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
    if (dislikedPosts[postId]) {
      setDislikedPosts(prev => ({ ...prev, [postId]: false }));
    }
    setPostLikes(prev => ({
      ...prev,
      [postId]: likedPosts[postId] ? prev[postId] - 1 : prev[postId] + 1
    }));
  };

  const handleDislike = (postId) => {
    setDislikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
    if (likedPosts[postId]) {
      setLikedPosts(prev => ({ ...prev, [postId]: false }));
      setPostLikes(prev => ({
        ...prev,
        [postId]: prev[postId] - 1
      }));
    }
  };

  const handleBookmark = (postId) => {
    setBookmarks(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const trendingTopics = [
    "AI in Food Tech",
    "Clawdbot Updates",
    "Ghost Kitchen Growth",
    "Food Delivery Drones",
    "Sustainable Packaging",
    "Automated Cooking",
    "Food Safety AI",
    "Delivery Optimization"
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing! You'll receive the latest news at ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border-b border-emerald-500/30">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <FaUtensils className="text-emerald-400 text-6xl mx-auto mb-4 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Dark Kitchen Chronicles
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Where AI Meets Culinary Innovation • Breaking News • Deep Insights • Community Conversations
            </p>
            <div className="flex gap-3 justify-center mt-8 flex-wrap">
              <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm">
                🔥 2.5K+ Readers Online
              </span>
              <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm">
                📰 50+ Stories Published
              </span>
              <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm">
                💬 5K+ Discussions
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content - Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trending Banner */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-4"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <FaFire className="text-red-500 text-2xl animate-pulse" />
                <span className="text-red-400 font-bold">TRENDING NOW</span>
                <div className="flex gap-2 overflow-x-auto">
                  {trendingTopics.slice(0, 5).map((topic, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs whitespace-nowrap">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Posts */}
            {postsData.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-black/40 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        post.shocking ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        post.trending ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}>
                        {post.category}
                      </span>
                      {post.trending && <FaFire className="text-orange-400 text-xs" />}
                      {post.shocking && <FaExclamationTriangle className="text-red-400 text-xs animate-pulse" />}
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-xs">
                      <FaClock />
                      <span>{post.date}</span>
                      <span>•</span>
                      <FaEye />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title & Content */}
                  <h2 className="text-2xl font-bold mb-3 hover:text-emerald-400 transition cursor-pointer"
                      onClick={() => setSelectedPost(post)}>
                    {post.title}
                  </h2>
                  <p className="text-white/60 mb-4">
                    {post.content.substring(0, 180)}...
                  </p>

                  {/* Author & Engagement */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-xl">
                        {post.image}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{post.author}</p>
                        <p className="text-xs text-white/40">{post.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-1 px-2 py-1 rounded transition ${likedPosts[post.id] ? 'bg-emerald-500/20 text-emerald-400' : 'text-white/40 hover:text-emerald-400'}`}
                      >
                        <FaThumbsUp size={14} />
                        <span className="text-xs">{postLikes[post.id]}</span>
                      </button>

                      <button 
                        onClick={() => handleDislike(post.id)}
                        className={`flex items-center gap-1 px-2 py-1 rounded transition ${dislikedPosts[post.id] ? 'bg-red-500/20 text-red-400' : 'text-white/40 hover:text-red-400'}`}
                      >
                        <FaThumbsDown size={14} />
                      </button>

                      <button className="flex items-center gap-1 text-white/40 hover:text-emerald-400 transition">
                        <FaComment size={14} />
                        <span className="text-xs">{post.comments}</span>
                      </button>

                      <button className="flex items-center gap-1 text-white/40 hover:text-emerald-400 transition">
                        <FaShare size={12} />
                        <span className="text-xs">{post.shares}</span>
                      </button>

                      <button 
                        onClick={() => handleBookmark(post.id)}
                        className={`transition ${bookmarks[post.id] ? 'text-emerald-400' : 'text-white/40 hover:text-emerald-400'}`}
                      >
                        {bookmarks[post.id] ? <FaBookmark size={14} /> : <FaRegBookmark size={14} />}
                      </button>

                      <button 
                        onClick={() => setSelectedPost(post)}
                        className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-xs hover:bg-emerald-500/30 transition"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-2">Subscribe to Newsletter</h3>
              <p className="text-white/60 text-sm mb-4">Get the latest AI food tech news directly in your inbox</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                  required
                />
                <button type="submit" className="px-4 py-2 bg-emerald-500 rounded-lg hover:bg-emerald-600 transition text-sm">
                  Subscribe
                </button>
              </form>
            </motion.div>

            {/* Trending Topics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-black/40 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaFire className="text-orange-400" />
                Trending Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs hover:bg-emerald-500/20 hover:border-emerald-500/30 transition cursor-pointer">
                    #{topic.replace(/\s/g, '')}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black/40 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Active Readers</span>
                  <span className="text-emerald-400 font-bold">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Total Posts</span>
                  <span className="text-emerald-400 font-bold">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Daily Comments</span>
                  <span className="text-emerald-400 font-bold">1.2K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Likes Today</span>
                  <span className="text-emerald-400 font-bold">8.5K</span>
                </div>
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-black/40 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition">
                  <FaTwitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition">
                  <FaDiscord size={18} />
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition">
                  <FaGithub size={18} />
                </button>
                <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition">
                  <FaReddit size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal for Reading More */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="max-w-3xl w-full max-h-[80vh] overflow-y-auto bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-emerald-500/30 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-3xl font-bold mt-3">{selectedPost.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10 flex-wrap">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-2xl">
                  {selectedPost.image}
                </div>
                <div>
                  <p className="font-semibold">{selectedPost.author}</p>
                  <p className="text-sm text-white/40">{selectedPost.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-white/40 text-sm">
                  <FaClock />
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <FaEye />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6 whitespace-pre-line">
                {selectedPost.content}
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-white/10 flex-wrap">
                <button 
                  onClick={() => handleLike(selectedPost.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${likedPosts[selectedPost.id] ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                >
                  <FaThumbsUp />
                  <span>{postLikes[selectedPost.id]}</span>
                </button>
                <button 
                  onClick={() => handleDislike(selectedPost.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${dislikedPosts[selectedPost.id] ? 'bg-red-500/20 text-red-400' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                >
                  <FaThumbsDown />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-white/60 hover:bg-white/10 transition">
                  <FaShare />
                  Share
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DarkKitchenPage;