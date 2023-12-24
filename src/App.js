import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./Pages/ProductList/ProductList";
import ProductQuality from "./Pages/ProductQuality/ProductQuality";
import ProjectProcessing from "./Pages/ProjectProcessing/ProjectProcessing";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/Forms/ContactUs";
import GetaQuote from "./Pages/Forms/GetaQuote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/productquality" element={<ProductQuality />} />
        <Route path="/projectprocessing" element={<ProjectProcessing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/getaquote" element={<GetaQuote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
