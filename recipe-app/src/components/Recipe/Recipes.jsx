import React, { useState, useEffect } from "react";

import axios from "axios";
import Recipe from "./Recipe";
const URL = "http://localhost:5001/recipes";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Recipes = () => {
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setRecipes(data.recipes));
  }, []);
  console.log(recipes);

  return (
    <div className="flex flex-wrap justify-center gap-24 ">
      {recipes &&
        recipes.map((recipe, i) => (
          <div key={i}>
            <Recipe recipe={recipe} isHomePage={true} />
          </div>
        ))}
    </div>
  );
};

export default Recipes;
