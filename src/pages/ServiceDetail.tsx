import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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

export default function ServiceDetail() {
  const { id } = useParams();

  // Mock data for the selected service category
  const serviceData = {
    title: id === 'bridal' ? 'Bridal Makeup Packages' 
         : id === 'hair' ? 'Hair Styling & Spa' 
         : id === 'nails' ? 'Luxury Nail Studio' 
         : id === 'skin' ? 'Skin Care Therapies' : 'Our Services',
    desc: "Discover our premium offerings designed to elevate your beauty experience. Listed below are starting prices; accurate quotes are provided upon consultation.",
    packages: [
      { name: "Classic Foundation", price: "Starting at ₹5,000", features: ["In-depth Consultation", "Premium Brand Products", "Flawless Base Setup", "Basic Hairdo"] },
      { name: "HD Signature", price: "Starting at ₹12,000", features: ["Advanced HD Makeup", "Custom Hair Styling", "Faux Mink Lashes", "Saree/Lehenga Draping", "Body Glow Base"], highlight: true },
      { name: "Airbrush Royalty", price: "Starting at ₹18,000", features: ["Waterproof Airbrush Base", "Premium Hair Artistry", "Full Pre-Bridal Session", "Nail Paint & Accessories", "Trial Makeup Included"] }
    ]
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516975080661-46df278f2378?q=80&w=2666&auto=format&fit=crop')] bg-cover opacity-10 filter blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <Link to="/services" className="inline-flex items-center space-x-2 text-ivory/50 hover:text-gold transition-colors mb-10 text-xs uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Services</span>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-6"
          >
            {serviceData.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-ivory/70 text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            {serviceData.desc}
          </motion.p>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {serviceData.packages.map((pkg, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`border p-10 flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-2
                ${pkg.highlight ? 'bg-white/10 border-gold shadow-[0_0_40px_rgba(212,175,55,0.15)] shadow-gold/20' : 'bg-white/5 border-white/10 hover:border-gold/50'}
              `}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-gold text-luxury px-4 py-1 text-xs font-bold uppercase tracking-widest flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>
              )}

              <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-gold transition-colors">{pkg.name}</h3>
              <p className="text-2xl font-light text-white mb-10 pb-8 border-b border-white/10">{pkg.price}</p>
              
              <ul className="space-y-6 mb-12 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-4 text-ivory/80 text-sm">
                    <CheckCircle className={`w-5 h-5 shrink-0 ${pkg.highlight ? 'text-gold' : 'text-ivory/50'} group-hover:text-gold transition-colors`} />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link 
                  to="/book-appointment" 
                  className={`w-full block text-center py-4 uppercase tracking-widest text-xs font-bold transition-all
                    ${pkg.highlight 
                      ? 'bg-gold text-luxury hover:bg-white' 
                      : 'border border-gold text-gold hover:bg-gold hover:text-luxury'
                    }
                  `}
                >
                  Reserve This Package
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
