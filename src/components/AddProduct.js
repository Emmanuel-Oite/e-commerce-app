import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const AddProduct = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    shortDescription: '',
    longDescription: '',
    price: 0,
    image: '',
    reviews: [
      { user: 'User1', comment: 'Great product! Highly recommend.' },
      { user: 'User2', comment: 'Awesome quality. Will buy again.' },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch('http://localhost:3001/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        // If the POST request is successful, update the product list
        onAddProduct(newProduct);

        // Clear the form fields
        setNewProduct({
          title: '',
          shortDescription: '',
          longDescription: '',
          price: 0,
          image: '',
          reviews: [
            { user: 'User1', comment: 'Great product! Highly recommend.' },
            { user: 'User2', comment: 'Awesome quality. Will buy again.' },
          ],
        });
      } else {
        console.error('Failed to add product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="add-product-container">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add a Product</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="label">Long Description</label>
          <textarea
            name="longDescription"
            value={newProduct.longDescription}
            onChange={handleChange}
            className="input-field textarea-field"
          />
        </div>
        <div>
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label className="label">Price</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label className="label">Image (Link)</label>
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <button onClick={handleAddProduct} className="add-product-button">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
