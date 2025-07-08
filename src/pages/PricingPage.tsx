import React from 'react';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      icon: <Zap size={32} />,
      price: '$999',
      period: 'per project',
      description: 'Perfect for small businesses and personal projects',
      features: [
        'Responsive Design',
        'Basic SEO Setup',
        'Contact Form',
        'Social Media Integration',
        '3 Revisions',
        '30-day Support',
        'Basic Analytics',
      ],
      notIncluded: [
        'Custom Animations',
        'E-commerce Features',
        'Advanced SEO',
        'Priority Support',
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Professional',
      icon: <Crown size={32} />,
      price: '$2,499',
      period: 'per project',
      description: 'Ideal for growing businesses and e-commerce',
      features: [
        'Everything in Starter',
        'Custom Animations',
        'E-commerce Integration',
        'Advanced SEO',
        'Performance Optimization',
        'Unlimited Revisions',
        '60-day Support',
        'Advanced Analytics',
        'Mobile App Integration',
      ],
      notIncluded: [
        'Custom CMS',
        'API Development',
        'AI Features',
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Enterprise',
      icon: <Rocket size={32} />,
      price: '$4,999',
      period: 'per project',
      description: 'Complete solution for large-scale projects',
      features: [
        'Everything in Professional',
        'Custom CMS Development',
        'API Development',
        'AI-powered Features',
        'Multi-language Support',
        'Advanced Security',
        '90-day Support',
        'Dedicated Project Manager',
        'Priority Support',
        'Custom Integrations',
      ],
      notIncluded: [],
      popular: false,
      gradient: 'from-cyan-500 to-purple-500',
    },
  ];

  const addOns = [
    {
      name: 'Additional Pages',
      price: '$199',
      description: 'Extra pages beyond the initial scope',
    },
    {
      name: 'Extended Support',
      price: '$299',
      description: 'Additional 30 days of support and maintenance',
    },
    {
      name: 'Rush Delivery',
      price: '$499',
      description: 'Expedited delivery (50% faster completion)',
    },
    {
      name: 'Custom Animation',
      price: '$399',
      description: 'Bespoke animations and micro-interactions',
    },
  ];

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include modern design, mobile optimization, and professional support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-purple-500/10'
                  : 'border-cyan-500/20 bg-black/20 backdrop-blur-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${plan.gradient} mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>
                <div className="text-gray-400">{plan.period}</div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 opacity-50">
                    <div className="w-4 h-4 border border-gray-600 rounded flex-shrink-0" />
                    <span className="text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Add-on Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What's included in the project timeline?",
                answer: "Our typical project timeline ranges from 2-6 weeks depending on complexity. We provide regular updates and involve you in the review process.",
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer: "Yes, all plans include initial support period. We also offer extended maintenance packages for ongoing updates and security monitoring.",
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Absolutely! You can upgrade your plan at any time during the project. We'll adjust the timeline and deliverables accordingly.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers. Payment is typically split into 50% upfront and 50% upon completion.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-cyan-500/20"
              >
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-6">
              Let's discuss your requirements and create something amazing together. Get a personalized quote today.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;