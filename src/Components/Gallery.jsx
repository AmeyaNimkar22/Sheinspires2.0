import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiChevronLeft, FiChevronRight, FiX, FiUsers, FiAward, FiPlayCircle } from "react-icons/fi";

const stats = [
  { label: "Student Participants", value: "700+" },
  { label: "Colleges", value: "50+" },
  { label: "Projects Submitted", value: "300+" },
  { label: "Winners", value: "30+" },
];

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
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=600",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=600",
  "https://images.unsplash.com/photo-1591115765373-520b7a1f7bb4?q=80&w=600",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600",
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeWinner, setActiveWinner] = useState(null);
  const [viewMode, setViewMode] = useState("carousel");

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex !== null || activeWinner !== null) {
        if (e.key === "Escape") {
          setActiveIndex(null);
          setActiveWinner(null);
        }
        if (activeIndex !== null) {
          if (e.key === "ArrowRight") handleNext();
          if (e.key === "ArrowLeft") handlePrev();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, activeWinner, handleNext, handlePrev]);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-purple-500/30">
      
      {/* Winner Detail Lightbox */}
      <AnimatePresence>
        {activeWinner !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-10"
          >
            <div className="absolute inset-0" onClick={() => setActiveWinner(null)} />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl z-[210]"
            >
              <button onClick={() => setActiveWinner(null)} className="absolute top-6 right-6 z-[220] p-3 rounded-full bg-black/50 border border-white/10 hover:bg-white/10 transition-all">
                <FiX size={20} />
              </button>
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={winners[activeWinner].img} className="w-full h-full object-cover" alt={winners[activeWinner].name} />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-purple-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-purple-500/30 w-fit mb-4 flex items-center gap-2">
                  <FiAward /> {winners[activeWinner].position}
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">{winners[activeWinner].name}</h2>
                <div className="space-y-6 text-left">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2"><FiUsers className="text-purple-500" /> Team Members</h4>
                    <p className="text-lg md:text-xl font-medium text-white/90">{winners[activeWinner].members}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Project Vision</h4>
                    <p className="text-gray-400 leading-relaxed italic">"{winners[activeWinner].description}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Standard Gallery Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/98 backdrop-blur-xl p-4 md:p-10"
          >
            <div className="absolute inset-0" onClick={() => setActiveIndex(null)} />
            <button onClick={() => setActiveIndex(null)} className="absolute top-6 right-6 z-[160] p-3 rounded-full bg-white/5 border border-white/10 transition-all"><FiX size={20} /></button>
            <button onClick={handlePrev} className="absolute left-4 md:left-10 z-[160] p-4 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600 transition-all"><FiChevronLeft size={24} /></button>
            <button onClick={handleNext} className="absolute right-4 md:right-10 z-[160] p-4 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600 transition-all"><FiChevronRight size={24} /></button>
            <motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-full max-h-[80vh]">
              <img src={galleryImages[activeIndex]} className="max-w-full max-h-[80vh] rounded-2xl border border-white/10 object-contain shadow-2xl" alt="Gallery" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 md:pt-40 pb-20 space-y-32">
        {/* Stats Section */}
        <section className="px-6 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div key={i} className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 text-center backdrop-blur-sm">
              <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{stat.value}</h3>
              <p className="text-gray-400 mt-2 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </section>

        {/* Winners Section */}
        <section id="winners" className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter">
              Last Year’s <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Winners</span>
            </h2>
            <p className="text-gray-500 mt-4 text-xs font-bold uppercase tracking-[0.3em]">Click an image to view team details</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winners.map((winner, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                onClick={() => setActiveWinner(i)}
                className="flex flex-col cursor-pointer group"
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10">
                  <img src={winner.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={winner.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 right-6 bg-purple-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                    {winner.position}
                  </div>
                </div>
                <div className="mt-6 px-2">
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors">{winner.name}</h3>
                  <p className="text-purple-400 text-[10px] font-black uppercase tracking-widest mb-3">{winner.position}</p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-2">{winner.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Video Highlights Restoration */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter flex items-center justify-center gap-3">
              Event <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Highlights</span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video max-w-5xl mx-auto group"
          >
            <iframe 
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0" 
              title="Sheinspires 1.0 Highlights" 
              allowFullScreen
            ></iframe>
          </motion.div>
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
                    <div key={i} onClick={() => setActiveIndex(i % galleryImages.length)} className="inline-block w-[280px] md:w-[400px] h-[350px] md:h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/10 flex-shrink-0 group">
                      <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery item" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 max-w-7xl mx-auto columns-2 lg:columns-4 gap-4 space-y-4">
                {galleryImages.map((src, i) => (
                  <motion.div key={i} onClick={() => setActiveIndex(i)} className="relative overflow-hidden rounded-3xl border border-white/10 cursor-zoom-in group">
                    <img src={src} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gallery item" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 35s linear infinite; }
        .animate-scroll:hover { animation-play-state: paused; }
        @media (max-width: 768px) { .animate-scroll { animation-duration: 25s; } }
      `}</style>
    </div>
  );
}