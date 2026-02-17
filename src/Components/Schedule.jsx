import React from "react";
import { motion } from "framer-motion";

export default function Schedule() {
  return (
    <section id="schedule" className="relative bg-black text-white py-32 px-6">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase"
          >
            Roadmap
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mt-4 tracking-tighter"
          >
            The <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Timeline</span>
          </motion.h2>
        </div>

        {/* Stay Tuned Message */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-700" />
          
          {/* Main content */}
          <div className="relative p-16 md:p-24 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md overflow-hidden">
            {/* Animated particles */}
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
                  initial={{ 
                    x: Math.random() * 100 + "%", 
                    y: Math.random() * 100 + "%",
                    scale: 0
                  }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Clock Icon */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-24 h-24 mx-auto mb-8 text-purple-400"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Stay Tuned Text */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            >
              STAY TUNED
            </motion.h3>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-8"
            >
              We're crafting an incredible experience for you. The detailed schedule with venues and timings will be announced soon!
            </motion.p>

            {/* Date Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8"
            >
              <div className="text-center">
                <div className="text-sm text-purple-400 font-semibold tracking-wider">ONLINE SESSION</div>
                <div className="text-2xl font-bold text-white">FEB 25</div>
              </div>
              <div className="w-px h-12 bg-white/10 self-center" />
              <div className="text-center">
                <div className="text-sm text-purple-400 font-semibold tracking-wider">VENUE</div>
                <div className="text-lg font-bold text-white">Urmilatai Vishwanath Karad Auditorium</div>
                <div className="text-sm text-gray-400">MAR 15</div>
              </div>
              <div className="w-px h-12 bg-white/10 self-center" />
              <div className="text-center">
                <div className="text-sm text-purple-400 font-semibold tracking-wider">VENUE</div>
                <div className="text-lg font-bold text-white">Zensar Kharadi</div>
                <div className="text-sm text-gray-400">MAR 16</div>
              </div>
            </motion.div>

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            Follow us for updates • Schedule subject to change
          </p>
        </motion.div>
      </div>
    </section>
  );
}