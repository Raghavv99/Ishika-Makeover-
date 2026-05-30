import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronDown, CheckCircle, User, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How far in advance should I book my bridal makeup?", a: "We recommend booking at least 3 to 6 months in advance, especially during peak wedding seasons (November to February), to secure your preferred dates." },
    { q: "Do you offer trial sessions?", a: "Yes, we offer paid trial sessions for bridal makeup. The cost of the trial is fully adjusted against your final booking amount if you confirm with us." },
    { q: "What brands of products do you use?", a: "We exclusively use premium international brands such as MAC, Huda Beauty, Bobbi Brown, NARS, Charlotte Tilbury, and Olaplex to ensure the highest quality and safety." },
    { q: "Is the salon open every day?", a: "Yes, we are open daily from 10:00 AM to 8:00 PM to accommodate your busy schedules." },
    { q: "Do you travel to venues for bridal makeup?", a: "Yes, we offer venue visit services for brides. Travel and accommodation charges (if applicable) are additional to the package cost." }
  ];

  return (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-24 min-h-screen bg-black"
    >
      <section className="bg-black py-32 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-6"
          >
            Contact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gold tracking-[0.3em] uppercase text-sm font-semibold"
          >
            Connect With Luxury
          </motion.p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Details */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-serif text-4xl text-white mb-6">Let's Talk Beauty</h2>
              <p className="text-ivory/70 leading-relaxed font-light text-lg">
                Whether you have a question about our services, pricing, or want to explore bespoke bridal packages, our team is ready to answer all your queries with the utmost priority.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-start space-x-6 p-8 bg-white/5 border border-white/10 group hover:border-gold/50 hover:bg-white/10 transition-all duration-300">
                <MapPin className="w-8 h-8 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-2 text-xl font-serif">Salon Location</h3>
                  <p className="text-ivory/70 font-light leading-relaxed">Ram Ganj Ki Dhal<br/>Etawah, Uttar Pradesh<br/>206001</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start space-x-6 p-8 bg-white/5 border border-white/10 group hover:border-gold/50 hover:bg-white/10 transition-all duration-300">
                <Phone className="w-8 h-8 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-2 text-xl font-serif">Direct Contact</h3>
                  <p className="text-ivory/70 font-light mb-4">Feel free to call us for immediate assistance or general inquiries.</p>
                  <p className="text-gold text-lg tracking-wider font-medium">072755 05871</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-6 p-8 bg-white/5 border border-white/10 group hover:border-gold/50 hover:bg-white/10 transition-all duration-300">
                <Clock className="w-8 h-8 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-2 text-xl font-serif">Business Hours</h3>
                  <p className="text-ivory/70 font-light mb-2">Monday - Sunday <br/> 10:00 AM - 8:00 PM</p>
                  <p className="text-gold text-xs uppercase tracking-widest font-bold flex items-center"><span className="w-2 h-2 rounded-full bg-gold mr-2 animate-pulse"></span> Open Daily</p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-8">
               <a 
                 href="https://wa.me/917275505871" 
                 target="_blank" 
                 rel="noreferrer"
                 className="w-full sm:w-auto px-10 py-5 bg-gold text-luxury uppercase tracking-widest text-sm font-semibold hover:bg-white transition-all flex items-center justify-center space-x-3 shadow-2xl hover:-translate-y-1"
               >
                 <FaWhatsapp className="w-5 h-5" />
                 <span>Consult Promptly on WhatsApp</span>
               </a>
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className="bg-white/5 border border-white/10 p-10 lg:p-14 relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold/20 -mt-2 -mr-2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold/20 -mb-2 -ml-2"></div>

                <h3 className="font-serif text-3xl text-white mb-2">Send an Inquiry</h3>
                <p className="text-ivory/50 text-sm mb-10 font-light">We will respond to your message within 24 hours.</p>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="relative group">
                      <User className="absolute left-0 top-2 w-5 h-5 text-ivory/40 group-focus-within:text-gold transition-colors" />
                      <input type="text" id="fname" className="w-full bg-transparent border-b border-white/20 py-2 pl-10 text-white outline-none peer placeholder-transparent focus:border-gold transition-colors" placeholder="First Name" />
                      <label htmlFor="fname" className="absolute left-0 -top-5 text-xs uppercase tracking-widest text-ivory/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-10 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-xs peer-focus:text-gold cursor-text">First Name</label>
                    </div>
                    <div className="relative group">
                      <User className="absolute left-0 top-2 w-5 h-5 text-ivory/40 group-focus-within:text-gold transition-colors" />
                      <input type="text" id="lname" className="w-full bg-transparent border-b border-white/20 py-2 pl-10 text-white outline-none peer placeholder-transparent focus:border-gold transition-colors" placeholder="Last Name" />
                      <label htmlFor="lname" className="absolute left-0 -top-5 text-xs uppercase tracking-widest text-ivory/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-10 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-xs peer-focus:text-gold cursor-text">Last Name</label>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <Mail className="absolute left-0 top-2 w-5 h-5 text-ivory/40 group-focus-within:text-gold transition-colors" />
                    <input type="email" id="email" className="w-full bg-transparent border-b border-white/20 py-2 pl-10 text-white outline-none peer placeholder-transparent focus:border-gold transition-colors" placeholder="Email Address" />
                    <label htmlFor="email" className="absolute left-0 -top-5 text-xs uppercase tracking-widest text-ivory/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-10 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-xs peer-focus:text-gold cursor-text">Email Address</label>
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-0 top-2 w-5 h-5 text-ivory/40 group-focus-within:text-gold transition-colors" />
                    <input type="tel" id="phone" className="w-full bg-transparent border-b border-white/20 py-2 pl-10 text-white outline-none peer placeholder-transparent focus:border-gold transition-colors" placeholder="Phone Number" />
                    <label htmlFor="phone" className="absolute left-0 -top-5 text-xs uppercase tracking-widest text-ivory/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-10 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-xs peer-focus:text-gold cursor-text">Phone Number</label>
                  </div>

                  <div className="relative group pt-4">
                    <MessageSquare className="absolute left-0 top-6 w-5 h-5 text-ivory/40 group-focus-within:text-gold transition-colors" />
                    <textarea id="msg" rows={4} className="w-full bg-transparent border-b border-white/20 py-2 pl-10 mt-4 text-white outline-none peer placeholder-transparent focus:border-gold transition-colors resize-none" placeholder="Message"></textarea>
                    <label htmlFor="msg" className="absolute left-0 -top-1 text-xs uppercase tracking-widest text-ivory/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:left-10 peer-focus:-top-1 peer-focus:left-0 peer-focus:text-xs peer-focus:text-gold cursor-text">How can we help you?</label>
                  </div>

                  <button className="w-full py-5 bg-transparent border border-gold text-gold uppercase tracking-widest text-sm font-bold hover:bg-gold hover:text-black transition-all mt-4">
                    Send Message
                  </button>
                </form>
             </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Clear Your Doubts</h2>
              <h3 className="font-serif text-4xl text-white">Frequently Asked Questions</h3>
           </div>

           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                 <div key={idx} className="border border-white/10 bg-black">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
                    >
                       <span className="font-serif text-lg text-white">{faq.q}</span>
                       <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <motion.div 
                      initial={false}
                      animate={{ height: activeFaq === idx ? 'auto' : 0, opacity: activeFaq === idx ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                       <div className="px-6 pb-5 pt-2 text-ivory/60 font-light leading-relaxed border-t border-white/5">
                          {faq.a}
                       </div>
                    </motion.div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[600px] w-full bg-white/5 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
         <div className="absolute inset-0 pointer-events-none border-[20px] border-black z-20 hidden md:block"></div>
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113947.56269608146!2d78.93246755431697!3d26.790933742468352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39759881fa6a2d93%3A0xeab5fa7da4719c8f!2sEtawah%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716616035252!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen={true} 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
           title="Salon Location"
         ></iframe>
      </section>
    </motion.div>
  );
}
