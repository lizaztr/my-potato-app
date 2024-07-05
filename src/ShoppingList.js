/* import React, { useState } from 'react';
import './ShoppingList.css';

function ShoppingList() {
  const items = [
    { name: 'Potato', image: 'https://i.imgur.com/dRnvRZZ.jpeg', price: 1.0 },
    { name: 'Potatoes', image: `${process.env.PUBLIC_URL}/images/potatoes.jpg`, price: 2.5 },
    { name: 'Potato Fries', image: 'https://i.imgur.com/6RZcRVj.jpeg', price: 3.0 },
    { name: 'Potato Chips', image: 'https://i.imgur.com/t4fhTWf.jpeg', price: 1.5 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="shopping-list-container">
      <div className="shopping-list">
        <h3>Items</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} className="item-image" />
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart">
        <h3>Shopping List</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} className="item-image" />
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(index)} className="remove-button">Remove</button>
            </li>
          ))}
        </ul>
        <div className="total">
          <h4>Total: ${calculateTotal()}</h4>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList; */ 

import React, { useState } from 'react';
import './ShoppingList.css';
import { FaShoppingCart } from 'react-icons/fa';

function ShoppingList() {
  const items = [
    { name: 'Potato', image: 'https://i.imgur.com/dRnvRZZ.jpeg', price: 1.0 },
    { name: 'Potatoes', image: `${process.env.PUBLIC_URL}/images/potatoes.jpg`, price: 2.5 },
    { name: 'Potato Fries', image: 'https://i.imgur.com/6RZcRVj.jpeg', price: 3.0 },
    { name: 'Potato Chips', image: 'https://i.imgur.com/t4fhTWf.jpeg', price: 1.5 }
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.name === item.name 
          ? { ...cartItem, count: cartItem.count + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem.count > 1) {
      setCart(cart.map(cartItem => 
        cartItem.name === item.name 
          ? { ...cartItem, count: cartItem.count - 1 } 
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.name !== item.name));
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="shopping-list-container">
      <div className="shopping-list">
        <h3>Items</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} className="item-image" />
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart-icon-container">
        <FaShoppingCart className="cart-icon" onClick={handleCartClick} />
        <span className="cart-count">{cart.reduce((acc, item) => acc + item.count, 0)}</span>
      </div>

      {isCartOpen && (
        <div className="cart-modal">
          <h3>Shopping Cart</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} className="item-image" />
                <span>{item.name} - ${item.price.toFixed(2)} (x{item.count})</span>
                <button onClick={() => removeFromCart(item)} className="remove-button">Remove</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <h4>Total: ${calculateTotal()}</h4>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
