import { ArrowRight, Mail, Compass, Shield, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 rounded-t-[3rem] relative z-20 mt-[-2rem]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="font-display font-bold text-3xl tracking-tighter text-white mb-4 block">
              FRESHENING<span className="text-brand-cyan">.</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Asia's leading manufacturer of quality wet wipes and hygiene solutions since 1994.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-white transition-colors duration-300">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-white transition-colors duration-300">
                <Compass size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-white transition-colors duration-300">
                <Shield size={18} />
              </a>
            </div>
          </div>

          {/* Unified Links Grid for Mobile Conciseness */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-display font-semibold text-base mb-4 text-brand-cyan">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Our Standards</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Sustainability</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-base mb-4 text-brand-cyan">Solutions</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Personal Care</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Medical Care</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Foodservice Options</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contract Mfg</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Shop Products</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-brand-cyan">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to get the latest updates on our products and innovations.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={16} className="text-white/40" />
              </div>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-12 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-cyan transition-colors"
              />
              <button type="submit" className="absolute inset-y-0 right-1 top-1 bottom-1 w-10 bg-brand-cyan rounded-full flex items-center justify-center text-white hover:bg-brand-cyan/80 transition-colors">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Freshening Industries Pte Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
