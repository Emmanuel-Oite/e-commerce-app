// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ProductList from './components/ProductList';
import MyCart from './components/MyCart';
import AddProduct from './components/AddProduct'; // Import the AddProduct component

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/addproduct" element={<AddProduct />} /> {/* New route for AddProduct */}
      </Routes>
    </Router>
  );
};

export default App;
