import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./Pages/ProductList/ProductList";
import Installation from "./Pages/Installation/Installation";
import Guarantee from "./Pages/Guarantee/Guarantee";
import Projects from "./Pages/Projects/Projects";
import News from "./Pages/News/News";
import ProductQuality from "./Pages/ProductQuality/ProductQuality";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/guarantee" element={<Guarantee />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
