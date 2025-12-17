'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
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
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-space-dark/95 backdrop-blur-lg border-b border-cosmic-purple/20 shadow-lg'
            : 'bg-space-dark/80 backdrop-blur-md'
        }`}
      >
        <nav className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="text-xl md:text-2xl font-bold cursor-pointer"
            >
              <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-pink bg-clip-text text-transparent">
                Bagas AN
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-purple to-cosmic-pink transition-all group-hover:w-full" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-cosmic-purple to-cosmic-pink hover:shadow-lg hover:shadow-cosmic-purple/50 transition-all cursor-pointer text-white font-medium"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Menu Content */}
          <div 
            className="absolute top-16 left-0 right-0 bg-space-dark/98 backdrop-blur-xl border-b border-cosmic-purple/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-gray-300 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block w-full text-center px-6 py-3 rounded-lg bg-gradient-to-r from-cosmic-purple to-cosmic-pink hover:shadow-lg hover:shadow-cosmic-purple/50 transition-all cursor-pointer text-white font-medium mt-4"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
