import React from 'react';

const ProductQuantity = ({product, onQuantityChange}) => {
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        onQuantityChange(product.id, newQuantity);
      };

  return (
    <div>
       <label htmlFor={`quantity_${product.id}`}>Quantity:</label>
       <input
        id={`quantity_${product.id}`}
        type="number"
        min={0}
        value={product.quantity}
        onChange={handleQuantityChange}
        size="25"
      />
    </div>
  );
}

export default ProductQuantity