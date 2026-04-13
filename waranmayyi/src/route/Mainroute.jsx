import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import Contact from "../pages/Contact";





function Mainroute() {
  return (
    <>
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </>
  );
}

export default Mainroute;