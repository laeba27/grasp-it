import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import DynamicInquiryModal from '../components/DynamicInquiryModal';

const ContactPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'hello@grasp-it.com',
      link: 'mailto:hello@grasp-it.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      content: '+1 (555) 123-4567',
      link: 'https://wa.me/15551234567',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'New York, NY',
      link: null,
    },
  ];

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-cyan-400 mt-1">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <span className="text-gray-300">{info.content}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="mt-12 p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-8 w-full flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                onClick={() => setModalOpen(true)}
              >
                Enquire Now
              </button>
              <DynamicInquiryModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                context="General Inquiry"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Prefer a Quick Chat?
            </h2>
            <p className="text-gray-300 mb-6">
              Sometimes it's easier to discuss your project over a call. Schedule a free consultation with our team.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;