import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#problem' },
    { name: 'The System', href: '#how-it-works' },
    { name: 'Capabilities', href: '#advantages' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Approximate nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 border-b border-black/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-[95%] mx-auto flex justify-between items-center">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-4xl md:text-5xl font-display font-bold tracking-widest text-black hover:opacity-70 transition-opacity">
          [ AZ : UR ]
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black">
            {mobileMenuOpen ? <X className="w-8 h-8"/> : <Menu className="w-8 h-8"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-4xl font-display font-bold uppercase text-black hover:text-gray-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;