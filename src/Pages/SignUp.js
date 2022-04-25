import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Signup from '../Signup';

const SignUp = () => {
  return (
    <>
      <div className='page-container'>
        <div className='content-wrap'>
          <Navbar />
          <Signup />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default SignUp;