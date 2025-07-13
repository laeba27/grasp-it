import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Code, Zap, Globe, ArrowRight, Star, Sparkles, Mail, Crown } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ParallaxSection from '../components/ParallaxSection';
import DynamicInquiryModal from '../components/DynamicInquiryModal';

const HomePage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const features = [
    {
      icon: <Code size={24} />,
      title: 'Custom Development',
      description: 'Tailored web solutions built from scratch to meet your unique business needs.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimized',
      description: 'Lightning-fast websites with cutting-edge optimization techniques.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Reach',
      description: 'Scalable solutions that work seamlessly across all platforms and devices.',
    },
  ];

  const services = [
    'WordPress Development',
    'Shopify E-commerce',
    'Custom Web Apps',
    'UI/UX Design',
    'API Integration',
    'SEO Optimization',
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        </ParallaxSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Welcome to the Future
              </h1>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              We craft digital experiences that transcend reality. Immerse yourself in the next generation of web development.
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center">
                Start Your Journey
                <ArrowRight className="inline ml-2" size={20} />
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Navigate to services page
                const event = new CustomEvent('navigate', { detail: 'templates' });
                window.dispatchEvent(event);
              }}
              className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-cyan-400"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View Our Work</span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
                  borderColor: "rgba(0, 217, 255, 0.6)"
                }}
                className="p-4 bg-black/20 backdrop-blur-sm rounded-lg border border-cyan-500/20 transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  className="text-cyan-400 font-semibold text-sm group-hover:text-purple-400 transition-colors duration-300"
                >
                  {service}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <ParallaxSection speed={0.2}>
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </ParallaxSection>

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            >
              Why Choose grasp-it?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              We combine cutting-edge technology with creative innovation to deliver exceptional digital experiences.
            </motion.p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.2}
                direction="up"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0, 217, 255, 0.2)"
                  }}
                  className="p-8 bg-black/20 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group h-full"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <ParallaxSection speed={0.4}>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        </ParallaxSection>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
              >
                About grasp-it
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 mb-6"
              >
    grasp-it is a modern web development agency that helps businesses grow through stunning design, high-performance code, and meaningful strategy. We specialize in creating impactful digital experiences—from personal portfolios to e-commerce stores and enterprise-grade web apps.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 mb-8"
              >
    Whether you're a startup founder, creator, or brand, we bring full-stack expertise, attention to detail, and a collaborative mindset to every project. Our services include custom web development, WordPress, Shopify, content-driven websites, SEO optimization, and more.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star size={24} className="text-yellow-400 fill-current" />
                  </motion.div>
                ))}
    <span className="text-gray-300">Trusted by 20+ happy clients</span>
              </motion.div>
            </AnimatedSection>

            
            <AnimatedSection direction="right">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0, 217, 255, 0.3)",
                      "0 0 40px rgba(139, 92, 246, 0.4)",
                      "0 0 20px rgba(0, 217, 255, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-full h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center relative overflow-hidden"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
                  />
                  <div className="text-center relative z-10">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        textShadow: [
                          "0 0 10px rgba(0, 217, 255, 0.5)",
                          "0 0 20px rgba(139, 92, 246, 0.7)",
                          "0 0 10px rgba(0, 217, 255, 0.5)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"
                    >
                      50+
                    </motion.div>
                    <div className="text-xl text-gray-300">Projects Delivered</div>
                  </div>
                  <motion.div
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4"
                  >
                    <Sparkles className="text-cyan-400" size={24} />
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <ParallaxSection speed={0.2}>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        </ParallaxSection>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              The brilliant minds behind grasp-it. We're passionate about creating extraordinary digital experiences.
            </motion.p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Founder - Shivam Goyat */}
            <AnimatedSection delay={0.1} direction="up">
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 217, 255, 0.3)", rotateY: 5 }}
    className="p-8 bg-black/40 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden"
  >
    <div className="text-center relative z-10">
      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <Crown size={40} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-cyan-400">Shivam Goyat</h3>
      <p className="text-cyan-400 font-semibold mb-4">Founder </p>
      <p className="text-gray-300 mb-6">
          Shivam leads the charge with bold ideas, visionary strategy, and unmatched energy in redefining the digital realm.
      </p>
    </div>
  </motion.div>
</AnimatedSection>

            {/* Developer - Laeba Firdous */}
<AnimatedSection delay={0.2} direction="up">
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 217, 255, 0.3)", rotateY: 5 }}
    className="p-8 bg-black/40 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden"
  >
    <div className="text-center relative z-10">
      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <Code size={40} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-purple-400">Laeba Firdous</h3>
      <p className="text-purple-400 font-semibold mb-4">Co-Founder</p>
      <p className="text-gray-300 mb-6">
        Code crafter and UI magician, Laeba specializes in creating blazing-fast, elegant web apps with cutting-edge tech. She makes the pixels dance.
      </p>
    </div>
  </motion.div>
</AnimatedSection>

{/* Developer - Aarav Mehta */}
<AnimatedSection delay={0.3} direction="up">
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 217, 255, 0.3)", rotateY: 5 }}
    className="p-8 bg-black/40 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden"
  >
    <div className="text-center relative z-10">
      <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <Zap size={40} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-green-400">Aarav Mehta</h3>
      <p className="text-green-400 font-semibold mb-4">CMO</p>
      <p className="text-gray-300 mb-6">
        A builder of robust backend systems and interactive frontends. Aarav brings reliability and performance to every digital experience we craft.
      </p>
    </div>
  </motion.div>
</AnimatedSection>
          </div>

          {/* Team Values */}
          <div className="mt-20">
            <AnimatedSection className="text-center mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              >
                Our Values
              </motion.h3>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap size={32} />,
                  title: "Innovation First",
                  description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
                },
                {
                  icon: <Star size={32} />,
                  title: "Excellence",
                  description: "Every project is crafted with meticulous attention to detail and unwavering commitment to quality."
                },
                {
                  icon: <Globe size={32} />,
                  title: "Client Success",
                  description: "Your success is our success. We're dedicated to helping you achieve your digital goals."
                }
              ].map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.1} direction="up">
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)" }}
                    className="p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center"
                  >
                    <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <ParallaxSection speed={0.3}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
        </ParallaxSection>

        <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's create something extraordinary together. Get in touch and let's discuss your next project.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0, 217, 255, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setModalOpen(true)}
            className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center">
              Get Started Now
              <ArrowRight className="inline ml-2" size={20} />
            </span>
          </motion.button>
        </AnimatedSection>
      </section>

      {/* What We Build Section */}
      <section className="py-20 px-4 bg-black/30 relative overflow-hidden">
        <ParallaxSection speed={0.2}>
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
        </ParallaxSection>
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">What We Build</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">From simple sites to complex systems, we craft digital solutions for every need.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Globe size={32} />, title: 'Inquiry Website', feature: 'For schools, clinics, and more' },
              { icon: <Zap size={32} />, title: 'Learning Management Systems', feature: 'Course Tracking, Quiz System' },
              { icon: <Code size={32} />, title: 'Client Dashboards', feature: 'Admin Panels, Analytics' },
              { icon: <Star size={32} />, title: 'ERP & CRM Web Apps', feature: 'Workflow Automation' },
              { icon: <Sparkles size={32} />, title: 'E-commerce Stores', feature: 'Product Catalog, Payments' },
              { icon: <ArrowRight size={32} />, title: 'Booking Systems', feature: 'Calendar, Reminders' },
              { icon: <Globe size={32} />, title: 'Portfolio Websites', feature: 'Showcase Your Work' },
              { icon: <Code size={32} />, title: 'Company Profiles', feature: 'Corporate Presence' },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                <motion.div
                  whileHover={{ scale: 1.07, boxShadow: "0 0 30px rgba(0, 217, 255, 0.2)" }}
                  className="p-8 bg-black/40 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 group h-full flex flex-col items-center"
                >
                  <div className="mb-4 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.feature}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4 relative">
        <ParallaxSection speed={0.15}>
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        </ParallaxSection>
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">A seamless journey from idea to launch, with you every step of the way.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles size={32} />, title: 'Discovery Call', desc: 'We understand your goals and vision.' },
              { icon: <Code size={32} />, title: 'Proposal + Timeline', desc: 'Clear plan, scope, and milestones.' },
              { icon: <Zap size={32} />, title: 'Design & Development', desc: 'We build, you review, we refine.' },
              { icon: <Star size={32} />, title: 'Launch + Support', desc: 'Go live and ongoing help.' },
            ].map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15} direction="up">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)" }}
                  className="p-8 bg-black/40 rounded-xl border border-purple-500/20 hover:border-cyan-400 transition-all duration-300 group h-full flex flex-col items-center"
                >
                  <div className="mb-4 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">{step.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services Section */}
      <section className="py-16 px-4 bg-black/20 relative">
        <ParallaxSection speed={0.1}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
        </ParallaxSection>
        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Add-on Services</h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">We offer more than just builds. Enhance your project with our ongoing support and expertise.</p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Globe size={24} />, label: 'SEO + Content Writing' },
              { icon: <Mail size={24} />, label: 'Email Marketing Setup' },
              { icon: <Zap size={24} />, label: 'LMS Hosting & Maintenance' },
              { icon: <Star size={24} />, label: 'Regular Updates + Tech Support' },
              { icon: <Sparkles size={24} />, label: 'AI/Chatbot Integration' },
            ].map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                <motion.div
                  whileHover={{ scale: 1.1, backgroundColor: "#0ff1ce22" }}
                  className="flex items-center gap-3 px-6 py-4 bg-black/40 rounded-full border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 group shadow-md"
                >
                  <span className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">{service.icon}</span>
                  <span className="text-gray-200 font-medium group-hover:text-cyan-400 transition-colors duration-300">{service.label}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Redesigned */}
      <section className="py-20 px-4 relative overflow-hidden">
        <ParallaxSection speed={0.2}>
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </ParallaxSection>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            >
              Our Portfolio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Discover our diverse collection of digital solutions that have transformed businesses and delighted users worldwide.
            </motion.p>
          </AnimatedSection>

          {/* Portfolio Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Featured Project */}
            <AnimatedSection delay={0.1} direction="up">
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(0, 217, 255, 0.3)"
                }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Sparkles size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Featured Project</h3>
                        <p className="text-cyan-400 text-sm">Latest Work</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-cyan-400">2024</div>
                      <div className="text-gray-400 text-sm">Completed</div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 text-white">E-Learning Platform</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A comprehensive learning management system with advanced analytics, interactive courses, and seamless user experience. Built with React, Node.js, and MongoDB.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-400 text-sm">Live</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-blue-400 text-sm">Responsive</span>
                      </div>
                    </div>
                    {/* <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      View Project
                    </button> */}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'E-commerce Store',
                  category: 'E-commerce',
                  tech: ['Next.js', 'Stripe', 'PostgreSQL'],
                  status: 'Live',
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  title: 'CRM Dashboard',
                  category: 'Business',
                  tech: ['React', 'Node.js', 'MySQL'],
                  status: 'Live',
                  color: 'from-green-500 to-blue-600'
                },
                {
                  title: 'Portfolio Website',
                  category: 'Creative',
                  tech: ['React', 'Framer Motion', 'Tailwind'],
                  status: 'Live',
                  color: 'from-orange-500 to-red-600'
                },
                {
                  title: 'Booking System',
                  category: 'SaaS',
                  tech: ['Vue.js', 'Firebase', 'Stripe'],
                  status: 'Live',
                  color: 'from-indigo-500 to-purple-600'
                }
              ].map((project, idx) => (
                <AnimatedSection key={idx} delay={0.2 + idx * 0.1} direction="up">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(0, 217, 255, 0.2)"
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="relative p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-8 h-8 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center`}>
                          <Globe size={16} className="text-white" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-green-400 text-xs">{project.status}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">{project.category}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.map((tech, techIdx) => (
                          <span key={techIdx} className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded border border-cyan-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg text-cyan-300 font-medium hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 border border-cyan-500/20">
                        View Details
                      </button> */}
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Portfolio Stats */}
          <AnimatedSection className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '25+', label: 'Happy Clients' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
            ))}
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Dynamic Inquiry Modal */}
      <DynamicInquiryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        context="General Inquiry"
        serviceName="Web Development Services"
        prefillMessage="I'm interested in starting a project with grasp-it. Please provide more information about your services and pricing."
      />
    </div>
  );
};

export default HomePage;