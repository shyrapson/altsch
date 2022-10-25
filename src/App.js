import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app__Container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      ;
    </div>
  );
};

export default App;
