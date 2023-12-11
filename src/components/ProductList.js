// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="grid-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          {typeof product.price === 'number' && (
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
          )}
          <p className="text-gray-500">{product.description}</p>
          <p className="mt-4">
            Available sizes: {Array.isArray(product.size) ? product.size.join(', ') : ''}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
