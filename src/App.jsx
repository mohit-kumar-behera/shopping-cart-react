import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageLayout from './Pages/PageLayout';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default App;
