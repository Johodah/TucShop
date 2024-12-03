import { useState } from "react";
import React from "react";
import { Navlink, Route, Routes, Router, Link } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div>
          <Header />
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
