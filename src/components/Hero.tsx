import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[80vh] md:min-h-[600px] flex flex-col overflow-hidden bg-brand-dark">
      {/* Background Video using YouTube Embed */}
      <div className="absolute inset-0 w-full h-full -z-20">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/nAtqFPa20wE?autoplay=1&mute=1&loop=1&playlist=nAtqFPa20wE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          title="Freshening Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-brand-dark/70 sm:bg-brand-dark/50 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent -z-10" />

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto w-full px-6 text-center pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full glass-dark mb-6 text-xs font-medium tracking-widest uppercase shadow-xl"
        >
          Est. 1994
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-tight mb-6 max-w-5xl drop-shadow-xl"
        >
          The Global Standard for <span className="text-edge-outline">Hygiene</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 font-light max-w-2xl mb-10"
        >
          Asia's leading manufacturer of quality wet wipes and hygiene solutions. Trusted by renowned food & beverage, healthcare, and retail establishments worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a href="#" className="px-8 py-4 bg-brand-cyan hover:bg-brand-cyan/90 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(0,170,222,0.4)] hover:shadow-[0_0_30px_rgba(0,170,222,0.6)] flex items-center gap-2 group w-full sm:w-auto justify-center">
            Explore Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#" className="px-8 py-4 glass-dark text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] w-full sm:w-auto justify-center border border-white/20">
            Partner With Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex flex-col items-center gap-2 pb-8 sm:pb-12"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
