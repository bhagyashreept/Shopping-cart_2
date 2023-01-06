import React from "react";
//import Products from "./Products";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  return (
    <div>
      {cart.map((item) => (
        <div>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cart;
