import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSingleProduct } from '../redux/Product/action';
import AddToCartBtn from '../Components/CartButton/AddToCartBtn';
import Loader from '../Components/Loader';

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
          <AddToCartBtn productId={product.id} />
        </>
      ) : (
        <Loader />
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
