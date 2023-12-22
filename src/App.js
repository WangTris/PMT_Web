import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./Pages/ProductList/ProductList";
import ProductQuality from "./Pages/ProductQuality/ProductQuality";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/productquality" element={<ProductQuality />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
