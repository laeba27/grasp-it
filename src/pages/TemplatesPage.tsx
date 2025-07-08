import React from 'react';
import { ExternalLink, Star, Code, Smartphone, Globe } from 'lucide-react';

const TemplatesPage: React.FC = () => {
  const templates = [
    {
      id: 1,
      name: 'CyberCommerce',
      category: 'E-commerce',
      description: 'Futuristic Shopify store with advanced product visualization',
      features: ['AR Product Preview', 'AI Recommendations', 'Crypto Payments', 'Real-time Inventory'],
      price: '$2,999',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      tech: ['Shopify', 'React', 'Three.js'],
    },
    {
      id: 2,
      name: 'NeonPortfolio',
      category: 'Portfolio',
      description: 'Cyberpunk-themed portfolio for creative professionals',
      features: ['3D Animations', 'Interactive Gallery', 'Dark Mode', 'Performance Optimized'],
      price: '$1,499',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      tech: ['React', 'Three.js', 'GSAP'],
    },
    {
      id: 3,
      name: 'TechStartup',
      category: 'Business',
      description: 'Modern startup landing page with advanced animations',
      features: ['Smooth Scrolling', 'Interactive Elements', 'Mobile First', 'SEO Optimized'],
      price: '$1,999',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      tech: ['WordPress', 'JavaScript', 'CSS3'],
    },
    {
      id: 4,
      name: 'QuantumBlog',
      category: 'Blog',
      description: 'Futuristic blog template with AI-powered features',
      features: ['AI Content Analysis', 'Dynamic Layouts', 'Social Integration', 'Analytics Dashboard'],
      price: '$999',
      image: 'https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      tech: ['WordPress', 'PHP', 'MySQL'],
    },
    {
      id: 5,
      name: 'CyberRestaurant',
      category: 'Restaurant',
      description: 'Digital dining experience with holographic menus',
      features: ['Digital Menu', 'Online Ordering', 'Table Reservation', 'Review System'],
      price: '$1,799',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 6,
      name: 'FutureApp',
      category: 'Web App',
      description: 'Progressive web app with advanced UI/UX',
      features: ['PWA Features', 'Offline Mode', 'Push Notifications', 'Cross-platform'],
      price: '$3,499',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      tech: ['React', 'PWA', 'Service Workers'],
    },
  ];

  const categories = ['All', 'E-commerce', 'Portfolio', 'Business', 'Blog', 'Restaurant', 'Web App'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Premium Templates
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our collection of cutting-edge templates designed for the future of web development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : 'bg-black/20 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 border border-cyan-500/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group bg-black/20 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-xs font-medium">
                    {template.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 text-yellow-400">
                  <Star size={16} className="fill-current" />
                  <span className="text-xs">{template.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-gray-300 mb-4">{template.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {template.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex items-center space-x-4 mb-4">
                  {template.tech.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-1 text-cyan-400">
                      <Code size={14} />
                      <span className="text-xs">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-cyan-400">{template.price}</div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg transition-colors duration-300">
                      <ExternalLink size={16} />
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Template CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Need Something Custom?
            </h2>
            <p className="text-gray-300 mb-6">
              Our templates are just the beginning. Let us create a completely custom solution tailored to your unique needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Request Custom Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;