import React from 'react';

const Customers = () => {
    return (
        <>
            <section className='container customers-container' data-aos="zoom-in-left">
                <h1 className='title'>
                    Customers <p className='box'>Love Us.</p>
                </h1>
                <div className='testimonials'>
                    <div className='testimonial-container'>
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80" alt="customer" className='profileImg' />
                        <blockquote className='reviews'>
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
                        </blockquote>
                        <p className='customer-name'>- CHARLOTTE HALE</p>
                    </div>
                    <div className='testimonial-container'>
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80" alt="customer" className='profileImg' />
                        <blockquote className='reviews'>
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
                        </blockquote>
                        <p className='customer-name'>- Adam Cuppy</p>
                    </div>
                    <div className='testimonial-container'>
                        <img src="https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80" alt="customer" className='profileImg' />
                        <blockquote className='reviews'>
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
                        </blockquote>
                        <p className='customer-name'>- Steven Marcetti</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Customers;