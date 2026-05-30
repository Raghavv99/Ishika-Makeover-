import { motion } from 'framer-motion';
import { Star, Quote, Play } from 'lucide-react';

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

export default function Testimonials() {
  return (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-24 min-h-screen"
    >
      <section className="bg-black py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">Client Love</h1>
          <p className="text-gold tracking-widest uppercase text-sm">Real Stories, Real Beauty</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-4">
            <h2 className="text-5xl font-serif text-gold mb-2 flex items-center justify-center">5.0 <Star className="w-6 h-6 ml-2 fill-gold text-gold" /></h2>
            <p className="text-ivory/60 uppercase tracking-widest text-xs">Google Average Rating</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-4">
             <h2 className="text-5xl font-serif text-gold mb-2">44+</h2>
             <p className="text-ivory/60 uppercase tracking-widest text-xs">Verified Reviews</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="p-4">
             <h2 className="text-5xl font-serif text-gold mb-2">100%</h2>
             <p className="text-ivory/60 uppercase tracking-widest text-xs">Satisfaction Rate</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              name: "Priyanka S.",
              category: "Bridal Makeup",
              text: "Ishika di and her team are literally magicians. She gave me the perfect elegant subtle look I always wanted for my wedding. The MAC & Huda products she used kept my makeup flawless for over 12 hours!",
              img: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2671&auto=format&fit=crop"
            },
            {
              name: "Sneha R.",
              category: "Hair Styling & Colour",
              text: "I got Balayage done here and it completely transformed my look. The staff is so polite and they explained the entire process to me. Highly recommend them for any hair services in Etawah.",
              img: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2669&auto=format&fit=crop"
            },
            {
              name: "Kritika V.",
              category: "Party Makeup",
              text: "Best salon experience ever. Period. The ambiance is extremely luxurious and the artists pay attention to every detail. They created a beautiful glamorous look for my brother's reception.",
              img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop"
            },
            {
              name: "Riya M.",
              category: "Pre-Bridal Package",
              text: "The pre-bridal skin therapies were so relaxing. By my wedding day, my skin was glowing natively. They use genuine products and the salon hygiene is top-notch.",
              img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop"
            },
            {
              name: "Megha A.",
              category: "Nail Extensions",
              text: "Absolutely love my acrylic nail extensions. The nail art work is so intricate and precise. It's been 3 weeks and they still look brand new. Premium service!",
              img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2574&auto=format&fit=crop"
            },
            {
              name: "Anjali T.",
              category: "Engagement Makeup",
              text: "I booked them for my engagement and HD makeup was totally worth it. The photographs came out stunning and it didn't look cakey at all. So natural and elegant.",
              img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2671&auto=format&fit=crop"
            }
          ].map((review, idx) => (
             <motion.div key={idx} variants={itemVariants} className="bg-white/5 border border-white/10 p-8 relative group hover:border-gold/50 transition-colors">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20 group-hover:text-gold/40 transition-colors" />
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-ivory/80 font-light leading-relaxed mb-6">"{review.text}"</p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                     <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif">{review.name}</h4>
                    <p className="text-gold text-xs uppercase tracking-widest">{review.category}</p>
                  </div>
                </div>
             </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Video Reviews (Placeholder) */}
      <section className="py-24 bg-gold relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-luxury relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-12">Watch Our Transformations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-video bg-luxury/10 border border-luxury/20 group cursor-pointer overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2671&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Video cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-luxury/80 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-luxury transition-colors">
                   <Play className="w-6 h-6 text-gold translate-x-1" />
                 </div>
              </div>
              <div className="absolute bottom-4 left-4 text-left">
                 <p className="text-white font-serif text-xl drop-shadow-md">Aarti's Bridal Journey</p>
              </div>
            </div>
            <div className="relative aspect-video bg-luxury/10 border border-luxury/20 group cursor-pointer overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Video cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-luxury/80 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-luxury transition-colors">
                   <Play className="w-6 h-6 text-gold translate-x-1" />
                 </div>
              </div>
              <div className="absolute bottom-4 left-4 text-left">
                 <p className="text-white font-serif text-xl drop-shadow-md">Client Diaries: Party Glow</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
