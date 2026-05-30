import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone, ChevronRight, Play, CheckCircle, ArrowRight, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black"
    >
      {/* 1. LUXURY HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        </motion.div>

        {/* Floating Particles (CSS simulation) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           {[...Array(10)].map((_, i) => (
             <motion.div 
               key={i}
               className="absolute w-1 h-1 bg-gold rounded-full opacity-30"
               initial={{ y: "110%", x: Math.random() * 100 + "%" }}
               animate={{ y: "-10%", x: (Math.random() * 100) + "%" }}
               transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
             />
           ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="h-[1px] w-12 bg-gold/50"></span>
              <span className="text-gold tracking-[0.4em] uppercase text-xs sm:text-sm font-semibold">Etawah's Premium Beauty Destination</span>
              <span className="h-[1px] w-12 bg-gold/50"></span>
            </div>
            
            <h1 className="font-serif text-6xl sm:text-7xl md:text-9xl tracking-tighter text-white mb-6 drop-shadow-2xl">
              Ishika <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold italic pr-4">Makeover</span>
            </h1>
            
            <p className="text-ivory/80 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Experience the pinnacle of luxury beauty. Unveiling your true elegance with world-class makeup, hair, and skin services.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/book-appointment" 
                className="w-full sm:w-auto px-10 py-5 bg-gold text-luxury uppercase tracking-widest text-sm font-semibold hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:-translate-y-1"
              >
                Book Appointment
              </Link>
              <a 
                href="https://wa.me/917275505871" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-10 py-5 border border-gold/50 backdrop-blur-sm text-gold uppercase tracking-widest text-sm font-semibold hover:bg-gold/10 hover:border-gold transition-all flex items-center justify-center space-x-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }} 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
        >
          <span className="text-xs uppercase tracking-widest text-gold mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. STATS (Glassmorphism) */}
      <section className="relative z-20 -mt-16 mx-4 md:mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif text-gold flex items-center justify-center">
                5.0 <Star className="w-6 h-6 ml-2 fill-gold text-gold" />
              </div>
              <p className="text-xs tracking-widest uppercase text-ivory/60">Google Rating</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif text-gold">44+</div>
              <p className="text-xs tracking-widest uppercase text-ivory/60">5-Star Reviews</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif text-gold">1K+</div>
              <p className="text-xs tracking-widest uppercase text-ivory/60">Happy Brides</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif text-gold flex items-center justify-center">
                Top <span className="text-xl ml-1 align-top">1</span>
              </div>
              <p className="text-xs tracking-widest uppercase text-ivory/60">Salon in Etawah</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. INTRODUCTION */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto group">
              <div className="absolute inset-0 bg-gold/20 translate-x-6 translate-y-6 transition-transform group-hover:translate-x-8 group-hover:translate-y-8"></div>
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop" 
                alt="Luxury Salon Interior" 
                className="relative z-10 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square border-8 border-black z-20 hidden md:block overflow-hidden hidden">
                {/* Secondary Image */}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="w-full lg:w-1/2 space-y-10"
          >
            <div>
              <h2 className="flex items-center text-gold tracking-[0.2em] uppercase text-sm mb-6">
                <span className="w-8 h-[1px] bg-gold mr-4"></span> The Legacy
              </h2>
              <h3 className="font-serif text-5xl md:text-6xl leading-[1.1] text-white">
                Redefining Beauty <br/>
                <span className="text-ivory/50 italic">in Etawah</span>
              </h3>
            </div>
            
            <p className="text-ivory/70 leading-relaxed font-light text-xl">
              Ishika Makeover Salon is more than a beauty parlor; it is a sanctuary of luxury. We blend international styling standards with bespoke personalization to create looks that are unequivocally yours.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { title: "Master Artists", desc: "Internationally certified experts" },
                { title: "Global BRANDS", desc: "MAC, Huda Beauty, Olaplex" },
                { title: "Royal Hygiene", desc: "Hospital-grade sanitization" },
                { title: "Bespoke Styling", desc: "Tailored to your features" }
              ].map((item, idx) => (
                <div key={idx} className="border-l border-gold/30 pl-4 py-2 hover:border-gold transition-colors">
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-ivory/50">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <Link to="/about" className="group inline-flex items-center space-x-4 text-white hover:text-gold transition-colors">
                <span className="uppercase tracking-widest text-sm font-bold">Discover Our Story</span>
                <span className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. SERVICES SHOWCASE (Extended) */}
      <section className="py-32 bg-white/5 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Our Expertise</h2>
              <h3 className="font-serif text-5xl md:text-6xl text-white">Signature Services</h3>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center text-ivory/60 hover:text-gold uppercase tracking-widest text-sm transition-colors border-b border-transparent hover:border-gold pb-1">
              View All Services
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Bridal Makeup", img: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2671&auto=format&fit=crop", desc: "Flawless HD & Airbrush bridal packages." },
              { title: "Hair Styling", img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2626&auto=format&fit=crop", desc: "Color, highlights, spa & professional cuts." },
              { title: "Nail Artistry", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2574&auto=format&fit=crop", desc: "Acrylics, extensions & bespoke art." },
              { title: "Skin Care", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop", desc: "Luxury facials, treatments & therapies." }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeIn} className="group relative overflow-hidden block aspect-[3/4] cursor-pointer">
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="w-8 h-[2px] bg-gold mb-6 group-hover:w-full transition-all duration-500 delay-100"></span>
                  <h4 className="font-serif text-3xl text-white mb-2">{service.title}</h4>
                  <p className="text-ivory/70 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {service.desc}
                  </p>
                  <div className="mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                    <span className="text-gold text-xs uppercase tracking-widest font-bold">Discover &rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12 md:hidden">
            <Link to="/services" className="inline-block border-b border-gold text-gold pb-1 uppercase tracking-widest text-sm">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. IMMERSIVE VIDEO REVEAL */}
      <section className="py-40 relative flex items-center justify-center min-h-[600px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2667&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-10 border border-white/30 group"
          >
            <Play className="w-10 h-10 text-white translate-x-1 group-hover:text-gold transition-colors" />
          </motion.button>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl text-white mb-6 drop-shadow-lg"
          >
            The Bridal Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-ivory/90 text-xl md:text-2xl font-light mb-8 drop-shadow-md max-w-2xl mx-auto"
          >
            Witness the transformation. We specialize in crafting timeless, elegant bridal looks that reflect your unique personality.
          </motion.p>
        </div>
      </section>

      {/* 6. BEFORE / AFTER SHOWCASE (Textual layout for now) */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Magic in Details</h2>
          <h3 className="font-serif text-5xl text-white mb-20">Transformations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Transformation 1 */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] rounded-sm mb-6">
                {/* Simulated split screen with hover */}
                <div className="absolute inset-0 flex">
                   <div className="w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop')] bg-cover bg-left grayscale blur-sm"></div>
                   <div className="w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2671&auto=format&fit=crop')] bg-cover bg-right group-hover:w-full transition-all duration-700 ease-in-out absolute right-0"></div>
                </div>
                <div className="absolute inset-x-0 bottom-4 flex justify-between px-6 pointer-events-none">
                  <span className="text-white/60 font-serif bg-black/50 px-3 py-1 rounded backdrop-blur">Before</span>
                  <span className="text-white font-serif bg-gold/80 px-3 py-1 rounded backdrop-blur text-black">After</span>
                </div>
              </div>
              <h4 className="font-serif text-2xl text-white mb-2">HD Party Glam</h4>
              <p className="text-ivory/60 text-sm">Flawless base with bold eye artistry.</p>
            </motion.div>

            {/* Transformation 2 */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] rounded-sm mb-6">
                <div className="absolute inset-0 flex">
                   <div className="w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2636&auto=format&fit=crop')] bg-cover bg-left grayscale blur-[2px]"></div>
                   <div className="w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2671&auto=format&fit=crop')] bg-cover bg-center group-hover:w-full transition-all duration-700 ease-in-out absolute right-0"></div>
                </div>
                <div className="absolute inset-x-0 bottom-4 flex justify-between px-6 pointer-events-none">
                  <span className="text-white/60 font-serif bg-black/50 px-3 py-1 rounded backdrop-blur">Before</span>
                  <span className="text-white font-serif bg-gold/80 px-3 py-1 rounded backdrop-blur text-black">After</span>
                </div>
              </div>
              <h4 className="font-serif text-2xl text-white mb-2">Airbrush Bridal</h4>
              <p className="text-ivory/60 text-sm">Waterproof, sweat-proof, elegant bridal glow.</p>
            </motion.div>
          </div>
          
          <div className="mt-16">
            <Link to="/gallery" className="px-8 py-4 border border-white text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-all">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US (Expanded) */}
      <section className="py-32 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-gold tracking-[0.2em] uppercase text-sm mb-4">The Ishika Standard</h2>
            <h3 className="font-serif text-5xl md:text-6xl text-white">Excellence Guaranteed</h3>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
          >
            {[
              { title: "Premium Products", desc: "We refuse to compromise. Only authentic, high-end international brands like MAC, Huda Beauty, Bobbi Brown, and Olaplex touch your skin and hair.", number: "01" },
              { title: "Master Artists", desc: "Our team consists of highly trained and certified beauty professionals dedicated to perfection, constantly updating their skills with global trends.", number: "02" },
              { title: "Hygienic Environment", desc: "Your safety is paramount. We maintain rigorous sterilization protocols for all tools and maintain a pristine, relaxing salon atmosphere continually.", number: "03" },
              { title: "Personalized Care", desc: "No two faces are the same. We offer bespoke consultations to understand your skin type, features, and preferences before beginning any service.", number: "04" },
              { title: "Long-Lasting Results", desc: "Using advanced techniques like Airbrush and HD application, we ensure your look stays flawless through sweat, tears, and long event hours.", number: "05" },
              { title: "Punctual Delivery", desc: "For brides in particular, timing is everything. Our experienced team guarantees prompt service without ever rushing the artistic process.", number: "06" }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeIn} className="relative group">
                <span className="absolute -top-10 -left-6 text-8xl font-serif text-white/5 group-hover:text-gold/10 transition-colors pointer-events-none select-none">
                  {feature.number}
                </span>
                <CheckCircle className="w-8 h-8 text-gold mb-6 opacity-80" />
                <h4 className="font-serif text-2xl text-white mb-4">{feature.title}</h4>
                <p className="text-ivory/60 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. TESTIMONIAL PREVIEW */}
      <section className="py-32 bg-black relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
         <div className="max-w-4xl mx-auto px-4 text-center">
            <Star className="w-12 h-12 text-gold mx-auto mb-8 opacity-50" />
            <h3 className="font-serif text-4xl leading-snug text-white mb-10">
              "Ishika di is truly a magician. She gave me the perfect elegant subtle look I always wanted for my wedding. The MAC products she used kept my makeup flawless for over 12 hours!"
            </h3>
            <p className="text-gold uppercase tracking-widest text-sm font-bold mb-2">Priyanka Sharma</p>
            <p className="text-ivory/50 text-xs uppercase tracking-widest">Bridal Client</p>
            
            <div className="mt-16">
              <Link to="/testimonials" className="inline-block border-b border-gold text-gold hover:text-white hover:border-white pb-1 transition-colors uppercase tracking-widest text-xs font-semibold">
                Read More Reviews
              </Link>
            </div>
         </div>
      </section>

      {/* 9. CTA / BOOKING */}
      <section className="py-32 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-10">
          <h2 className="font-serif text-5xl md:text-7xl text-luxury mt-4 drop-shadow-md">Reserve Your Makeover</h2>
          <p className="text-luxury/90 text-xl md:text-2xl font-medium max-w-2xl mx-auto drop-shadow-sm">
            Step into the world of luxury. Let our experts enhance your natural beauty and boost your confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8">
            <Link 
              to="/book-appointment" 
              className="w-full sm:w-auto px-12 py-5 bg-luxury text-gold uppercase tracking-widest text-sm font-bold hover:bg-black transition-all shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1"
            >
              Book Appointment
            </Link>
            <a 
              href="https://wa.me/917275505871" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-12 py-5 border-2 border-luxury text-luxury uppercase tracking-widest text-sm font-bold hover:bg-luxury/10 transition-all flex items-center justify-center space-x-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
