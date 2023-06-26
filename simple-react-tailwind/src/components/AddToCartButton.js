//import React, { useState } from "react";
import { Button } from 'flowbite-react';


function AddToCartButton({product, addToCart}) {
  
  return (
    
    <div>

      <Button 
        color="light" 
        className="mr h-15 w-30"
        onClick={() => addToCart(product)}
        >Add to Cart
      </Button>
      
    </div>
  );
}

export default AddToCartButton;