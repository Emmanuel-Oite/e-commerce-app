import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>E-Commerce Website</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mycart">My Cart</Link>
          </li>
          <li>
            <Link to="/addproduct">Add Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
