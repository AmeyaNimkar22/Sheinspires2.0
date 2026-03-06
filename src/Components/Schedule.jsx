import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scheduleData = [
  {
    type: "ONLINE SESSION",
    date: "FEB 25, 2026",
    time: "7:00 PM - 8:00 PM",
    title: "SheInspires Kick-off Online Session",
    location: "Virtual Event",
    status: "Completed",
    isHighlight: false,
    color: "from-blue-500 to-cyan-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    type: "EXPERT SESSION",
    date: "MAR 02, 2026",
    time: "7:00 PM - 8:00 PM",
    title: "Cloud & Emerging Tech: Industry Insights with Sharat Kanthi",
    location: "Microsoft Teams",
    status: "Completed",
    isHighlight: false,
    color: "from-yellow-400 to-orange-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    speaker: {
      name: "Sharat Kanthi",
      title: "Cloud Solution Architect & Business Unit Head – Azure, CloudThat",
      expertise: "Azure Cloud • IoT • AI/ML • Big Data • DevOps",
      experience: "10+ years IT experience",
      clients: ["VMware", "Accenture", "TCS", "Infosys", "L&T", "HCL", "Intuit", "Mindtree"]
    },
    recording: {
      url: "https://youtu.be/MHgou-zwx_A",
      embedUrl: "https://www.youtube.com/embed/MHgou-zwx_A"
    }
  },
  {
    type: "EXPERT SESSION",
    date: "MAR 06, 2026",
    time: "7:00 PM - 8:00 PM",
    title: "Vibe Coding: AI-Assisted Development with Sharad Rajore",
    location: "Microsoft Teams",
    status: "Upcoming",
    isHighlight: true,
    color: "from-green-500 to-emerald-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.5" />
        <polyline points="16 2 22 8 16 8" />
        <line x1="10" y1="14" x2="21" y2="14" />
        <line x1="10" y1="18" x2="18" y2="18" />
        <line x1="3" y1="10" x2="8" y2="10" />
      </svg>
    ),
    speaker: {
      name: "Sharad Rajore",
      title: "Generative AI Specialist",
      expertise: "LLM-based solutions • AI Agents • Rapid Prototyping",
      tools: ["GitHub Copilot", "Claude", "Google Antigravity"],
      session: "Vibe coding • AI-assisted development • End-to-end prototyping"
    }
  },
  {
    type: "EXPERT SESSION",
    date: "MAR 11, 2026",
    time: "7:00 PM - 8:00 PM",
    title: "Online Expert Session",
    location: "Microsoft Teams",
    status: "Schedule TBA",
    isHighlight: false,
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
    type: "DAY 1",
    date: "MAR 16, 2026",
    time: "TBA",
    title: "Main Event Day",
    location: "Urmilatai Vishwanath Karad Auditorium",
    status: "Schedule TBA",
    isHighlight: false,
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
  const [selectedRecording, setSelectedRecording] = useState(null);

  const openRecording = (recording) => {
    setSelectedRecording(recording);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeRecording = () => {
    setSelectedRecording(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="schedule" className="relative bg-[#050505] text-white py-32 px-6 overflow-hidden font-sans">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <header className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black uppercase tracking-[0.5em] text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full">
              The Timeline
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-tight"
          >
            Event <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Schedule</span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative">
          {scheduleData.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`relative p-8 h-full bg-white/[0.02] border ${item.isHighlight ? 'border-green-500/40 ring-1 ring-green-500/20' : 'border-white/10'} rounded-[2.5rem] backdrop-blur-xl hover:border-purple-500/60 hover:bg-white/[0.04] transition-all duration-500 flex flex-col shadow-2xl overflow-hidden`}>
                
                {item.isHighlight && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-green-600 text-[8px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-tighter">
                      Next Event
                    </div>
                  </div>
                )}

                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex justify-between items-start mb-8">
                  <div className="flex flex-col">
                    <span className={`text-[9px] font-black tracking-widest uppercase mb-2 ${item.isHighlight ? 'text-green-400' : item.type === 'EXPERT SESSION' ? 'text-yellow-400' : 'text-gray-500'}`}>
                      {item.type}
                    </span>
                    <span className="text-2xl font-black tracking-tighter text-white group-hover:text-purple-300 transition-colors">
                      {item.date}
                    </span>
                  </div>
                  <div className={`p-3 bg-white/5 rounded-2xl border border-white/10 ${item.isHighlight ? 'text-green-400 group-hover:bg-green-500/20' : 'text-purple-400 group-hover:bg-purple-500/20'} group-hover:scale-110 transition-all duration-500 w-11 h-11 flex items-center justify-center shrink-0`}>
                    <div className="w-6 h-6">{item.icon}</div>
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <h3 className="text-xl font-bold tracking-tight text-white leading-snug">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-400 text-xs font-semibold">
                      <svg className="w-4 h-4 mr-2 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                      {item.time}
                    </div>
                    <div className="flex items-start text-gray-400 text-xs leading-relaxed">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-purple-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="line-clamp-2">{item.location}</span>
                    </div>
                  </div>

                  {/* Speaker Details - March 2nd Session */}
                  {item.type === "EXPERT SESSION" && item.date === "MAR 02, 2026" && item.speaker && (
                    <div className="mt-3 text-[10px] bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/20">
                      <p className="font-bold text-yellow-400 mb-1">{item.speaker.name}</p>
                      <p className="text-gray-400 mb-1">{item.speaker.title}</p>
                      <p className="text-gray-400 mb-1">{item.speaker.expertise}</p>
                      <p className="text-gray-500 text-[8px] mt-2">Fortune 500 clients: {item.speaker.clients.join(" • ")}</p>
                      
                      {/* View Recording Button */}
                      {item.recording && (
                        <button
                          onClick={() => openRecording(item.recording)}
                          className="mt-3 w-full flex items-center justify-center gap-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 text-[10px] font-bold py-2 px-3 rounded-lg border border-yellow-500/30 transition-all duration-300"
                        >
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          View Recording
                        </button>
                      )}
                    </div>
                  )}

                  {/* Speaker Details - March 6th Session */}
                  {item.type === "EXPERT SESSION" && item.date === "MAR 06, 2026" && item.speaker && (
                    <div className="mt-3 text-[10px] bg-green-500/10 p-3 rounded-xl border border-green-500/20">
                      <p className="font-bold text-green-400 mb-1">{item.speaker.name}</p>
                      <p className="text-gray-400 mb-1">{item.speaker.title}</p>
                      <p className="text-gray-400 mb-1">{item.speaker.expertise}</p>
                      <p className="text-gray-400 text-[8px] mt-2">Tools: {item.speaker.tools.join(" • ")}</p>
                      <p className="text-gray-500 text-[8px]">{item.speaker.session}</p>
                    </div>
                  )}
                </div>

                <footer className="mt-10">
                  <span className={`inline-flex items-center text-[8px] font-black uppercase tracking-[0.2em] px-3 py-2 rounded-lg bg-white/5 border ${item.isHighlight ? 'border-green-500/30' : 'border-white/10'} group-hover:border-purple-500/40 transition-colors`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-2 ${item.status === 'Completed' ? 'bg-blue-400' : item.isHighlight ? 'bg-green-400 animate-ping' : 'bg-purple-500 animate-pulse'}`} />
                    {item.status}
                  </span>
                </footer>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center text-center"
        >
          <div className="flex gap-1.5 mb-6">
             {[...Array(3)].map((_, i) => (
               <div key={i} className="w-1 h-1 rounded-full bg-purple-500/40" />
             ))}
          </div>
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em] font-black">
           Schedule subject to change
          </p>
        </motion.footer>
      </div>

      {/* Video Recording Modal */}
      <AnimatePresence>
        {selectedRecording && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeRecording}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl z-50"
            >
              <div className="relative bg-[#0a0a0a] border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider">
                    Session Recording
                  </h3>
                  <button
                    onClick={closeRecording}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Video Container */}
                <div className="relative pt-[56.25%] bg-black">
                  <iframe
                    src={selectedRecording.embedUrl}
                    title="Session Recording"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Footer */}
                <div className="p-4 text-center">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                    Expert Session • Cloud & Emerging Tech with Sharat Kanthi
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}