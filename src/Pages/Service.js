import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Services from '../Services';

const Service = () => {
  return (
    <>
      <div className='page-container'>
        <div className='content-wrap'>
          <Navbar />
          <Services />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Service;
