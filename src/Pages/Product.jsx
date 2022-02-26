import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { fetchSingleProduct } from '../redux/Product/action';

import './Product.css';

const Product = ({ product, fetchSingleProduct }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(id);
  });

  return (
    <div className="product-container">
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>
            <span>PRICE : ₹</span>
            <strong>{product.price}</strong>
          </p>

          <button className="action-btn fill-btn">ADD TO CART</button>
        </>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    product: state.product.currProduct,
  };
};

export default connect(mapStateToProps, { fetchSingleProduct })(Product);
