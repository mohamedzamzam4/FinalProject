import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Searchbar from "./components/Searchbar";
import List from "./components/List";
import RecipeDetail from "./components/RecipeDetail";
import image2 from "./images/image2.png";
import "./App.css";
import { Link } from "react-router-dom";
import previous from "./images/previous.png";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [listsing, setListsing] = useState([]);

  async function fetchData() {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    try {
      const response = await fetch(url);
      const result = await response.json();
      setRecipes(result.meals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const ListIngredients = recipes.forEach((el) => {});
  const filteredRecipes = recipes.filter((recipe) =>
    [recipe.strMeal, recipe.strCategory, recipe.strArea, recipe.strIngredient1]
      .filter(Boolean)
      .some((field) =>
        field.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
      )
  );

  return (
    <header className="App-header">
      <Link to={"/"} className="logo-container">
        <img src={image2} alt="Your Logo" className="logo" />
      </Link>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {recipes.length > 0 ? (
                <Searchbar
                  items={recipes.map((recipe) => recipe.strMeal)}
                  onSearch={setSearchQuery}
                />
              ) : (
                <p className="App-message">
                  No recipes found. Please try again later!
                </p>
              )}
              <List user={filteredRecipes} />
            </>
          }
        />
        <Route
          path="/recipe/:idMeal"
          element={
            <div>
              <RecipeDetail recipes={recipes} />{" "}
              <Link to={"/"} className="recipe-link">
                <img
                  style={{ with: "30px", height: "30px" }}
                  src={previous}
                />{" "}
                <span>Previous page</span>
              </Link>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default App;
