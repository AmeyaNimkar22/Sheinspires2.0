import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

import pic1 from "../assets/pic1.JPG";
import pic2 from "../assets/pic2.JPG";
import pic3 from "../assets/pic3.JPG";
import pic4 from "../assets/pic4.JPG";
import pic5 from "../assets/pic5.JPG";
import pic6 from "../assets/pic6.JPG";
import pic7 from "../assets/pic7.JPG";
import pic8 from "../assets/pic8.JPG";
import pic9 from "../assets/pic9.JPG";
import pic10 from "../assets/pic10.JPG";
import pic11 from "../assets/pic11.JPG";
import pic12 from "../assets/pic12.JPG";
import pic13 from "../assets/pic13.JPG";
import pic14 from "../assets/pic14.JPG";
import pic15 from "../assets/pic15.JPG";
import pic16 from "../assets/pic16.JPG";
import pic17 from "../assets/pic17.JPG";
import pic18 from "../assets/pic18.JPG";
import pic19 from "../assets/pic19.JPG";
import pic20 from "../assets/pic20.JPG";
import pic21 from "../assets/pic21.JPG";
import pic22 from "../assets/pic22.JPG";
import pic23 from "../assets/pic23.JPG";
import pic24 from "../assets/pic24.JPG";
import pic25 from "../assets/pic25.JPG";
import pic26 from "../assets/pic26.JPG";
import pic27 from "../assets/pic27.JPG";
import pic28 from "../assets/pic28.JPG";
import pic29 from "../assets/pic29.JPG";
import pic30 from "../assets/pic30.JPG";
import pic31 from "../assets/pic31.JPG";
import pic32 from "../assets/pic32.JPG";
import pic33 from "../assets/pic33.JPG";
import pic34 from "../assets/pic34.JPG";
import pic35 from "../assets/pic35.JPG";
import pic36 from "../assets/pic36.JPG";
import pic37 from "../assets/pic37.JPG";
import pic38 from "../assets/pic38.JPG";
import pic39 from "../assets/pic39.JPG";
import pic40 from "../assets/pic40.JPG";
import pic41 from "../assets/pic41.JPG";
import pic42 from "../assets/pic42.JPG";
import pic43 from "../assets/pic43.JPG";
import pic44 from "../assets/pic44.JPG";
import pic45 from "../assets/pic45.JPG";
import pic46 from "../assets/pic46.JPG";
import pic47 from "../assets/pic47.JPG";
import pic48 from "../assets/pic48.JPG";
import pic49 from "../assets/pic49.JPG";
import pic50 from "../assets/pic50.JPG";
import pic51 from "../assets/pic51.JPG";
import pic52 from "../assets/pic52.JPG";
import pic53 from "../assets/pic53.JPG";
import pic54 from "../assets/pic54.JPG";
import pic55 from "../assets/pic55.JPG";
import pic56 from "../assets/pic56.JPG";  
import pic57 from "../assets/pic57.JPG";
import pic58 from "../assets/pic58.JPG";
import pic59 from "../assets/pic59.JPG";
import pic60 from "../assets/pic60.JPG";
import pic61 from "../assets/pic61.JPG";
import pic62 from "../assets/pic62.JPG";
import pic63 from "../assets/pic63.JPG";


import w1 from "../assets/w1.JPG";
import w2 from "../assets/w2.JPG";
import w3 from "../assets/w3.JPG";

const stats = [
  { label: "Student Participants", value: "700+" },
  { label: "Colleges", value: "50+" },
  { label: "Projects Submitted", value: "300+" },
  { label: "Winners", value: "30+" },
];

const winners = [
  { img: w1 },
  { img: w2 },
  { img: w3 },
];

const galleryImages = [
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12 ,pic23, pic14, pic15, pic16, pic17, pic18, pic19, pic20,
  pic21, pic22, pic13, pic24, pic25, pic26, pic27, pic28, pic29, pic30,
  pic31, pic32, pic33, pic34, pic35, pic36, pic37, pic38, pic39, pic40,
  pic41, pic42, pic43, pic44, pic45, pic46, pic47, pic48, pic49, pic50,
  pic51, pic52, pic53, pic54, pic55, pic56, pic57, pic58, pic59, pic60,
  pic61, pic62, pic63,
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

  const handleWinnerNext = () => {
    setActiveWinner((prev) => (prev + 1) % winners.length);
  };

  const handleWinnerPrev = () => {
    setActiveWinner((prev) => (prev - 1 + winners.length) % winners.length);
  };

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
        if (activeWinner !== null) {
          if (e.key === "ArrowRight") handleWinnerNext();
          if (e.key === "ArrowLeft") handleWinnerPrev();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, activeWinner, handleNext, handlePrev]);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-purple-500/30">

      {/* Winner Lightbox */}
      <AnimatePresence>
        {activeWinner !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 md:p-10"
          >
            <div className="absolute inset-0" onClick={() => setActiveWinner(null)} />
            <button
              onClick={() => setActiveWinner(null)}
              className="absolute top-6 right-6 z-[210] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <FiX size={20} />
            </button>
            <button
              onClick={handleWinnerPrev}
              className="absolute left-4 md:left-10 z-[210] p-4 rounded-full bg-white/10 hover:bg-purple-600 transition-all"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={handleWinnerNext}
              className="absolute right-4 md:right-10 z-[210] p-4 rounded-full bg-white/10 hover:bg-purple-600 transition-all"
            >
              <FiChevronRight size={24} />
            </button>
            <motion.div
              key={activeWinner}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-full max-h-[80vh]"
            >
              <img
                src={winners[activeWinner].img}
                className="max-w-full max-h-[80vh] rounded-2xl border border-white/10 object-contain shadow-2xl"
                alt={`Winner ${activeWinner + 1}`}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 md:p-10"
          >
            <div className="absolute inset-0" onClick={() => setActiveIndex(null)} />
            <button onClick={() => setActiveIndex(null)} className="absolute top-6 right-6 z-[160] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"><FiX size={20} /></button>
            <button onClick={handlePrev} className="absolute left-4 md:left-10 z-[160] p-4 rounded-full bg-white/10 hover:bg-purple-600 transition-all"><FiChevronLeft size={24} /></button>
            <button onClick={handleNext} className="absolute right-4 md:right-10 z-[160] p-4 rounded-full bg-white/10 hover:bg-purple-600 transition-all"><FiChevronRight size={24} /></button>
            <motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative max-w-full max-h-[80vh]">
              <img src={galleryImages[activeIndex]} className="max-w-full max-h-[80vh] rounded-2xl border border-white/10 object-contain shadow-2xl" alt="Gallery" loading="lazy" />
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

        {/* Winners Slideshow */}
        <section id="winners" className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter">
              Last Year’s <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Winners</span>
            </h2>
          </div>

          <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-3xl">
            <motion.div className="flex transition-transform duration-500" animate={{ x: `-${activeWinner * 100}%` }}>
              {winners.map((winner, i) => {
                const { ref, inView } = useInView({ triggerOnce: true });
                return (
                  <div key={i} ref={ref} className="flex-shrink-0 w-full cursor-pointer rounded-2xl overflow-hidden border border-white/10" onClick={() => setActiveWinner(i)}>
                    {inView && (
                      <img
                        src={winner.img}
                        className="w-full h-[300px] md:h-[350px] object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                        alt={`Winner ${i + 1}`}
                        loading="lazy"
                      />
                    )}
                  </div>
                );
              })}
            </motion.div>

            <button onClick={handleWinnerPrev} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-purple-600 transition-all">
              <FiChevronLeft size={24} />
            </button>
            <button onClick={handleWinnerNext} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-purple-600 transition-all">
              <FiChevronRight size={24} />
            </button>
          </div>
        </section>

        {/* Video Highlights */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter flex items-center justify-center gap-3">
              Event <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Highlights</span>
            </h2>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video max-w-5xl mx-auto">
            <iframe
  className="w-full h-full transition-all duration-700"
  src="https://www.youtube.com/embed/Tcq33ICmyhk"
  title="Sheinspires Highlights"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

          </motion.div>
        </section>

        {/* Gallery Section */}
        {/* Gallery Section */}
<section className="relative overflow-hidden">
  <div className="px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
    <div className="text-center md:text-left">
      <h2 className="text-3xl md:text-6xl font-black tracking-tighter">
        Event <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Gallery</span>
      </h2>
    </div>
    <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
      <button 
        onClick={() => setViewMode("carousel")} 
        className={`px-6 py-2 rounded-xl text-[10px] font-black transition-all ${viewMode === 'carousel' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
      >
        CINEMATIC
      </button>
      <button 
        onClick={() => setViewMode("grid")} 
        className={`flex items-center gap-2 px-6 py-2 rounded-xl text-[10px] font-black transition-all ${viewMode === 'grid' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
      >
        <FiGrid /> GRID
      </button>
    </div>
  </div>

  <AnimatePresence mode="wait">
    {viewMode === "carousel" ? (
      <motion.div key="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-10">
        <div className="flex gap-4 animate-scroll whitespace-nowrap">
          {[...galleryImages, ...galleryImages].map((src, i) => (
            <div 
              key={i} 
              onClick={() => setActiveIndex(i % galleryImages.length)} 
              className="inline-block w-[280px] md:w-[400px] h-[350px] md:h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/10 flex-shrink-0"
            >
              <img 
                src={src} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-2xl" 
                alt="Gallery item" 
                loading="lazy" 
              />
            </div>
          ))}
        </div>
      </motion.div>
    ) : (
      <motion.div 
        key="grid" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0 }} 
        className="px-6 max-w-7xl mx-auto columns-2 lg:columns-4 gap-4 space-y-4"
      >
        {galleryImages.map((src, i) => (
          <motion.div 
            key={i} 
            onClick={() => setActiveIndex(i)} 
            className="relative overflow-hidden rounded-3xl border border-white/10 cursor-zoom-in"
          >
            <img 
              src={src} 
              className="w-full object-cover transition-transform duration-700 hover:scale-105 rounded-2xl" 
              alt="Gallery item" 
              loading="lazy" 
            />
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
