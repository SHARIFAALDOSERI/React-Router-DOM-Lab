import React from "react";

export default function IngredientList({ ingredients, onAdd }) {
  return (
    <div>
      <h2>Ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <button
          key={index}
          onClick={() => onAdd(ingredient)}
          style={{
            backgroundColor: ingredient.color,
            color: "#fff",
            padding: "10px",
            margin: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {ingredient.name}
        </button>
      ))}
    </div>
  );
}
