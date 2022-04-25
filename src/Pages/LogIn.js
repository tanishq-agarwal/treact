import React from 'react';
import Footer from '../Footer';
import Login from '../Login';
import Navbar from '../Navbar';

const LogIn = () => {
  return (
    <>
      <div className='page-container'>
        <div className='content-wrap'>
          <Navbar />
          <Login />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LogIn;