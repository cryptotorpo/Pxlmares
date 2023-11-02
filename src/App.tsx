import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Whitepaper from './pages/Whitepaper';
import Landing from './pages/Landing';
import Explorer from './pages/Explorer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="explorer" element={<Explorer />} />
        <Route path="whitepaper" element={<Whitepaper />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
