import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Globe, ArrowRight, Star, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ParallaxSection from '../components/ParallaxSection';

const HomePage: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
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
                We are a cyberpunk-inspired digital agency that specializes in creating futuristic web experiences. Our team of skilled developers and designers work together to bring your vision to life in the digital realm.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 mb-8"
              >
                From WordPress and Shopify to custom web applications, we deliver solutions that are not just functional, but truly extraordinary.
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
                <span className="text-gray-300">Trusted by 500+ clients</span>
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
                      500+
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
    </div>
  );
};

export default HomePage;