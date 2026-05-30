import { Calendar as CalendarIcon, CheckCircle, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

export default function BookAppointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto reset after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
      }, 5000);
    }, 1500);
  };

  return (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-24 min-h-screen bg-black"
    >
      <section className="bg-black py-32 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516975080661-46df278f2378?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-6"
          >
            Reserve Your Spot
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gold tracking-[0.3em] uppercase text-sm font-semibold"
          >
            Experience Absolute Craftsmanship
          </motion.p>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Dynamic Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gold/5 blur-[120px] rounded-[100%] pointer-events-none"></div>
        
        <div className="bg-black/80 backdrop-blur-3xl border border-white/10 p-8 md:p-16 shadow-2xl relative overflow-hidden z-10">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-gold/30 -translate-x-2 -translate-y-2"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/30 translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-gold/30 -translate-x-2 translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-gold/30 translate-x-2 translate-y-2"></div>

          <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
            <CalendarIcon className="w-96 h-96 text-gold transform rotate-12" />
          </div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="font-serif text-4xl text-white mb-4">The VIP Booking</h2>
            <p className="text-ivory/60 font-light text-lg">Secure your preferred slot. We advise booking at least 3 weeks in advance for bridal services.</p>
          </div>

          <div className="relative z-10 min-h-[400px]">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center h-full space-y-6 text-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <CheckCircle className="w-24 h-24 text-gold mb-4" />
                  </motion.div>
                  <h3 className="font-serif text-4xl text-white">Booking Requested</h3>
                  <p className="text-ivory/70 text-lg max-w-md mx-auto font-light">
                    Your request has been placed in our priority queue. Our executive will call you shortly to confirm the appointment.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit} 
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input type="text" id="fname" required className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none peer placeholder-transparent focus:border-gold transition-all" placeholder="Full Name" />
                      <label htmlFor="fname" className="absolute left-0 -top-4 text-xs uppercase tracking-widest text-ivory/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold cursor-text">Full Name</label>
                    </div>
                    <div className="relative group">
                      <input type="tel" id="mobile" required className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none peer placeholder-transparent focus:border-gold transition-all" placeholder="Mobile Number" />
                      <label htmlFor="mobile" className="absolute left-0 -top-4 text-xs uppercase tracking-widest text-ivory/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold cursor-text">Mobile Number</label>
                    </div>
                  </div>

                  <div className="relative group pt-4">
                    <select id="service" required defaultValue="" className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-gold transition-all appearance-none cursor-pointer">
                      <option value="" disabled className="text-black">Select Primary Service...</option>
                      <option value="bridal" className="text-black">Bridal / Pre-Bridal Makeover</option>
                      <option value="party" className="text-black">Party / Engagement Glamour</option>
                      <option value="hair" className="text-black">Hair Styling & Chemical Treatments</option>
                      <option value="skin" className="text-black">Skin Care & Advanced Facials</option>
                      <option value="nails" className="text-black">Nail Art & Extensions</option>
                      <option value="other" className="text-black">Consultation / Custom Request</option>
                    </select>
                    <label htmlFor="service" className="absolute left-0 -top-4 text-xs uppercase tracking-widest text-gold cursor-text">Desired Service</label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                    <div className="relative group">
                      <input type="date" id="date" required className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-gold transition-all [color-scheme:dark]" />
                      <label htmlFor="date" className="absolute left-0 -top-4 text-xs uppercase tracking-widest text-gold cursor-text">Preferred Date</label>
                    </div>
                    <div className="relative group">
                      <input type="time" id="time" required className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none focus:border-gold transition-all [color-scheme:dark]" />
                      <label htmlFor="time" className="absolute left-0 -top-4 text-xs uppercase tracking-widest text-gold cursor-text">Preferred Time</label>
                    </div>
                  </div>

                  <div className="relative group pt-4">
                    <textarea id="notes" rows={3} className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white outline-none peer placeholder-transparent focus:border-gold transition-all resize-none" placeholder="Notes"></textarea>
                    <label htmlFor="notes" className="absolute left-0 -top-4 text-xs uppercase tracking-widest text-ivory/40 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold cursor-text">Additional Notes or Requests (Optional)</label>
                  </div>

                  <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full md:w-1/2 py-5 bg-gold text-luxury uppercase tracking-widest text-sm font-bold hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                      <span className={`relative z-10 flex items-center justify-center ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                        Request Appointment
                      </span>
                      {isSubmitting && (
                        <span className="absolute inset-0 flex items-center justify-center z-20 text-luxury">
                          <Clock className="w-5 h-5 animate-spin" />
                        </span>
                      )}
                    </button>
                    
                    <div className="w-full md:w-1/2">
                      <a 
                        href="https://wa.me/917275505871?text=Hello!%20I%20would%20like%20to%20book%20a%20priority%20appointment." 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full py-5 border border-white/20 text-white uppercase tracking-widest text-sm font-semibold hover:border-gold hover:text-gold transition-all flex items-center justify-center space-x-3 bg-white/5"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                        <span>Fast-Track via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
