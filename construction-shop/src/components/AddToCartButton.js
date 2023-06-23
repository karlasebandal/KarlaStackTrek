import React from "react";

function AddToCartButton({ product, handleQuantityChange, addToCart }) {
  return (
    <div>
      <label htmlFor={`quantity_${product.id}`}>
        Quantity:
      </label>
      <input
        type="number"
        id={`quantity_${product.id}`}
        min="0"
        defaultValue="0"
        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
        style={{ width: 40, marginRight: 5 }}
      />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default AddToCartButton;