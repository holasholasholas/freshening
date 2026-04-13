import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Programmatically setting these ensures browsers don't block autoplay
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;

      // Attempt to play and handle potential browser blocks
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Video autoplay failed:", error);
        });
      }
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[80vh] md:min-h-[600px] flex flex-col overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 bg-brand-dark">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/video-fallback.jpg"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-brand-dark/60 sm:bg-brand-dark/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/20 z-10" />

      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto w-full px-6 text-center pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full glass-dark mb-6 text-xs font-medium tracking-widest uppercase shadow-xl border border-white/10"
        >
          Est. 1994
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-tight mb-6 max-w-5xl drop-shadow-2xl"
        >
          The Global Standard for <span className="text-edge-outline">Hygiene</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/90 font-light max-w-2xl mb-10 drop-shadow-md"
        >
          Asia&apos;s leading manufacturer of quality wet wipes and hygiene solutions. Trusted by renowned food & beverage, healthcare, and retail establishments worldwide.
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
          <a href="#" className="px-8 py-4 glass-dark text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10 w-full sm:w-auto justify-center border border-white/20">
            Partner With Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative z-20 flex flex-col items-center gap-2 pb-8 sm:pb-12"
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