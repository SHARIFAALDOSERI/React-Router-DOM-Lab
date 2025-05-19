import React, { useState } from "react";
import IngredientList from "./IngredientList"; // Make sure the file exists and the extension is correct
import BurgerStack from "./BurgerStack"; // Make sure the file exists

const ingredients = [
  { name: "Lettuce", color: "green" },
  { name: "Tomato", color: "red" },
  { name: "Cheese", color: "gold" },
  { name: "Patty", color: "#7B3F00" },
  { name: "Bun", color: "#F5DEB3" },
];

export default function App() {
  const [stack, setStack] = useState([]);

  const addToStack = (ingredient) => {
    setStack([ingredient, ...stack]); // Add on top (LIFO)
  };

  const clearStack = () => {
    setStack([]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      <IngredientList ingredients={ingredients} onAdd={addToStack} />
      <div>
        <BurgerStack stack={stack} />
        <button onClick={clearStack} style={{ marginTop: "10px" }}>
          Clear Burger
        </button>
      </div>
    </div>
  );
}