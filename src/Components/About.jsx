export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center ">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
            About <span className="text-purple-400 ">Sheinspires 2.0</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <strong>SheInspire 2.0</strong> is a two-day immersive innovation and
            leadership event designed exclusively for women students.  
            It blends <span className="text-purple-400">technology training</span>, 
            <span className="text-purple-400"> leadership insights</span>, and 
            <span className="text-purple-400"> real-world problem solving</span> to
            create meaningful impact.
          </p>

          <p className="text-gray-400 leading-relaxed">
            From hands-on industry-led training to solving impactful challenges,
            SheInspire goes beyond a competition — it’s a launchpad for
            confidence, creativity, and careers.
          </p>
        </div>

        {/* Right Highlights */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { title: "2 Days", desc: "Learning & Innovation" },
            { title: "Women Only", desc: "Inclusive Platform" },
            { title: "Industry Led", desc: "Hands-on Training" },
            { title: "₹50K+", desc: "Prizes & Opportunities" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-700/30 rounded-2xl p-6 backdrop-blur-sm hover:scale-[1.02] transition"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
