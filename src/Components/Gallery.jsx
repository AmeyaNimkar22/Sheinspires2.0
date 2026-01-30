import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiChevronLeft, FiChevronRight, FiX, FiUsers, FiAward, FiCamera } from "react-icons/fi";

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

const eventGallery = [
  "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=800",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800",
  "https://images.unsplash.com/photo-1591115765373-520b7a1f7bb4?q=80&w=800",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [viewMode, setViewMode] = useState("carousel");
  const [isWinnerView, setIsWinnerView] = useState(false);
  const scrollRef = useRef(null);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    const list = isWinnerView ? winners : eventGallery;
    setActiveIndex((prev) => (prev + 1) % list.length);
  }, [isWinnerView]);

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    const list = isWinnerView ? winners : eventGallery;
    setActiveIndex((prev) => (prev - 1 + list.length) % list.length);
  }, [isWinnerView]);

  const manualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'next' ? 400 : -400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-12"
          >
            <div className="absolute inset-0" onClick={() => setActiveIndex(null)} />

            {/* LIGHTBOX CONTAINER */}
            <div className={`relative w-full overflow-hidden border border-white/10 shadow-2xl z-[160] 
              ${isWinnerView 
                ? 'max-w-6xl bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-[75vh]' 
                : 'max-w-4xl bg-transparent rounded-2xl flex items-center justify-center'}`}>
              
              {/* IMAGE SECTION */}
              <div className={`relative bg-black flex items-center justify-center overflow-hidden group 
                ${isWinnerView ? 'w-full md:w-3/5 h-full' : 'w-full h-auto'}`}>
                
                <motion.img
                  key={`img-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={isWinnerView ? winners[activeIndex].img : eventGallery[activeIndex]}
                  className={`w-full h-full object-contain ${isWinnerView ? 'md:object-cover' : ''}`}
                />
                
                {/* Overlay Navigation Buttons */}
                <div className="absolute inset-x-0 bottom-6 flex justify-center gap-4 px-6 md:hidden">
                   <button onClick={handlePrev} className="p-4 rounded-full bg-black/60 border border-white/20 backdrop-blur-md"><FiChevronLeft /></button>
                   <button onClick={handleNext} className="p-4 rounded-full bg-black/60 border border-white/20 backdrop-blur-md"><FiChevronRight /></button>
                </div>

                {!isWinnerView && (
                  <div className="hidden md:flex absolute inset-0 items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={handlePrev} className="p-4 rounded-full bg-white/10 hover:bg-purple-600 border border-white/20 backdrop-blur-xl transition-all"><FiChevronLeft size={24} /></button>
                    <button onClick={handleNext} className="p-4 rounded-full bg-white/10 hover:bg-purple-600 border border-white/20 backdrop-blur-xl transition-all"><FiChevronRight size={24} /></button>
                  </div>
                )}
              </div>

              {/* DETAILS SECTION (Only for Winners) */}
              {isWinnerView && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-purple-500/5 to-transparent border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto"
                >
                  <button onClick={() => setActiveIndex(null)} className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white"><FiX size={24} /></button>
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-purple-400">
                      <FiAward /><span className="text-[10px] font-black uppercase tracking-widest">{winners[activeIndex].position}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">{winners[activeIndex].name}</h2>
                    <div className="space-y-1">
                      <p className="text-gray-500 text-[10px] font-black uppercase flex items-center gap-2"><FiUsers /> Team Members</p>
                      <p className="text-lg md:text-xl font-bold text-white/90">{winners[activeIndex].members}</p>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light border-t border-white/5 pt-4 italic">"{winners[activeIndex].description}"</p>
                  </div>
                </motion.div>
              )}

              {/* Simple Close Button for Event Gallery */}
              {!isWinnerView && (
                <button onClick={() => setActiveIndex(null)} className="absolute -top-12 right-0 md:top-6 md:-right-0 p-3 text-white hover:text-purple-400 transition-colors z-[170]">
                  <FiX size={32} />
                </button>
              )}
            </div>
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
        <section className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic">The <span className="text-purple-500">Hall of Fame</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {winners.map((winner, i) => (
              <motion.div key={i} onClick={() => { setIsWinnerView(true); setActiveIndex(i); }} className="cursor-pointer group">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10">
                  <img src={winner.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-purple-400 text-[10px] font-black uppercase tracking-widest mb-2">{winner.position}</p>
                    <h3 className="text-2xl font-bold text-white">{winner.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Event Gallery Section */}
        <section className="relative overflow-hidden">
          <div className="px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter">Event <span className="pinyon-script-regular text-purple-500">Moments</span></h2>
              <p className="text-gray-500 text-sm mt-2 flex items-center gap-2 uppercase tracking-widest font-black"><FiCamera /> Captured Live</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
                <button onClick={() => setViewMode("carousel")} className={`px-6 py-2 rounded-xl text-[10px] font-black transition-all ${viewMode === 'carousel' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}>CINEMATIC</button>
                <button onClick={() => setViewMode("grid")} className={`flex items-center gap-2 px-6 py-2 rounded-xl text-[10px] font-black transition-all ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}><FiGrid /> GRID</button>
              </div>
              
              {viewMode === "carousel" && (
                <div className="flex gap-2">
                  <button onClick={() => manualScroll('prev')} className="p-3 rounded-full bg-white/5 hover:bg-purple-600 border border-white/10 transition-all"><FiChevronLeft /></button>
                  <button onClick={() => manualScroll('next')} className="p-3 rounded-full bg-white/5 hover:bg-purple-600 border border-white/10 transition-all"><FiChevronRight /></button>
                </div>
              )}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === "carousel" ? (
              <motion.div key="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-10">
                <div ref={scrollRef} className="flex gap-4 animate-scroll whitespace-nowrap overflow-x-auto no-scrollbar scroll-smooth">
                  {[...eventGallery, ...eventGallery].map((src, i) => (
                    <div key={i} onClick={() => { setIsWinnerView(false); setActiveIndex(i % eventGallery.length); }} className="inline-block w-[300px] md:w-[450px] h-[400px] md:h-[550px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/10 flex-shrink-0 group">
                      <img src={src} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 max-w-7xl mx-auto columns-2 lg:columns-4 gap-4 space-y-4">
                {eventGallery.map((src, i) => (
                  <div key={i} onClick={() => { setIsWinnerView(false); setActiveIndex(i); }} className="relative overflow-hidden rounded-3xl border border-white/10 cursor-zoom-in group">
                    <img src={src} className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 50s linear infinite; }
        .animate-scroll:hover { animation-play-state: paused; }
        @media (max-width: 768px) { .animate-scroll { animation: none; overflow-x: scroll; } }
      `}</style>
    </div>
  );
}