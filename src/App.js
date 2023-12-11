// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ProductList from './components/ProductList';
import MyCart from './components/MyCart';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer'; // Import the Footer component

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
      <Footer /> {/* Add the Footer component here */}
    </Router>
  );
};

export default App;
