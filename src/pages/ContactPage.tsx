import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import DynamicInquiryModal from '../components/DynamicInquiryModal';

const ContactPage: React.FC = () => {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'gograspit12@gmail.com',
      link: 'mailto:gograspit12@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+91 8700250072',
      link: 'tel:+918700250072',
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      content: '+91 8700250072',
      link: 'https://wa.me/918700250072',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Prem Nagar, Najafgarh, New Delhi 110043, India',
      link: null,
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const res = await response.json();
      
      if (res.success) {
        setSubmitSuccess(true);
        form.reset();
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="lg:col-span-2">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-8 w-full">
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">
                Send Us a Message
              </h2>
              
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="text-green-400 text-6xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                    Send Another Message
              </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value="173a6e9e-6404-4660-8381-88f16393fab5" />
                  <input type="hidden" name="subject" value="Contact Form Submission" />
                  <input type="hidden" name="to" value="gograspit12@gmail.com" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Company/Organization</label>
                      <input
                        type="text"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Project Type</label>
                    <select
                      name="project_type"
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="Website Development">Website Development</option>
                      <option value="E-commerce Store">E-commerce Store</option>
                      <option value="Web Application">Web Application</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="SEO & Marketing">SEO & Marketing</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="Tell us about your project, requirements, and any specific questions you have..."
                    />
                  </div>
                  
                  {error && (
                    <div className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
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
            <button 
              onClick={() => setConsultationModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <DynamicInquiryModal
        open={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        context="Free Consultation"
        serviceName="Pre-Consultation Call"
        prefillMessage="I would like to schedule a free consultation call to discuss my project requirements and get expert advice from your team."
        showPhone={true}
        showSubject={false}
      />
    </div>
  );
};

export default ContactPage;
