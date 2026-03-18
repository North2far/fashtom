import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold tracking-tighter uppercase">King's Empaya</h3>
            <p className="text-brand-neutral-dark text-sm leading-relaxed">
              Redefining luxury streetwear. Bold, elegant, and unapologetically premium. Crafted for the modern monarch.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-neutral hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-brand-neutral hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-brand-neutral hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wide">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-brand-neutral-dark hover:text-brand-gold transition-colors text-sm">Shop All</Link></li>
              <li><Link to="/promo" className="text-brand-neutral-dark hover:text-brand-gold transition-colors text-sm">Latest Drop</Link></li>
              <li><Link to="/lookbook" className="text-brand-neutral-dark hover:text-brand-gold transition-colors text-sm">Lookbook</Link></li>
              <li><Link to="/about" className="text-brand-neutral-dark hover:text-brand-gold transition-colors text-sm">Our Story</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wide">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-brand-neutral-dark hover:text-brand-gold transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-brand-neutral-dark hover:text-brand-gold transition-colors text-sm">Shipping & Returns</a></li>
              <li><a href="#" className="text-brand-neutral-dark hover:text-brand-gold transition-colors text-sm">Size Guide</a></li>
              <li><a href="#" className="text-brand-neutral-dark hover:text-brand-gold transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wide">Join The Empaya</h4>
            <p className="text-brand-neutral-dark text-sm mb-4">Subscribe for exclusive drops, early access, and insider news.</p>
            <form className="flex border-b border-brand-neutral-dark pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-sm w-full text-brand-white placeholder-brand-neutral-dark"
              />
              <button type="submit" className="text-brand-gold hover:text-brand-white transition-colors">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brand-neutral-dark/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-brand-neutral-dark text-xs">&copy; {new Date().getFullYear()} King's Empaya. All rights reserved.</p>
          <div className="flex space-x-6 text-xs text-brand-neutral-dark">
            <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
