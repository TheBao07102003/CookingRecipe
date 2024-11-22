import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Customer/Home/Home";
import OurStory from "./Customer/Our Story/Ourstory";

import Opening from "./Customer/Screen/Opening";
import Login from "./Customer/Screen/Login";
import Signup from "./Customer/Screen/Signup";
import Logout from "./Customer/Screen/Logout";

import Recipes from "./Customer/Recipes/Recipes";
import VietnamRecipes from "./Customer/Recipes/VietnamRecipes";
import USARecipes from "./Customer/Recipes/USARecipes";
import JapanRecipes from "./Customer/Recipes/JapanRecipes";
import KoreaRecipes from "./Customer/Recipes/KoreaRecipes";
import NoDairyRecipes from "./Customer/Recipes/NoDairyRecipes";
import SugarFreeRecipes from "./Customer/Recipes/SugarFreeRecipes";
import GlutenFreeRecipes from "./Customer/Recipes/GlutenFreeRecipes";
import VeganRecipes from "./Customer/Recipes/VeganRecipes";
import BoilingRecipes from "./Customer/Recipes/BoilingRecipes";
import StirFryingRecipes from "./Customer/Recipes/StirFryingRecipes";
import RoastingRecipes from "./Customer/Recipes/RoastingRecipes";
import SteamingRecipes from "./Customer/Recipes/SteamingRecipes";

import Navbar from "./Component/Navbar";
import News from "./Customer/News/News";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/News" element={<News />} />

        {/* RECIPES PAGE */}
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Recipes/vietnam" element={<VietnamRecipes />} />
        <Route path="/Recipes/usa" element={<USARecipes />} />
        <Route path="/Recipes/japan" element={<JapanRecipes />} />
        <Route path="/Recipes/korea" element={<KoreaRecipes />} />
        <Route path="/Recipes/nodairy" element={<NoDairyRecipes />} />
        <Route path="/Recipes/sugarfree" element={<SugarFreeRecipes />} />
        <Route path="/Recipes/glutenfree" element={<GlutenFreeRecipes />} />
        <Route path="/Recipes/vegan" element={<VeganRecipes />} />
        <Route path="/Recipes/boiling" element={<BoilingRecipes />} />
        <Route path="/Recipes/stirfrying" element={<StirFryingRecipes />} />
        <Route path="/Recipes/roasting" element={<RoastingRecipes />} />
        <Route path="/Recipes/steaming" element={<SteamingRecipes />} />

        {/* Opening */}
        <Route path="/Opening" element={<Opening />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Logout" element={<Logout />} />

      </Routes>
    </div>
  );
}

export default App;
