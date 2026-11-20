import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, ExternalLink } from 'lucide-react';
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', to: 'intro' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass transition-all duration-300 border-b border-[#00a6f4]/20 bg-[#030814]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with uploaded AM emblem */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="intro" smooth={true} duration={500} offset={-80} className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#00a6f4] via-[#38bdf8] to-[#0284c7] shadow-[0_0_15px_rgba(0,166,244,0.35)] group-hover:scale-105 transition-transform duration-300">
                <img
                  src={logoImg}
                  alt="Asma Malica Logo"
                  className="w-full h-full object-cover rounded-full bg-black"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#38bdf8] transition-colors">
                  ASMA <span className="text-gradient-cyan">MALICA</span>
                </span>
                <span className="text-[10px] text-cyan-400 font-medium tracking-widest uppercase">
                  SAP ABAP Analyst
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-[#38bdf8] font-semibold"
                className="text-gray-300 hover:text-white cursor-pointer px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-[#00a6f4] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}

            {/* Topmate CTA Button */}
            <a
              href="https://topmate.io/asma_malica_j/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white hover:from-[#38bdf8] hover:to-[#00a6f4] transition-all duration-300 shadow-[0_0_15px_rgba(0,166,244,0.3)] hover:shadow-[0_0_20px_rgba(0,166,244,0.5)] hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book 1:1 on Topmate</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="https://topmate.io/asma_malica_j/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#00a6f4]/15 border border-[#00a6f4]/40 text-[#38bdf8]"
            >
              <Calendar className="w-3 h-3" />
              <span>Topmate</span>
            </a>
            
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6 text-[#38bdf8]" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#040919]/95 border-t border-[#00a6f4]/20 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="bg-[#00a6f4]/20 text-[#38bdf8] font-bold border-l-4 border-[#00a6f4]"
                className="text-gray-300 hover:text-white hover:bg-[#00a6f4]/10 block px-4 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-[#00a6f4]/20 flex flex-col gap-2">
              <a
                href="https://topmate.io/asma_malica_j/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#00a6f4] to-[#0284c7] text-white shadow-[0_0_15px_rgba(0,166,244,0.3)]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1:1 Session on Topmate</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;