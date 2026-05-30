import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Sparkles } from 'lucide-react';

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

const packages = [
  {
    title: "The Royal Bride",
    subtitle: "Airbrush HD Makeup",
    price: "₹18,000",
    desc: "Our most premium offering for the flawless bride. Sweat-proof, waterproof, and zero touch-ups needed.",
    features: [
      "International Airbrush Makeup Foundation",
      "Advanced 3D Eye Artistry & Lashes",
      "Premium Hair Styling & Accessories",
      "Saree/Lehenga Draping",
      "Body Polishing & Glow Base",
      "Trial Session Included"
    ]
  },
  {
    title: "Signature Bride",
    subtitle: "HD Bridal Makeup",
    price: "₹12,000",
    desc: "Perfect high-definition flawless base that looks stunning in photos and real life.",
    features: [
      "High Definition MAC/Huda Base",
      "Customized Eye Makeup",
      "Elegant Hair Styling",
      "Saree/Lehenga Draping",
      "Faux Mink Lashes",
      "Nail Paint Application"
    ]
  },
  {
    title: "Engagement / Sangeet",
    subtitle: "Glam Party Look",
    price: "₹6,000",
    desc: "Look stunning for your pre-wedding events with a glowing, long-lasting look.",
    features: [
      "HD Base Makeup",
      "Glamorous Eye Makeup",
      "Modern Hair Do",
      "Draping Services",
      "Lashes Included"
    ]
  },
  {
    title: "Ultimate Pre-Bridal",
    subtitle: "1 Month Package",
    price: "₹15,000",
    desc: "Complete head-to-toe pampering to ensure a natural glow on your big day.",
    features: [
      "2x Advanced Lightening Facials",
      "Full Body Waxing & Polishing",
      "Deluxe Pedicure & Manicure",
      "Hair Spa & Deep Conditioning",
      "Body Bleach/D-Tan",
      "Threading & Eyebrow Shaping"
    ]
  },
  {
    title: "Luxury Hair Therapy",
    subtitle: "Spa & Treatment",
    price: "₹2,500",
    desc: "Revitalize your locks with our premium keratin-infused treatments.",
    features: [
      "Deep Root Cleansing",
      "L'Oreal/Olaplex Spa Cream",
      "Ozone Steam Therapy",
      "Relaxing Head Massage",
      "Professional Blowout"
    ]
  },
  {
    title: "Glow & Go",
    subtitle: "Party Readiness",
    price: "₹3,500",
    desc: "When you need to look your best instantly for a party or event.",
    features: [
      "Instant Glow Facial",
      "Party Makeup (Non-HD)",
      "Basic Hair Styling/Ironing",
      "Classic Manicure",
      "Saree Draping"
    ]
  }
];

export default function Packages() {
  return (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-24 min-h-screen"
    >
      <section className="bg-black py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616805096500-bf5d39502758?q=80&w=2574&auto=format&fit=crop')] bg-cover opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">Curated Packages</h1>
          <p className="text-gold tracking-widest uppercase text-sm">Luxury Tailored for You</p>
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
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-white/5 border border-white/10 p-8 flex flex-col group hover:border-gold/50 hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Highlight badge for Royal Bride */}
              {idx === 0 && (
                <div className="absolute top-0 right-0 bg-gold text-luxury px-4 py-1 text-xs font-bold uppercase tracking-widest flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="mb-8">
                <p className="text-gold text-xs uppercase tracking-widest mb-2">{pkg.subtitle}</p>
                <h3 className="font-serif text-3xl text-white mb-4">{pkg.title}</h3>
                <p className="text-2xl font-light text-white border-b border-white/10 pb-6 mb-6">
                  {pkg.price}
                </p>
                <p className="text-ivory/60 text-sm leading-relaxed">{pkg.desc}</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-ivory/80 text-sm">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5 mr-3" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-auto">
                <Link 
                  to="/book-appointment" 
                  className="block w-full py-4 border border-gold text-center text-gold uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-luxury transition-colors"
                >
                  Reserve Package
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 text-center max-w-2xl mx-auto p-8 border border-white/10 bg-white/5">
          <h3 className="font-serif text-2xl text-white mb-4">Looking for something else?</h3>
          <p className="text-ivory/70 mb-8 font-light">We also offer fully customized packages tailored to your specific needs, skin type, and event requirements. Contact us for a personalized consultation.</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-gold transition-colors">
            Contact for Custom Pricing
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
