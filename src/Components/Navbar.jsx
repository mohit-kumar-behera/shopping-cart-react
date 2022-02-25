import React from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="navlink brand">
          <h3>Shopping Cart App</h3>
        </Link>
      </div>
      <div className="right">
        <Link to="/cart" className="navlink btn">
          <span>Cart</span>
          <ShoppingCartIcon className="cart-icon" />
          <span>0</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
