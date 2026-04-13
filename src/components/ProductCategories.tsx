import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function ProductCategories() {
  const categories = [
    { name: "Personal Care", desc: "Premium wipes and hygiene solutions for daily well-being.", img: "/images/personal_care.png", colSpan: "col-span-1 md:col-span-2" },
    { name: "Medical Care", desc: "Clinical-grade disinfection.", img: "/images/medical_care.png", colSpan: "col-span-1" },
    { name: "Home Care", desc: "Safe, effective household cleaning.", img: "/images/home_care.png", colSpan: "col-span-1" },
    { name: "Baby Care", desc: "Gentle protection for delicate skin.", img: "/images/baby_care.png", colSpan: "col-span-1" },
    { name: "Pet Care", desc: "Pet-friendly hygiene basics.", img: "/images/pet_care.png", colSpan: "col-span-1" },
    { name: "Foodservice", desc: "Professional catering and dining wipes.", img: "/images/foodservice.png", colSpan: "col-span-1 md:col-span-2" },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden z-0">
      {/* Decorative Brand Background Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-brand-cyan/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-brand-cyan/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-end mb-12 md:mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-4 block">Product Ranges</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-brand-dark mb-4">Discover Our Innovations</h2>
            <p className="text-brand-dark/70 text-lg">
              Tailored hygiene solutions designed across distinct categories to meet the demanding requirements of global industries.
            </p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="#" 
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-brand-dark text-white rounded-full hover:bg-brand-cyan transition-colors duration-300"
          >
            View All Products <ArrowRight size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[300px]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${cat.colSpan}`}
            >
              <div className="absolute inset-0 bg-brand-dark/20 z-10 group-hover:bg-brand-dark/40 transition-colors duration-500" />
              <img 
                src={cat.img} 
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{cat.name}</h3>
                  <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {cat.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand-cyan text-sm font-semibold uppercase tracking-wider">
                    Explore <ArrowRight size={14} className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-150" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a href="#" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-dark text-white rounded-xl hover:bg-brand-cyan transition-colors">
            View All Products <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
