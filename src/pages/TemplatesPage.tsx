import React, { useState } from "react";
import {
  Globe,
  User,
  FileText,
  ShoppingCart,
  Package,
  TrendingUp,
  PenTool,
  FileSignature,
  BarChart2,
  Users,
  Mail,
  Info,
  Server,
} from "lucide-react";
import { motion, easeInOut } from "framer-motion";

const services = [
  {
    category: "Website Types",
    items: [
      {
        icon: <User size={24} />,
        title: "Inquiry Website",
        image: "../../public/enquiry.png",
        short:
          "Perfect for schools, clinics, and organizations to collect leads and inquiries.",
        details:
          "Our Inquiry Websites are designed for institutions and organizations that need to collect information, leads, or applications online. Features include custom forms, automated notifications, data export, and integrations with your CRM or email system.",
        tech: [
          "React",
          "Next.js",
          "Node.js",
          "Supabase",
          "Wed3",
          "Tailwind CSS",
        ],
        features: [
          "Custom Forms",
          "Automated Email Alerts",
          "Data Export",
          "CRM Integration",
        ],
      },
      {
        icon: <Server size={24} />, // optional: you can change the icon as per your design library
        title: "Small ERP Systems",
        image: "../../public/erp.png",
        short:
          "Streamline your business operations with a custom ERP solution.",
        details:
          "Our Small ERP Systems are designed for growing businesses to manage operations like inventory, sales, HR, and finances. Fully customizable, responsive, and built to automate and simplify internal processes.",
        tech: [
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "Firebase",
          "Supabase",
          "PostgreSQL",
          "Tailwind CSS",
        ],
        features: [
          "Inventory Management",
          "Sales & CRM Dashboards",
          "Role-based Access",
          "Custom Modules",
        ],
      },
      {
        icon: <FileText size={24} />,
        title: "Portfolio Website",
        image: "../../public/portfolio.png",
        short: "Showcase your work, skills, and achievements with style.",
        details:
          "Portfolio Websites are crafted for creatives, freelancers, and agencies. Display your projects, testimonials, and skills with interactive galleries and smooth animations.",
        tech: ["React", "Next.js", "Shadcn", "Tailwind CSS", "Wordpress"],

        features: [
          "Project Galleries",
          "Testimonials",
          "Contact/Booking",
          "Animations",
        ],
      },
      {
        icon: <FileText size={24} />,
        title: "Landing Pages",
        image: "../../public/landing-page.png",
        short: "High-converting pages for campaigns, products, or events.",
        details:
          "Landing Pages are focused on conversion. We design and build pages for product launches, events, or marketing campaigns, with A/B testing and analytics.",
        tech: ["React", "Next.js", "Tailwind CSS", "Wordpress"],
        features: [
          "Conversion Optimized",
          "A/B Testing",
          "Analytics",
          "Fast Loading",
        ],
      },
      {
        icon: <Package size={24} />,
        title: "Shopify Development",
        image: "../../public/shopify.png",
        short: "Custom Shopify stores tailored to your brand and products.",
        details:
          "We build Shopify stores that are fast, beautiful, and easy to manage. Includes theme customization, app integration, and training for your team.",
        features: [
          "Custom Theme",
          "App Integration",
          "Training",
          "Mobile Optimized",
        ],
      },
      {
        icon: <Globe size={24} />,
        title: "Headless Commerce",
        image:
          "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=800",
        short: "Modern, fast, API-driven e-commerce solutions.",
        details:
          "Headless Commerce lets you use any frontend (React, etc.) with powerful e-commerce backends. Get blazing speed, flexibility, and custom UX.",
        tech: [
          "React",
          "Next.js",
          "Node.js",
          "Supabase",
          "Web3",
          "Tailwind CSS",
        ],
        features: [
          "API-Driven",
          "Custom Frontend",
          "Ultra Fast",
          "Flexible Integrations",
        ],
      },
    ],
  },
  {
    category: "Growth Services",
    items: [
      {
        icon: <PenTool size={24} />,
        title: "SEO + Blog Writing",
        image:
          "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&w=800",
        short: "Content that ranks and engages your audience.",
        details:
          "We research, write, and optimize blog posts and site content to boost your search rankings and attract your ideal audience.",
        features: [
          "Keyword Research",
          "On-Page SEO",
          "Engaging Content",
          "Internal Linking",
        ],
      },
      {
        icon: <FileSignature size={24} />,
        title: "Keyword Strategy",
        image:
          "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&w=800",
        short: "Research and planning for maximum search visibility.",
        details:
          "We analyze your market and competitors to build a keyword plan that drives targeted traffic to your site.",
        features: [
          "Market Analysis",
          "Competitor Research",
          "Keyword Mapping",
          "Content Gaps",
        ],
      },
      {
        icon: <FileText size={24} />,
        title: "UI/UX Design",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=800",
        short: "Beautiful, user-friendly designs that drive engagement.",
        details:
          "Our UI/UX design services ensure your users enjoy every interaction with your product. We focus on user flows, wireframes, responsive layouts, and delightful experiences that convert.",
        features: [
          "User Research & Wireframing",
          "Responsive Web & App Design",
          "Prototyping & Interactions",
          "User Testing & Feedback",
        ],
      }
      ,
      {
        icon: <FileText size={24} />,
        title: "Copywriting for Websites",
        image:
          "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&w=800",
        short: "Persuasive, on-brand copy for every page.",
        details:
          "Our copywriters craft compelling, conversion-focused copy for your homepage, about, services, and more.",
        features: [
          "Brand Voice",
          "Conversion Copy",
          "Storytelling",
          "SEO Friendly",
        ],
      },
      {
        icon: <BarChart2 size={24} />,
        title: "Google Analytics Setup",
        image:
          "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&w=800",
        short: "Track, analyze, and optimize your site’s performance.",
        details:
          "We set up Google Analytics and dashboards so you can measure what matters and make data-driven decisions.",
        features: [
          "GA4 Setup",
          "Custom Dashboards",
          "Goal Tracking",
          "Reporting",
        ],
      },
      {
        icon: <Users size={24} />,
        title: "Social Media Creative Packs",
        image:
          "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=800",
        short: "Optional: Branded graphics and content for your socials.",
        details:
          "We design branded graphics, templates, and content packs for your social media channels.",
        features: [
          "Branded Graphics",
          "Content Templates",
          "Platform-Specific",
          "Consistent Style",
        ],
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

const TemplatesPage: React.FC = () => {
  type Service = typeof services[number]['items'][number];
  const [detailsModal, setDetailsModal] = useState<null | { service: Service; category: string }>(null);
  const [modalView, setModalView] = useState<'details' | 'enquire' | 'thankyou'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset enquiry panel when modal closes or opens
  React.useEffect(() => {
    setModalView('details');
    setError(null);
  }, [detailsModal]);

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        setModalView('thankyou');
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
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our full range of web, e-commerce, and growth services.
            Every project is custom-crafted for your success.
          </p>
        </div>

        {/* Services Sections */}
        <div className="space-y-20">
          {services.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-4 mb-8">
                {section.category === "Website Types" && (
                  <Globe size={32} className="text-cyan-400" />
                )}
                {section.category === "E-commerce" && (
                  <ShoppingCart size={32} className="text-purple-400" />
                )}
                {section.category === "Growth Services" && (
                  <TrendingUp size={32} className="text-pink-400" />
                )}
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {section.category}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 0 30px rgba(0, 217, 255, 0.15)",
                    }}
                    className="group bg-black/20 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-cyan-500/80 rounded-full p-2 text-white shadow-lg">
                        {item.icon}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4 flex-1">{item.short}</p>
                      <div className="flex gap-2 mt-2">
                        <button
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                          onClick={() => setDetailsModal({ service: item, category: section.category })}
                        >
                          <Info size={16} /> View Details
                        </button>
                        <button
                          className="px-4 py-2 bg-black/30 border border-cyan-400 rounded-full text-cyan-200 font-semibold hover:bg-black/60 transition-all duration-300 flex items-center gap-2"
                          onClick={() => setModalView('enquire')}
                        >
                          <Mail size={16} /> Enquire
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details */}
        {detailsModal && (
         <motion.div
  className="fixed inset-0 z-50 flex  items-center justify-center bg-black/70 backdrop-blur-sm"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
          >
            <div
    className="bg-black/90 rounded-xl max-w-3xl w-full p-7 relative border border-cyan-700/40 shadow-2xl overflow-hidden"
    style={{
      maxHeight: '80vh',
      height: 'auto',
      overflowY: 'auto',
    }}
  >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 text-2xl"
                onClick={() => setDetailsModal(null)}
                aria-label="Close"
                type="button"
              >
                ×
              </button>
              {/* Details content */}
              <img
                src={detailsModal.service.image}
                alt={detailsModal.service.title}
                className="w-full h-48 object-cover rounded-xl mb-6 border border-cyan-800/30"
              />
              <h3 className="text-3xl font-bold mb-2 flex items-center gap-2 text-cyan-400">
                {detailsModal.service.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {detailsModal.service.details}
              </p>
              <div className="mb-6">
  <h4 className="text-cyan-300 font-semibold mb-2 text-lg">Key Features:</h4>
  <div className="flex flex-wrap gap-2">
    {detailsModal.service.features.map((feature: string, i: number) => (
      <span
        key={i}
        className="bg-cyan-800/30 text-cyan-100 px-3 py-1 rounded-full text-xs font-medium border border-cyan-600/20"
      >
        {feature}
      </span>
    ))}
  </div>
</div>

            

              {Array.isArray(detailsModal.service.tech) && detailsModal.service.tech.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-purple-300 font-semibold mb-2 text-lg">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {detailsModal.service.tech.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="bg-cyan-800/30 text-cyan-100 px-3 py-1 rounded-full text-xs font-medium border border-cyan-600/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <button
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 text-white shadow-md hover:shadow-lg"
                onClick={() => setModalView('enquire')}
              >
                <Mail size={18} /> Enquire about this Service
              </button>
              {modalView === 'enquire' && (
                <div className="absolute inset-0 bg-black/95 border border-cyan-700/40 p-8 z-50 rounded-2xl shadow-2xl flex flex-col justify-center items-center animate-fade-in">
                  <button
                    className="absolute top-4 left-4 text-gray-400 hover:text-cyan-400 text-2xl"
                    onClick={() => setModalView('details')}
                    aria-label="Back"
                    type="button"
                  >
                    ←
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Enquire about {detailsModal.service.title}</h3>
                  <form className="space-y-4 w-full" method="POST" action="https://api.web3forms.com/submit" onSubmit={handleEnquirySubmit}>
                    <input type="hidden" name="access_key" value="173a6e9e-6404-4660-8381-88f16393fab5" />
                    <input type="hidden" name="subject" value={`Enquiry about ${detailsModal.service.title}`} />
                    <div>
                      <label className="block text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        pattern="[0-9]{10}"
                        placeholder="Enter 10-digit number"
                        className="w-full px-4 py-2 rounded bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400"
                        defaultValue={`I am interested in the ${detailsModal.service.title} service. Please provide more details.`}
                      />
                    </div>
                    {error && <div className="text-red-400 text-sm">{error}</div>}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-white shadow-md hover:shadow-lg mt-2 disabled:opacity-60"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </button>
                  </form>
                  {modalView === 'thankyou' && (
                    <div className="flex flex-col items-center justify-center h-full py-12">
                      <h3 className="text-2xl font-bold text-cyan-400 mb-4">Thank you for your enquiry!</h3>
                      <p className="text-gray-300 mb-6 text-center">Your enquiry has been sent. We will get back to you soon.</p>
                      <button
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-white shadow-md hover:shadow-lg"
                        onClick={() => { setDetailsModal(null); setModalView('details'); }}
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Custom Service CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Need Something Custom?
            </h2>
            <p className="text-gray-300 mb-6">
              We can create a completely custom solution tailored to your unique
              needs. Let’s talk about your project!
            </p>
            <button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              onClick={() =>
                (window.location.href =
                  "mailto:hello@grasp-it.com?subject=Custom Service Enquiry")
              }
            >
              Request Custom Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
