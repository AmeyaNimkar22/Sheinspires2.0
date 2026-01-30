// App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Schedule from "./Components/Schedule";
import SponsorsSection from "./Components/SponsorSection";
function App() {
  return (
    <div className="bg-black text-white font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <main>
        <Hero />
        {/* Future Sections will follow this aesthetic */}
        <About />
         <SponsorsSection />
        <Schedule/>
        <section id="about" className="h-screen bg-black" />
         
      </main>
    </div>
  );
}

export default App;