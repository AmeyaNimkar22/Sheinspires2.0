import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiArrowRight } from "react-icons/fi";

export default function ContactUs() {
  const coordinator = {
    name: "Gururaja Kulkarni",
    email: "gururaja.kulkarni@zensar.com",
    icon: <FiUser />,
  };

  return (
    <section id="contact" className="relative bg-black text-white py-32 px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase"
                    >
                     <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full">
                      Get in touch
                    </span>
                    </motion.span>
                    <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-7xl font-black mt-6 tracking-tighter leading-tight"
                    >
                      Contact <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Us</span>
                    </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 text-lg font-light leading-relaxed"
          >
            Have specific questions about participation or the event roadmap? <br className="hidden md:block"/>
            Reach out directly.
          </motion.p>
        </div>

        {/* Focused Single Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="group relative max-w-2xl mx-auto"
        >
          {/* Decorative Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          
          <div className="relative p-10 md:p-14 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-2xl overflow-hidden transition-all hover:bg-white/[0.05] hover:border-purple-500/40">
            <div className="relative z-10 flex flex-col items-center text-center">
              
              <div className="w-20 h-20 rounded-3xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-4xl text-purple-400 mb-8 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shadow-2xl shadow-purple-500/20">
                {coordinator.icon}
              </div>

            

              <p className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                {coordinator.name}
              </p>
              
              <p className="text-gray-400 font-medium mb-8 tracking-wide ">
                {coordinator.email}
              </p>

              <motion.a 
                href={`mailto:${coordinator.email}`} 
                whileHover={{ gap: "1.5rem" }}
                className="flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                <FiMail size={18} />
                <span>Send an Email</span>
                <FiArrowRight size={18} />
              </motion.a>
            </div>

            {/* Subtle Abstract Background Icon */}
            <div className="absolute -bottom-10 -right-10 text-white/[0.02] text-[15rem] group-hover:text-purple-500/[0.03] transition-colors duration-700 pointer-events-none italic">
              Z
            </div>
          </div>
        </motion.div>

        {/* Footer Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
        </motion.div>
      </div>
    </section>
  );
}