import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import Checkout from './Checkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const MyCart = () => {
  const { cart, dispatch } = useCart();
  const [reviews, setReviews] = useState({});
  const [reviewText, setReviewText] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:3001/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const addReview = async (productId) => {
    try {
      const response = await fetch('http://localhost:3001/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          user: userName,
          comment: reviewText,
        }),
      });
  
      if (response.ok) {
        const updatedReviews = { ...reviews };
        if (!updatedReviews[productId]) {
          updatedReviews[productId] = [];
        }
        updatedReviews[productId].push({ user: userName, comment: reviewText });
  
        setReviews(updatedReviews);
        setReviewText('');
        setUserName('');
        setError(null);
      } else {
        setError('Failed to add review. Please try again.');
      }
    } catch (error) {
      console.error('Error adding review:', error);
      setError('Failed to add review. Please try again.');
    }
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
                  <p>{product.longDescription}</p>
                  {/* Display Existing Reviews */}
                  <div className="existing-reviews">
                    {reviews[product.id] && (
                      <div>
                        <h4>Customer Reviews:</h4>
                        {reviews[product.id].map((review, index) => (
                          <p key={index}>
                            <strong>{review.user}: </strong>
                            {review.comment}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Add Review Section */}
                  <div className="add-review-container">
                    <label>Add Your Review:</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="input-field"
                    />
                    <textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="input-field"
                    />
                    <button onClick={() => addReview(product.id)} className="add-review-button">
                      Add Review
                    </button>
                  </div>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
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
