import React from "react";
import { motion } from "framer-motion";

const fullSchedule = [
  { day: "01", phase: "Awareness & Shortlisting", events: [
    { time: "08:30 – 09:30", title: "Registration & Breakfast", category: "General" },
    { time: "09:30 – 10:00", title: "Opening Ceremony", category: "Main Event" },
    { time: "10:00 – 10:15", title: "Prizes & Opportunities Reveal", category: "Highlight" },
    { time: "10:15 – 11:45", title: "Industry-led Technical Training", category: "Skill Building" },
    { time: "11:45 – 12:30", title: "Online Assessment & Shortlisting", category: "Competition" },
    { time: "01:15 – 03:45", title: "Advanced Training & Leadership Panels", category: "Leadership" },
    { time: "03:45 – 04:00", title: "Day 1 Wrap-up", category: "Closing" },
  ]},
  { day: "02", phase: "Innovation & Impact", events: [
    { time: "09:30 – 10:00", title: "Check-in & Briefing", category: "General" },
    { time: "10:00 – 10:30", title: "Problem Statement Release", category: "Kickoff" },
    { time: "10:30 – 01:30", title: "Solution Development (with mentors)", category: "Innovation" },
    { time: "02:15 – 04:00", title: "Final Presentations & Evaluation", category: "Pitching" },
    { time: "04:00 – 05:00", title: "Results, Prizes & Closing Ceremony", category: "Award Ceremony" },
  ]}
];

const TimelineCard = ({ event, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-10 pb-12 last:pb-0 group"
  >
    {/* Vertical Line Segment */}
    <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-white/10 group-last:bg-transparent" />
    
    {/* Animated Dot */}
    <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] group-hover:scale-150 transition-transform duration-300" />
      <div className="absolute inset-0 rounded-full border border-purple-500/30 group-hover:border-purple-500 animate-ping opacity-20" />
    </div>

    {/* Content Card */}
    <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-md hover:border-purple-500/30 hover:bg-white/[0.05] transition-all cursor-default">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="text-[10px] font-black tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full">
          {event.time}
        </span>
        <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
          {event.category}
        </span>
      </div>
      <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
        {event.title}
      </h4>
    </div>
  </motion.div>
);

export default function Schedule() {
  return (
    <section id="schedule" className="relative bg-black text-white py-32 px-6">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase"
          >
            Roadmap
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mt-4 tracking-tighter"
          >
            The <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Timeline</span>
          </motion.h2>
        </div>

        {fullSchedule.map((dayBlock, dayIndex) => (
          <div key={dayIndex} className="mb-20 last:mb-0">
            {/* Day Title Separator */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-12"
            >
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white tracking-tighter">Day {dayBlock.day}</span>
                <span className="text-sm font-medium text-purple-400 uppercase tracking-[0.2em]">{dayBlock.phase}</span>
              </div>
              <div className="flex-grow h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
            </motion.div>

            {/* Event List */}
            <div className="relative">
              {dayBlock.events.map((event, eventIndex) => (
                <TimelineCard 
                  key={eventIndex} 
                  event={event} 
                  index={eventIndex} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}