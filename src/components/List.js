import React from "react";
import Card from "./Card"; // Ensure you import the Card component
import "../App.css"; // Import your main CSS file if needed

function List({ user }) {
  return (
    <div className="recipe-list">
      <div className="card-container">
        {user.map((recipe) => (
          <Card key={recipe.idMeal} recipe={recipe} /> // Use Card component
        ))}
      </div>
    </div>
  );
}

export default List;