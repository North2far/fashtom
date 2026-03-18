import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, ShieldCheck, Truck, RefreshCw, Star, ChevronRight } from 'lucide-react';

const PRODUCT_DATA = {
  id: '1',
  name: 'The Sovereign Trench',
  price: 450,
  description: 'A masterclass in tailoring. The Sovereign Trench is crafted from water-resistant Italian gabardine, featuring a structured silhouette, gold-plated hardware, and our signature Empaya silk lining. Designed to command attention in any weather.',
  images: [
    'https://picsum.photos/seed/trench1/1000/1500',
    'https://picsum.photos/seed/trench2/1000/1500',
    'https://picsum.photos/seed/trench3/1000/1500',
  ],
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Midnight Black', 'Desert Sand', 'Olive Drab'],
  stock: 3,
  tag: 'Limited'
};

export function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(PRODUCT_DATA.colors[0]);
  const [activeImage, setActiveImage] = useState(0);

  const handleWhatsAppOrder = () => {
    if (!selectedSize) {
      alert('Please select a size before ordering.');
      return;
    }
    
    const message = `Hello King's Empaya! I would like to order:\n\n*Product:* ${PRODUCT_DATA.name}\n*Size:* ${selectedSize}\n*Color:* ${selectedColor}\n*Price:* $${PRODUCT_DATA.price}\n\nPlease confirm availability and payment details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-white pt-24 pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-xs font-medium uppercase tracking-wide text-brand-neutral-dark">
          <Link to="/" className="hover:text-brand-black transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/shop" className="hover:text-brand-black transition-colors">Shop</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-brand-black">{PRODUCT_DATA.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible lg:w-24 flex-shrink-0">
              {PRODUCT_DATA.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] w-20 lg:w-full overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-brand-gold' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={activeImage}
              className="relative aspect-[3/4] w-full bg-brand-neutral overflow-hidden"
            >
              <img 
                src={PRODUCT_DATA.images[activeImage]} 
                alt={PRODUCT_DATA.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {PRODUCT_DATA.tag && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-wider px-3 py-1.5">
                    {PRODUCT_DATA.tag}
                  </span>
                </div>
              )}
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col pt-4 lg:pt-10">
            <div className="mb-6">
              <h1 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-2">{PRODUCT_DATA.name}</h1>
              <p className="text-2xl font-serif italic text-brand-neutral-dark">${PRODUCT_DATA.price.toFixed(2)}</p>
            </div>

            {/* Reviews Summary */}
            <div className="flex items-center space-x-2 mb-8">
              <div className="flex text-brand-gold">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm text-brand-neutral-dark underline cursor-pointer">48 Reviews</span>
            </div>

            <p className="text-brand-black/80 text-sm leading-relaxed mb-8">
              {PRODUCT_DATA.description}
            </p>

            {/* Scarcity Trigger */}
            {PRODUCT_DATA.stock <= 5 && (
              <div className="bg-red-50 border border-red-100 text-red-800 px-4 py-3 text-sm font-medium flex items-center mb-8">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse mr-3"></span>
                High Demand: Only {PRODUCT_DATA.stock} pieces left in stock.
              </div>
            )}

            {/* Color Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold uppercase tracking-wide">Color: <span className="text-brand-neutral-dark font-normal">{selectedColor}</span></span>
              </div>
              <div className="flex space-x-3">
                {PRODUCT_DATA.colors.map(color => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color ? 'border-brand-gold p-1' : 'border-transparent'}`}
                    title={color}
                  >
                    <span className={`block w-full h-full rounded-full ${color === 'Midnight Black' ? 'bg-black' : color === 'Desert Sand' ? 'bg-[#D2B48C]' : 'bg-[#556B2F]'}`}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold uppercase tracking-wide">Size</span>
                <button className="text-xs text-brand-neutral-dark underline hover:text-brand-gold transition-colors">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {PRODUCT_DATA.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-bold uppercase tracking-wide transition-colors border ${
                      selectedSize === size 
                        ? 'bg-brand-black text-brand-white border-brand-black' 
                        : 'bg-transparent text-brand-black border-brand-neutral hover:border-brand-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-4 mb-12">
              <button 
                className="w-full bg-brand-black text-brand-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors"
                onClick={() => {
                  if(!selectedSize) alert('Please select a size.');
                  else alert('Added to cart!');
                }}
              >
                Add to Cart
              </button>
              
              <button 
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#25D366] text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-colors flex items-center justify-center shadow-lg"
              >
                <MessageCircle size={20} className="mr-2" />
                Order via WhatsApp
              </button>
              <p className="text-center text-xs text-brand-neutral-dark mt-2">Fastest response. Direct communication with our styling team.</p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-brand-neutral pt-8">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="text-brand-gold" size={24} />
                <span className="text-xs font-medium uppercase tracking-wide text-brand-neutral-dark">Authenticity Guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="text-brand-gold" size={24} />
                <span className="text-xs font-medium uppercase tracking-wide text-brand-neutral-dark">Free Global Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <RefreshCw className="text-brand-gold" size={24} />
                <span className="text-xs font-medium uppercase tracking-wide text-brand-neutral-dark">14-Day Returns</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
