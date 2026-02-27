import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { useInView } from "react-intersection-observer";




import w1 from "../assets/w1.webp";
import w2 from "../assets/w2.webp";
import w3 from "../assets/w3.webp";

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



export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeWinner, setActiveWinner] = useState(null);
  

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

    
      
      <main className="pt-32 md:pt-40 pb-20 space-y-32">

        {/* Stats Section */}
        <section id="stats" className="px-6 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
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



      </main>

     <style>{`
  @keyframes scroll { 
    0% { transform: translateX(0); } 
    100% { transform: translateX(-33.33%); } 
  }
  .animate-scroll { 
    animation: scroll 100s linear infinite; 
  }
  .animate-scroll:hover { 
    animation-play-state: paused; 
  }
  @media (max-width: 768px) { 
    .animate-scroll { 
      animation-duration: 150s; 
  }
`}</style>
    </div>
  );
}
