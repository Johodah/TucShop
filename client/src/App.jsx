import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";
import Header from "./Pages/Components/Header";
import Footer from "./Pages/Components/Footer";
import Contact from "./Pages/Contact";
import { ProductProvider } from "./Pages/Components/ProductContext";
import Product from "./Pages/Product";

function App() {
  return (
    <ProductProvider>
      <div className="app-wrapper">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ProductProvider>
  );
}

export default App;
