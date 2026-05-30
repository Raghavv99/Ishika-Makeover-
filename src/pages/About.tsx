import { motion } from 'framer-motion';
import { Sparkles, Heart, Award, ShieldCheck } from 'lucide-react';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  return (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-24 min-h-screen bg-black"
    >
      {/* 1. Page Header */}
      <section className="relative py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516975080661-46df278f2378?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl text-white mb-6 drop-shadow-lg"
          >
            The Legacy of Luxury
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-gold tracking-[0.4em] uppercase text-sm md:text-base font-semibold"
          >
            Behind Ishika Makeover Salon
          </motion.p>
        </div>
      </section>

      {/* 2. Our Journey */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="w-full lg:w-1/2 space-y-10"
          >
            <h2 className="font-serif text-5xl text-gold">The Genesis</h2>
            <div className="space-y-6 text-ivory/70 leading-relaxed font-light text-xl">
              <p>
                What began as a passionate pursuit of art has blossomed into Etawah's most revered luxury beauty destination. Ishika Makeover Salon was founded on a simple yet profound premise: every individual possesses a unique, inherent beauty that deserves to be celebrated.
              </p>
              <p>
                For over a decade, we have dedicated ourselves to mastering the subtle nuances of makeup, hair alchemy, and skin rejuvenation. We don't just follow trends; we set the standard. 
              </p>
              <p>
                Our journey has been defined by our uncompromising commitment to using only the finest international products and maintaining a sanctuary of absolute hygiene. Today, we stand proud as the trusted choice for thousands of brides and beauty aficionados.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="w-full lg:w-1/2 relative"
          >
             <div className="relative aspect-[4/5] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&w=2670&auto=format&fit=crop" alt="Makeup Artistry" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%]" />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
             </div>
             <div className="absolute -bottom-10 -left-10 bg-black border border-white/10 p-8 shadow-2xl max-w-xs backdrop-blur-md">
                <p className="font-serif text-3xl text-gold mb-2">10+ Years</p>
                <p className="text-ivory/80 text-sm uppercase tracking-widest font-semibold">Of Excellence in Beauty</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Founder Story */}
      <section className="py-32 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
             <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
               className="w-full lg:w-1/2 space-y-8"
             >
               <h2 className="text-gold tracking-[0.2em] uppercase text-sm mb-2">The Visionary</h2>
               <h3 className="font-serif text-5xl text-white">Ishika Sharma</h3>
               <p className="text-xl text-ivory/50 font-light italic">"Makeup is not a mask that covers up your beauty; it's a weapon that helps you express who you are from the inside."</p>
               <div className="space-y-6 text-ivory/80 leading-relaxed font-light">
                 <p>
                   As the lead artist and visionary behind the brand, Ishika brings unparalleled expertise certified by the world's leading makeup academies. Her signature aesthetic—flawless, luminous skin paired with elegant, captivating eyes—has made her the most sought-after bridal artist in the region.
                 </p>
                 <p>
                   She personally oversees the training of every artist in the salon, ensuring that the "Ishika Standard" is met flawlessly, regardless of the service chosen.
                 </p>
               </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
               className="w-full lg:w-1/2 aspect-square relative"
             >
                <div className="absolute inset-4 border border-gold/50 z-0 translate-x-4 translate-y-4"></div>
                <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2680&auto=format&fit=crop" alt="Founder Portrait" className="relative z-10 w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700" />
             </motion.div>
           </div>
        </div>
      </section>

      {/* 4. Core Values & Philosophy */}
      <section className="py-32">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <h2 className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Our DNA</h2>
               <h3 className="font-serif text-5xl text-white">Core Philosophy</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               {[
                 { icon: Sparkles, title: "Artistry Excellence", desc: "Constant innovation and upskilling in global beauty trends." },
                 { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Strict adherence to using 100% genuine, premium international brands." },
                 { icon: Heart, title: "Client Eminence", desc: "Listening to our clients and creating bespoke looks tailored to their aura." },
                 { icon: Award, title: "Absolute Hygiene", desc: "Hospital-grade sanitization protocols for all tools and stations." }
               ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="p-8 border border-white/10 hover:border-gold/50 hover:bg-white/5 transition-all group"
                  >
                     <item.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                     <h4 className="font-serif text-2xl text-white mb-4">{item.title}</h4>
                     <p className="text-ivory/60 leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="py-32 bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-fixed relative">
         <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h3 className="font-serif text-4xl text-gold mb-6 border-b border-gold/30 pb-4">Our Mission</h3>
                  <p className="text-xl text-ivory/80 font-light leading-relaxed">
                     To empower individuals through transformative luxury beauty experiences. We strive to provide unparalleled service quality, employing the world's most advanced techniques to make every client feel like royalty.
                  </p>
               </motion.div>
               <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h3 className="font-serif text-4xl text-gold mb-6 border-b border-gold/30 pb-4">Our Vision</h3>
                  <p className="text-xl text-ivory/80 font-light leading-relaxed">
                     To be globally recognized as a premier sanctuary of artistry and excellence, setting industry benchmarks for luxury salon standards, bridal perfection, and advanced skin care.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>
      
      {/* 6. Team Section (Moved from old About, expanded) */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Master Artists</h2>
           <h3 className="font-serif text-5xl text-white mb-20">Meet Our Experts</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { role: "Owner & Lead Makeup Artist", name: "Ishika Sharma", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2669&auto=format&fit=crop" },
               { role: "Senior Hair Stylist", name: "Ananya Singh", img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2636&auto=format&fit=crop" },
               { role: "Acade Skin Expert", name: "Priya Patel", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop" }
             ].map((member, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
                  className="group"
                >
                  <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500"></div>
                  </div>
                  <h4 className="font-serif text-3xl text-white mb-1 group-hover:text-gold transition-colors">{member.name}</h4>
                  <p className="text-white/50 text-xs uppercase tracking-widest">{member.role}</p>
                </motion.div>
             ))}
           </div>
        </div>
      </section>
    </motion.div>
  );
}
