import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContractManufacturing() {
  const features = [
    "Full Turnkey Solutions",
    "ISO Certified Facilities",
    "Custom Formulation",
    "Private Labeling",
    "Regulatory Compliance",
    "Global Logistics"
  ];

  return (
    <section className="w-full py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/10 -z-10 transform skew-x-12 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-dark/50 to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-4 block">B2B Solutions</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">Contract Manufacturing</h2>
            <p className="text-white/70 leading-relaxed text-lg mb-8">
              Leverage our decades of expertise and cutting-edge facilities. We offer comprehensive OEM services, transforming your concepts into premium wet wipe and hygiene products.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feat, i) => (
                <motion.div 
                  key={feat}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-brand-cyan" />
                  </div>
                  <span className="font-medium text-white/90">{feat}</span>
                </motion.div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-cyan hover:bg-white hover:text-brand-dark text-white rounded-full font-semibold transition-all duration-300 shadow-lg group">
              Discuss Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-brand-cyan/10 mix-blend-overlay z-10" />
              <img 
                src="/images/contract_manufacturing.png" 
                alt="Contract Manufacturing" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Interactive Stats Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -left-5 sm:-left-8 glass-dark p-6 rounded-2xl shadow-xl border border-white/20 max-w-xs hidden sm:block backdrop-blur-xl z-30"
            >
              <h4 className="font-display font-bold text-xl text-white mb-2">End-to-End Control</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                From formulation and packaging to rigorous QA testing, your brand is in certified hands.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
