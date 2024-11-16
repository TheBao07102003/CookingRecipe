import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Customer/Home/Home";
import OurStory from "./Customer/Our Story/Ourstory";
import Recipes from "./Customer/Recipes/Recipes";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/Recipes" element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
