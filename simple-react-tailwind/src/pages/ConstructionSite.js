import '../App.css';
import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import AddToCartButton from '../components/AddToCartButton';

import product0 from '../assets/images/product0.png';
import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';

function ConstructionSite() {

  //declare products
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 100.00, quantity: 0, image: product0},
    { id: 2, title: 'Product 2', price: 200.00, quantity: 0, image: product1},
    { id: 3, title: 'Product 3', price: 250.00, quantity: 0, image: product2},
    { id: 4, title: 'Product 4', price: 250.00, quantity: 0, image: product3},
  ])

  const [cart, setCart] = useState([])

  //MINUS BUTTON
  const decrementQuantity = (product) => {

    const existingCartItem = cart.find((item) => item.productId === product.id); // from item.id === product to `item.productId === product.id`
  
    if (existingCartItem) {
      // Increase the quantity
      const updatedCart = cart.map((item) =>
        item.productId === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Add the selected new product to 1
      const updatedCart = [...cart, { productId: product.id, quantity: 0 }]; // from { ...selectedProduct, quantity: 1 } to { productId: product.id, quantity: 1 }
      setCart(updatedCart);
    }
  };

  //ADD TO CART & PLUS BUTTON
  const addToCart = (product) => {

    const existingCartItem = cart.find((item) => item.productId === product.id); // from item.id === product to `item.productId === product.id`
  
    if (existingCartItem) {
      // Increase the quantity
      const updatedCart = cart.map((item) =>
        item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Add the selected new product to 1
      const updatedCart = [...cart, { productId: product.id, quantity: 1 }]; // from { ...selectedProduct, quantity: 1 } to { productId: product.id, quantity: 1 }
      setCart(updatedCart);
    }
    
  };

  
  //DISPLAY PRODUCTS
  const renderProducts = () => {
    
    const rows = []
    const productsPerRow = 3

    for (let i=0; i<products.length; i += productsPerRow) {
      const rowProducts = products.slice(i, i + productsPerRow)
      const row = (

        <main className="grid border-gray-200 dark:border-gray-700 md:mb-5 md:grid-cols-3 gap-5" key={i}>  
          {rowProducts.map((product) => (
            <div className="grid mb-8">
                <div className="bg-white p-4 shadow-md">
                  
                  <a href="#">
                    <img class="p-8 rounded-t-lg" src={product.image} alt="product image" /> {/*concat the src filename of image in i*/}
                  </a>

                  <div class="px-5 pb-5">
                    <a href="#">
                      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div class="flex items-center justify-between" key={product.id} >
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                      <AddToCartButton product={product} addToCart={addToCart}/>
                    </div>
                  </div>
                </div>
            </div>
          ))}
           
        </main>
      )
      rows.push(row)
    }
    return rows
    
  }

  //CALCULATE TOTAL PRICE
  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const product = products.find((p) => p.id === item.productId);
      total += product.price * item.quantity;
    });
    return total.toFixed(2); //2 decimal point
  };

  // DISPLAY ITEMS ON CART
  const renderCartItems = () => {
    const productsPerRow = 3;
    const rows = [];
  
    for (let i = 0; i < cart.length; i += productsPerRow) {
      const rowProducts = cart.slice(i, i + productsPerRow);
      const row = (
        <div className="flex flex-wrap justify-content-evenly mx-auto gap-5" key={i}>
          {rowProducts.map((item) => {
            const product = products.find((p) => p.id == item.productId);
            return (
              <div
                className="max-w-sm w-full md:w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
                key={item.productId}
              >
                <img
                  className="rounded-t-lg"
                  src={product.image}
                  alt={product.title}
                />
  
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
  
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Quantity: {item.quantity}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Price: ${product.price * item.quantity}
                  </p>
  
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                    <div className="align align-content-between">
                      {item.quantity}
                    </div>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => decrementQuantity(product)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
  
      rows.push(row);
    }
  
    return <div>{rows}</div>;
  };
  



  // const renderCartItems = () => { 
       
  //       return cart.map((item) => {
  //           const rows = []
  //           const productsPerRow = 3

  //         for (let i=0; i<cart.length; i += productsPerRow) {
  //           const rowProducts = cart.slice(i, i + productsPerRow)
  //         }
  //           const product = products.find((p) => p.id == item.productId);
  //           return (
  //             <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  //               <img class="rounded-t-lg" src={product.image} alt={product.title} />

  //               <div class="p-5" key={item.productId}>
  //                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                
  //                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity: {item.quantity}</p>
  //                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: ${product.price*item.quantity}</p>
                  
  //                 <div class="flex items-center justify-between" key={product.id} >
  //                    <button 
  //                     type="button"
  //                     class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  //                     onClick={() => addToCart(product)}>
  //                      +
  //                   </button>
  //                   <div 
  //                     className="align align-content-between"
  //                     >{item.quantity}
  //                   </div>
  //                   <button 
  //                     type="button"
  //                     class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  //                     onClick={() => decrementQuantity(product)}>
  //                      -
  //                   </button>
  //                   </div>
  //                 </div>
  //           </div>
  //         );
  //     });
  // }

  //display products
  return (
    <>
    
      <div className="bg-gray-100 min-h-screen">

        <header className="bg-white shadow"> 
          <div className="container mx-auto py-4 px-8">
            <h1 className="text-2xl font-bold text-gray-800">My Store</h1>
          </div>
        </header>
          
        <main className="container mx-auto mt-8 px-8">
          {renderProducts()}
        </main>
        
        <header className="bg-white shadow"> 
          <div className="container mx-auto py-4 px-8">
            <h1 className="text-2xl font-bold text-gray-800">My Cart</h1>
          </div>
        </header>

        <main className="container mx-auto mt-8 px-8">
          {renderCartItems()}
            <header className="relative bg-white shadow"> 
              <div className="container mx-auto py-4 px-8">
                <h1 className="text-2xl font-bold text-gray-800">Total Price: ${calculateTotalPrice()}</h1>
              </div>
              <div className="grid border-gray-200 dark:border-gray-700 md:mb-5 md:grid-cols-3">
              <button variant="primary" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Checkout</button>
              </div>
            </header>
        </main>

        
      </div>

    </>
  );
}

export default ConstructionSite;
