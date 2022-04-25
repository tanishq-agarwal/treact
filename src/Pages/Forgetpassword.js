import React from 'react';
import Footer from '../Footer';
import ForgetPassword from '../ForgetPassword';
import Navbar from '../Navbar';

const LogIn = () => {
  return (
    <>
      <div className='page-container'>
        <div className='content-wrap'>
          <Navbar />
          <ForgetPassword />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LogIn;