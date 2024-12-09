import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";
import Header from "./Pages/Components/Header";
import Footer from "./Pages/Components/Footer";
import Contact from "./Pages/Contact";
import { ProductProvider } from "./Pages/Components/ProductContext";

function App() {
  return (
    <>
    <div className="PageContent">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProductProvider>
                <Homepage />
              </ProductProvider>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
