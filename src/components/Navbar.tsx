import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Corporate', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Happenings', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const textColor = isScrolled ? "text-brand-dark" : "text-white";
  const textMuted = isScrolled ? "text-brand-dark/80" : "text-white/80";
  const hoverColor = "hover:text-brand-cyan";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-4 md:px-8 lg:px-16 py-4 md:py-6`}
    >
      <div 
        className={`mx-auto max-w-7xl flex items-center justify-between pointer-events-auto rounded-full px-6 md:px-8 py-3 transition-colors duration-500 ${isScrolled ? 'glass' : 'bg-transparent'}`}
      >
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <a href="#" className={`font-display font-bold text-xl md:text-2xl tracking-tighter group whitespace-nowrap transition-colors duration-300 ${textColor}`}>
            FRESHENING<span className={`text-brand-cyan transition-colors duration-300 ${isScrolled ? 'group-hover:text-brand-dark' : 'group-hover:text-white'}`}>.</span>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors ${textMuted} ${hoverColor}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side: Tools & Mobile Toggle */}
        <div className="flex items-center gap-5 md:gap-6">
          <button className={`transition-colors ${textMuted} ${hoverColor}`} aria-label="Search">
            <Search size={20} />
          </button>
          <div className={`relative group cursor-pointer transition-colors ${textMuted} ${hoverColor}`}>
            <ShoppingCart size={20} />
            <span className="absolute -top-1.5 -right-2 bg-brand-cyan text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </div>

          <button 
            className={`lg:hidden transition-colors ${textColor} ${hoverColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 glass rounded-[2rem] p-8 lg:hidden pointer-events-auto origin-top"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-bold text-brand-dark"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
