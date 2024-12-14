import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../Style/RecipeDetail.css";

const RecipeDetail = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        if (!response.ok) {
          throw new Error('Failed to fetch the recipe data');
        }
        const data = await response.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setError(error.message);
      }
    };

    fetchRecipe();
  }, [idMeal]);

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-container">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={`${recipe.strMeal} image`} />
      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
      <h3>Ingredients</h3>
      <ul>
        {Array.from({ length: 20 }).map((_, index) => {
          const ingredient = recipe[`strIngredient${index + 1}`];
          const measure = recipe[`strMeasure${index + 1}`];
          return ingredient ? (
            <li key={index}>
              {ingredient} - {measure}
            </li>
          ) : null;
        })}
      </ul>
     

    </div>
  );
};

export default RecipeDetail;
