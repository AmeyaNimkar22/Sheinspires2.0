import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

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


const galleryImages = [
pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12 ,pic23, pic14, pic15, pic16, pic17, pic18, pic19, pic20,
pic21, pic22, pic13, pic24, pic25, pic26, pic27, pic28, pic29, pic30,
pic31, pic32, pic33, pic34, pic35, pic36, pic37, pic38, pic39, pic40,
pic41, pic42, pic43, pic44, pic45, pic46, pic47, pic48, pic49, pic50,
pic51, pic52, pic53, pic54, pic55, pic56, pic57, pic58, pic59, pic60,
pic61, pic62, pic63,
];

export default function EventGallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [viewMode, setViewMode] = useState("carousel");

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 md:p-10"
          >
            <div className="absolute inset-0" onClick={() => setActiveIndex(null)} />
            <button onClick={() => setActiveIndex(null)} className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20">
              <FiX size={20} />
            </button>
            <button onClick={handlePrev} className="absolute left-6 p-4 rounded-full bg-white/10 hover:bg-purple-600">
              <FiChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className="absolute right-6 p-4 rounded-full bg-white/10 hover:bg-purple-600">
              <FiChevronRight size={24} />
            </button>

            <motion.img
              key={activeIndex}
              src={galleryImages[activeIndex]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-[80vh] rounded-3xl border border-white/10 shadow-2xl"
              alt="Gallery"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
     {/* Header */}
<div className="px-6 max-w-7xl mx-auto flex flex-col items-center mb-20">

  {/* Heading Block */}
  <div className="text-center flex flex-col items-center">

    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="inline-block px-5 py-2 text-[11px] font-bold tracking-[0.4em] text-purple-300 uppercase bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-full backdrop-blur-sm"
    >
      A Look Back
    </motion.span>

    <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mt-8 text-4xl md:text-7xl font-black tracking-tight leading-none flex items-baseline justify-center gap-4"
>
  <span>2025</span>
  <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
    Gallery
  </span>
</motion.h2>

  </div>

  {/* Toggle Buttons */}
  <div className="mt-12 flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-sm">
    <button
      onClick={() => setViewMode("carousel")}
      className={`px-6 py-2 rounded-xl text-[11px] font-bold transition-all ${
        viewMode === "carousel"
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
          : "text-white/60 hover:text-white"
      }`}
    >
      CINEMATIC
    </button>

    <button
      onClick={() => setViewMode("grid")}
      className={`flex items-center gap-2 px-6 py-2 rounded-xl text-[11px] font-bold transition-all ${
        viewMode === "grid"
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
          : "text-white/60 hover:text-white"
      }`}
    >
      <FiGrid size={14} />
      GRID
    </button>
  </div>

</div>

      {/* Views */}
      <AnimatePresence mode="wait">
        {viewMode === "carousel" ? (
          <motion.div
            key="carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-10 overflow-hidden"
          >
            <div className="flex gap-4 animate-scroll whitespace-nowrap">
              {[...galleryImages, ...galleryImages].map((src, i) => {
                const originalIndex = i % galleryImages.length;
                return (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(originalIndex)}
                    className="inline-block w-[280px] md:w-[400px] h-[350px] md:h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/10 flex-shrink-0"
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Gallery"
                    />
                  </div>
                );
              })}
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
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className="overflow-hidden rounded-3xl border border-white/10 cursor-zoom-in"
              >
                <img
                  src={src}
                  className="w-full object-cover hover:scale-105 transition-transform duration-700"
                  alt="Gallery"
                />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Animation */}
      <style>{`
        @keyframes scroll { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        .animate-scroll { 
          animation: scroll 100s linear infinite; 
        }
        .animate-scroll:hover { 
          animation-play-state: paused; 
        }
      `}</style>
    </section>
  );
}