import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Contacts from '../Contacts';
const Contact = () => {
    return (
        <>
        <div className='page-container'>
        <div className='content-wrap'>
          <Navbar/>
          <Contacts/>
          </div>
          <Footer/>  
          </div>
        </>
    )
}

export default Contact;