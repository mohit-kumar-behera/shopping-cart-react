import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PageLayout = () => {
  return (
    <>
      <Navbar />

      <main style={{ margin: '2rem 0' }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default PageLayout;
