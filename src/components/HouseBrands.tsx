import { motion } from 'motion/react';

export default function HouseBrands() {
  const brands = [
    { name: "Zappy", src: "https://freshening.com/wp-content/uploads/2025/08/Zappy-Logo-2024_Pantone_V3-Cropped-500x154.png" },
    { name: "Hospicare", src: "https://freshening.com/wp-content/uploads/2023/06/Hospicare-500x231.png" },
    { name: "Smartowel", src: "https://freshening.com/wp-content/uploads/2023/06/Smartowel-Logo-500x126.png" },
    { name: "Alpak", src: "https://freshening.com/wp-content/uploads/2023/07/Alpak-Logo-Pantone-1-500x244.jpg" },
    { name: "Ozuki", src: "https://freshening.com/wp-content/uploads/2023/06/Ozuki-Logo-500x245.png" },
    { name: "Woosh", src: "https://freshening.com/wp-content/uploads/2023/06/Woosh-Logo_P267C-01_PNG-500x293.png" },
    { name: "Babyfresh", src: "https://freshening.com/wp-content/uploads/2023/06/babyfresh-500x244.png" },
    { name: "Hagens", src: "https://freshening.com/wp-content/uploads/2023/06/Hagens-Logo-Pantone-500x260.png" },
    { name: "BlueSky", src: "https://freshening.com/wp-content/uploads/2023/06/BlueSky-Logo-Pantone-500x226.jpg" },
  ];

  // Duplicate for seamless infinite scrolling
  const scrollBrands = [...brands, ...brands];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-brand-cyan/10 via-zinc-50 to-zinc-100 overflow-hidden text-center relative z-0">
      {/* Subtle background abstract shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[300px] bg-brand-cyan/5 blur-[80px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-4 block"
        >
          Our Portfolio
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-bold tracking-tight text-brand-dark"
        >
          House Brands
        </motion.h2>
      </div>

      <div className="relative w-full flex items-center before:content-[''] before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-zinc-50/80 before:to-transparent before:z-10 after:content-[''] after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-zinc-50/80 after:to-transparent after:z-10">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex flex-nowrap items-center w-max gap-8 sm:gap-16 pr-8 sm:pr-16"
        >
          {scrollBrands.map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="flex-shrink-0 w-32 sm:w-40 h-16 sm:h-20 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
