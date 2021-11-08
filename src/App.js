import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import GameServers from "./pages/GameServers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="game-servers" element={<GameServers />} />
      </Routes>
    </div>
  );
}

export default App;
