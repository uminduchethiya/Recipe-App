import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import Recipes from "./components/Recipe/Recipes";
import About from "./components/About";
import RecipeDetail from "./components/Recipe/RecipeDetail";



function App() {
  return<React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/home" element={<Home/>} exact/>
        <Route path="/add" element={<AddRecipe/>} exact/>
        <Route path="/recipe" element={<Recipes/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/recipe/:id" element={<RecipeDetail/>} exact/>

      </Routes>
    </main>
  </React.Fragment>
}

export default App;
