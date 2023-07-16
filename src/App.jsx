import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Prices from "./pages/Prices";
import Coin from "./pages/Coin";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Prices />} />
        <Route path="/:id" exact element={<Coin />} />
      </Routes>
    </div>
  );
};

export default App;
