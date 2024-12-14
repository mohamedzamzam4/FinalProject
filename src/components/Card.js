
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Card.css'; 

const Card = ({ recipe }) => {
  return (
    <div className="card">
      {recipe.strMealThumb && (
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="card-image" />
      )}
      <div className="card-content">
        <h3 className="card-title">{recipe.strMeal}</h3>
        <p className="card-category">
          <strong>Category:</strong> {recipe.strCategory || 'N/A'}
        </p>
        <p className="card-area">
          <strong>Area:</strong> {recipe.strArea || 'N/A'}
        </p>
        <a href={`/recipe/${recipe.idMeal}`} className="card-link">
RECIPE DETAILS  <i class="fas fa-arrow-right"></i>
</a>
      </div>
    </div>
  );
};

export default Card;