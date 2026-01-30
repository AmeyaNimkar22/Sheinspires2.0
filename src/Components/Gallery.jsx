import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiChevronLeft, FiChevronRight, FiX, FiUsers, FiAward } from "react-icons/fi";

const stats = [
  { label: "Student Participants", value: "700+" },
  { label: "Colleges", value: "50+" },
  { label: "Projects Submitted", value: "300+" },
  { label: "Winners", value: "30+" },
];

// Expanded winners list with member names
const winners = [
  { 
    name: "Team Alpha", 
    members: "Ananya Sharma, Priya Rai, Sneha Kapoor",
    position: "Winner", 
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    description: "Developed an AI-driven waste management system for smart cities."
  },
  { 
    name: "Team Beta", 
    members: "Riya Verma, Aditi Rao",
    position: "1st Runner Up", 
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600",
    description: "Created a blockchain-based secure voting platform."
  },
  { 
    name: "Team Gamma", 
    members: "Ishita Singh, Mehak Jain, Tanya Ohri",
    position: "2nd Runner Up", 
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
    description: "Innovative IoT solution for rural irrigation."
  },
  { 
    name: "Team Delta", 
    members: "Kriti Sanon, Pooja Hegde",
    position: "Special Mention", 
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    description: "Eco-friendly packaging alternative using mushroom mycelium."
  },
  { 
    name: "Team Epsilon", 
    members: "Sanya Malhotra, Fatima Sheikh",
    position: "Technical Excellence", 
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    description: "Advanced cybersecurity protocol for protecting medical data."
  },
  { 
    name: "Team Zeta", 
    members: "Zoya Akhtar, Kiara Advani",
    position: "Best Prototype", 
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    description: "Augmented Reality app for teaching history in local schools."
  },
];

// Using winner images for the general gallery section
const galleryImages = winners.map(w => w.img);

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [viewMode, setViewMode] = useState("carousel");

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % winners.length);
  }, []);

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + winners.length) % winners.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, handleNext, handlePrev]);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-purple-500/30">
      {/* Redesigned Split-Screen Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-12"
          >
            <div className="absolute inset-0" onClick={() => setActiveIndex(null)} />

            <div className="relative w-full max-w-6xl bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-[75vh] shadow-2xl z-[160]">
              
              {/* LEFT SIDE: Image */}
              <div className="w-full md:w-3/5 relative bg-black flex items-center justify-center overflow-hidden group">
                <motion.img
                  key={`img-${activeIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  src={winners[activeIndex].img}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Overlay on Image */}
                <div className="absolute inset-x-0 bottom-6 flex justify-center gap-4 px-6 md:hidden">
                   <button onClick={handlePrev} className="p-4 rounded-full bg-black/60 border border-white/20 backdrop-blur-md"><FiChevronLeft /></button>
                   <button onClick={handleNext} className="p-4 rounded-full bg-black/60 border border-white/20 backdrop-blur-md"><FiChevronRight /></button>
                </div>

                <div className="hidden md:flex absolute inset-0 items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button onClick={handlePrev} className="p-4 rounded-full bg-black/40 hover:bg-purple-600 border border-white/10 backdrop-blur-xl transition-all"><FiChevronLeft size={24} /></button>
                   <button onClick={handleNext} className="p-4 rounded-full bg-black/40 hover:bg-purple-600 border border-white/10 backdrop-blur-xl transition-all"><FiChevronRight size={24} /></button>
                </div>
              </div>

              {/* RIGHT SIDE: Team Data */}
              <motion.div 
                key={`data-${activeIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center relative overflow-y-auto bg-gradient-to-br from-purple-500/5 to-transparent"
              >
                <button onClick={() => setActiveIndex(null)} className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white transition-colors">
                  <FiX size={24} />
                </button>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 text-purple-400 mb-4">
                        <FiAward className="text-xl" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">{winners[activeIndex].position}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-2">
                      {winners[activeIndex].name}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <FiUsers /> Team Members
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-white/90 leading-tight">
                      {winners[activeIndex].members}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/5">
                    <p className="text-gray-400 leading-relaxed font-light italic">
                      "{winners[activeIndex].description}"
                    </p>
                  </div>

                  <div className="hidden md:block pt-4">
                    <span className="text-[10px] text-gray-600 font-black tracking-widest uppercase">
                        {activeIndex + 1} / {winners.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 md:pt-40 pb-20 space-y-32">
        {/* Stats Section */}
        <section className="px-6 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 text-center backdrop-blur-sm">
              <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{stat.value}</h3>
              <p className="text-gray-400 mt-2 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </section>

        {/* Winners Section - GRID OF 6+ */}
        <section id="winners" className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
              Meet the <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Champions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {winners.map((winner, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(i)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 mb-6">
                  <img src={winner.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute top-6 right-6 bg-purple-600 text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-2xl">
                    {winner.position}
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{winner.name}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-2">{winner.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Video Highlights */}
        <section className="px-6 max-w-7xl mx-auto">
           <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video max-w-5xl mx-auto">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Highlights" allowFullScreen></iframe>
           </div>
        </section>

        {/* Gallery Section */}
        <section className="relative overflow-hidden">
          <div className="px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter">
                Event <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Gallery</span>
              </h2>
            </div>
            <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
              <button onClick={() => setViewMode("carousel")} className={`px-6 py-2 rounded-xl text-[10px] font-black transition-all ${viewMode === 'carousel' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>CINEMATIC</button>
              <button onClick={() => setViewMode("grid")} className={`flex items-center gap-2 px-6 py-2 rounded-xl text-[10px] font-black transition-all ${viewMode === 'grid' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}><FiGrid /> GRID</button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === "carousel" ? (
              <motion.div key="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-10">
                <div className="flex gap-4 animate-scroll whitespace-nowrap">
                  {[...galleryImages, ...galleryImages].map((src, i) => (
                    <div key={i} onClick={() => setActiveIndex(i % winners.length)} className="inline-block w-[280px] md:w-[400px] h-[350px] md:h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/10 flex-shrink-0 group">
                      <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 max-w-7xl mx-auto columns-2 lg:columns-4 gap-4 space-y-4">
                {galleryImages.map((src, i) => (
                  <motion.div key={i} onClick={() => setActiveIndex(i)} className="relative overflow-hidden rounded-3xl border border-white/10 cursor-zoom-in group">
                    <img src={src} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 40s linear infinite; }
        .animate-scroll:hover { animation-play-state: paused; }
        @media (max-width: 768px) { .animate-scroll { animation-duration: 25s; } }
      `}</style>
    </div>
  );
}