import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './Navbar.css';

const Navbar = ({ numOfItemsInCart }) => {
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
          <span>{numOfItemsInCart.toString()}</span>
        </Link>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    numOfItemsInCart: state.cart.cart.length,
  };
};

export default connect(mapStateToProps)(Navbar);
