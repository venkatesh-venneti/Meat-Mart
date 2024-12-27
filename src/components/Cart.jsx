import React from "react";
import './Cart.css';

const Cart = ({ cartItems, onDelete }) => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.imgSrc} alt={item.imgAlt} className="cart-img" />
            <div className="cart-details">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <button 
              className="delete-btn" 
              onClick={() => onDelete(index)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
