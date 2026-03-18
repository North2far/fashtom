import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Star, ShieldCheck, Truck, RefreshCw, Instagram } from 'lucide-react';

const FEATURED_PRODUCTS = [
  { id: '1', name: 'The Sovereign Trench', price: 450, image: 'https://picsum.photos/seed/trench/800/1200', tag: 'New' as const },
  { id: '2', name: 'Empaya Silk Shirt', price: 220, image: 'https://picsum.photos/seed/silkshirt/800/1200', tag: 'Bestseller' as const },
  { id: '3', name: 'Monarch Cargo Pants', price: 180, image: 'https://picsum.photos/seed/cargopants/800/1200' },
  { id: '4', name: 'Onyx Leather Jacket', price: 850, image: 'https://picsum.photos/seed/leatherjacket/800/1200', tag: 'Limited' as const },
];

export function Home() {
  return (
    <div className="min-h-screen bg-brand-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/luxuryfashion/1920/1080?blur=2" 
            alt="King's Empaya Hero" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-brand-white mb-6 tracking-tighter uppercase leading-none"
          >
            Rule Your <br className="hidden md:block" />
            <span className="text-brand-gold italic font-light">Domain</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-brand-neutral text-lg md:text-xl mb-10 max-w-2xl font-light tracking-wide"
          >
            The intersection of luxury streetwear and timeless elegance. Crafted for those who command the room.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link 
              to="/shop" 
              className="bg-brand-gold text-brand-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-white transition-colors flex items-center justify-center group"
            >
              Shop Now
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/lookbook" 
              className="bg-transparent border border-brand-white text-brand-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-colors flex items-center justify-center"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-brand-neutral py-12 border-y border-brand-neutral-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <ShieldCheck className="text-brand-gold" size={32} />
              <h3 className="font-serif font-bold uppercase text-sm tracking-wide">Premium Quality</h3>
              <p className="text-xs text-brand-neutral-dark">Finest materials sourced globally</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Truck className="text-brand-gold" size={32} />
              <h3 className="font-serif font-bold uppercase text-sm tracking-wide">Global Shipping</h3>
              <p className="text-xs text-brand-neutral-dark">Fast & secure delivery worldwide</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <RefreshCw className="text-brand-gold" size={32} />
              <h3 className="font-serif font-bold uppercase text-sm tracking-wide">Easy Returns</h3>
              <p className="text-xs text-brand-neutral-dark">14-day hassle-free return policy</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Star className="text-brand-gold" size={32} />
              <h3 className="font-serif font-bold uppercase text-sm tracking-wide">5-Star Reviews</h3>
              <p className="text-xs text-brand-neutral-dark">Trusted by thousands globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl font-bold uppercase tracking-tighter mb-2">Latest Drops</h2>
            <p className="text-brand-neutral-dark text-sm">Discover the newest additions to the Empaya.</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center text-sm font-bold uppercase tracking-wide hover:text-brand-gold transition-colors group">
            View All <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              id={product.id} 
              name={product.name} 
              price={product.price} 
              image={product.image} 
              tag={product.tag} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/shop" className="inline-flex items-center justify-center border border-brand-black px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-brand-black hover:text-brand-white transition-colors w-full">
            View All Collection
          </Link>
        </div>
      </section>

      {/* Brand Identity / Story */}
      <section className="py-24 bg-brand-black text-brand-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://picsum.photos/seed/brandstory/1000/1000" 
            alt="Brand Story" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 block">Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              More Than Fashion.<br />It's A <span className="text-brand-gold italic font-light">Statement.</span>
            </h2>
            <p className="text-brand-neutral text-base leading-relaxed mb-8 font-light">
              King's Empaya was born from the desire to merge the raw energy of streetwear with the refined elegance of luxury fashion. Every piece is meticulously crafted to empower the wearer, making every street a runway and every moment an opportunity to reign.
            </p>
            <Link to="/about" className="inline-flex items-center text-sm font-bold uppercase tracking-wide text-brand-gold hover:text-brand-white transition-colors group">
              Read Our Story <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Scarcity / Promo Banner */}
      <section className="py-16 bg-brand-gold text-brand-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
            The Midnight Collection
          </h2>
          <p className="text-brand-black/80 font-medium mb-8 max-w-xl mx-auto">
            Extremely limited quantities available. Once they're gone, they're gone forever. Secure your piece of the Empaya.
          </p>
          <Link to="/promo" className="inline-block bg-brand-black text-brand-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-colors shadow-xl">
            Shop The Drop
          </Link>
        </div>
      </section>

      {/* Social Proof / Instagram */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold uppercase tracking-tighter mb-2">Join The Empaya</h2>
          <p className="text-brand-neutral-dark text-sm">Tag @KingsEmpaya to be featured.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <a key={i} href="#" className="relative aspect-square group overflow-hidden bg-brand-neutral">
              <img 
                src={`https://picsum.photos/seed/insta${i}/600/600`} 
                alt={`Instagram post ${i}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-brand-white" size={32} />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
