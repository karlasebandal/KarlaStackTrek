import React, { useState } from 'react'

const ProductQuantity = ({ product, count }) => {
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (quantity) => {
        setQuantity(quantity);
      };
    


return (
    <div>
        <div 
        className="align align-content-between"
        onChange={handleQuantityChange(count)}>{quantity}
        </div>
    </div>
    
  )
}

export default ProductQuantity