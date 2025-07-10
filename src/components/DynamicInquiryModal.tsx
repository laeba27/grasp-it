import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DynamicInquiryModalProps {
  open: boolean;
  onClose: () => void;
  serviceName?: string;
  prefillMessage?: string;
  context?: string;
  showPhone?: boolean;
  showSubject?: boolean;
  musicUrl?: string; // optional: play music on open
}

const WEB3FORMS_KEY = "173a6e9e-6404-4660-8381-88f16393fab5";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const DynamicInquiryModal: React.FC<DynamicInquiryModalProps> = ({
  open,
  onClose,
  serviceName,
  prefillMessage,
  context,
  showPhone = true,
  showSubject = false,
  musicUrl,
}) => {
  const [mode, setMode] = useState<'form' | 'thankyou'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (open) {
      setMode('form');
      setError(null);
      if (musicUrl && audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    } else {
      if (audioRef.current) audioRef.current.pause();
    }
  }, [open, musicUrl]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        setMode('thankyou');
        if (audioRef.current) audioRef.current.pause();
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
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
        >
          <div className="bg-black/90 rounded-2xl max-w-lg w-full p-8 relative border border-cyan-700/40 shadow-2xl">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 text-2xl"
              onClick={onClose}
              aria-label="Close"
              type="button"
            >
              <X />
            </button>
            {musicUrl && <audio ref={audioRef} src={musicUrl} loop />}
            {mode === 'form' && (
              <>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  {context || serviceName ? `Enquire about ${context || serviceName}` : 'Enquiry'}
                </h3>
                <form className="space-y-4" method="POST" action="https://api.web3forms.com/submit" onSubmit={handleSubmit}>
                  <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
                  <input type="hidden" name="subject" value={`Enquiry${serviceName ? ' about ' + serviceName : ''}`} />
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
                  {showPhone && (
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
                  )}
                  {showSubject && (
                    <div>
                      <label className="block text-gray-300 mb-1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="w-full px-4 py-2 rounded bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-gray-300 mb-1">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded bg-black/40 border border-cyan-700/40 text-white focus:outline-none focus:border-cyan-400"
                      defaultValue={
                        prefillMessage ||
                        (serviceName
                          ? `I am interested in the ${serviceName} service. Please provide more details.`
                          : '')
                      }
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
              </>
            )}
            {mode === 'thankyou' && (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Thank you for your enquiry!</h3>
                <p className="text-gray-300 mb-6 text-center">Your enquiry has been sent. We will get back to you soon.</p>
                <button
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-white shadow-md hover:shadow-lg"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DynamicInquiryModal; 