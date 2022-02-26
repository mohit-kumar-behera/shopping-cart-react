import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProductCard from '../Components/ProductCard';

import { fetchAllProducts } from '../redux/Product/action';

import './Home.css';

const Home = ({ products, fetchAllProducts }) => {
  useEffect(() => fetchAllProducts(), []);

  return (
    <div className="cards-wrapper">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.product.products,
  };
};

export default connect(mapStateToProps, { fetchAllProducts })(Home);
