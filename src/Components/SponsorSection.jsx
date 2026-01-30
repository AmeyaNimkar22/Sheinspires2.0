
// SponsorsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";
import { sponsors } from "./Sponsors";

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="relative py-32 bg-black overflow-hidden">
      {/* Background radial glow to separate sections */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading - Consistent with Hero and About */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase"
          >
           <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full">
            The Initiative
          </span>
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mt-6 tracking-tighter leading-tight"
          >
            Our <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Sponsors</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-500 text-sm md:text-base max-w-xl mx-auto font-light tracking-wide"
          >
            Collaborating with global industry leaders to empower the next generation of innovators.
          </motion.p>
        </div>

        {/* Logo Loop Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative py-12 px-4 bg-white/[0.02] border-y border-white/5 backdrop-blur-sm"
        >
          {/* Masking overlays for smooth fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <LogoLoop
            logos={sponsors}
            speed={60}
            direction="left"
            logoHeight={45} // Slightly smaller for elegance
            gap={100}
            pauseOnHover
            scaleOnHover
            fadeOut={false} // Handled by our custom gradient overlays above for better control
            className="grayscale opacity-50 hover:opacity-100 transition-all duration-700 hover:grayscale-0"
          />
        </motion.div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;