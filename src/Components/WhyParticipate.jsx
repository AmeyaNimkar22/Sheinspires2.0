import React from "react";
import { motion } from "framer-motion";
import { 
  FiCpu, 
  FiLayers, 
  FiGithub, 
  FiUsers, 
  FiAward, 
  FiGlobe, 
  FiZap 
} from "react-icons/fi";

export default function WhyParticipate() {
  const benefits = [
    {
      text: "Solve Real Industry Use Cases and work on meaningful challenges.",
      icon: <FiLayers className="w-6 h-6" />,
    },
    {
      text: "Get hands-on exposure to emerging AI & Cloud technologies.",
      icon: <FiCpu className="w-6 h-6" />,
    },
    {
      text: "Build demonstrable, portfolio-ready projects to showcase on GitHub/LinkedIn.",
      icon: <FiGithub className="w-6 h-6" />,
    },
    {
      text: "Gain mentorship from experts across Zensar and the tech ecosystem.",
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      text: "Collaborate & network with some of the brightest young women innovators.",
      icon: <FiZap className="w-6 h-6" />,
    },
    {
      text: "Earn recognition, certificates, and opportunities to stand out in placements.",
      icon: <FiAward className="w-6 h-6" />,
    },
    {
      text: "Be part of a purpose-led initiative redefining the future of women in tech.",
      icon: <FiGlobe className="w-6 h-6" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="why-participate"
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-5 py-2 mb-8 text-[11px] font-black tracking-[0.4em] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm"
        >
          Exclusive Benefits
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.1]">
            Why <br />
            <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
             Participate?
            </span>
          </h2>

        </motion.h2>

        {/* Intro Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light tracking-wide mb-20"
        >
          This isn’t just another hackathon—it’s a{" "}
          <span className="text-white font-semibold relative inline-block">
            launchpad for your future.
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
          </span>
        </motion.p>

        {/* Improved Masonry-style Grid / Flex Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "rgba(255, 255, 255, 0.07)",
                borderColor: "rgba(168, 85, 247, 0.4)"
              }}
              className="group relative flex items-start gap-5 p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] backdrop-blur-xl transition-all duration-300 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] text-left"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
                <div className="text-purple-400 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed group-hover:text-white transition-colors">
                {item.text}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  );
}