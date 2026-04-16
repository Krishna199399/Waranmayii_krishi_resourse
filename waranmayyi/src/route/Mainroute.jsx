import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Registration";
import Aboutus from "../pages/Aboutus";
import Products from "../pages/Products";

function Mainroute() {
  return (
    <>
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
      </>
  );
}

export default Mainroute;
