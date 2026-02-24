import React from "react";
import { motion } from "framer-motion";

const scheduleData = [
  {
    type: "ONLINE SESSION",
    date: "FEB 25, 2026",
    time: "7:00 PM - 8:00 PM",
    title: "SheInspires Kick-off Online Session",
    location: "Virtual Event",
    status: "Confirmed",
    color: "from-blue-500 to-cyan-400",
    // Custom SVG Icon
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    type: "DAY 1",
    date: "MAR 16, 2026",
    time: "TBA",
    title: "Day One",
    location: "Urmilatai Vishwanath Karad Auditorium",
    status: "Schedule TBA",
    color: "from-purple-600 to-pink-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    type: "DAY 2",
    date: "MAR 17, 2026",
    time: "TBA",
    title: "Day Two",
    location: "Zensar, Kharadi",
    status: "Schedule TBA",
    color: "from-pink-600 to-orange-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative bg-[#050505] text-white py-32 px-6 overflow-hidden font-sans">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
         <motion.span 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     className="text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase"
                   >
                    <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full">
                     The Timeline
                   </span>
                   </motion.span>
                   <motion.h2 
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     className="text-4xl md:text-7xl font-black mt-6 tracking-tighter leading-tight"
                   >
                     Event <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Schedule</span>
                   </motion.h2>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Decorative Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className="group relative z-10"
            >
              {/* Card Container */}
              <div className="relative p-8 h-full bg-white/[0.02] border border-white/10 rounded-[2rem] backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden shadow-2xl">
                
                {/* Active Accent Light */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                {/* Internal Glow Effect */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all duration-700" />

                {/* Date & Type Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase mb-2">
                      {item.type}
                    </span>
                    <span className="text-3xl font-black tracking-tight text-white group-hover:text-purple-300 transition-colors">
                      {item.date}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-500 w-12 h-12 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                {/* Information Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-400 text-sm font-medium">
                      <svg className="w-4 h-4 mr-3 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {item.time}
                    </div>
                    <div className="flex items-start text-gray-400 text-sm leading-relaxed">
                      <svg className="w-4 h-4 mr-3 mt-1 text-purple-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Badge */}
                <div className="mt-12 flex items-center">
                  <span className="flex items-center text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/20 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse mr-3" />
                    {item.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Timeline Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 flex flex-col items-center justify-center text-center space-y-4"
        >
          <div className="flex gap-2">
             {[...Array(3)].map((_, i) => (
               <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-500/30" />
             ))}
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-medium">
            Subject to minor adjustments
          </p>
        </motion.div>
      </div>
    </section>
  );
}