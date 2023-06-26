import '../App.css';
import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import AddToCartButton from '../components/AddToCartButton';

import product1 from '../assets/images/product1.jpg';

function ConstructionSite() {

  //declare products
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 100.00, quantity: 0},
    { id: 2, title: 'Product 2', price: 200.00, quantity: 0},
    { id: 3, title: 'Product 3', price: 250.00, quantity: 0},
    { id: 4, title: 'Product 4', price: 250.00, quantity: 0},
  ])

  const [cart, setCart] = useState([])
    
  // PLUS BUTTON
  const incrementQuantity = (prodID) => {

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === prodID
        ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
    //console.log(products)
  };

  //MINUS BUTTON
  const decrementQuantity = (prodID) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === prodID && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
    //console.log(products)
  };

  //ADD TO CART FUNC
  const addToCart = (product) => {
    const selectedProduct = products.find((p) => p.id === product.id);
    const existingCartItem = cart.find((item) => item.productId === product.id);
  
    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + selectedProduct.quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { productId: product.id, quantity: selectedProduct.quantity }]);
    }
  
    setProducts((prevProducts) =>
    prevProducts.map((prevProduct) =>
      prevProduct.id === product.id ? { ...prevProduct, quantity: 0 } : prevProduct
    )
  );


    /*Code Number 2
    //const selectedProduct = products.find((product) => product.id === product);
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

    /*Code Number 3
    
    const selectedProduct = products.find((product) => product.id === productId.id)
    console.log(`my input: ${productId.id} ${productId.title} ${productId.quantity}`)
    console.log(selectedProduct.quantity)
    console.log(`1st  Existing Cart Item: ${cart}`)
    if (selectedProduct.quantity > 0) {
      const existingCartItem = cart.find((item) => item.id == productId); 
      console.log(`Existing Cart Item: ${cart}`) // cant identify
      if (existingCartItem) {
        const updatedCart = cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + selectedProduct.quantity }
            : item
        );
        setCart(updatedCart);
        console.log(`Cart here: ${updatedCart}`)
      } else {
        setCart([...cart, { ...selectedProduct }]);
        console.log(`New Cart here: ${cart}`)
      }
    }
    setCart([...cart, { ...selectedProduct }]);
    console.log(`New Cart here: ${cart}`)*/
    
  };
  
  //DISPLAY PRODUCTS
  const renderProducts = () => {
    
    const rows = []
    const productsPerRow = 3

    for (let i=0; i<products.length; i += productsPerRow) {
      const rowProducts = products.slice(i, i + productsPerRow)
      const row = (

        <main className="grid border-gray-200 dark:border-gray-700 md:mb-5 md:grid-cols-3" key={i}>  
          {rowProducts.map((product) => (
            <div className="grid mb-8">
                <div className="bg-white p-4 shadow-md">
                  
                  <a href="#">
                    <img class="p-8 rounded-t-lg" src={product1} alt="product image" /> {/*concat the src filename of image in i*/}
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
                      <Button 
                        className="mr-2 h-10 w-10"
                        onClick={() => incrementQuantity(product.id)}>
                        +
                      </Button>
                      <div 
                        className="align align-content-between"
                        >{product.quantity}
                      </div>
                      <Button 
                        className="mr-2 h-10 w-10"
                        onClick={() => decrementQuantity(product.id)}>
                        -
                      </Button>
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

  // DISPLAY ITEMS ON CART
  const renderCartItems = () => {
    return cart.map((item) => {
      const product = products.find((p) => p.id == item.productId);
      return (
        <div key={item.productId}>
          <h2>{product.title}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${product.price*item.quantity}</p>
          <br/>
        </div>
      );
    });
  }

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
        </main>

      </div>

    </>
  );
}

export default ConstructionSite;
