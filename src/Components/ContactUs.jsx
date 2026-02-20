import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMessageSquare, FiUser, FiCode } from "react-icons/fi";

export default function ContactUs() {
  const contacts = [
    {
      role: "Official Inquiries",
      name: "SheInspire Team",
      email: "sheinspires2026@gmail.com",
      icon: <FiMessageSquare />,
      span: "md:col-span-2 lg:col-span-1"
    },
    {
      role: "Event Coordinator",
      name: "Gururaja Kulkarni",
      email: "gururaja.kulkarni@zensar.com",
      icon: <FiUser />,
      span: "lg:col-span-1"
    },
    {
      role: "Website Management",
      leads: [
        { name: "Ameya Nimkar", email: "ameyaan22@gmail.com" },
        { name: "Prerana Bhokare", email: "preranabhokare05@gmail.com" }
      ],
      icon: <FiCode />,
      span: "md:col-span-2 lg:col-span-2"
    }
  ];

  return (
    <section id="contact" className="relative bg-black text-white py-32 px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
                  <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase"
                  >
                      <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.5em] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full">
                         Get in Touch
                      </span>
                  </motion.span>
                  <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-7xl font-black mt-6 tracking-tighter leading-tight"
                  >
                      Contact <span className="pinyon-script-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Us</span>
                  </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Have questions about participation or the event? 
            Reach out to the right department below.
          </motion.p>
        </div>

        {/* Contact Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-8 md:p-10 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-xl overflow-hidden transition-all hover:bg-white/[0.06] hover:border-purple-500/40 ${contact.span}`}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-2xl text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                  {contact.icon}
                </div>

                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-500 mb-2">
                  {contact.role}
                </h3>

                {contact.leads ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    {contact.leads.map((lead, i) => (
                      <div key={i}>
                        <p className="text-2xl font-bold text-white mb-1 tracking-tight">{lead.name}</p>
                        <a 
                          href={`mailto:${lead.email}`} 
                          className="text-purple-400 hover:text-pink-400 transition-colors font-medium text-sm break-all"
                        >
                          {lead.email}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="text-3xl font-bold text-white mb-2 tracking-tight">{contact.name}</p>
                    <a 
                      href={`mailto:${contact.email}`} 
                      className="text-purple-400 hover:text-pink-400 transition-colors font-medium text-lg break-all"
                    >
                      {contact.email}
                    </a>
                  </>
                )}
              </div>

              {/* Decorative Background Icon */}
              <div className="absolute -bottom-6 -right-6 text-white/[0.02] text-9xl group-hover:text-purple-500/[0.05] transition-colors duration-500 pointer-events-none">
                {contact.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <p className="text-gray-500 text-sm font-medium tracking-wide italic">
            Typical response time: <span className="text-purple-400">24 - 48 hours</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}