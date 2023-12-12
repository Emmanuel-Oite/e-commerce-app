import React from 'react';
import { useCart } from '../contexts/CartContext';
import Checkout from './Checkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const MyCart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div className="my-cart-container">
      <h2 className="text-2xl font-semibold mb-4">My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          {cart.map((product) => (
            <div key={product.id} className="cart-item-container">
              <div className="cart-item">
                <img src={product.image} alt={product.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{product.title}</h3>
                  <p>${product.price.toFixed(2)}</p>
                  <p>{product.description}</p>
                  {/* Display user reviews */}
                  <div className="user-reviews">
                    <h4>User Reviews</h4>
                    <ul>
                      {product.reviews.map((review, index) => (
                        <li key={index} className="user-review">
                          <p>{review.user}</p>
                          <p>{review.comment}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button onClick={() => removeFromCart(product)} className="remove-button">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <Checkout />
        </div>
      )}
    </div>
  );
};

export default MyCart;
