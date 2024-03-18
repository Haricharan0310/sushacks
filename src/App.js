

import React from "react";
import "./App.css";

import Sponsors from "./components/Sponsors/Sponsors.js";
import Contact from "./components/Contact Us/Contactus.js";
import Prizes from "./components/Prizes/Prizes.js";
import Tracks from "./components/Tracks/Tracks.js";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.jsx";
import Faqs from "./components/FAQs/Faqs.js";
 import Timeline from "./components/Timeline/Timeline.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Tracks />
      <Prizes />
      <Timeline />
      <Sponsors />
      <Faqs />
      <Contact />
    </div>
  );
}

export default App;
