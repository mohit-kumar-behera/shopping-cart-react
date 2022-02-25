import React from 'react';

import ProductCard from '../Components/ProductCard';
import products from '../data/product_data';

import './Home.css';

const Home = () => {
  return (
    <div className="cards-wrapper">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
