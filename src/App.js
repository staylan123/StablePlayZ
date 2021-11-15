import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import GameServers from "./pages/GameServers";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game-servers" element={<GameServers />} />
        <Route path="faq" element={<Faq />} />
        <Route path="about-us" element={<About />} />
        <Route path="support" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
