// import './App.css';

import React, { useState } from 'react';

function ConstructionSite() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 100.00},
    { id: 2, title: 'Product 2', price: 200.00},
    { id: 3, title: 'Product 3', price: 250.00},
    { id: 4, title: 'Product 4', price: 250.00},
  ]);

  var [myCart, setCart] = useState([]);

  // const addToCart = (productID) => {
  //   const selectedProduct = products.find((product) => product.id === productID);
  //   setCart([...myCart, selectedProduct]);
  // };

  const addToCart = (productID) => {
    const selectedProduct = products.find((product) => product.id === productID);
    const existingCartItem = myCart.find((item) => item.id === productID);
  
    if (existingCartItem) {
      // Increase the quantity
      const updatedCart = myCart.map((item) =>
        item.id === productID ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Add the selected new product to 1
      const updatedCart = [...myCart, { ...selectedProduct, quantity: 1 }];
      setCart(updatedCart);
    }
  };

  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product.id)}> Add to Cart </button>
      </div>
    ));
  };

  const renderCartItems = () => {
    return myCart.map((item) => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total Price: {item.price * item.quantity}</p>
      </div>
    ))
  }

  return (
    <div>
      <h1>My Shop</h1>
      <div>
        <h2>Products</h2>
        {renderProducts()}
      </div>
      <div>
        <h2>My Cart</h2>
        {renderCartItems()}
      </div>
    </div>
  );
}

export default ConstructionSite;