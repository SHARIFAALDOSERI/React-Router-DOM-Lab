import React from "react";

export default function BurgerStack({ stack }) {
  return (
    <div>
      <h2>Burger Stack</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        {stack.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item.color,
              padding: "10px",
              margin: "5px 0",
              color: "#fff"
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
