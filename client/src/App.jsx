import { useState } from "react";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";
import "./App.css";
import Header from "./Pages/Components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
