import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  Code,
  Zap,
  Globe
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
  ];

  const services = [
    'WordPress Development',
    'Shopify E-commerce',
    'Custom Web Apps',
    'UI/UX Design',
    'API Integration',
    'SEO Optimization',
  ];

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Work', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <footer className="relative bg-black/40 backdrop-blur-sm border-t border-cyan-500/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                grasp-it
              </h3>
              <p className="text-gray-300 mb-6">
                Crafting digital experiences that transcend reality. We are the future of web development.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail size={16} className="text-cyan-400" />
                <span>hello@grasp-it.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Phone size={16} className="text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <MapPin size={16} className="text-cyan-400" />
                <span>New York, NY</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center">
              <Code size={20} className="mr-2" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: '#00D9FF' }}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center">
              <Globe size={20} className="mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: '#00D9FF' }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center">
              <Zap size={20} className="mr-2" />
              Stay Connected
            </h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for the latest updates and cyberpunk insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-black/30 border border-cyan-500/30 rounded-l-lg focus:outline-none focus:border-cyan-500 transition-colors duration-300 text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-r-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Mail size={16} />
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      boxShadow: "0 0 15px rgba(0, 217, 255, 0.5)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-black/30 border border-cyan-500/30 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-cyan-500/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>&copy; {currentYear} grasp-it. All rights reserved.</p>
              <p className="text-sm text-gray-400 mt-1">
                Designed with ❤️ in the cyberpunk universe
              </p>
            </div>
            
            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(0, 217, 255, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <motion.div
                whileHover={{ y: -2 }}
                className="text-white"
              >
                <ArrowUp size={20} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        {/* Animated grid pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-cyan-400 to-purple-500"
        />
      </div>
    </footer>
  );
};

export default Footer;