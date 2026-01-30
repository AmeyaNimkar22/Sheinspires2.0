import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => (
  <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-black tracking-tighter text-white">
          Sheinspires <span className="pinyon-script-regular text-purple-400 text-4xl ml-1">2.0</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-xs font-light leading-relaxed">
          Empowering the next generation of women in tech through innovation and community.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-12 gap-y-6 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
        <HashLink smooth to="/#about" className="hover:text-purple-400 transition-all">About</HashLink>
        <HashLink smooth to="/#schedule" className="hover:text-purple-400 transition-all">Timeline</HashLink>
        <HashLink smooth to="/#sponsors" className="hover:text-purple-400 transition-all">Sponsors</HashLink>
        <HashLink smooth to="/gallery#" className="hover:text-purple-400 transition-all">Gallery</HashLink>
      </div>

      <div className="text-gray-600 text-[10px] font-bold tracking-[0.3em] uppercase border-l border-white/10 pl-6 hidden md:block">
        © 2026 Sheinspires 2.0
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center md:hidden">
       <p className="text-gray-700 text-[9px] font-black uppercase tracking-widest">© 2026 BrightCode Studio</p>
    </div>
  </footer>
);

export default Footer;