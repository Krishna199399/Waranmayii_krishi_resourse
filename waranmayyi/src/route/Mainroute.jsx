import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Registration"; 

function Mainroute() {
  return (
    <>
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
      </>
  );
}

export default Mainroute;