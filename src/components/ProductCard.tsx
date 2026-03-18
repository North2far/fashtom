import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface ProductCardProps {
  key?: string | number;
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: 'New' | 'Bestseller' | 'Limited';
}

export function ProductCard({ id, name, price, image, tag }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col overflow-hidden"
    >
      <Link to={`/product/${id}`} className="block relative aspect-[3/4] overflow-hidden bg-brand-neutral">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {tag && (
          <div className="absolute top-4 left-4 z-10">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 ${
              tag === 'Limited' ? 'bg-brand-gold text-brand-black' : 
              tag === 'New' ? 'bg-brand-black text-brand-white' : 
              'bg-brand-white text-brand-black'
            }`}>
              {tag}
            </span>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button className="bg-brand-white text-brand-black px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-brand-gold hover:text-brand-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
            Quick View
          </button>
        </div>
      </Link>
      
      <div className="mt-4 flex flex-col space-y-1">
        <Link to={`/product/${id}`} className="text-sm font-medium text-brand-black hover:text-brand-gold transition-colors">
          {name}
        </Link>
        <p className="text-sm text-brand-neutral-dark font-serif italic">${price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
}
