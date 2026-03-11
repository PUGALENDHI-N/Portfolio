import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/project" element={<Project />} />
      </Routes>
  
    </BrowserRouter>
   <Footer/>
   </>
  );
}

export default App;