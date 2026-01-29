// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import ColorBends from "./ColorBends";
import TextType from "./TextType";

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background stays absolute */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ColorBends
          className="w-full h-full"
          colors={["#a954ab"]}
          rotation={125}
          speed={0.35}
          scale={3.1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center justify-center text-center gap-y-12">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-5 py-2 text-[9px] font-black tracking-[0.5em] text-purple-300 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-md">
            Empowering the Future
          </span>
        </motion.div>
          
        {/* Headline Section - Reduced from 9xl to 7xl range */}
        <motion.h1 
          className="flex flex-row items-center justify-center gap-x-3 md:gap-x-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Part 1: White Text */}
          <span className="text-6xl md:text-7xl font-black text-white tracking-tighter pinyon-script-regular">
            <TextType 
              text={["Sheinspires"]}
              typingSpeed={100} 
              showCursor={false}
              className="inline"
            />
          </span>

          {/* Part 2: Gradient Text */}
          <span className="text-4xl md:text-7xl font-black tracking-tighter pinyon-script-regular">
            <TextType 
              text={["2.0"]}
              typingSpeed={120}
              initialDelay={1800}
              cursorCharacter="_"
              cursorClassName="text-purple-500"
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-gradient-flow bg-[length:200%_auto]"
            />
          </span>
        </motion.h1>
          
        {/* Description Paragraph - Reduced from 2xl to lg/xl */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
        >
          Defining the next generation of <span className="text-white font-medium">Leadership</span>, 
          driving <span className="text-white font-medium">Innovation</span>, and creating global impact.
        </motion.p>

        {/* Buttons Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-4"
        >
          <a
            href="#about"
            className="group relative px-10 py-4 bg-white text-black font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(169,84,171,0.2)]"
          >
            <span className="relative z-10 uppercase tracking-[0.2em] text-[10px] font-sans">Get Started</span>
          </a>
          
          <a
            href="#schedule"
            className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 backdrop-blur-md transition-all hover:border-white/30 uppercase tracking-[0.2em] text-[10px] font-sans"
          >
            View Schedule
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}