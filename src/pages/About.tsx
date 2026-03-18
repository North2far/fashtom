import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen bg-brand-white pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/about/1920/1080" 
            alt="King's Empaya Studio" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl font-bold text-brand-white mb-6 tracking-tighter uppercase"
          >
            The Empaya <span className="text-brand-gold italic font-light">Vision</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-neutral text-lg font-light tracking-wide"
          >
            Redefining the intersection of luxury and streetwear since 2024.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold uppercase tracking-tighter mb-6">Our Genesis</h2>
            <p className="text-brand-neutral-dark leading-relaxed mb-6">
              King's Empaya was born from a simple observation: the modern monarch doesn't wear a crown; they wear confidence. We saw a gap between the raw, unapologetic energy of streetwear and the meticulous craftsmanship of high-end luxury houses.
            </p>
            <p className="text-brand-neutral-dark leading-relaxed">
              Our founder, inspired by the juxtaposition of gritty urban landscapes and opulent royal history, set out to create a brand that honors both. Every stitch, every fabric choice, and every silhouette is designed to empower the wearer.
            </p>
          </div>
          <div className="relative aspect-[4/5] bg-brand-neutral">
            <img 
              src="https://picsum.photos/seed/founder/800/1000" 
              alt="Founder" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-gold p-6 hidden md:block">
              <p className="font-serif font-bold text-brand-black uppercase tracking-widest text-sm">Est. 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-brand-neutral border-y border-brand-neutral-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold uppercase tracking-tighter mb-16">The Three Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="text-brand-gold font-serif text-5xl italic">01</span>
              <h3 className="font-bold uppercase tracking-wide">Uncompromising Quality</h3>
              <p className="text-brand-neutral-dark text-sm leading-relaxed">We source only the finest materials globally. If it doesn't feel royal, it doesn't bear our name.</p>
            </div>
            <div className="space-y-4">
              <span className="text-brand-gold font-serif text-5xl italic">02</span>
              <h3 className="font-bold uppercase tracking-wide">Bold Silhouettes</h3>
              <p className="text-brand-neutral-dark text-sm leading-relaxed">Our designs are meant to be seen. We play with proportions to create garments that command attention.</p>
            </div>
            <div className="space-y-4">
              <span className="text-brand-gold font-serif text-5xl italic">03</span>
              <h3 className="font-bold uppercase tracking-wide">Exclusive Scarcity</h3>
              <p className="text-brand-neutral-dark text-sm leading-relaxed">True luxury isn't mass-produced. We release in limited drops to ensure you remain one of the few.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold uppercase tracking-tighter mb-4">The Atelier</h2>
          <p className="text-brand-neutral-dark max-w-2xl mx-auto">A glimpse into where the magic happens. Meticulous attention to detail at every step of the creation process.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://picsum.photos/seed/atelier1/600/600" alt="Atelier 1" className="w-full aspect-square object-cover" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/atelier2/600/600" alt="Atelier 2" className="w-full aspect-square object-cover" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/atelier3/600/600" alt="Atelier 3" className="w-full aspect-square object-cover hidden md:block" referrerPolicy="no-referrer" />
        </div>
      </section>
    </div>
  );
}
