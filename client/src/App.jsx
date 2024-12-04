import { useState } from 'react';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Homepage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";
import Header from "./Pages/Components/Header";
import Footer from './Pages/Components/Footer'; 

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
