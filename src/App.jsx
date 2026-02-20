import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import WhyParticipate from "./Components/WhyParticipate";
import Schedule from "./Components/Schedule";
import SponsorsSection from "./Components/SponsorSection";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-black text-white font-sans selection:bg-purple-500/30 selection:text-purple-200">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <WhyParticipate />
                <SponsorsSection />
                <Schedule />
              </main>
            }
          />

          {/* Gallery Page */}
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer /> 
      </div>
    </Router>
  );
}
export default App;
