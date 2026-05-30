import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const serviceData = [
  {
    id: 'bridal',
    title: 'Bridal Makeovers',
    img: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2671&auto=format&fit=crop',
    subtitle: 'Your Perfect Day, Flawlessly Captured',
    desc: 'Our bridal makeup services are the pinnacle of our artistry. We specialize in both High Definition (HD) and Airbrush makeup techniques, ensuring you look breathtaking both in person and on camera. Every bride is unique, and so is our approach—we offer comprehensive consultations and trial sessions to design a look that perfectly complements your attire, jewelry, and personal style.',
    process: ['Skin Analysis & Prep', 'Custom Foundation Matching', 'Advanced Eye Artistry', 'Waterproof & Sweatproof Setting'],
    pricing: 'Starting at ₹12,000'
  },
  {
    id: 'hair',
    title: 'Hair Styling & Therapy',
    img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2626&auto=format&fit=crop',
    subtitle: 'Crowning Glory Restored',
    desc: 'From classic elegant updos to modern textured waves, our senior hair stylists craft masterpieces. Beyond styling, we offer deeply restorative hair spa treatments, keratin smoothening, and professional dimensional coloring (balayage, highlights). We use only premium brands like Schwarzkopf and L\'Oréal Professionnel to ensure the structural integrity of your hair.',
    process: ['Scalp & Hair Consultation', 'Deep Cleansing Wash', 'Targeted Treatment / Styling', 'Finishing & Gloss'],
    pricing: 'Starting at ₹1,500'
  },
  {
    id: 'nails',
    title: 'Nail Artistry',
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2574&auto=format&fit=crop',
    subtitle: 'Elegance in the Details',
    desc: 'Transform your nails into tiny canvases of art. Our nail technicians specialize in durable acrylic extensions, gentle gel overlays, and intricate bespoke nail art. Whether you desire a classic French manicure or 3D Swarovski crystal designs for your wedding, we ensure absolute precision and long-lasting results in a highly sanitized environment.',
    process: ['Cuticle Care & Shaping', 'Extension/Overlay Application', 'Custom Art & Paint', 'UV Setting & Cuticle Oil'],
    pricing: 'Starting at ₹800'
  },
  {
    id: 'skin',
    title: 'Skin Care & Facials',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop',
    subtitle: 'Luminous Native Glow',
    desc: 'True beauty starts with healthy, glowing skin. Our estheticians provide clinical-grade facial treatments tailored to combat acne, pigmentation, or dullness. From our signature "Golden Glow Facial" to advanced D-Tan and skin-brightening therapies, we use potent international serums and relaxing massage techniques to rejuvenate both your skin and spirit.',
    process: ['Deep Pore Cleansing', 'Gentle Exfoliation', 'Targeted Serum Infusion', 'Relaxing Mask & Massage'],
    pricing: 'Starting at ₹2,000'
  }
];

export default function Services() {
  return (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-24 min-h-screen bg-black"
    >
      <section className="bg-black py-32 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2636&auto=format&fit=crop')] bg-cover opacity-20 filter blur-sm"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
             className="font-serif text-5xl md:text-7xl text-white mb-6"
           >
             Our Services
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
             className="text-gold tracking-[0.3em] uppercase text-sm font-semibold max-w-2xl mx-auto"
           >
             Explore our portfolio of world-class beauty experiences.
           </motion.p>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-40">
        {serviceData.map((service, index) => (
          <section key={service.id} className="relative">
            <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              {/* Image Block */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative group"
              >
                 <div className="absolute inset-0 bg-gold/10 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
                 <img src={service.img} alt={service.title} className="relative z-10 w-full aspect-[4/5] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute top-8 right-8 bg-black/80 backdrop-blur text-gold px-6 py-3 font-serif z-20 border border-gold/30">
                   {service.pricing}
                 </div>
              </motion.div>

              {/* Text Block */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <div>
                  <h2 className="text-gold tracking-[0.2em] uppercase text-sm mb-4">{service.subtitle}</h2>
                  <h3 className="font-serif text-4xl md:text-6xl text-white mb-6 border-b border-white/10 pb-6">{service.title}</h3>
                </div>
                
                <p className="text-ivory/70 leading-relaxed font-light text-lg">
                  {service.desc}
                </p>

                <div className="pt-6">
                  <h4 className="text-white font-serif text-2xl mb-6">The Process</h4>
                  <ul className="space-y-4">
                     {service.process.map((step, idx) => (
                       <li key={idx} className="flex items-center space-x-4 text-ivory/80">
                         <div className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center shrink-0">
                           <span className="text-gold text-xs">{idx + 1}</span>
                         </div>
                         <span>{step}</span>
                       </li>
                     ))}
                  </ul>
                </div>

                <div className="pt-10 flex flex-col sm:flex-row gap-4">
                  <Link 
                    to='/packages'
                    className="px-8 py-4 border border-gold text-gold uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:text-black transition-all text-center"
                  >
                    View Packages
                  </Link>
                  <Link 
                    to="/book-appointment"
                    className="px-8 py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-gold transition-all text-center flex items-center justify-center group"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Booking CTA Section */}
      <section className="py-32 bg-gold text-center px-4">
         <h2 className="font-serif text-4xl md:text-5xl text-luxury mb-6">Craft Your Signature Look</h2>
         <p className="text-luxury/80 max-w-2xl mx-auto mb-10 text-lg">Whether it's your wedding day or a weekend party, let our experts bring out the best version of you.</p>
         <Link to="/book-appointment" className="inline-block px-12 py-5 bg-luxury text-gold uppercase tracking-widest text-sm font-bold hover:bg-black transition-colors shadow-2xl hover:-translate-y-1">
            Reserve Your Appointment
         </Link>
      </section>
    </motion.div>
  );
}
