import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import clsx from 'clsx';

const categories = ["All", "Bridal", "Makeup", "Hair", "Nails"];

const galleryImages = [
  { id: 1, category: "Bridal", src: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2671&auto=format&fit=crop" },
  { id: 2, category: "Makeup", src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2671&auto=format&fit=crop" },
  { id: 3, category: "Hair", src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2626&auto=format&fit=crop" },
  { id: 4, category: "Nails", src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2574&auto=format&fit=crop" },
  { id: 5, category: "Bridal", src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop" },
  { id: 6, category: "Hair", src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2669&auto=format&fit=crop" },
  { id: 7, category: "Makeup", src: "https://images.unsplash.com/photo-1508186225823-0963cfd70536?q=80&w=2574&auto=format&fit=crop" },
  { id: 8, category: "Bridal", src: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2667&auto=format&fit=crop" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-black py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">Our Portfolio</h1>
          <p className="text-gold tracking-widest uppercase text-sm">Artistry in Motion</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={clsx(
                "px-6 py-2 uppercase tracking-widest text-xs font-semibold transition-all duration-300 border",
                filter === cat ? "bg-gold text-luxury border-gold" : "bg-transparent text-ivory/70 border-white/20 hover:border-gold hover:text-gold"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer aspect-[3/4] overflow-hidden"
                onClick={() => setSelectedImage(image.src)}
              >
                <img src={image.src} alt={`Gallery ${image.category}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Lightbox" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
