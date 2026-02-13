import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png"; // Adjust the path as necessary


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Using HashLink for IDs and Link for separate routes
  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Schedule", href: "/#schedule" },
    { name: "Gallery", href: "/gallery#stats" },
    { name: "Sponsors", href: "/#sponsors" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div 
            className={`relative flex items-center justify-between h-14 px-8 transition-all duration-500 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-full backdrop-blur-2xl ${
              scrolled ? "bg-black/80" : "bg-white/5"
            }`}
          >
            
            {/* Logo Section - Updated with logo image */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="SheInspire 2.0 Logo" 
                className="h-8 w-auto object-contain" // Adjust height as needed
              />
            </Link>

            {/* Desktop Center Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <HashLink
                    smooth
                    to={link.href}
                    className="text-[10px] font-bold text-gray-400 hover:text-white transition-all duration-300 relative uppercase tracking-[0.2em] group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </HashLink>
                </li>
              ))}
            </ul>

            {/* Desktop Right Action */}
            <div className="hidden md:block">
              <a
                href="https://forms.gle/bAWG3XvQYxjFXBsS9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-black text-[10px] font-black rounded-full transition-all hover:bg-purple-500 hover:text-white active:scale-95 uppercase tracking-widest shadow-lg inline-block"
              >
                Join Now
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-full bg-white/10 border border-white/10"
              aria-label="Toggle Menu"
            >
              <div className="w-4 h-3 relative flex flex-col justify-between">
                <span className={`w-full h-[1.5px] bg-white transition-all duration-300 origin-left ${isOpen ? "rotate-[42deg]" : ""}`} />
                <span className={`w-full h-[1.5px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-[1.5px] bg-white transition-all duration-300 origin-left ${isOpen ? "-rotate-[42deg]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Updated with logo in mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] md:hidden bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center p-8"
          >
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
            
            {/* Logo in Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute top-8 left-6 z-10"
            >
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img 
                  src={logo} 
                  alt="SheInspire 2.0 Logo" 
                  className="h-10 w-auto object-contain" // Slightly larger for mobile
                />
              </Link>
            </motion.div>
            
            <ul className="relative z-10 flex flex-col items-center gap-10 text-center">
              {navLinks.map((link, i) => (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <HashLink
                    smooth
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black text-white hover:text-purple-500 transition-colors uppercase tracking-tighter"
                  >
                    {link.name}
                  </HashLink>
                </motion.li>
              ))}
              
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://forms.gle/bAWG3XvQYxjFXBsS9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-12 py-4 bg-purple-600 text-white font-black rounded-full text-lg shadow-[0_0_30px_rgba(147,51,234,0.4)] inline-block hover:bg-purple-700 transition-colors"
                >
                  Join Now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}