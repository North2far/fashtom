import { motion } from 'motion/react';

const LOOKBOOK_IMAGES = [
  { id: 1, src: 'https://picsum.photos/seed/lookbook1/1000/1500', title: 'The Sovereign Collection', desc: 'A masterclass in tailoring and bold silhouettes.' },
  { id: 2, src: 'https://picsum.photos/seed/lookbook2/1000/1500', title: 'Midnight Silk', desc: 'Elegance that commands the room.' },
  { id: 3, src: 'https://picsum.photos/seed/lookbook3/1000/1500', title: 'Urban Monarch', desc: 'Streetwear elevated to new heights.' },
  { id: 4, src: 'https://picsum.photos/seed/lookbook4/1000/1500', title: 'Golden Era', desc: 'Accessories that define the look.' },
];

export function Lookbook() {
  return (
    <div className="bg-brand-black text-brand-white min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4"
        >
          Lookbook <span className="text-brand-gold italic font-light">SS26</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-brand-neutral-dark text-sm max-w-2xl mx-auto uppercase tracking-widest"
        >
          A visual journey through our latest collection.
        </motion.p>
      </div>

      <div className="space-y-24 md:space-y-48">
        {LOOKBOOK_IMAGES.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/2 relative aspect-[3/4] overflow-hidden group">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
              <span className="text-brand-gold font-serif text-5xl italic opacity-50">0{index + 1}</span>
              <h2 className="font-serif text-4xl font-bold uppercase tracking-tighter">{item.title}</h2>
              <p className="text-brand-neutral text-lg font-light leading-relaxed max-w-md">{item.desc}</p>
              <button className="self-start border-b border-brand-gold text-brand-gold pb-1 text-sm font-bold uppercase tracking-widest hover:text-brand-white hover:border-brand-white transition-colors">
                Shop The Look
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
