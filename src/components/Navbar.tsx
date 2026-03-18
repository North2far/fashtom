import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-brand-black/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${isMobileMenuOpen ? 'bg-brand-white shadow-sm py-4' : isScrolled ? 'bg-brand-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-black hover:text-brand-gold transition-colors">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/shop" className="text-sm font-medium tracking-wide uppercase hover:text-brand-gold transition-colors">Shop</Link>
              <Link to="/lookbook" className="text-sm font-medium tracking-wide uppercase hover:text-brand-gold transition-colors">Lookbook</Link>
              <Link to="/about" className="text-sm font-medium tracking-wide uppercase hover:text-brand-gold transition-colors">About</Link>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-2xl md:text-3xl font-bold tracking-tighter uppercase">
                King's Empaya
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="text-brand-black hover:text-brand-gold transition-colors hidden sm:block">
                <Search size={20} />
              </button>
              <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-black hover:text-brand-gold transition-colors relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 w-full bg-brand-white border-t border-brand-neutral shadow-2xl overflow-hidden"
            >
              <div className="px-4 pt-4 pb-8 space-y-2">
                <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium uppercase border-b border-brand-neutral hover:text-brand-gold transition-colors">Shop Collection</Link>
                <Link to="/lookbook" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium uppercase border-b border-brand-neutral hover:text-brand-gold transition-colors">Lookbook</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium uppercase border-b border-brand-neutral hover:text-brand-gold transition-colors">About Us</Link>
                
                <div className="pt-6 pb-2">
                  <Link to="/promo" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-4 py-4 text-base font-bold uppercase tracking-widest bg-brand-gold text-brand-black shadow-lg hover:bg-brand-black hover:text-brand-white transition-colors">
                    Limited Drop
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
