import React from "react";
import { Route, Routes, useLocation,Navigate } from "react-router-dom";
import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import Recipes from "./components/Recipe/Recipes";
import About from "./components/About";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import Login from "./views/auth/login";
import Signup from "./views/auth/signup";
import Header from "./components/Header";

function App() {
  const location = useLocation();

  // Function to determine whether to show the header
  const showHeader = () => {
    return !['/login', '/signup'].includes(location.pathname);
  };

  return (
    <React.Fragment>
      {showHeader() && (
        <header>
          <Header />
        </header>
      )}
      <main>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/recipe" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
