import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    { title: "2 Days", desc: "Learning & Innovation" },
    { title: "Women Only", desc: "Inclusive Platform" },
    { title: "Industry Led", desc: "Hands-on Training" },
  ];

  return (
    <section
      id="about"
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full">
            The Initiative
          </span>
          
          {/* Headline - Standardized to Hero/Timeline Size */}
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.1]">
            About <br />
            <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Sheinspires 2.0
            </span>
          </h2>

          <div className="space-y-8 max-w-xl">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light tracking-wide">
              <strong className="text-white font-bold">SheInspire 2.0</strong> is a two-day immersive innovation and
              leadership sanctuary designed exclusively for women students.
            </p>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light tracking-wide">
              It blends <span className="text-purple-400 font-medium">technology training</span>, 
              <span className="text-purple-400 font-medium"> leadership insights</span>, and 
              <span className="text-purple-400 font-medium"> real-world problem solving</span>. 
              Beyond a competition, it’s a launchpad for confidence and global careers.
            </p>
          </div>
        </motion.div>

        {/* Right Highlights - Switched to Column Format */}
        <div className="flex flex-col gap-5">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="group relative p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-md transition-all hover:border-purple-500/40 hover:bg-white/[0.06]"
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-black text-purple-400 mb-2 tracking-tighter transition-colors group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium tracking-wide leading-snug">
                    {item.desc}
                  </p>
                </div>
                <div className="hidden md:block">
                   
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}