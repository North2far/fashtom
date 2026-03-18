import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Promo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-brand-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Back Button */}
      <Link to="/" className="absolute top-8 left-8 z-50 text-brand-white hover:text-brand-gold transition-colors flex items-center text-sm font-bold uppercase tracking-widest">
        <ArrowLeft size={16} className="mr-2" /> Back to Home
      </Link>

      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/promo/1920/1080" 
          alt="Limited Drop" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_15s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-6 block"
        >
          Exclusive Release
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-brand-white mb-8 tracking-tighter uppercase leading-none"
        >
          The <span className="text-brand-gold italic font-light">Midnight</span><br />
          Collection
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-brand-neutral text-lg md:text-xl mb-12 max-w-2xl font-light tracking-wide"
        >
          Only 50 pieces crafted worldwide. Once they are gone, they will never be reproduced. Secure your legacy.
        </motion.p>

        {/* Countdown */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex space-x-4 md:space-x-8 mb-16"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-serif text-4xl md:text-6xl font-bold text-brand-gold mb-2 tabular-nums">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-neutral-dark">{item.label}</span>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link 
            to="/shop" 
            className="bg-brand-gold text-brand-black px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-brand-white transition-colors shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
          >
            Shop The Drop
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
