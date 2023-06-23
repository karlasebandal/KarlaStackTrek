import React, { useState } from 'react';
import AddToCartButton from '../components/AddToCartButton';

function ConstructionSite() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Screwdriver', price: 3010.00 },
    { id: 2, title: 'Hammer 8', price: 2800.00 },
    { id: 3, title: 'Rugby', price: 1250.00 },
    { id: 4, title: 'Vulca Seal', price: 2225.00 },
  ]);

  const renderProducts = () => {
  
    return products.map((product) => (
      <div key={product.id} className="product-item">
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
        <AddToCartButton product={product} handleQuantityChange={handleQuantityChange} addToCart={addToCart} />
      </div>
  ));

 };

const [cart, setCart] = useState([]);

const handleQuantityChange = (productId, quantity) => {
  const updatedCart = cart.map((item) => {
    if (item.productId === productId) {
      return { ...item, quantity: Number(quantity) };
    }
    return item;
  });
  setCart(updatedCart);
};

const addToCart = (product) => {
  const itemInCart = cart.find((item) => item.productId === product.id);
  if (itemInCart) {
    const updatedCart = cart.map((item) => {
      if (item.productId === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  } else {
    setCart([...cart, { productId: product.id, quantity: 1 }]);
  }
};

const renderCartItems = () => {
  return cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return (
      <div key={item.productId}>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    );
  });
};

const calculateTotalPrice = () => {
  let total = 0;
  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    total += product.price * item.quantity;
  });
  return total.toFixed(2);
};

  return (
  <>
  <div >
    <div className='layout'>
        <h1>My Shop</h1>

        <h2>Products</h2>
        
        {renderProducts()}

        <h2>Cart</h2>
         {renderCartItems()}
        <p>Total Price: ${calculateTotalPrice()}</p>


    </div>
 

  </div>
  </>
  );
  }
  
export default ConstructionSite;
