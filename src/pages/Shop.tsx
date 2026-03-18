import { useState } from 'react';
import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

const ALL_PRODUCTS = [
  { id: '1', name: 'The Sovereign Trench', price: 450, category: 'Outerwear', image: 'https://picsum.photos/seed/trench/800/1200', tag: 'New' as const },
  { id: '2', name: 'Empaya Silk Shirt', price: 220, category: 'Shirts', image: 'https://picsum.photos/seed/silkshirt/800/1200', tag: 'Bestseller' as const },
  { id: '3', name: 'Monarch Cargo Pants', price: 180, category: 'Trousers', image: 'https://picsum.photos/seed/cargopants/800/1200' },
  { id: '4', name: 'Onyx Leather Jacket', price: 850, category: 'Outerwear', image: 'https://picsum.photos/seed/leatherjacket/800/1200', tag: 'Limited' as const },
  { id: '5', name: 'Royal Native Tunic', price: 300, category: 'Native Wear', image: 'https://picsum.photos/seed/nativetunic/800/1200' },
  { id: '6', name: 'Gold Crest Hoodie', price: 150, category: 'Streetwear', image: 'https://picsum.photos/seed/hoodie/800/1200' },
  { id: '7', name: 'Empaya Signet Ring', price: 120, category: 'Accessories', image: 'https://picsum.photos/seed/ring/800/1200' },
  { id: '8', name: 'Velvet Track Suit', price: 350, category: 'Streetwear', image: 'https://picsum.photos/seed/tracksuit/800/1200', tag: 'New' as const },
];

const CATEGORIES = ['All', 'Shirts', 'Trousers', 'Outerwear', 'Native Wear', 'Streetwear', 'Accessories'];

export function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = activeCategory === 'All' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-white pt-24 pb-24">
      {/* Header */}
      <div className="bg-brand-neutral py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4"
          >
            The Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-neutral-dark text-sm max-w-2xl mx-auto"
          >
            Explore our meticulously curated selection of premium garments. Designed for the bold, crafted for the elite.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-4 border-b border-brand-neutral">
          <div className="flex items-center space-x-4 mb-4 md:mb-0 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-medium uppercase tracking-wide whitespace-nowrap transition-colors ${
                  activeCategory === category 
                    ? 'text-brand-gold border-b-2 border-brand-gold pb-1' 
                    : 'text-brand-neutral-dark hover:text-brand-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between w-full md:w-auto">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center text-sm font-bold uppercase tracking-wide"
            >
              <Filter size={16} className="mr-2" /> Filters
            </button>
            
            <div className="relative group ml-auto md:ml-0">
              <button className="flex items-center text-sm font-medium uppercase tracking-wide text-brand-neutral-dark hover:text-brand-black transition-colors">
                Sort By <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-brand-white border border-brand-neutral shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-brand-neutral transition-colors">Featured</button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-brand-neutral transition-colors">Price: Low to High</button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-brand-neutral transition-colors">Price: High to Low</button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-brand-neutral transition-colors">Newest Arrivals</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
          {filteredProducts.map((product) => (
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
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-brand-neutral-dark text-lg font-serif italic">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
