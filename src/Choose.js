import React from 'react';

const Choose = () => {
  return (
    <>
        <section className="common-section meals meals-leftside choose" data-aos="zoom-in-right">
                <div className="container" >
                    <div className="meals-near-you">
                        <div className="meal-items">
                            <h1 className="title">
                            <h5 className='subheading'>A Reputed Brand</h5>
                                Why <p className='box'>Choose Us ?</p>
                            </h1>
                            <p className="main-hero-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className='numbers'>
                                <div className='choose-box orders'>
                                    <div className='stats-key'>94000+</div>
                                    <div className='stats-value'>Orders</div>
                                </div>
                                <div className='choose-box customers'>
                                    <div className='stats-key'>11000+</div>
                                    <div className='stats-value'>Customers</div>
                                </div>
                                <div className='choose-box chefs'>
                                    <div className='stats-key'>1500+</div>
                                    <div className='stats-value'>Chefs</div>
                                </div>
                            </div>
                            <div className='order'>
                                <button className="btn btn-style">Order Now</button>
                            </div>
                        </div>
                        <div className="meals-img">
                            <img src="./img/img13.png" alt="mealImg" />
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}

export default Choose;