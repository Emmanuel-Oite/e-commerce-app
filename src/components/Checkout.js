import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faPaypal as fabPaypal } from '@fortawesome/free-brands-svg-icons';
import '../index.css';

const Checkout = () => {
  const { cart } = useCart();
  const [paymentOption, setPaymentOption] = useState('');
  const [address, setAddress] = useState({
    location: '',
    phone: '',
    // Add more address fields as needed
  });

  const handlePaymentOption = (option) => {
    setPaymentOption(option);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    // You can use the selected payment option and address information
    console.log('Checkout:', { paymentOption, address, cart });

    // Redirect based on the selected payment option
    if (paymentOption === 'card') {
      // Redirect to credit card payment page
      window.location.href = 'https://example.com/credit-card-payment';
    } else if (paymentOption === 'cash') {
      // Redirect to cash on delivery page
      window.location.href = 'https://example.com/cash-on-delivery';
    } else if (paymentOption === 'paypal') {
      // Redirect to PayPal payment page
      window.location.href = 'https://example.com/paypal-payment';
    }

    // Clear the cart or update its state as needed
  };

  return (
    <div className="checkout-container">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="payment-options">
        <div className={`option ${paymentOption === 'card' ? 'selected' : ''}`} onClick={() => handlePaymentOption('card')}>
          <FontAwesomeIcon icon={faCreditCard} />
          <span>Credit Card</span>
        </div>
        <div className={`option ${paymentOption === 'cash' ? 'selected' : ''}`} onClick={() => handlePaymentOption('cash')}>
          <FontAwesomeIcon icon={faMoneyBill} />
          <span>Cash on Delivery</span>
        </div>
        <div className={`option ${paymentOption === 'paypal' ? 'selected' : ''}`} onClick={() => handlePaymentOption('paypal')}>
          <FontAwesomeIcon icon={fabPaypal} />
          <span>PayPal</span>
        </div>
      </div>
      <div className="address-section">
        <h3 className="text-lg font-semibold mb-2">Address Information</h3>
        <label className="label">Location:</label>
        <input
          type="text"
          name="location"
          value={address.location}
          onChange={handleAddressChange}
          className="input-field"
        />
        <label className="label">Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={address.phone}
          onChange={handleAddressChange}
          className="input-field"
        />
        {/* Add more address fields as needed */}
      </div>
      <button onClick={handleCheckout} className="checkout-button">
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
