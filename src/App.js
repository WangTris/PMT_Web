import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./Pages/ProductList/ProductList";
import ProductQuality from "./Pages/ProductQuality/ProductQuality";
import ProjectProcessing from "./Pages/ProjectProcessing/ProjectProcessing";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/productquality" element={<ProductQuality />} />
        <Route path="/projectprocessing" element={<ProjectProcessing />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
