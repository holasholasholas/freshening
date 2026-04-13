import { motion } from 'motion/react';

export default function AboutStandards() {
  const standards = [
    { name: "GMP", src: "https://freshening.com/wp-content/uploads/2025/08/ISO-ICONS-GMP-1-e1755227392176.png" },
    { name: "BCM", src: "https://freshening.com/wp-content/uploads/2025/08/ISO-ICONS-BCM-1-e1755227405151.png" },
    { name: "ISO 9001", src: "https://freshening.com/wp-content/uploads/2025/08/ISO-ICONS-9001-e1755228671333.png" },
    { name: "ISO 14001", src: "https://freshening.com/wp-content/uploads/2025/09/ISO-ICONS-02-4-e1756785332153.png" },
    { name: "BizSafe", src: "https://freshening.com/wp-content/uploads/2025/12/bizsafe-v2.png" },
    { name: "Awards", src: "https://freshening.com/wp-content/uploads/2023/05/Healthcare-Supplier-Awards.png" }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-brand-cyan/5 border-b border-brand-cyan/10 relative overflow-hidden z-0">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] -z-10 pointer-events-none translate-x-1/2 -translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3"
          >
            <span className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-4 block">Our Standards</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 sm:mb-6 leading-tight">Uncompromising Quality & Safety</h2>
            <p className="text-brand-dark/70 leading-relaxed text-sm md:text-base">
              We operate state-of-the-art facilities compliant with the highest international standards, ensuring that every product meets rigorous quality, safety, and environmental criteria.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3 grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-items-center"
          >
            {standards.map((std, i) => (
              <motion.div
                key={std.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex items-center justify-center p-3 lg:p-5 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-brand-cyan/50 hover:shadow-lg hover:shadow-brand-cyan/10 transition-all duration-300 cursor-pointer"
              >
                <motion.img 
                  animate={{ 
                    opacity: [0.4, 0.9, 0.4],
                    y: [0, -4, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3, 
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                  src={std.src} 
                  alt={std.name} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:!opacity-100 transition-all duration-300 drop-shadow-sm" 
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
