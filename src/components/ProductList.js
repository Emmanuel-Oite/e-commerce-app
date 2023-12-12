// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
  const [courses, setCourses] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3001/courses');
        const data = await response.json();
        setCourses(data || []); // Ensure courses is an array
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const addToCart = (course) => {
    dispatch({ type: 'ADD_TO_CART', payload: course });
  };

  return (
    <div className="grid-container">
      {courses.map((course) => (
        <div key={course.id} className="product-card">
          <img
            src={course.image}
            alt={course.title}
            className="product-image"
          />
          <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
          {typeof course.price === 'number' && (
            <p className="text-gray-600 mb-2">${course.price.toFixed(2)}</p>
          )}
          <p className="text-gray-500">{course.shortDescription}</p>
          <button
            onClick={() => addToCart(course)}
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
